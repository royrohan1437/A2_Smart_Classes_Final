import { describe, expect, it, vi } from "vitest";
import { logEvent } from "./logger";

describe("structured logger", () => {
  it("redacts sensitive metadata, including nested values", () => {
    const log = vi.spyOn(console, "info").mockImplementation(() => undefined);

    logEvent("account.recovery", {
      userId: "user-1",
      otp: "1234",
      nested: { authorization: "Bearer private", detail: "safe" },
    });

    const serialized = String(log.mock.calls[0]?.[0]);
    expect(serialized).toContain("user-1");
    expect(serialized).toContain("[REDACTED]");
    expect(serialized).not.toContain("1234");
    expect(serialized).not.toContain("Bearer private");
    log.mockRestore();
  });
});
