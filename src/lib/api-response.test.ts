import { describe, expect, it, vi } from "vitest";
import { z } from "zod";
import { ApiError } from "./api-error";
import {
  createErrorResponse,
  createSuccessResponse,
  handleApiError,
  parseJsonBody,
} from "./api-response";

describe("API response helpers", () => {
  it("returns the standard success envelope and status", async () => {
    const response = createSuccessResponse({ id: "item-1" }, 201);

    expect(response.status).toBe(201);
    await expect(response.json()).resolves.toEqual({ success: true, data: { id: "item-1" } });
  });

  it("returns safe error envelopes", async () => {
    const response = createErrorResponse({ code: "NOT_FOUND", message: "Record not found" }, 404);

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toEqual({
      success: false,
      error: { code: "NOT_FOUND", message: "Record not found" },
    });
  });

  it("parses and validates JSON request bodies with Zod", async () => {
    const schema = z.object({ title: z.string().min(1) });
    const valid = await parseJsonBody(
      new Request("http://localhost", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title: "Notes" }),
      }),
      schema,
    );

    expect(valid).toEqual({ success: true, data: { title: "Notes" } });
  });

  it("returns generic validation errors for invalid and malformed JSON", async () => {
    const schema = z.object({ title: z.string().min(1) });
    const invalid = await parseJsonBody(
      new Request("http://localhost", {
        method: "POST",
        body: JSON.stringify({ title: "" }),
      }),
      schema,
    );
    const malformed = await parseJsonBody(
      new Request("http://localhost", {
        method: "POST",
        body: "{",
      }),
      schema,
    );

    expect(invalid.success).toBe(false);
    expect(malformed.success).toBe(false);
    if (!invalid.success) {
      await expect(invalid.response.json()).resolves.toMatchObject({
        error: { code: "VALIDATION_ERROR", message: "Request validation failed." },
      });
    }
    if (!malformed.success) {
      await expect(malformed.response.json()).resolves.toMatchObject({
        error: { code: "INVALID_JSON", message: "Request body must be valid JSON." },
      });
    }
  });

  it("maps known errors safely and hides unexpected error details", async () => {
    const known = await handleApiError(new ApiError("CONFLICT", "Already exists", 409));
    const log = vi.spyOn(console, "error").mockImplementation(() => undefined);
    const unknown = await handleApiError(new Error("database password is secret"), "test.failure");

    expect(known.status).toBe(409);
    await expect(known.json()).resolves.toMatchObject({
      error: { code: "CONFLICT", message: "Already exists" },
    });
    expect(unknown.status).toBe(500);
    await expect(unknown.json()).resolves.toMatchObject({
      error: { code: "INTERNAL_ERROR", message: "An unexpected error occurred." },
    });
    expect(log).toHaveBeenCalledOnce();
    expect(String(log.mock.calls[0]?.[0])).not.toContain("database password");
    log.mockRestore();
  });
});
