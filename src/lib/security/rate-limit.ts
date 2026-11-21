import { createHmac } from "node:crypto";

export type RateLimitStoreResult = { count: number; resetAt: Date };

export type RateLimitStore = {
  consume(input: {
    keyHash: string;
    limit: number;
    windowMs: number;
    now: Date;
  }): Promise<RateLimitStoreResult>;
};

export type RateLimitDecision = {
  allowed: boolean;
  limit: number;
  remaining: number;
  resetAt: Date;
  retryAfterSeconds?: number;
};

export type RateLimitPolicy = {
  scope: string;
  subject: string;
  limit: number;
  windowMs: number;
};

type RateLimitPrismaClient = {
  $queryRaw<T>(query: TemplateStringsArray, ...values: unknown[]): Promise<T>;
};

export function createRateLimiter(
  store: RateLimitStore,
  secret: string,
  now: () => Date = () => new Date(),
) {
  if (secret.length < 32)
    throw new Error("Rate-limit HMAC secret must contain at least 32 characters.");

  return {
    async check(policy: RateLimitPolicy): Promise<RateLimitDecision> {
      if (!policy.scope.trim() || !policy.subject.trim())
        throw new Error("Rate-limit scope and subject are required.");
      if (!Number.isSafeInteger(policy.limit) || policy.limit <= 0)
        throw new Error("Rate limit must be a positive integer.");
      if (!Number.isSafeInteger(policy.windowMs) || policy.windowMs <= 0)
        throw new Error("Rate-limit window must be a positive integer.");

      const timestamp = now();
      const keyHash = createHmac("sha256", secret)
        .update(`${policy.scope.trim().toLowerCase()}:${policy.subject.trim().toLowerCase()}`)
        .digest("hex");
      const result = await store.consume({
        keyHash,
        limit: policy.limit,
        windowMs: policy.windowMs,
        now: timestamp,
      });
      const allowed = result.count <= policy.limit;
      return {
        allowed,
        limit: policy.limit,
        remaining: Math.max(0, policy.limit - result.count),
        resetAt: result.resetAt,
        ...(!allowed && {
          retryAfterSeconds: Math.max(
            1,
            Math.ceil((result.resetAt.getTime() - timestamp.getTime()) / 1000),
          ),
        }),
      };
    },
  };
}

export function createPostgresRateLimitStore(client: RateLimitPrismaClient): RateLimitStore {
  return {
    async consume(input) {
      const resetAt = new Date(input.now.getTime() + input.windowMs);
      const rows = await client.$queryRaw<Array<{ count: number; resetAt: Date }>>`
        INSERT INTO "RateLimitBucket" ("keyHash", "count", "windowStartedAt", "windowExpiresAt", "updatedAt")
        VALUES (${input.keyHash}, 1, ${input.now}, ${resetAt}, ${input.now})
        ON CONFLICT ("keyHash") DO UPDATE SET
          "count" = CASE
            WHEN "RateLimitBucket"."windowExpiresAt" <= ${input.now} THEN 1
            ELSE LEAST("RateLimitBucket"."count" + 1, ${input.limit + 1})
          END,
          "windowStartedAt" = CASE
            WHEN "RateLimitBucket"."windowExpiresAt" <= ${input.now} THEN ${input.now}
            ELSE "RateLimitBucket"."windowStartedAt"
          END,
          "windowExpiresAt" = CASE
            WHEN "RateLimitBucket"."windowExpiresAt" <= ${input.now} THEN ${resetAt}
            ELSE "RateLimitBucket"."windowExpiresAt"
          END,
          "updatedAt" = ${input.now}
        RETURNING "count", "windowExpiresAt" AS "resetAt"
      `;
      const row = rows[0];
      if (!row) throw new Error("Rate-limit storage returned no counter row.");
      return row;
    },
  };
}
