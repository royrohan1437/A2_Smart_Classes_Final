import { describe, expect, it, vi } from "vitest";
import {
  cleanupExpiredSecurityRecords,
  createSecurityCleanupHandler,
  isAuthorizedCronRequest,
} from "./cleanup";

describe("security cleanup", () => {
  it("deletes expired, revoked, consumed and invalidated records using one supplied time", async () => {
    const now = new Date("2026-11-21T12:00:00.000Z");
    const sessionDeleteMany = vi.fn(async () => ({ count: 2 }));
    const otpDeleteMany = vi.fn(async () => ({ count: 3 }));
    const rateLimitDeleteMany = vi.fn(async () => ({ count: 4 }));
    const result = await cleanupExpiredSecurityRecords(
      {
        authSession: { deleteMany: sessionDeleteMany },
        passwordResetOtp: { deleteMany: otpDeleteMany },
        rateLimitBucket: { deleteMany: rateLimitDeleteMany },
      },
      now,
    );

    expect(result).toEqual({ sessionsDeleted: 2, otpsDeleted: 3, rateLimitBucketsDeleted: 4 });
    expect(sessionDeleteMany).toHaveBeenCalledWith({
      where: { OR: [{ expiresAt: { lt: now } }, { revokedAt: { not: null } }] },
    });
    expect(otpDeleteMany).toHaveBeenCalledWith({
      where: {
        OR: [
          { expiresAt: { lt: now } },
          { consumedAt: { not: null } },
          { invalidatedAt: { not: null } },
        ],
      },
    });
    expect(rateLimitDeleteMany).toHaveBeenCalledWith({ where: { windowExpiresAt: { lt: now } } });
  });

  it("authorizes only an exact bearer secret and fails closed when unconfigured", () => {
    expect(isAuthorizedCronRequest("Bearer cron-secret", "cron-secret")).toBe(true);
    expect(isAuthorizedCronRequest("Bearer wrong", "cron-secret")).toBe(false);
    expect(isAuthorizedCronRequest("Bearer cron-secret", undefined)).toBe(false);
    expect(isAuthorizedCronRequest(null, "cron-secret")).toBe(false);
  });

  it("rejects unauthorized cleanup requests without running cleanup", async () => {
    const cleanup = vi.fn(async () => ({
      sessionsDeleted: 0,
      otpsDeleted: 0,
      rateLimitBucketsDeleted: 0,
    }));
    const handler = createSecurityCleanupHandler("a-secret", cleanup);
    const response = await handler(new Request("https://example.test/api/cron/security-cleanup"));
    expect(response.status).toBe(401);
    expect(cleanup).not.toHaveBeenCalled();
  });
});
