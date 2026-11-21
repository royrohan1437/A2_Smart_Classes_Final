import { describe, expect, it } from "vitest";
import { getSecurityHeaders } from "./headers";

describe("security response headers", () => {
  it("returns safe baseline headers in every environment", () => {
    const headers = getSecurityHeaders(false);
    expect(headers).toContainEqual({ key: "X-Content-Type-Options", value: "nosniff" });
    expect(headers).toContainEqual({ key: "X-Frame-Options", value: "DENY" });
    expect(headers).toContainEqual({
      key: "Referrer-Policy",
      value: "strict-origin-when-cross-origin",
    });
  });

  it("adds HSTS only for production HTTPS deployments", () => {
    expect(getSecurityHeaders(false).some(({ key }) => key === "Strict-Transport-Security")).toBe(
      false,
    );
    expect(getSecurityHeaders(true)).toContainEqual({
      key: "Strict-Transport-Security",
      value: "max-age=31536000",
    });
  });
});
