import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { describe, expect, it, vi } from "vitest";
import { ApiError } from "../../lib/api-error";
import { createR2Storage } from "./r2";

const config = {
  accountId: "account",
  accessKeyId: "access-key",
  secretAccessKey: "secret-key",
  bucketName: "private-bucket",
};
const pdfBytes = new TextEncoder().encode("%PDF-1.7 test");
const upload = {
  purpose: "materials" as const,
  fileName: "notes.pdf",
  contentType: "application/pdf",
  sizeBytes: 120,
};

describe("private R2 storage", () => {
  it("creates short-lived upload URLs for generated private object keys", async () => {
    const send = vi.fn(async () => ({}));
    const sign = vi.fn(async (_client, command, ttl) => {
      expect(command).toBeInstanceOf(PutObjectCommand);
      expect(command.input.Bucket).toBe("private-bucket");
      expect(command.input.ContentLength).toBe(upload.sizeBytes);
      expect(ttl).toBe(300);
      return "https://r2.example/signed";
    });
    const storage = createR2Storage(config, { send }, sign);

    const result = await storage.createUploadUrl(upload);

    expect(result).toMatchObject({
      url: "https://r2.example/signed",
      contentType: "application/pdf",
      expiresInSeconds: 300,
    });
    expect(result.key).toMatch(/^materials\/[a-f0-9-]{36}\.pdf$/i);
    expect(send).not.toHaveBeenCalled();
  });

  it("refuses restricted download signing when access does not match", async () => {
    const sign = vi.fn(async () => "https://signed");
    const storage = createR2Storage(config, { send: vi.fn(async () => ({})) }, sign);

    await expect(
      storage.createDownloadUrl({
        key: "materials/123e4567-e89b-12d3-a456-426614174000.pdf",
        viewer: {
          role: "STUDENT",
          status: "ACTIVE",
          deletedAt: null,
          boardId: "board-a",
          classId: "class-a",
        },
        material: { access: "RESTRICTED", boardId: "board-a", classId: "class-b" },
      }),
    ).rejects.toMatchObject({ code: "FORBIDDEN" });
    expect(sign).not.toHaveBeenCalled();
  });

  it("verifies declared metadata and file signature before replacing, preserving old data when persistence fails", async () => {
    const events: string[] = [];
    const send = vi.fn(async (command: unknown): Promise<unknown> => {
      if (command instanceof HeadObjectCommand)
        return { ContentLength: 120, ContentType: "application/pdf" };
      if (command instanceof GetObjectCommand) {
        return { Body: { transformToByteArray: async () => pdfBytes } };
      }
      if (command instanceof DeleteObjectCommand) events.push("delete-old");
      return {};
    });
    const storage = createR2Storage(config, { send });
    const key = "materials/123e4567-e89b-12d3-a456-426614174000.pdf";

    await expect(
      storage.completeReplacement({
        oldKey: "materials/123e4567-e89b-12d3-a456-426614174001.pdf",
        newKey: key,
        upload,
        persistReference: async () => {
          events.push("persist");
          throw new Error("database unavailable");
        },
      }),
    ).rejects.toThrow("database unavailable");
    expect(events).toEqual(["persist"]);
    expect(send.mock.calls.some(([command]) => command instanceof DeleteObjectCommand)).toBe(false);
  });

  it("rejects content whose signature does not match its claimed file type", async () => {
    const send = vi.fn(async (command: unknown): Promise<unknown> => {
      if (command instanceof HeadObjectCommand)
        return { ContentLength: 120, ContentType: "application/pdf" };
      return { Body: { transformToByteArray: async () => new TextEncoder().encode("<html>") } };
    });
    const storage = createR2Storage(config, { send });

    await expect(
      storage.verifyUploadedObject({
        ...upload,
        key: "materials/123e4567-e89b-12d3-a456-426614174000.pdf",
      }),
    ).rejects.toBeInstanceOf(ApiError);
  });

  it("deletes only generated keys under known private prefixes", async () => {
    const send = vi.fn(async (command: unknown) => {
      expect(command).toBeInstanceOf(DeleteObjectCommand);
      return {};
    });
    const storage = createR2Storage(config, { send });

    await expect(storage.deleteObject("../../public/other.pdf")).rejects.toMatchObject({
      code: "INVALID_OBJECT_KEY",
    });
    expect(send).not.toHaveBeenCalled();
    await storage.deleteObject("gallery/123e4567-e89b-12d3-a456-426614174000.png");
    expect(send).toHaveBeenCalledOnce();
  });
});
