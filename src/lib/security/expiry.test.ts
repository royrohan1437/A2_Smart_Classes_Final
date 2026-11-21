import { describe, expect, it } from "vitest";
import { isOtpUsable, isSessionUsable } from "./expiry";

describe("request-time expiry checks", () => {
  const now = new Date("2026-11-21T12:00:00.000Z");

  it("requires an unrevoked session inside sliding and absolute expiry", () => {
    const session = {
      createdAt: new Date("2026-11-01T12:00:00.000Z"),
      expiresAt: new Date("2026-11-22T12:00:00.000Z"),
      revokedAt: null,
    };
    expect(isSessionUsable(session, now, 30 * 24 * 60 * 60 * 1000)).toBe(true);
    expect(isSessionUsable({ ...session, revokedAt: now }, now, 30 * 24 * 60 * 60 * 1000)).toBe(
      false,
    );
    expect(isSessionUsable({ ...session, expiresAt: now }, now, 30 * 24 * 60 * 60 * 1000)).toBe(
      false,
    );
    expect(isSessionUsable(session, now, 10 * 24 * 60 * 60 * 1000)).toBe(false);
  });

  it("rejects OTPs that are expired, consumed or invalidated", () => {
    const otp = {
      expiresAt: new Date("2026-11-21T12:05:00.000Z"),
      consumedAt: null,
      invalidatedAt: null,
    };
    expect(isOtpUsable(otp, now)).toBe(true);
    expect(isOtpUsable({ ...otp, expiresAt: now }, now)).toBe(false);
    expect(isOtpUsable({ ...otp, consumedAt: now }, now)).toBe(false);
    expect(isOtpUsable({ ...otp, invalidatedAt: now }, now)).toBe(false);
  });
});
