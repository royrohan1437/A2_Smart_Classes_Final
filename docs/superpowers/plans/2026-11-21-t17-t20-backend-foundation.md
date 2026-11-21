# T17–T20 Backend Foundation Implementation Plan

> **For agentic workers:** Implement the tasks in order, test-first, and verify each task before updating `PROGRESS.md`.

**Goal:** Establish the project’s relational schema, server API conventions, private R2 storage service, and Brevo transactional email service without changing production data.

**Architecture:** Keep Next.js route handlers thin. Keep validation/response utilities in `src/lib`, storage/email integrations in server-only feature modules, and Prisma as the sole relational schema. T17 creates schema and migration artifacts only; T18–T20 add independently testable services.

**Tech Stack:** Next.js 16.4.6, TypeScript 5.9.3, Prisma 7.10.1, PostgreSQL, Zod 4.6.7, Vitest 5.1.1, AWS SDK for JavaScript v3, Cloudflare R2 S3 API, Brevo v3 REST API.

**Spec:** `TASK.md`, `prd.md`, `architechture.md`, `rules.md`.

## Global Constraints

- Add no schema properties beyond requirements in TASK.md/PRD and necessary identifiers, relationships, uniqueness, ordering, timestamps, and deletion controls.
- Keep passwords, OTPs, access keys, and signed URLs out of logs and responses.
- Keep R2 private; issue only short-lived operation-scoped URLs after server authorization.
- Keep handlers thin and validate input with Zod.
- No production DB connection or migration; no live R2/Brevo calls without configured credentials.
- Preserve enquiry history, student/fee history, payment immutability, and academic dependencies.

## Review Focus

- Duplicate active academic sessions: add a PostgreSQL partial unique index and validate the migration.
- OTP reuse/expiry/secret leakage: persist only hashes, expiry, attempts, consumption, and cooldown state; never log the submitted code.
- Restricted material access: authorize role, account status, deletion state, and matching board/class before signing a GET URL.
- Upload spoofing/oversize declarations: validate permitted MIME/extension/declared size and verify uploaded object metadata before persistence.
- Brevo failure or malformed HTML fields: escape all inserted values, return generic errors, and log only safe event/status fields.

---

### Task 17: Relational schema and initial migration

**Files:** `prisma/schema.prisma`, `prisma/migrations/<timestamp>_initial_schema/migration.sql`, Prisma schema validation tests/scripts, `TASK.md`, `PROGRESS.md`.

**Interfaces:** Generate the existing `src/generated/prisma` client from the single schema. Expose models for users/students/sessions/OTP, academic hierarchy/session, teachers, enquiries, material categories/files, playlists/gallery images, and fee schedules/monthly fees/payments.

- [ ] Test: schema validates with Prisma 7.10.1 and generated client compiles.
- [ ] Implement only PRD fields and required constraints/relations; use restrictive foreign-key behavior for protected academic/fee history, student soft deletion, and hard deletion semantics for files/gallery/enquiries as specified.
- [ ] Generate a reviewed migration from empty without connecting to a database; add a partial unique index for one active academic session.
- [ ] Verify schema and migration; do not apply to Supabase.

### Task 18: API foundation

**Files:** `src/lib/api-response.ts`, `src/lib/api-error.ts`, `src/lib/logger.ts`, `src/lib/repository.ts`, tests, `TASK.md`, `PROGRESS.md`.

**Interfaces:** Standard JSON success/error envelopes, typed API errors, safe structured logs, Zod request parsing, and generic typed repository/service contracts.

- [ ] Write unit tests for success/error status and payloads, Zod validation, and redaction.
- [ ] Implement helpers and keep internal errors generic to clients.
- [ ] Verify unit suite, type-check, and lint.

### Task 19: Private Cloudflare R2 service

**Files:** `src/features/storage/r2.ts`, `src/features/storage/validation.ts`, tests, dependency manifests, `TASK.md`, `PROGRESS.md`.

**Interfaces:** Create short-lived PutObject/GetObject URLs, verify uploaded metadata, delete object keys, and check FREE/RESTRICTED authorization. Use generated keys and a private bucket only.

- [ ] Test safe PDF/DOCX/image validation and role/access checks before implementation.
- [ ] Add AWS SDK v3 S3 client/presigner configured for R2’s `auto` region and account endpoint.
- [ ] Implement upload/download/HEAD/delete operations with injectable client/config for tests.
- [ ] Verify no credentials are exposed and no live object operation is attempted.

### Task 20: Brevo email service

**Files:** `src/features/email/brevo.ts`, `src/features/email/templates.ts`, tests, `TASK.md`, `PROGRESS.md`.

**Interfaces:** Send admin enquiry notifications and student/admin OTP recovery emails through Brevo’s server-side `/v3/smtp/email` endpoint; return a typed result and log only safe metadata.

- [ ] Test request envelopes, HTML escaping, missing configuration, API rejection, and safe logging using an injected fetch implementation.
- [ ] Implement plain-text and HTML templates with no student enquiry confirmation.
- [ ] Verify unit suite, type-check, lint, and production build; no real email is sent.
