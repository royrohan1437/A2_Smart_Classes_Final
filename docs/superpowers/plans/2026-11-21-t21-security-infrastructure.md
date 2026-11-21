# T21 Security and Infrastructure Implementation Plan

> **For agentic workers:** Implement in order with tests first. Preserve existing user changes; do not commit or push.

**Goal:** Add reusable server security controls, privacy-safe Sentry instrumentation, and protected cleanup support for the later authentication and admin tasks.

**Architecture:** Keep security policy helpers under `src/lib/security`, persist application rate-limit windows in PostgreSQL so checks are shared across serverless instances, and expose only a secret-protected daily cleanup route. Configure Next security response headers and initialize Sentry only when its DSN is set.

**Tech Stack:** Next.js 16.4.6, Prisma 7.10.1/PostgreSQL, Vitest, Sentry Next.js SDK.

**Spec:** `TASK.md` T21; `rules.md` Security; `architechture.md` Sections 18–20.

## Global Constraints

- Secure cookies are HTTP-only, same-site, secure in production, and use the `__Host-` prefix when its requirements are met.
- Enforce expiry on normal requests as well as with cleanup.
- Do not log passwords, OTPs, session tokens, secrets, or unnecessary student data.
- Cron cleanup fails closed unless the bearer token matches `CRON_SECRET`.
- Do not add a session TTL, login/OTP threshold, or rate-window value not specified by the product requirements; callers provide their policy.
- Keep rate-limit state out of process memory; serverless instances share PostgreSQL storage.

## Review Focus

- Missing/mismatched Origin or Referer on unsafe requests must fail closed.
- Concurrent requests at a rate-limit boundary must use one atomic PostgreSQL upsert.
- Rate-limit keys must be HMAC-hashed and never logged or stored as raw identifiers.
- Expired/revoked sessions and used/expired/invalidated OTPs must be invalid on requests before cron runs.
- Sentry must not collect request bodies, cookies, headers, query values, user identity, or database query parameters.
- Unauthorized cleanup requests must not query the database or disclose the cron secret.

---

### Task 1: Security policy helpers

Add tests and implementations for session/OTP expiry checks, secure cookie options, same-origin CSRF validation, and HMAC-keyed PostgreSQL rate limiting. Add the additive `RateLimitBucket` schema and migration.

### Task 2: Cleanup service and protected scheduled route

Add tests, cleanup for expired/revoked sessions and expired/consumed/invalidated OTPs and rate-limit buckets, constant-time cron authorization, a GET route, and a daily Vercel Cron entry.

### Task 3: Headers and Sentry

Add tests for security headers and sensitive-event scrubbing. Configure safe response headers, optional Sentry initialization for client/server/edge, request-error capture, and root render-error capture.

### Task 4: Verification and handoff

Run focused tests, full unit tests, type-check, focused lint, formatting, Prisma schema validation/generation when the installed engine permits it, production build, and a final diff review. Record external setup dependencies and T21 status in `TASK.md` and `PROGRESS.md`.
