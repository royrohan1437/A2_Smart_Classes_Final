import { describe, expect, it } from "vitest";
import { canAccessMaterial, validateUploadMetadata } from "./validation";

describe("R2 upload validation", () => {
  it("accepts matching PDF and DOCX metadata within configured limits", () => {
    expect(
      validateUploadMetadata({
        fileName: "lesson.PDF",
        contentType: "application/pdf",
        sizeBytes: 200,
      }),
    ).toMatchObject({
      valid: true,
      fileType: "PDF",
    });
    expect(
      validateUploadMetadata({
        fileName: "lesson.docx",
        contentType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        sizeBytes: 200,
      }),
    ).toMatchObject({ valid: true, fileType: "DOCX" });
  });

  it("rejects mismatched, unsupported, empty, non-finite and oversized uploads", () => {
    expect(
      validateUploadMetadata({ fileName: "lesson.pdf", contentType: "text/html", sizeBytes: 200 })
        .valid,
    ).toBe(false);
    expect(
      validateUploadMetadata({
        fileName: "lesson.exe",
        contentType: "application/pdf",
        sizeBytes: 200,
      }).valid,
    ).toBe(false);
    expect(
      validateUploadMetadata({
        fileName: "lesson.pdf",
        contentType: "application/pdf",
        sizeBytes: 0,
      }).valid,
    ).toBe(false);
    expect(
      validateUploadMetadata({
        fileName: "lesson.pdf",
        contentType: "application/pdf",
        sizeBytes: Number.NaN,
      }).valid,
    ).toBe(false);
    expect(
      validateUploadMetadata({
        fileName: "lesson.pdf",
        contentType: "application/pdf",
        sizeBytes: 26 * 1024 * 1024,
      }).valid,
    ).toBe(false);
  });

  it("allows only admins, free materials, or matching active students", () => {
    const material = { access: "RESTRICTED" as const, boardId: "board-1", classId: "class-1" };
    expect(canAccessMaterial({ role: "ADMIN" }, material)).toBe(true);
    expect(
      canAccessMaterial(
        {
          role: "STUDENT",
          status: "ACTIVE",
          deletedAt: null,
          boardId: "board-1",
          classId: "class-1",
        },
        material,
      ),
    ).toBe(true);
    expect(
      canAccessMaterial(
        {
          role: "STUDENT",
          status: "ACTIVE",
          deletedAt: null,
          boardId: "board-1",
          classId: "class-2",
        },
        material,
      ),
    ).toBe(false);
    expect(
      canAccessMaterial(
        {
          role: "STUDENT",
          status: "INACTIVE",
          deletedAt: null,
          boardId: "board-1",
          classId: "class-1",
        },
        material,
      ),
    ).toBe(false);
    expect(
      canAccessMaterial(
        {
          role: "STUDENT",
          status: "ACTIVE",
          deletedAt: new Date(),
          boardId: "board-1",
          classId: "class-1",
        },
        material,
      ),
    ).toBe(false);
    expect(
      canAccessMaterial({ role: "STUDENT", status: "ACTIVE" }, { ...material, access: "FREE" }),
    ).toBe(true);
  });
});
