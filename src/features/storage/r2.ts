import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { randomUUID } from "node:crypto";
import { getServerEnvironment } from "../../lib/env";
import { ApiError } from "../../lib/api-error";
import { logEvent } from "../../lib/logger";
import {
  canAccessMaterial,
  validateUploadMetadata,
  type MaterialScope,
  type MaterialViewer,
  type StorageFileType,
  type UploadMetadata,
} from "./validation";

export type R2StorageConfig = {
  accountId: string;
  accessKeyId: string;
  secretAccessKey: string;
  bucketName: string;
};

type StorageCommandClient = {
  send(command: unknown): Promise<unknown>;
};
type UrlSigner = (
  client: S3Client,
  command: PutObjectCommand | GetObjectCommand,
  expiresInSeconds: number,
) => Promise<string>;

type UploadPurpose = "materials" | "gallery" | "subject-photos";

type UploadRequest = UploadMetadata & { purpose: UploadPurpose };

type UploadResult = {
  key: string;
  url: string;
  expiresInSeconds: number;
  contentType: string;
};

const UPLOAD_URL_TTL_SECONDS = 300;
const DOWNLOAD_URL_TTL_SECONDS = 300;
const UUID_KEY = /^[a-f0-9-]{36}\.(pdf|docx|jpg|jpeg|png|webp)$/i;

function createClient(config: R2StorageConfig): S3Client {
  return new S3Client({
    region: "auto",
    endpoint: `https://${config.accountId}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId: config.accessKeyId, secretAccessKey: config.secretAccessKey },
  });
}

function fileExtension(fileName: string): string {
  return fileName.slice(fileName.lastIndexOf(".")).toLowerCase();
}

function isOwnedObjectKey(key: string): boolean {
  const parts = key.split("/");
  const [prefix, file] = parts;
  return (
    parts.length === 2 &&
    (prefix === "materials" || prefix === "gallery" || prefix === "subject-photos") &&
    typeof file === "string" &&
    UUID_KEY.test(file)
  );
}

function signatureMatches(fileType: StorageFileType, bytes: Uint8Array): boolean {
  if (fileType === "PDF") return new TextDecoder().decode(bytes.subarray(0, 5)) === "%PDF-";
  if (fileType === "DOCX")
    return bytes[0] === 0x50 && bytes[1] === 0x4b && bytes[2] === 0x03 && bytes[3] === 0x04;
  if (fileType === "JPEG") return bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  if (fileType === "PNG") {
    return (
      bytes[0] === 0x89 &&
      bytes[1] === 0x50 &&
      bytes[2] === 0x4e &&
      bytes[3] === 0x47 &&
      bytes[4] === 0x0d &&
      bytes[5] === 0x0a &&
      bytes[6] === 0x1a &&
      bytes[7] === 0x0a
    );
  }
  return (
    bytes[0] === 0x52 &&
    bytes[1] === 0x49 &&
    bytes[2] === 0x46 &&
    bytes[3] === 0x46 &&
    new TextDecoder().decode(bytes.subarray(8, 12)) === "WEBP"
  );
}

export function createR2Storage(
  config: R2StorageConfig,
  injectedClient?: StorageCommandClient,
  injectedSigner?: UrlSigner,
) {
  const client = injectedClient ?? createClient(config);
  const signUrl =
    injectedSigner ??
    ((activeClient, command, expiresInSeconds) =>
      getSignedUrl(activeClient, command, { expiresIn: expiresInSeconds }));

  async function verifyUploadedObject(input: UploadRequest & { key: string }): Promise<void> {
    const validation = validateUploadMetadata(input);
    if (!validation.valid || !isOwnedObjectKey(input.key)) {
      throw new ApiError("INVALID_UPLOAD", "Uploaded file could not be verified.", 400);
    }

    const head = (await client.send(
      new HeadObjectCommand({ Bucket: config.bucketName, Key: input.key }),
    )) as {
      ContentLength?: number;
      ContentType?: string;
    };
    if (head.ContentLength !== input.sizeBytes || head.ContentType !== input.contentType) {
      throw new ApiError(
        "UPLOAD_MISMATCH",
        "Uploaded file metadata does not match the request.",
        400,
      );
    }

    const object = (await client.send(
      new GetObjectCommand({
        Bucket: config.bucketName,
        Key: input.key,
        Range: "bytes=0-15",
      }),
    )) as { Body?: { transformToByteArray?: () => Promise<Uint8Array> } };
    if (!object.Body?.transformToByteArray) {
      throw new ApiError("UPLOAD_UNVERIFIABLE", "Uploaded file could not be verified.", 400);
    }
    const signature = await object.Body.transformToByteArray();
    if (!signatureMatches(validation.fileType, signature)) {
      throw new ApiError(
        "UPLOAD_SIGNATURE_INVALID",
        "Uploaded file content does not match its declared type.",
        400,
      );
    }
  }

  async function createUploadUrl(input: UploadRequest): Promise<UploadResult> {
    const validation = validateUploadMetadata(input);
    if (!validation.valid) {
      throw new ApiError("INVALID_UPLOAD", "File type or size is not allowed.", 400);
    }
    if (input.purpose === "materials" && validation.group !== "material") {
      throw new ApiError("INVALID_UPLOAD", "Study materials must be PDF or DOCX files.", 400);
    }
    if (input.purpose !== "materials" && validation.group !== "image") {
      throw new ApiError("INVALID_UPLOAD", "This upload requires an image file.", 400);
    }

    const key = `${input.purpose}/${randomUUID()}${fileExtension(input.fileName)}`;
    const command = new PutObjectCommand({
      Bucket: config.bucketName,
      Key: key,
      ContentType: input.contentType,
      ContentLength: input.sizeBytes,
    });
    const url = await signUrl(client as S3Client, command, UPLOAD_URL_TTL_SECONDS);
    return { key, url, expiresInSeconds: UPLOAD_URL_TTL_SECONDS, contentType: input.contentType };
  }

  async function createDownloadUrl(input: {
    key: string;
    viewer: MaterialViewer;
    material: MaterialScope;
  }): Promise<string> {
    if (!isOwnedObjectKey(input.key) || !canAccessMaterial(input.viewer, input.material)) {
      throw new ApiError("FORBIDDEN", "You do not have access to this file.", 403);
    }
    const command = new GetObjectCommand({ Bucket: config.bucketName, Key: input.key });
    return signUrl(client as S3Client, command, DOWNLOAD_URL_TTL_SECONDS);
  }

  async function deleteObject(key: string): Promise<void> {
    if (!isOwnedObjectKey(key))
      throw new ApiError("INVALID_OBJECT_KEY", "Object key is invalid.", 400);
    await client.send(new DeleteObjectCommand({ Bucket: config.bucketName, Key: key }));
  }

  async function completeReplacement(input: {
    oldKey: string;
    newKey: string;
    upload: UploadRequest;
    persistReference: (newKey: string) => Promise<void>;
  }): Promise<void> {
    await verifyUploadedObject({ ...input.upload, key: input.newKey });
    await input.persistReference(input.newKey);
    if (input.oldKey !== input.newKey) await deleteObject(input.oldKey);
  }

  return {
    createUploadUrl,
    createDownloadUrl,
    verifyUploadedObject,
    deleteObject,
    completeReplacement,
  };
}

export function createR2StorageFromEnvironment() {
  const env = getServerEnvironment();
  const config = {
    accountId: env.R2_ACCOUNT_ID,
    accessKeyId: env.R2_ACCESS_KEY_ID,
    secretAccessKey: env.R2_SECRET_ACCESS_KEY,
    bucketName: env.R2_PRIVATE_BUCKET_NAME,
  };
  if (!config.accountId || !config.accessKeyId || !config.secretAccessKey || !config.bucketName) {
    logEvent("storage.r2.not_configured", {}, "warn");
    throw new ApiError("STORAGE_NOT_CONFIGURED", "File storage is not configured.", 503);
  }
  return createR2Storage({
    accountId: config.accountId,
    accessKeyId: config.accessKeyId,
    secretAccessKey: config.secretAccessKey,
    bucketName: config.bucketName,
  });
}
