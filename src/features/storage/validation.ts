export type MaterialFileType = "PDF" | "DOCX";
export type StorageFileType = MaterialFileType | "JPEG" | "PNG" | "WEBP";
export type MaterialAccess = "FREE" | "RESTRICTED";

export const MAX_MATERIAL_UPLOAD_BYTES = 25 * 1024 * 1024;
export const MAX_IMAGE_UPLOAD_BYTES = 10 * 1024 * 1024;

const uploadTypes = {
  ".pdf": {
    contentType: "application/pdf",
    fileType: "PDF",
    maxBytes: MAX_MATERIAL_UPLOAD_BYTES,
    group: "material",
  },
  ".docx": {
    contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    fileType: "DOCX",
    maxBytes: MAX_MATERIAL_UPLOAD_BYTES,
    group: "material",
  },
  ".jpg": {
    contentType: "image/jpeg",
    fileType: "JPEG",
    maxBytes: MAX_IMAGE_UPLOAD_BYTES,
    group: "image",
  },
  ".jpeg": {
    contentType: "image/jpeg",
    fileType: "JPEG",
    maxBytes: MAX_IMAGE_UPLOAD_BYTES,
    group: "image",
  },
  ".png": {
    contentType: "image/png",
    fileType: "PNG",
    maxBytes: MAX_IMAGE_UPLOAD_BYTES,
    group: "image",
  },
  ".webp": {
    contentType: "image/webp",
    fileType: "WEBP",
    maxBytes: MAX_IMAGE_UPLOAD_BYTES,
    group: "image",
  },
} as const;

export type UploadMetadata = {
  fileName: string;
  contentType: string;
  sizeBytes: number;
};

export type UploadValidation =
  | { valid: true; fileType: StorageFileType; group: "material" | "image" }
  | { valid: false; reason: "unsupported_type" | "type_mismatch" | "invalid_size" | "too_large" };

export function validateUploadMetadata(input: UploadMetadata): UploadValidation {
  const extension = input.fileName.slice(input.fileName.lastIndexOf(".")).toLowerCase();
  const definition = uploadTypes[extension as keyof typeof uploadTypes];
  if (!definition) return { valid: false, reason: "unsupported_type" };
  if (definition.contentType !== input.contentType)
    return { valid: false, reason: "type_mismatch" };
  if (!Number.isSafeInteger(input.sizeBytes) || input.sizeBytes <= 0) {
    return { valid: false, reason: "invalid_size" };
  }
  if (input.sizeBytes > definition.maxBytes) return { valid: false, reason: "too_large" };
  return { valid: true, fileType: definition.fileType, group: definition.group };
}

export type MaterialViewer = {
  role: "ADMIN" | "STUDENT";
  status?: "ACTIVE" | "INACTIVE";
  deletedAt?: Date | null;
  boardId?: string;
  classId?: string;
};

export type MaterialScope = {
  access: MaterialAccess;
  boardId: string;
  classId: string;
};

export function canAccessMaterial(viewer: MaterialViewer, material: MaterialScope): boolean {
  if (viewer.role === "ADMIN") return true;
  if (material.access === "FREE") return true;
  return (
    viewer.role === "STUDENT" &&
    viewer.status === "ACTIVE" &&
    viewer.deletedAt === null &&
    viewer.boardId === material.boardId &&
    viewer.classId === material.classId
  );
}
