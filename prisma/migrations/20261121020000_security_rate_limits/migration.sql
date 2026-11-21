-- Persist fixed-window counters across serverless instances.
-- The key is an HMAC digest; raw IP addresses and account identifiers are not stored.
CREATE TABLE "RateLimitBucket" (
    "keyHash" CHAR(64) NOT NULL,
    "count" INTEGER NOT NULL,
    "windowStartedAt" TIMESTAMP(3) NOT NULL,
    "windowExpiresAt" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "RateLimitBucket_pkey" PRIMARY KEY ("keyHash")
);

CREATE INDEX "RateLimitBucket_windowExpiresAt_idx"
ON "RateLimitBucket"("windowExpiresAt");
