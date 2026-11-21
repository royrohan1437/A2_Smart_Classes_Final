import { createHash, timingSafeEqual } from "node:crypto";
import { createErrorResponse, createSuccessResponse, handleApiError } from "../api-response";

type DeleteManyDelegate = {
  deleteMany(args: { where: Record<string, unknown> }): Promise<{ count: number }>;
};

export type SecurityCleanupClient = {
  authSession: DeleteManyDelegate;
  passwordResetOtp: DeleteManyDelegate;
  rateLimitBucket: DeleteManyDelegate;
};

export type SecurityCleanupResult = {
  sessionsDeleted: number;
  otpsDeleted: number;
  rateLimitBucketsDeleted: number;
};

export async function cleanupExpiredSecurityRecords(
  client: SecurityCleanupClient,
  now = new Date(),
): Promise<SecurityCleanupResult> {
  const [sessions, otps, rateLimitBuckets] = await Promise.all([
    client.authSession.deleteMany({
      where: { OR: [{ expiresAt: { lt: now } }, { revokedAt: { not: null } }] },
    }),
    client.passwordResetOtp.deleteMany({
      where: {
        OR: [
          { expiresAt: { lt: now } },
          { consumedAt: { not: null } },
          { invalidatedAt: { not: null } },
        ],
      },
    }),
    client.rateLimitBucket.deleteMany({ where: { windowExpiresAt: { lt: now } } }),
  ]);

  return {
    sessionsDeleted: sessions.count,
    otpsDeleted: otps.count,
    rateLimitBucketsDeleted: rateLimitBuckets.count,
  };
}

export function isAuthorizedCronRequest(
  authorization: string | null,
  secret: string | undefined,
): boolean {
  if (!authorization || !secret) return false;
  const expected = `Bearer ${secret}`;
  const suppliedDigest = createHash("sha256").update(authorization).digest();
  const expectedDigest = createHash("sha256").update(expected).digest();
  return timingSafeEqual(suppliedDigest, expectedDigest);
}

export function createSecurityCleanupHandler(
  secret: string | undefined,
  cleanup: () => Promise<SecurityCleanupResult>,
) {
  return async function GET(request: Request): Promise<Response> {
    if (!isAuthorizedCronRequest(request.headers.get("authorization"), secret)) {
      return createErrorResponse({ code: "UNAUTHORIZED", message: "Unauthorized." }, 401);
    }

    try {
      return createSuccessResponse(await cleanup());
    } catch (error) {
      return handleApiError(error, "security.cleanup.failed");
    }
  };
}
