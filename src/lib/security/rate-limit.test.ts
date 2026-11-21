import { describe, expect, it } from "vitest";
import { createRateLimiter, type RateLimitStore } from "./rate-limit";

describe("shared application rate limiter", () => {
  it("uses caller-provided limits and returns retry details after the threshold", async () => {
    let count = 0;
    const resetAt = new Date("2026-11-21T12:01:00.000Z");
    const store: RateLimitStore = {
      async consume() {
        count += 1;
        return { count, resetAt };
      },
    };
    const limiter = createRateLimiter(
      store,
      "a sufficiently long test secret with 32+ chars",
      () => new Date("2026-11-21T12:00:00.000Z"),
    );

    await expect(
      limiter.check({ scope: "login", subject: "person@example.com", limit: 2, windowMs: 60_000 }),
    ).resolves.toMatchObject({
      allowed: true,
      remaining: 1,
    });
    await limiter.check({
      scope: "login",
      subject: "person@example.com",
      limit: 2,
      windowMs: 60_000,
    });
    await expect(
      limiter.check({ scope: "login", subject: "person@example.com", limit: 2, windowMs: 60_000 }),
    ).resolves.toMatchObject({
      allowed: false,
      remaining: 0,
      retryAfterSeconds: 60,
    });
  });

  it("stores only an HMAC of the caller identity", async () => {
    let storedKey = "";
    const store: RateLimitStore = {
      async consume(input) {
        storedKey = input.keyHash;
        return { count: 1, resetAt: new Date("2026-11-21T12:01:00.000Z") };
      },
    };
    const limiter = createRateLimiter(
      store,
      "a sufficiently long test secret with 32+ chars",
      () => new Date("2026-11-21T12:00:00.000Z"),
    );

    await limiter.check({ scope: "otp", subject: "1234567890", limit: 1, windowMs: 60_000 });
    expect(storedKey).toMatch(/^[a-f0-9]{64}$/);
    expect(storedKey).not.toContain("1234567890");
  });

  it("rejects invalid limit policy values", async () => {
    const store: RateLimitStore = {
      async consume() {
        return { count: 1, resetAt: new Date() };
      },
    };
    const limiter = createRateLimiter(store, "a sufficiently long test secret with 32+ chars");
    await expect(
      limiter.check({ scope: "login", subject: "x", limit: 0, windowMs: 1000 }),
    ).rejects.toThrow();
  });
});
