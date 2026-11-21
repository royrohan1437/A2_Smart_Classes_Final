import { ApiError } from "../api-error";
import { getServerEnvironment } from "../env";
import { getPrismaClient } from "../prisma";
import {
  createPostgresRateLimitStore,
  createRateLimiter,
  type RateLimitDecision,
  type RateLimitPolicy,
} from "./rate-limit";

type RateLimitPrismaClient = {
  $queryRaw<T>(query: TemplateStringsArray, ...values: unknown[]): Promise<T>;
};

export async function checkApplicationRateLimit(
  policy: RateLimitPolicy,
): Promise<RateLimitDecision> {
  const secret = getServerEnvironment().SESSION_SECRET;
  if (!secret) {
    throw new ApiError("RATE_LIMIT_NOT_CONFIGURED", "Request protection is not configured.", 503);
  }

  try {
    const limiter = createRateLimiter(
      createPostgresRateLimitStore(getPrismaClient() as unknown as RateLimitPrismaClient),
      secret,
    );
    return await limiter.check(policy);
  } catch (error) {
    if (error instanceof ApiError) throw error;
    throw new ApiError(
      "RATE_LIMIT_UNAVAILABLE",
      "Request protection is temporarily unavailable.",
      503,
    );
  }
}
