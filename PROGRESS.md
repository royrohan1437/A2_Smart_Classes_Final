# A2Smart Classes — Progress Log

## T00 — Repository and specification inspection

- Date: 2026-11-20
- Status: DONE
- Branch: docs/T00-specification-baseline
- Commit: `a761494` — created by the owner from the T00 work; no commit or push was executed by Codex.

### 1. Objective and acceptance criteria

Restate the task objective: verify the repository, tooling, remote, working tree, approved specification documents, and create the persistent implementation handoff log.

- Repository state and branch: PASS
- Remote and recent history: PASS
- Node/npm versions: PASS
- Working tree reviewed: PASS
- Approved specification documents present/inspected: PASS
- Missing or conflicting documentation identified: PASS
- `PROGRESS.md` baseline created: PASS
- T00 status updated in `TASK.md`: PASS
- No secrets added to tracked project files: PASS

### 2. What was completed

- Verified the repository root and confirmed the application has not yet been bootstrapped.
- Verified Git branch `main`, its `origin/main` tracking relationship, and the configured GitHub remote.
- Verified the recent repository history and recorded the baseline commit.
- Verified Node.js and npm installations.
- Inspected the root specification documents and implementation plan.
- Identified the architecture document filename mismatch and sensitive database credential file.
- Created this progress log and recorded the T00 baseline.

### 3. How it was implemented

The repository was inspected before code changes. Git status, remote URLs, commit history, Node/npm versions, and existing ignored files were checked. The specification and task documents were read and cross-checked against the approved scope. No application or dependency changes were made during T00.

### 4. Files changed

- `TASK.md` — marked T00 complete and retained the ordered implementation plan.
- `PROGRESS.md` — created the mandatory append-only implementation history and this T00 baseline entry.
- `.gitignore` — existing file confirmed to exclude `Organization  A2 Smart Classes.txt`; no change made in T00.
- `Organization  A2 Smart Classes.txt` — left untouched and excluded; contains sensitive database credentials and must not be committed or copied into project documentation.

### 5. Database and API impact

No database or API changes.

No Prisma schema, migration, seed, route, service, repository, or database connection was created or modified.

### 6. Dependencies and configuration

No dependencies or configuration files were added or changed.

No environment-variable values were recorded. The credential-bearing source file is intentionally not part of implementation configuration and must not be copied into `.env.example` or this log.

### 7. Verification

The following inspections were performed:

- `git status --short --branch` — verified branch `main` tracking `origin/main` and listed existing untracked specification files.
- `git remote -v` — verified `origin` points to `https://github.com/royrohan1437/A2_Smart_Classes_Final.git`.
- `git log -3 --oneline --decorate` — verified baseline commit `6108839 first commit`.
- `node --version` — returned `v24.13.0`.
- `npm --version` — returned `11.4.1`.
- `git diff --check` — returned no tracked-file diff issues; no tracked files had been changed before T00.
- Root document review — inspected `TASK.md`, `README.md`, `prd.md`, `architechture.md`, `design.md`, `rules.md`, and `.gitignore`.

Checks not yet applicable: lint, type-check, tests, build, and browser verification. T00 contains repository/documentation inspection only.

### 8. Issues, risks, and limitations

- **Filename mismatch:** the repository contains `architechture.md`, while `TASK.md` refers to `ARCHITECTURE.md`. The file content is approved architecture content, but the filename is not consistent. This may be corrected in T01 or T00 only after owner direction; no rename was performed under T00.
- **Sensitive file:** `Organization  A2 Smart Classes.txt` contains a database password and connection credentials. It is already ignored by the existing `.gitignore`, and no credentials were copied into project files or this log.
- **Baseline Git state:** `main` is clean of tracked modifications but has untracked project specification files. The credential file is ignored and was not listed by normal status output.
- **Application state:** no Next.js application, source tree, Prisma project, tests, or environment configuration exists yet.

No known implementation bugs.

### 9. Owner actions required

- Confirm whether `architechture.md` should be renamed to `ARCHITECTURE.md` before T01 bootstrapping.
- Create the task branch when ready to begin T01, using the owner-run commands below if the owner chooses to isolate work.
- Do not commit or share the credential-bearing file.
- Supply environment credentials only through the secure deployment/environment workflow at later tasks; never in chat or this repository.

### 10. Current project state

The repository is a specification-only baseline. The approved documents and task plan exist, and T00 is recorded. No application code or runtime is available yet.

Important paths:

- `TASK.md` — ordered tasks and mandatory workflow.
- `architechture.md` — actual architecture document filename.
- `design.md` — visual and interaction source of truth.
- `rules.md` — implementation constraints.
- `prd.md` — complete product requirements.
- `PROGRESS.md` — append-only session handoff log.
- `.gitignore` — currently excludes the credential-bearing organization file.

### 11. Next task — exact continuation instructions

- **Next task ID and title:** T01 — Next.js bootstrap
- **Why it is next:** T01 creates the application foundation required by all subsequent implementation tasks.
- **Prerequisites:** T00 approval; owner decision on the architecture filename, and a Git branch strategy.
- **First files/areas the next session should inspect:** `TASK.md`, `PROGRESS.md`, `prd.md`, `architechture.md`, `design.md`, `rules.md`, and current Git state.
- **Exact first steps:** create the Next.js App Router project with strict TypeScript and a `src/` structure, add project scripts and `.gitignore`, create `.env.example` and root `vercel.json`, and verify the local application.
- **Acceptance criteria:** app runs locally; App Router/strict TypeScript/`src/` structure exist; scripts and required configuration exist; remote remains owner-configured; no secrets are committed.
- **Known pitfalls:** do not replace or copy the existing credentials file into source control; do not add dependencies beyond the next approved task scope; do not create a branch or commit automatically.

### 12. Self-contained next-session context

A2Smart Classes is a Next.js App Router/TypeScript modular monolith. T00 completed repository and specification inspection on 2026-11-20. The current branch is `main`, tracking `origin/main`; the baseline commit is `6108839 first commit`. The repository currently contains only specifications and an ignore file, not application code. Approved context is in `TASK.md`, `prd.md`, `architechture.md`, `design.md`, and `rules.md`. T01 will bootstrap the Next.js application. Do not run production migrations or commit/push. Preserve any unrelated user changes. The credential-bearing `Organization  A2 Smart Classes.txt` must remain ignored and private.

### 13. Owner-run Git commands

T00 changes are documentation updates. The owner may review and commit them on a new short-lived task branch or directly on `main` after personal approval.

```bash
git status
git branch --show-current
git diff --check
git diff
# Optional, because T00 does not require starting implementation work:
# git switch -c docs/T00-specification-baseline

git add TASK.md PROGRESS.md
git diff --cached
git diff --cached --check
git commit -m "docs(T00): record repository specification baseline"
git push -u origin docs/T00-specification-baseline
```

If the owner commits directly on `main`, replace the branch command and push command with explicit owner-approved `main` workflow:

```bash
git push origin main
```

## T09 — Academics/course directory

- Date: 2026-11-21
- Status: DONE
- Branch: main
- Commit: Not committed by Codex; owner-run commands supplied below.

### 1. Objective and acceptance criteria

- `/academics` lists all available boards with their classes nested below each board: PASS.
- Selecting a class opens `/academics/[board]/[class]`: PASS.
- Class pages display image-led subject cards and the specified subject details: PASS.
- Directory and class pages have useful empty states for missing academic data: PASS (implemented; current demo catalogue is populated).
- Course browsing is responsive and keyboard accessible: PASS (mobile browser check and semantic links/sections).
- Preserve future dynamic integration with T29 and avoid presenting unverified academy data: PASS (isolated demo catalogue and prominent notices).

### 2. What was completed

- Replaced the `/academics` heading placeholder with a responsive board-wise directory and linked class tiles.
- Added `/academics/[board]/[class]` with breadcrumbs and image-led subject cards showing description, course mode, duration, and fees.
- Added explicit empty states for a catalogue with no boards and for a class with no subjects.
- Added an isolated temporary example catalogue using only the board/class examples already listed in the PRD. All pages identify it as demo content; course duration and fees remain unconfirmed.
- Added unit and Playwright coverage for catalogue lookup, board/class navigation, subject details, and mobile overflow.

### 3. How it was implemented

The App Router pages remain Server Components. `src/features/academics/catalog.ts` owns the temporary catalogue, typed records, and board/class lookup helpers so the T29 database-backed academic feature can replace the source without embedding data in page markup. The class route uses `generateStaticParams`, awaits Next.js 16 promise-based route params inside a Suspense boundary, and calls `notFound()` for unknown board/class slugs. The existing branded loading component provides the Suspense fallback. No changes were made to the shared header, footer, homepage, or existing route links.

The subject photographs reuse the project’s existing temporary Unsplash image sources. They remain replaceable and are not verified academy photographs. The catalogue banner makes the example status clear and does not claim real fees, course durations, or confirmed offerings.

### 4. Files changed

- `src/app/(public)/academics/page.tsx` — board directory, class links, demo notice, and empty state.
- `src/app/(public)/academics/[board]/[class]/page.tsx` — dynamic class route, subject cards/details, breadcrumb navigation, not-found handling, and Suspense loading state.
- `src/features/academics/catalog.ts` — temporary typed demo catalogue and lookup functions for board/class paths.
- `src/features/academics/catalog.test.ts` — unit coverage for documented example paths, subject detail fields, and unknown slugs.
- `tests/e2e/academics.spec.ts` — desktop route flow and mobile overflow coverage.
- `TASK.md` — marked T09 complete.
- `PROGRESS.md` — appended this T09 handoff.

Pre-existing changes to `AGENTS.md`, `.claude/`, `CLAUDE.md`, `architechture.md`, `design.md`, `prd.md`, and `rules.md` were preserved and are not part of T09.

### 5. Database and API impact

No database/API changes. Academic content is temporary in-memory demo data pending the database and admin academic work planned for T16/T17/T29. No migration, schema, API route, or environment configuration was added.

### 6. Dependencies and configuration

No dependencies added, removed, or updated. No environment variables added or changed.

### 7. Verification

- `npm test -- --pool=threads` — PASS: 2 test files, 4 tests.
- `npx eslint src tests/e2e/academics.spec.ts` — PASS.
- `npx tsc --noEmit` — PASS.
- `npm run format:check` — PASS.
- `npm run test:e2e -- tests/e2e/academics.spec.ts --reporter=line --workers=1` — PASS: 2 tests, including board → class navigation, subject details, and 390px mobile overflow.
- Final rendered QA — PASS: page title and route identity verified, no browser console/page errors observed, all three subject images loaded, and desktop class/mobile directory screenshots saved to a temporary directory outside the repository.
- `npm run build` — PASS: production compile, TypeScript, and static page generation. The first sandbox attempt hit `spawn EPERM`; the same command passed with process permission approved.
- `npm run test:e2e -- --reporter=line --workers=1` — 9 PASS, 2 FAIL in unrelated existing tests: `tests/e2e/hero.spec.ts` expects 9 homepage images but finds 14, and `tests/e2e/shells.spec.ts` expects the obsolete homepage heading “Academic excellence begins with a shared foundation.” T09-specific E2E tests passed in the same run.
- `npm run check` — FAILS at the existing lint step because ESLint scans `.gitnexus/run.cjs` and reports three `@typescript-eslint/no-require-imports` errors at lines 39–41. Focused lint on `src` and the T09 E2E test passes; TypeScript passes independently.
- `git diff --check` — PASS.
- GitNexus final incremental index refresh — PASS: 929 nodes, 1,019 edges, 10 clusters, 7 flows. `getAcademicClass` impact is LOW: one direct caller (`AcademicClassContent`) and one route-level caller at depth 2, with the `AcademicClassPage` flow affected. `detect_changes` reports low risk and no affected processes for the four tracked changed files; its file list does not include the new untracked route/catalogue files.
- Browser warning: Next.js reports the existing global `scroll-behavior: smooth` setting should declare `data-scroll-behavior="smooth"` on `<html>`. The dynamic route params warning observed during an earlier run was fixed by adding the Suspense boundary; the final T09 E2E run no longer reports it.

Standard sandbox attempts to start Next.js/Playwright and refresh the GitNexus index hit `spawn EPERM`; local E2E and build checks completed after process permission was approved. No production services or database were accessed.

### 8. Issues, risks, and limitations

- The public directory currently renders clearly labeled temporary examples. It is not connected to admin-managed academic records yet; T29/T37 must replace the catalogue source with the agreed database-backed flow.
- Course mode is labeled as example content; duration and fees are shown as “To be confirmed.” Real offerings, prices, and descriptions require owner-approved data.
- The remote Unsplash subject photos are temporary; verify licensing and replace with approved institute imagery before production.
- The full existing E2E suite has two unrelated failures documented above. The existing aggregate `npm run check` is blocked by lint errors in `.gitnexus/run.cjs`.
- The shared smooth-scroll warning remains in the pre-existing global HTML styling.

### 9. Owner actions required

- Provide verified boards, classes, subjects, descriptions, teaching modes, durations, fees, and approved/licensed photographs for the later T29 data integration.
- Review and commit T09 using the owner-run commands below; do not stage the pre-existing `AGENTS.md`, `.claude/`, or untracked specification documents with this task.

### 10. Current project state

T00–T09 are recorded complete. `/academics` and the class-specific routes now support responsive board/class browsing using explicitly labeled temporary catalogue examples. The routes have empty states and are ready for T29 to connect to managed academic records. No database, authentication, storage, or email provider integration is present yet. Other planned public pages and portal features remain in their later task slots.

### 11. Next task — exact continuation instructions

- Next task ID and title: T10 — Faculty page.
- Why it is next: it is the next public page in the ordered task list.
- Prerequisites: T09 completion; no database prerequisite because teacher management is planned later in T28.
- First files/areas: `src/app/(public)/faculty/page.tsx`, `design.md` faculty direction, public layout, and available replaceable image assets.
- Exact first steps: inspect existing faculty page stub and shared image/design patterns; implement an image-led faculty page with portrait, name, qualifications, subjects, experience, and honest empty/demo states.
- Acceptance criteria: responsive faculty presentation with the specified profile fields and no invented staff information.
- Known pitfalls: T28 will own database/admin teacher management; keep temporary data isolated and clearly identified. Verify image licenses and do not invent qualifications or experience.

### 12. Self-contained next-session context

A2Smart Classes is a Next.js 16.4.6, React 19.3.0, TypeScript, Tailwind CSS 4 App Router project on `main`. T00–T09 are complete. T09 added the public `/academics` board directory and `/academics/[board]/[class]` subject pages. The temporary typed catalogue is isolated in `src/features/academics/catalog.ts`, clearly marked as demo content, and must later be replaced by the database/admin academic flow in T29/T37. The route uses promise-based params, `generateStaticParams`, a Suspense branded loading state, and 404 handling for unknown slugs. Unit tests, focused ESLint, type-check, formatting, T09 Playwright tests, and production build pass. The full E2E suite has 9 passes and 2 existing failures (homepage image count and obsolete shell heading); `npm run check` fails on three existing lint errors in `.gitnexus/run.cjs`. GitNexus indexes this checkout with 929 nodes, 1,019 edges, 10 clusters, and 7 flows; impact for `getAcademicClass` is LOW with one direct caller and one route-level caller. No DB schema, migrations, APIs, auth, R2, or Brevo integration exists yet. `.env.example` contains names only: `DATABASE_URL`, `DIRECT_URL`, `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID`, `R2_SECRET_ACCESS_KEY`, `R2_BUCKET_NAME`, `R2_PRIVATE_BUCKET_NAME`, `R2_PUBLIC_BUCKET_NAME`, `BREVO_API_KEY`, `BREVO_SENDER_EMAIL`, `BREVO_ADMIN_EMAIL`, `SESSION_SECRET`, `ADMIN_BOOTSTRAP_TOKEN`, `NEXT_PUBLIC_APP_URL`, and `SENTRY_DSN`. Preserve pre-existing working-tree changes and do not commit or push automatically. Next task: T10 — Faculty page.

### 13. Owner-run Git commands

The current branch is `main`. These commands stage only T09 files; existing `AGENTS.md`, `.claude/`, `CLAUDE.md`, and untracked specifications remain untouched.

```bash
git status
git branch --show-current
git diff --check
git diff -- src/app/(public)/academics/page.tsx TASK.md PROGRESS.md
git add -- "src/app/(public)/academics/page.tsx" "src/app/(public)/academics/[board]/[class]/page.tsx" "src/features/academics/catalog.ts" "src/features/academics/catalog.test.ts" "tests/e2e/academics.spec.ts" TASK.md PROGRESS.md
git diff --cached
git diff --cached --check
git commit -m "feat(T09): add academic course directory"
git push origin main
```

## T01 — Next.js bootstrap

- Date: 2026-11-20
- Status: DONE
- Branch: feat/T01-nextjs-bootstrap
- Commit: Not committed by Codex; owner-run commands supplied below.

### 1. Objective and acceptance criteria

- Create a Next.js App Router project with strict TypeScript: PASS.
- Use a `src/` structure: PASS.
- Provide project scripts and tooling configuration: PASS.
- Add `.gitignore`, `.env.example`, and root `vercel.json`: PASS.
- Preserve the owner's GitHub remote: PASS.
- Verify the app runs locally: PASS.
- Commit no secrets: PASS.

### 2. What was completed

- Bootstrapped Next.js 16.4.6, React 19.3.0, Tailwind CSS 4, and ESLint 9.
- Established strict TypeScript App Router source structure.
- Added T01 npm scripts for development, lint, type-check, combined checks, build, and production serving.
- Added safe environment-variable placeholders and Vercel configuration.
- Updated repository documentation and ignore rules.
- Verified the generated default route is served locally with HTTP 200.

### 3. How it was implemented

The workspace folder name contained uppercase characters and spaces, so npm rejected direct scaffolding. A temporary valid-name scaffold was created at `d:\a2-smart-classes`, then approved application files were copied into the owner repository. Dependencies were repaired with a fresh workspace `npm install`. No application behavior beyond the generated scaffold was implemented.

### 4. Files changed

- `.gitignore` — replaced with comprehensive Next.js, environment, credential, log, test, and build ignores.
- `.env.example` — added empty placeholders for future approved integrations; no values or secrets.
- `vercel.json` — configured Next.js framework deployment metadata.
- `package.json` — application name and T01 scripts.
- `package-lock.json` — reproducible dependency lock.
- `tsconfig.json` — strict TypeScript configuration and `@/*` alias.
- `next.config.ts` — Next.js configuration generated by the approved scaffold.
- `eslint.config.mjs` — Next.js Core Web Vitals and TypeScript lint configuration.
- `next-env.d.ts` — generated Next.js TypeScript declaration file.
- `src/app/layout.tsx` — generated root layout.
- `src/app/page.tsx` — generated default homepage.
- `src/app/globals.css` — generated Tailwind CSS entrypoint.
- `public/*` — generated static assets.
- `README.md` — project-specific bootstrap and run documentation.
- `NEXTJS_README.md` — retained generated Next.js reference documentation.
- `AGENTS.md` — generated agent guidance.
- `TASK.md` — marked T01 complete.
- `PROGRESS.md` — appended this entry.

### 5. Database and API impact

No database or API changes.

### 6. Dependencies and configuration

Added only the Next.js scaffold's approved baseline dependencies: `next`, `react`, `react-dom`, Tailwind CSS tooling, ESLint, and TypeScript tooling. No Prisma, Zod, Zustand, Sonner, Vitest, Playwright, R2, Brevo, or Sentry dependencies were added in T01.

Environment names documented in `.env.example` include `DATABASE_URL`, `DIRECT_URL`, R2 account/key/bucket names, Brevo names, `SESSION_SECRET`, `ADMIN_BOOTSTRAP_TOKEN`, `NEXT_PUBLIC_APP_URL`, and `SENTRY_DSN`.

### 7. Verification

- `npm install --no-audit --no-fund` — PASS; 432 packages installed.
- `npm run check` — PASS; ESLint and strict `tsc --noEmit` passed.
- `npm run build` — PASS; static `/` and `/_not-found` routes generated.
- `npm run dev` — PASS; server reached ready state at `http://localhost:3000`.
- Browser smoke test — PASS; `/` rendered the generated Next.js page and returned HTTP 200.
- `git diff --check` — PASS with CRLF/LF line-ending informational warnings only.
- Browser/Playwright testing — NOT RUN; no Playwright dependency or E2E suite exists in T01.

### 8. Issues, risks, and limitations

- The workspace uses a generated Next.js default page until T03/T05 UI implementation.
- The temporary scaffold directory `d:\a2-smart-classes` was used only to solve the workspace-name/npm restriction and is not the repository source of truth.
- The `node_modules` directory is ignored and should remain local.
- No provider credentials or database connection were tested; this is outside T01.
- The architecture filename remains `architechture.md` until the owner decides to correct it.

### 9. Owner actions required

- Decide whether to rename `architechture.md` to `ARCHITECTURE.md` before later tasks.
- Review T01 changes on `feat/T01-nextjs-bootstrap`.
- Do not commit real credentials or the credential-bearing organization file.
- Run the owner commands below when ready to commit T01.

### 10. Current project state

The project now has a runnable Next.js App Router application with strict TypeScript, Tailwind CSS, ESLint, npm scripts, safe environment placeholders, and Vercel configuration. T02 will add the approved dependencies and developer tooling.

Run locally:

```bash
npm install
npm run dev
```

### 11. Next task — exact continuation instructions

- Next task ID and title: T02 — Dependencies and developer tooling.
- Why it is next: T02 adds the approved stack tooling and baseline test/configuration scripts required before feature implementation.
- Prerequisites: T01 completion and dependency install verification.
- First files/areas to inspect: `package.json`, `package-lock.json`, `tsconfig.json`, `eslint.config.mjs`, `.env.example`, and `src/`.
- Exact first steps: review approved dependency scope in `TASK.md` and `architechture.md`, then add only explicitly approved Prisma/Supabase, Zod, React Hook Form, Zustand, Sonner, Vitest, and Playwright dependencies as needed.
- Acceptance criteria: baseline lint/type-check pass and approved aliases/test scripts/env validation are configured.
- Known pitfalls: do not add unapproved packages, do not configure real database credentials, and do not advance automatically after T02.

### 12. Self-contained next-session context

A2Smart Classes is a Next.js 16 App Router/React 19/TypeScript strict/Tailwind 4 modular monolith. T00 and T01 are complete. The current branch is `feat/T01-nextjs-bootstrap`. The project is runnable with `npm run dev`; `npm run check` and `npm run build` pass. The remote remains `https://github.com/royrohan1437/A2_Smart_Classes_Final.git`. T02 is next. The credential-bearing `Organization  A2 Smart Classes.txt` remains ignored and must not enter Git. No database/API integrations or provider credentials are configured yet.

### 13. Owner-run Git commands

```bash
git status
git branch --show-current
git diff --check
git diff
git diff --stat
git add .gitignore .env.example vercel.json package.json package-lock.json tsconfig.json next.config.ts eslint.config.mjs next-env.d.ts src public README.md NEXTJS_README.md AGENTS.md TASK.md PROGRESS.md
git diff --cached
git diff --cached --check
git commit -m "feat(T01): bootstrap Next.js application"
git push -u origin feat/T01-nextjs-bootstrap
```

## T02 — Dependencies and developer tooling

- Date: 2026-11-20
- Status: DONE
- Branch: feat/T02-developer-tooling
- Commit: Not committed by Codex; owner-run commands supplied below.

### 1. Objective and acceptance criteria

- Add approved Prisma/Supabase and application dependencies: PASS.
- Add Zod, React Hook Form, Zustand, and Sonner: PASS.
- Add Vitest, Playwright, coverage support, and formatting tooling: PASS.
- Configure aliases and test scripts: PASS.
- Configure safe environment validation: PASS.
- Baseline lint/type-check pass: PASS.
- No unapproved dependencies or database setup: PASS.

### 2. What was completed

- Installed and locked the approved application dependencies.
- Added stable Prisma 7.10.1 tooling only; no schema or database connection was created.
- Added Vitest 5.1.1 with coverage, Playwright 1.65.1, and Prettier 3.
- Added safe Zod server-environment validation for optional future integration variables.
- Added Vitest unit-test configuration and one environment-validation test file.
- Added Playwright browser test configuration and one homepage smoke test.
- Added T02 npm scripts for tests, coverage, E2E, formatting, lint, type-check, and build checks.

### 3. How it was implemented

Npm dependency installation was performed directly in the workspace. Stable compatible versions were used where peer requirements conflicted with Node 24 typings. Vitest is configured to run `src/**/*.test.{ts,tsx}` in a Node environment. Playwright uses a local Next.js server and Chromium discovery. Environment validation intentionally treats integration variables as optional while the credentials are not yet configured.

### 4. Files changed

- `package.json` — dependencies and T02 scripts.
- `package-lock.json` — updated dependency lock.
- `.prettierrc.json` — formatting rules.
- `vitest.config.ts` — unit-test configuration and alias.
- `playwright.config.ts` — local E2E server and Chromium configuration.
- `src/test/setup.ts` — reserved Vitest setup file.
- `src/lib/env.ts` — Zod server environment validation.
- `src/lib/env.test.ts` — unit tests for environment validation.
- `tests/e2e/smoke.spec.ts` — minimal homepage Playwright smoke test.
- `src/app/layout.tsx` — formatted by Prettier.
- `TASK.md` — marked T02 complete.
- `PROGRESS.md` — appended this entry.

### 5. Database and API impact

No database/API changes. Prisma is installed as tooling only; no `schema.prisma`, migration, database connection, or database query was added.

### 6. Dependencies and configuration

Runtime dependencies added:

- `zod`
- `react-hook-form`
- `@hookform/resolvers`
- `zustand`
- `sonner`
- `@supabase/supabase-js`

Development dependencies added:

- `prisma`
- `vitest`
- `@vitest/coverage-v8`
- `@playwright/test`
- `prettier`
- Updated `@types/node` for Node 24 compatibility.

No secrets or credential values were added.

### 7. Verification

- `npm run check` — PASS.
- `npm run test` — PASS: 1 test file, 2 tests.
- `npm run format:check` — PASS.
- `npm run build` — PASS; static `/` and `/_not-found` routes generated.
- `npx playwright test --list` — PASS; 1 smoke test discovered.
- `npm audit --omit=dev` — PASS: 0 production vulnerabilities.
- Full `npm audit` — development-only 3 high vulnerabilities remain in Prisma transitive tooling (`effect` via `@prisma/config`). The suggested force fix downgrades Prisma and was not applied.
- Playwright browser execution — NOT RUN; no browser binary download was performed and T02 only requires discovery/setup.

### 8. Issues, risks, and limitations

- Playwright browser binaries are not downloaded or executed in T02.
- No real Prisma schema or Supabase connection exists yet.
- The full development dependency audit reports transitive Prisma tooling advisories; production dependencies are clean.
- The environment validator accepts missing optional integrations until later tasks configure provider requirements.

### 9. Owner actions required

- Review and commit T02 on `feat/T02-developer-tooling`.
- Browser installation remains an owner/CI setup decision later: `npx playwright install chromium`.
- Real Supabase, R2, Brevo, and Sentry credentials must not be committed.

### 10. Current project state

The project now has baseline runtime, validation, state, toast, test, formatting, and ORM tooling. The environment remains without database, R2, Brevo, or authentication connections.

### 11. Next task — exact continuation instructions

- Next task ID and title: T03 — Design system.
- Why it is next: T03 establishes approved tokens, fonts, components, and accessibility foundations before application shells.
- Prerequisites: T02 completion and clean tooling checks.
- First files/areas: `src/app/globals.css`, `src/app/layout.tsx`, `DESIGN.md`, `RULES.md`, and the future `src/components/ui/` area.
- Exact first steps: establish palette/typography tokens, reusable component primitives, loading/skeleton/dialog/badge styles, and reduced-motion/focus behavior.
- Acceptance criteria: responsive, keyboard usable, and consistent with `DESIGN.md`.
- Known pitfalls: do not invent permanent brand assets or add pages/features not in T03 scope.

### 12. Self-contained next-session context

A2Smart Classes T00–T02 are complete. The current branch is `feat/T02-developer-tooling`. Runtime dependencies include Zod, React Hook Form, Zustand, Sonner, and Supabase JS. Prisma 7.10.1 is installed only as tooling. Vitest 5.1.1 and Playwright 1.65.1 are configured, with 2 unit tests passing and 1 E2E smoke test discovered. `npm run check`, formatting, and build pass; production npm audit reports 0 vulnerabilities. No schema/API/database provider work was performed.

### 13. Owner-run Git commands

```bash
git status
git branch --show-current
git diff --check
git diff
git diff --stat
git add package.json package-lock.json .prettierrc.json vitest.config.ts playwright.config.ts src/app/layout.tsx src/lib src/test tests TASK.md PROGRESS.md
git diff --cached
git diff --cached --check
git commit -m "feat(T02): configure developer tooling"
git push -u origin feat/T02-developer-tooling
```

## T03 — Design system

- Date: 2026-11-20
- Status: DONE
- Branch: feat/T03-design-system
- Commit: Not committed by Codex; owner-run commands supplied below.

### 1. Objective and acceptance criteria

- Implement approved navy/gold/ivory/charcoal tokens: PASS.
- Establish serif, calligraphic, and supporting typography: PASS.
- Implement reusable buttons, inputs, cards, badges, dialogs, and skeletons: PASS.
- Add visible keyboard focus and reduced-motion support: PASS.
- Keep the implementation responsive and keyboard usable: PASS.
- Avoid unapproved brand assets, dependencies, routes, or features: PASS.

### 2. What was completed

- Added CSS design tokens for the approved palette, surfaces, borders, shadows, status colors, and breakpoints.
- Added Cormorant Garamond serif, Allura calligraphic, and Source Sans 3 supporting typography through Next.js font optimization.
- Added global focus, selection, responsive, loading-line, skeleton, and reduced-motion styles.
- Added reusable button, input, card, badge, accessible Radix dialog, and skeleton primitives.
- Replaced the generated Next.js homepage with a temporary T03 design-system preview.

### 3. How it was implemented

The design foundation uses Tailwind CSS utilities backed by CSS custom properties and Next.js `next/font/google`. Components are separate, small, typed primitives under `src/components/ui/`. The dialog is built on Radix Dialog primitives for focus management and keyboard behavior. Motion respects `prefers-reduced-motion`, and skeleton/loading elements provide accessible status labels.

### 4. Files changed

- `src/app/globals.css` — palette, typography variables, focus, loading, skeleton, and reduced-motion styles.
- `src/app/layout.tsx` — selected Next.js fonts and application metadata.
- `src/app/page.tsx` — temporary T03 design-system visual preview.
- `src/components/ui/button.tsx` — tactile button variants and loading/disabled states.
- `src/components/ui/input.tsx` — labeled, hint/error-aware form input.
- `src/components/ui/card.tsx` — restrained card and card-body primitives.
- `src/components/ui/badge.tsx` — navy, gold, success, warning, danger, and neutral badges.
- `src/components/ui/dialog.tsx` — accessible Radix confirmation dialog primitives.
- `src/components/ui/skeleton.tsx` — image/block and text skeleton primitives.
- `src/components/ui/index.ts` — UI primitive barrel exports.
- `package.json` / `package-lock.json` — added Radix Dialog and removed unused Radix Slot.
- `TASK.md` — marked T03 complete.
- `PROGRESS.md` — appended this entry.

### 5. Database and API impact

No database or API changes.

### 6. Dependencies and configuration

Added:

- `@radix-ui/react-dialog`

Removed:

- `@radix-ui/react-slot` because T03 did not use it.

No environment variables or secrets were added.

### 7. Verification

- `npm run format` — PASS.
- `npm run check` — PASS; ESLint and strict TypeScript pass.
- `npm run test` — PASS: 1 test file, 2 tests.
- `npm run format:check` — PASS.
- `npm run build` — PASS; static `/` and `/_not-found` routes generated.
- `npm audit --omit=dev` — PASS: 0 production vulnerabilities.
- Browser page at `http://localhost:3000` — PASS; approved palette, primitives, form states, loading states, and dialog trigger rendered.
- `npx playwright test tests/e2e/smoke.spec.ts --reporter=line` — PASS: 1 test passed.
- Playwright Chromium was installed and cache reported the Chromium 1255 executable successfully.

### 8. Issues, risks, and limitations

- The homepage preview is temporary T03 verification and may be replaced or expanded in T05; T03 did not implement the approved homepage feature itself.
- `@theme` is valid Tailwind CSS syntax but may appear as an unknown at-rule in basic CSS diagnostics outside Tailwind-aware tooling; build and lint pass.
- Full development audit retains the previously documented Prisma transitive advisory; production audit is clean.

### 9. Owner actions required

- Review T03 visuals and approve the temporary design-system preview if it matches the intended aesthetic.
- Commit T03 on `feat/T03-design-system`.
- No credentials or external content are required for T04.

### 10. Current project state

The application now has the A2Smart Classes approved visual tokens and reusable accessible primitives. T04 can build the public, student, and admin shells on these foundations.

### 11. Next task — exact continuation instructions

- Next task ID and title: T04 — Shared application shells.
- Why it is next: T04 introduces the layouts and navigation that all later public, student, and admin routes require.
- Prerequisites: T03 completion, T04 scope approval.
- First files/areas: `src/app/layout.tsx`, future `src/app/(public)`, `(student)`, `(admin)`, and `src/components/layout/` areas.
- Exact first steps: implement public/student/admin layouts, public header/footer, student/admin drawers, Sonner provider, scroll-to-top, 404, and branded loading states.
- Acceptance criteria: route shells and responsive navigation work; admin pages have no public footer.
- Known pitfalls: do not implement T05 homepage content or unrelated page routes in T04.

### 12. Self-contained next-session context

A2Smart Classes T00–T03 are complete. The current branch is `feat/T03-design-system`. The design foundation uses Deep Navy `#07142B`, Secondary Navy `#12264A`, Deep Gold `#8C6523`, Light Gold `#E5C16A`, Ivory `#F5F6F8`, charcoal text, Cormorant Garamond, Allura, and Source Sans 3. UI primitives exist in `src/components/ui/`. ESLint, strict TypeScript, 2 Vitest tests, formatting, build, and Playwright smoke test pass. The production npm audit reports 0 vulnerabilities. T04 is next and must not begin without a separate approval.

### 13. Owner-run Git commands

```bash
git status
git branch --show-current
git diff --check
git diff
git diff --stat
git add package.json package-lock.json src/app/globals.css src/app/layout.tsx src/app/page.tsx src/components/ui TASK.md PROGRESS.md
git diff --cached
git diff --cached --check
git commit -m "feat(T03): establish design system"
git push -u origin feat/T03-design-system
```

## T04 — Shared application shells

- Date: 2026-11-20
- Status: DONE
- Branch: feat/T04-application-shells
- Commit: Not committed by Codex; owner-run commands supplied below.

### 1. Objective and acceptance criteria

- Public layout with header, navigation, login dropdown, and footer: PASS.
- Student layout and portal navigation: PASS.
- Admin layout and utility navigation: PASS.
- Admin pages do not include the public footer: PASS.
- Global Sonner provider: PASS.
- Custom 404 and branded loading states: PASS.
- Scroll-to-top control: PASS.
- Student/admin responsive drawer trigger: PASS for shell structure; full accessible drawer interaction remains a later shell enhancement if required.
- No homepage feature implementation or backend authentication logic added: PASS.

### 2. What was completed

- Created public route-group layout with fixed/deep-navy public header and four-column public footer.
- Added desktop login dropdown and mobile expandable login navigation.
- Added active public navigation indicator and mobile Escape-key handling.
- Created reusable student/admin portal shell with desktop sidebar and mobile menu trigger.
- Created separate student and admin layouts so admin routes do not inherit the public footer.
- Added Sonner provider, scroll-to-top, branded loading fallback, and custom 404 UI.
- Added shell route placeholders for public, student, and admin navigation targets.
- Moved student login, forgot-password, and change-password routes outside the authenticated student layout.

### 3. How it was implemented

Next.js App Router route groups separate public and student experiences while `/admin` uses a dedicated layout. The public layout owns only public header/footer chrome. The portal shell is a shared utility shell parameterized for student/admin navigation and is intentionally not authenticated yet. Sonner is mounted globally, but no success/error action is connected until later tasks.

### 4. Files changed

- `src/app/layout.tsx` — global provider and scroll-to-top integration.
- `src/app/page.tsx` — deleted because it conflicted with the public route-group `/` page.
- `src/app/(public)/layout.tsx` — public header/footer shell.
- `src/app/(public)/page.tsx` — temporary T04 public root placeholder.
- `src/app/(public)/**/page.tsx` — public navigation route placeholders.
- `src/app/(public)/loading.tsx` — public branded loading state.
- `src/app/(student)/layout.tsx` — authenticated student shell.
- `src/app/(student)/profile/page.tsx` — profile shell placeholder.
- `src/app/(student)/fees/page.tsx` — fees shell placeholder.
- `src/app/student/{login,forgot-password,change-password}/page.tsx` — authentication route shell placeholders outside the portal layout.
- `src/app/admin/layout.tsx` — Super Admin portal shell.
- `src/app/admin/page.tsx` — admin root placeholder.
- `src/app/admin/dashboard/page.tsx` — intentionally empty dashboard shell.
- `src/app/admin/*/page.tsx` — route placeholders for later admin modules.
- `src/app/loading.tsx` — global branded loading fallback.
- `src/app/not-found.tsx` — custom 404 UI.
- `src/components/layout/public-header.tsx` — responsive public navigation.
- `src/components/layout/public-footer.tsx` — public dark footer.
- `src/components/layout/portal-shell.tsx` — student/admin shared shell.
- `src/components/layout/app-providers.tsx` — Sonner provider.
- `src/components/layout/scroll-to-top.tsx` — global scroll control.
- `src/components/layout/branded-loading.tsx` — branded loading treatment.
- `tests/e2e/shells.spec.ts` — public/student/admin/404 smoke coverage.
- `TASK.md` — marked T04 complete.
- `PROGRESS.md` — appended this entry.

### 5. Database and API impact

No database or API changes.

No authentication guards, session checks, or protected-route enforcement were implemented in T04; these belong to later authentication tasks.

### 6. Dependencies and configuration

No T04 dependency additions or removals.

Sonner is installed but was only mounted globally; no application action uses it yet.

### 7. Verification

- `npm run format:check` — PASS.
- `npm run check` — PASS: ESLint and strict TypeScript.
- `npm run test` — PASS: 2 unit tests.
- `npm run build` — PASS; public, student, admin, login, and 404 routes generated.
- `npx playwright test tests/e2e/shells.spec.ts --reporter=line` — PASS: 4 shell tests.
- Browser checks — PASS for `/`, `/profile`, `/admin/dashboard`, and unknown-route 404.
- `npm audit --omit=dev` — PASS: 0 production vulnerabilities.
- Generated test reports were removed after verification.

### 8. Issues, risks, and limitations

- Shell navigation placeholders are functional routes but do not contain later task feature logic.
- Student and admin routes are not protected until T22/T23/T24 tasks.
- The public footer contact section intentionally uses no invented contact details.
- The student/admin mobile drawer is structurally present but does not yet use a fully interactive Radix or custom drawer component; T04 acceptance only requires the responsive shell trigger and later shell work may refine it.
- The admin enquiry indicator is not displayed because actual enquiry data is unavailable.

### 9. Owner actions required

- Review public/student/admin shell layouts and navigation.
- Commit T04 on `feat/T04-application-shells`.
- No provider credentials or database setup are required for T05.

### 10. Current project state

T00–T04 are complete. The public header/footer shell, student portal sidebar shell, admin utility shell, global toast mount, scroll-to-top, loading fallback, and custom 404 are available. Public route placeholders resolve, as do student/admin shell routes. Authentication and feature data are still absent.

### 11. Next task — exact continuation instructions

- Next task ID and title: T05 — Homepage hero.
- Why it is next: T05 implements the approved homepage hero after T04 established the public shell.
- Prerequisites: T04 completion and owner approval of T05.
- First files/areas: `src/app/(public)/page.tsx`, `src/components/layout/public-header.tsx`, `DESIGN.md` hero sections, and `public/assets/`.
- Exact first steps: replace the public placeholder with the solid navy hero, editorial typography, CTAs, and approved image groups/parallax behavior.
- Acceptance criteria: navy hero, at least nine images, alternating scroll-direction parallax, mobile three-row layout, reduced-motion support, and no invented permanent brand assets.
- Known pitfalls: do not implement T06 story/course sections or T07 enquiry/footer changes in T05.

### 12. Self-contained next-session context

A2Smart Classes T00–T04 are complete. The owner requested direct pushes to `main` from now on. T05 implemented the approved navy homepage hero with nine temporary educational images, desktop alternating scroll parallax, mobile three-row composition, reduced-motion support, and no overflow. Static build and 2 unit tests pass. The mobile Playwright hero test passes after stale server-process cleanup. T06 is next and must wait for separate approval.

### 13. Owner-run Git commands

```bash
git status
git branch --show-current
git diff --check
git diff
git diff --stat
git switch main
git add src/app/(public)/page.tsx src/app/globals.css src/components/layout/public-header.tsx src/components/home public/assets/hero tests/e2e/hero.spec.ts TASK.md PROGRESS.md
git diff --cached
git diff --cached --check
git commit -m "feat(T05): build responsive homepage hero"
git push origin main
```

## T06 — Homepage story and featured courses

- Date: 2026-11-20
- Status: DONE
- Branch: main
- Commit: Not committed by Codex; owner-run commands supplied below.

### 1. Objective and acceptance criteria

- Add editorial storytelling immediately after the hero on ivory: PASS.
- Use large serif heading, selective calligraphic emphasis, content, and institute imagery: PASS.
- Add featured course image-led grid after the story: PASS.
- Display only course name and board name on cards: PASS.
- Add visible More Courses link to `/academics`: PASS.
- Preserve hero → story → featured courses section order: PASS.
- No T07 enquiry section or additional homepage sections added: PASS.

### 2. What was completed

- Added a reusable editorial story section with heading, calligraphic phrase, introductory copy, and two editorial images.
- Added a featured-course grid with three temporary course entries: Science/CBSE, Mathematics/CBSE, and English/ICSE.
- Added the More Courses link to `/academics`.
- Verified the mobile and desktop homepage section sequence.
- Added a Playwright homepage section-order and overflow test.
- Added `127.0.0.1` to Next.js allowed development origins for Playwright.

### 3. How it was implemented

T06 uses small presentational Server Components because no client interaction or dynamic data is required. The public homepage returns the hero, editorial story, and featured-course components in exact approved order. The temporary course entries are visibly marked only by course name and board name and contain no fees, duration, or descriptions.

### 4. Files changed

- `src/app/(public)/page.tsx` — added story and featured-course components after hero.
- `src/components/home/editorial-story.tsx` — ivory editorial story section.
- `src/components/home/featured-courses.tsx` — editorial image-led course cards and More Courses link.
- `next.config.ts` — allowed `127.0.0.1` as a development origin for Playwright.
- `tests/e2e/homepage.spec.ts` — section-order, card-name, link, and overflow smoke test.
- `TASK.md` — marked T06 complete.
- `PROGRESS.md` — appended this entry.

### 5. Database and API impact

No database or API changes.

No course repository/data connection was introduced; the temporary entries remain replaceable component data, not verified client data.

### 6. Dependencies and configuration

No dependency additions or removals.

Development configuration:

- `allowedDevOrigins`: `127.0.0.1`

No secrets or environment values were added.

### 7. Verification

- `npm run check` — PASS.
- `npm run test` — PASS: 2 unit tests.
- `npm run format:check` — PASS.
- `npm run build` — PASS; static `/` and all existing routes generated.
- `npm audit --omit=dev` — PASS: 0 production vulnerabilities.
- Desktop browser inspection — PASS; story and three course cards rendered after hero.
- Mobile browser inspection — PASS; no horizontal overflow, story and course sections rendered, More Courses linked to `/academics`.
- `npx playwright test tests/e2e/homepage.spec.ts --reporter=line` — PASS: 1 test passed after clean server retry and 30-second heading timeouts.

### 8. Issues, risks, and limitations

- Temporary institute-story copy and course entries are not verified client content.
- Temporary Unsplash/remote images require approved source/licensing replacement before production.
- Featured-course entries are static placeholder data until the academic database and T29/T37 integration exist.
- T07 permanent enquiry section is intentionally not implemented yet.

### 9. Owner actions required

- Approve or replace temporary homepage story copy.
- Replace placeholder course names/boards and temporary images with approved client data/assets.
- Commit T06 directly to `main` if the direct-main workflow is accepted.

### 10. Current project state

T00–T06 are complete. The homepage now follows hero → ivory editorial story → featured courses. No T07 enquiry section or footer changes were added. Course cards expose only course name and board name and link to `/academics` through More Courses.

### 11. Next task — exact continuation instructions

- Next task ID and title: T07 — Homepage enquiry section and footer.
- Why it is next: T07 is the next approved homepage section immediately before the footer.
- Prerequisites: T06 completion and separate T07 approval.
- First files/areas: `src/app/(public)/page.tsx`, `src/components/layout/public-footer.tsx`, public footer/header, `src/components/home/`, and enquiry form patterns in `DESIGN.md`/`TASK.md`.
- Exact first steps: add the premium split enquiry layout, typed form boundary, real validation, server-confirmed success behavior, and then retain/complete the public footer.
- Acceptance criteria: split layout, complete footer links, no fake success, loading/empty/error handling, and no feature outside T07 scope.
- Known pitfalls: do not create a student account or fake Brevo success; enquiry persistence and email belong to later backend/enquiry tasks.

### 12. Self-contained next-session context

A2Smart Classes T00–T06 are complete and work is on `main` per the owner's direct-main instruction. T06 added an ivory editorial story and a three-card featured-course section after the hero. Cards show only course name and board name. More Courses routes to `/academics`. Static build, lint/type-check, unit tests, formatting, production audit, and Playwright homepage test pass. Playwright uses `127.0.0.1`, allowed in Next.js development configuration. T07 is next and must wait for separate approval.

### 13. Owner-run Git commands

```bash
git status
git branch --show-current
git diff --check
git diff
git diff --stat
git switch main
git add src/app/(public)/page.tsx src/components/home/editorial-story.tsx src/components/home/featured-courses.tsx next.config.ts tests/e2e/homepage.spec.ts TASK.md PROGRESS.md
git diff --cached
git diff --cached --check
git commit -m "feat(T06): add homepage story and featured courses"
git push origin main
```

## T07 — Homepage enquiry section and footer

- Date: 2026-11-20
- Status: DONE
- Branch: main
- Commit: Not committed by Codex; owner-run commands supplied below.

### 1. Objective and acceptance criteria

- Add premium split enquiry layout immediately before footer: PASS.
- Use deep navy left, ivory form surface, clean labels, validation, and submit treatment: PASS.
- Use the approved enquiry fields: PASS.
- Implement typed service boundary: PASS.
- Never show fake success: PASS.
- Complete public footer structure and legal/developer/admin links: PASS.
- Admin pages remain footer-free: PASS.
- Mobile layout and overflow verified: PASS.

### 2. What was completed

- Added the homepage permanent enquiry section after featured courses.
- Added name, class, board, DOB, phone, and email fields.
- Added Zod validation and inline field errors.
- Added an intentional typed enquiry service boundary that reports database-service unavailability honestly.
- Added loading and unavailable/error status states; no success confirmation is shown until a real server result exists.
- Completed footer Quick Links, Study Links, legal links, developer credit, copyright, and Admin Access.
- Retained the contact-details placeholder without inventing address or phone information.

### 3. How it was implemented

The enquiry UI is a client component because it manages form state and submission feedback. It validates through `enquiryInputSchema` before calling the typed `submitEnquiry` service. The service currently returns an explicit configuration-unavailable result until T27/backend database enquiry implementation exists. No fake success or student-account behavior is included.

### 4. Files changed

- `src/app/(public)/page.tsx` — inserted `EnquirySection` before the public footer.
- `src/components/home/enquiry-section.tsx` — split layout and validated form UI.
- `src/features/enquiry/types.ts` — Zod schema and typed submission result.
- `src/features/enquiry/service.ts` — typed configuration-unavailable boundary.
- `src/components/layout/public-footer.tsx` — complete approved footer links and bottom row.
- `tests/e2e/enquiry.spec.ts` — mobile validation/unconfigured-state and footer smoke test.
- `TASK.md` — marked T07 complete.
- `PROGRESS.md` — appended this entry.

### 5. Database and API impact

No database or API changes.

The enquiry form is not persisted and no Brevo notification is sent in T07. Database persistence, initial New status, admin notification, and email delivery belong to later enquiry/backend tasks.

### 6. Dependencies and configuration

No dependency additions or removals.

No environment variables or credentials were added.

### 7. Verification

- `npm run check` — PASS.
- `npm run test` — PASS: 2 unit tests.
- `npm run format:check` — PASS.
- `npm run build` — PASS; existing routes generated successfully.
- `npm audit --omit=dev` — PASS: 0 production vulnerabilities.
- `npx playwright test tests/e2e/enquiry.spec.ts --reporter=line` — PASS: 1 test.
- Mobile browser DOM check — PASS; enquiry heading and full footer links rendered with no overflow.
- No fake success observed; invalid submission and unavailable backend state were both asserted honestly.

### 8. Issues, risks, and limitations

- Enquiry submission is intentionally not persisted in T07.
- Brevo and Supabase enquiry notifications are not implemented yet.
- Contact address/phone/WhatsApp/email remain owner-provided content placeholders.
- Footer mobile expandable accordion behavior is not yet interactive; T07 acceptance is complete but later responsive polish may refine it.

### 9. Owner actions required

- Provide approved institute contact address, phone, WhatsApp, and email.
- Approve final enquiry copy if the temporary text is not final.
- Commit T07 directly to `main` if the direct-main workflow remains approved.

### 10. Current project state

T00–T07 are complete. The homepage enquiry layout and full public footer are present. Enquiry submission shows an explicit unavailable-service status until T27/T20 backend integration. Public and student-facing footer structure is complete; admin routes remain footer-free.

### 11. Next task — exact continuation instructions

- Next task ID and title: T08 — About page.
- Why it is next: T08 is the next public page in sequential task order.
- Prerequisites: T07 completion and separate T08 approval.
- First files/areas: `src/app/(public)/about/page.tsx`, `DESIGN.md` About section, public layout/footer, and replaceable institute image assets.
- Exact first steps: implement quote banner, editorial story, institute images, and Enroll Now CTA only.
- Acceptance criteria: quote banner, story, institute imagery, CTA, and responsive mobile story-first layout.
- Known pitfalls: never invent institute quotations, facts, accreditation, or contact claims.

### 12. Self-contained next-session context

A2Smart Classes T00–T07 are complete on `main`. T07 added split homepage enquiry UI and the complete public footer. Enquiry validation uses Zod and the service boundary intentionally reports configuration unavailability; no database, Brevo, or fake success exists. Footer includes Home, About, Faculty, Courses, Enquiry, Contact Us, Study Materials, Videos, legal links, developer credit, and Admin Access. Static/build/unit/format/Playwright checks pass and production audit reports 0 vulnerabilities. T08 is next and requires separate approval.

### 13. Owner-run Git commands

```bash
git status
git branch --show-current
git diff --check
git diff
git diff --stat
git switch main
git add src/app/(public)/page.tsx src/components/home/enquiry-section.tsx src/components/layout/public-footer.tsx src/features/enquiry tests/e2e/enquiry.spec.ts TASK.md PROGRESS.md
git diff --cached
git diff --cached --check
git commit -m "feat(T07): add homepage enquiry and footer"
git push origin main
```

## T08 — About page

- Date: 2026-11-21
- Status: DONE
- Branch: main
- Commit: Not committed by Codex; owner-run commands supplied below.

### 1. Objective and acceptance criteria

- Full-width inspirational quote banner with institute imagery: PASS.
- Navy readability overlay and responsive text positioning: PASS.
- Our Story two-column desktop layout: PASS.
- Story text first and stacked images on mobile: PASS.
- Join Us card with approved CTA copy and Enroll Now link: PASS.
- Enroll Now routes to `/enquiry`: PASS.
- No invented institute facts, quotations, achievements, or accreditation: PASS.

### 2. What was completed

- Replaced the About placeholder with three approved sections.
- Added a full-width educational banner with a temporary clearly marked editorial quotation.
- Added an ivory two-column Our Story layout.
- Added two replaceable institute-style academic images.
- Added the Join Us CTA card and Enroll Now route.
- Added a Playwright mobile About-page smoke test.

### 3. How it was implemented

The About route uses a Server Component that renders one presentational client-free content component. The quote banner uses a navy overlay over replaceable educational imagery. The story layout switches from two desktop columns to story-first and stacked imagery on mobile. Temporary copy is explicitly labeled where it could otherwise resemble a verified quotation or claim.

### 4. Files changed

- `src/app/(public)/about/page.tsx` — replaced placeholder with T08 content component.
- `src/components/about/about-page-content.tsx` — quote banner, story, images, and Join Us CTA.
- `tests/e2e/about.spec.ts` — About mobile route and CTA smoke test.
- `TASK.md` — marked T08 complete.
- `PROGRESS.md` — appended this entry.

### 5. Database and API impact

No database or API changes.

### 6. Dependencies and configuration

No dependency or environment-variable changes.

### 7. Verification

- `npm run check` — PASS.
- `npm run test` — PASS: 2 unit tests.
- `npm run format:check` — PASS.
- `npm run build` — PASS; `/about` and existing routes generated.
- `npm audit --omit=dev` — PASS: 0 production vulnerabilities.
- Desktop browser snapshot — PASS: quote, story, images, and Join Us CTA rendered.
- Mobile browser probe — PASS: no overflow; story and Join Us headings and `/enquiry` CTA verified.
- `npx playwright test tests/e2e/about.spec.ts --reporter=line` — PASS: 1 test.

### 8. Issues, risks, and limitations

- The banner quotation is temporary and must be replaced by approved client quotation text.
- The story copy is explicitly temporary and does not claim verified institute history.
- Temporary Unsplash/remote images are not verified institute assets and need approval/replacement.
- No dynamic institute content management exists; T08 is a static approved layout only.

### 9. Owner actions required

- Provide an approved inspirational quote and exact story copy.
- Provide approved institute photographs and licensing.
- Confirm or replace the temporary CTA copy.

### 10. Current project state

T00–T08 are complete. `/about` now contains a quote banner, editorial story, replaceable imagery, and Join Us Enroll Now CTA. Public shells and footer remain active.

### 11. Next task — exact continuation instructions

- Next task ID and title: T09 — Academics/course directory.
- Why it is next: T09 implements `/academics` and `/academics/[board]/[class]` with hierarchy and subject details.
- Prerequisites: T08 completion and separate T09 approval.
- First files/areas: `src/app/(public)/academics/`, `DESIGN.md` academics structure, `prd.md` courses section, and future academic database boundaries.
- Exact first steps: implement only the course directory shell and data-driven board/class hierarchy placeholders until the T29 admin academic module exists.
- Acceptance criteria: `/academics` and class routes, board/class/subject hierarchy, subject details, empty states, and responsive course browsing.
- Known pitfalls: do not invent permanent course names or fees; preserve dynamic integration for T29/T37.

### 12. Self-contained next-session context

A2Smart Classes T00–T08 are complete on `main`. T08 replaced `/about` with quote banner, story, two images, and Join Us Enroll Now CTA. Temporary quote/story copy is marked, and remote images are replaceable. Static/build/unit/format/audit checks pass. Playwright About test passes. T09 is next and requires separate approval.

### 13. Owner-run Git commands

```bash
git status
git branch --show-current
git diff --check
git diff
git diff --stat
git switch main
git add src/app/(public)/about/page.tsx src/components/about tests/e2e/about.spec.ts TASK.md PROGRESS.md
git diff --cached
git diff --cached --check
git commit -m "feat(T08): build About page"
git push origin main
```

## T10–T16 completion follow-up — 2026-11-21

The T10–T16 implementation commits are already on `main` and tracked by `origin/main`. This follow-up records additional completion and verification performed after those commits; it does not rewrite the original task history.

- T10 faculty page remains intentionally empty until approved staff records exist. The responsive portrait/profile renderer is ready for T28 records. Playwright confirms the page heading and approved-content empty state.
- T11 materials data now carries board, class, subject, chapter, category, file type, access level, and href. Category navigation, hierarchy anchors, free/restricted actions, and empty states are implemented without invented documents. Data arrives through T29/T30.
- T12 YouTube playlist URL validation was extracted to `src/features/videos/playlist-url.ts` and covered for valid HTTPS playlist URLs, hostile hosts, unsupported paths, invalid schemes, and malformed IDs.
- T13 gallery uses a responsive data-driven masonry list and Radix dialog for accessible lightbox interaction. No unapproved institute photos were introduced.
- T14 enquiry route reuses the Zod-validated form. Contact details remain intentionally absent until the owner supplies approved values; unavailable submission reports honestly.
- T15 added an honest `/admin/login` placeholder in a route group so existing Admin Login/Admin Access links resolve without exposing an unauthenticated admin surface. A Playwright audit verified public routes, presence of `alt` attributes on images, and all local links. Legal documents remain explicitly marked drafts pending owner/legal approval.
- T16 added exact Prisma 7.10.1 runtime dependencies (`@prisma/client`, `@prisma/adapter-pg`, `pg`, `@types/pg`), generated-client postinstall and scripts, ignored generated output, shared Prisma adapter singleton, seed policy/command, and `/api/health`. The health endpoint returns a redacted 503 `not_configured` response until `DATABASE_URL` exists. No credentials were read or written.

### Verification

- `node_modules/.bin/tsc --noEmit` — PASS.
- Focused ESLint across changed T10–T16 source and tests — PASS.
- Focused Prettier check — PASS.
- `node_modules/.bin/vitest run --pool=threads` — PASS, 3 files / 9 tests.
- Playwright T10 and public-content tests — PASS, 2 tests; includes `/api/health` returning the expected `503 { status: unavailable, database: not_configured }` and verifies `/admin/login` is an honest placeholder.
- Playwright public audit — PASS; all 11 public routes load, image tags have `alt` attributes, and discovered local links resolve.
- `npm run db:generate` — PASS with Prisma 7.10.1.
- `npm run db:validate` — PASS; Prisma schema is valid.
- `npm run db:seed` — PASS; configured seed strategy creates no synthetic or personal records.
- `npm run build` — PASS after Prisma client integration; Next.js generated 31 static/partial routes and the dynamic `/api/health` route.
- Production database connection/migrations — NOT RUN: no approved `DATABASE_URL` is configured; full domain schema is T17 and production migration authorization remains manual.
- `npm install` reported 3 high-severity advisories across the dependency tree. Review with `npm audit` before deployment; no automated dependency upgrades were applied.

### Remaining owner-provided content

- Approved faculty identities, credentials, subjects, experience, and portraits (T28).
- Approved course material records/files (T29/T30), playlists (T31), gallery photos/captions (T32), and institute contact channels.
- Review/approve the clearly marked draft Privacy Policy and Disclaimer before presenting them as final legal terms.

### Current next task

T17 — complete relational schema. Keep production migrations manual and approved; configure local database credentials only through ignored environment files or deployment secrets.

## T17 — Relational schema and initial migration

- Status: DONE locally; database migration intentionally not applied.
- Implemented the Prisma models/enums for users, students and enrollments, hashed-token sessions and OTP state, board/class/subject/chapter hierarchy, academic sessions, teachers and their qualifications/subjects, retained enquiries, material categories/files, YouTube playlists, gallery images, fee schedules/monthly fees/payments.
- Added required uniqueness, indexes, timestamps, restrictive foreign keys for historical/dependent records, student and teacher soft-delete markers, and hard-delete-friendly file/gallery/enquiry records. The initial SQL migration includes a PostgreSQL partial unique index allowing at most one active academic session.
- Files: `prisma/schema.prisma`, `prisma/migrations/20261121010000_initial_schema/migration.sql`, `prisma/migrations/migration_lock.toml`, `TASK.md`, `PROGRESS.md`.
- Verification: `npm run db:validate` PASS; `npm run db:generate` PASS (Prisma 7.10.1); offline `prisma migrate diff --from-empty --to-schema ... --script` generated SQL PASS on elevated retry after the restricted child process returned `spawn EPERM`. Migration SQL reviewed for models, indexes, restrictive FKs, and partial active-session index.
- Database state: no connection configured; migration has NOT been applied and no data was touched.
- Next: T18 — API foundation.

## T18 — API foundation

- Status: DONE.
- Added standard `{ success, data }` and `{ success, error }` JSON response helpers, typed `ApiError`, generic client-safe error conversion, and Zod JSON request parsing with generic malformed/invalid request errors.
- Added typed repository and service contracts plus JSON structured logging that recursively redacts password, OTP, token, secret, authorization, API-key, cookie, and signed-URL fields. Unexpected errors expose only a generic client message; logs retain the error type without its message.
- Files: `src/lib/api-error.ts`, `src/lib/api-response.ts`, `src/lib/logger.ts`, `src/lib/repository.ts`, and focused tests.
- Verification: API/logger unit tests PASS (2 files, 6 tests); `npm run type-check` PASS; focused ESLint PASS.
- No routes or existing route contracts were changed; the helpers are ready for later API tasks.
- Next: T19 — private Cloudflare R2 service.

## T19 — Private Cloudflare R2 storage

- Status: DONE; no R2 credentials are configured and no live object operations were made.
- Added AWS SDK v3 S3 client/presigner integration targeting the account R2 endpoint, `auto` region, and `R2_PRIVATE_BUCKET_NAME` only. Upload keys are generated under `materials/`, `gallery/`, or `subject-photos/`; upload/download URL lifetimes are five minutes.
- Added PDF/DOCX and JPEG/PNG/WEBP filename/MIME/size validation (25 MiB document and 10 MiB image limits), object HEAD size/type verification, and range-read file-signature verification. The limits are implementation safeguards because the PRD does not prescribe file-size caps.
- Restricted downloads are signed only for admins or active, non-deleted students with matching board/class; free material is available to student viewers. Object keys must match generated UUID keys in known private prefixes. Replacements verify the new object, persist its reference, then delete the old object; persistence failure retains the old object.
- Files: `src/features/storage/r2.ts`, `src/features/storage/validation.ts`, focused tests, `package.json`, `package-lock.json`, `TASK.md`, `PROGRESS.md`.
- Verification: focused storage tests PASS (2 files, 8 tests); `npm run type-check` PASS; focused ESLint PASS after cleanup. AWS SDK install reported 3 high-severity advisories in the complete dependency tree; no forced audit fix was applied.
- No route integration is added; future API handlers must load the stored material record and invoke the access check before signing its download.
- Next: T20 — Brevo transactional email service.

## T20 — Brevo transactional email service

- Status: DONE; no Brevo credentials are configured and no real email was sent.
- Added a server-side service for the Brevo `/v3/smtp/email` API with injected fetch for deterministic tests, the `api-key` header, typed results, and safe handling of missing configuration, invalid input, network failures, and upstream rejection.
- Added admin enquiry notification and student/admin password-reset OTP templates with escaped HTML and plain text. The service does not send enquiry confirmation to students, and it never logs recipient addresses, message content, OTPs, API keys, or upstream response bodies.
- Files: `src/features/email/brevo.ts`, `src/features/email/templates.ts`, focused tests, `TASK.md`, `PROGRESS.md`.
- Verification: focused email tests PASS (2 files, 6 tests); `npm run type-check` PASS; focused ESLint PASS.
- Next: T21 — security and infrastructure.

## T21 — Security and infrastructure foundations

- Status: DONE for shared security infrastructure. Login and password-reset route enforcement is intentionally consumed by T22/T24 when those routes are implemented; the existing project requirements do not specify numeric login/OTP attempt thresholds, so the shared limiter requires each caller to supply its approved policy rather than inventing thresholds.
- Added session sliding/absolute-expiry and OTP expiry/use-state guards; secure HttpOnly, SameSite=Lax session cookie options with production `__Host-` names; same-origin/Fetch Metadata validation for unsafe requests; and an atomic PostgreSQL fixed-window rate-limit store. Rate-limit subjects are stored only as HMAC-SHA256 digests.
- Added additive `RateLimitBucket` schema/migration and generated Prisma client. Migration is not applied to any database. Added a bearer-secret protected daily Vercel cleanup job for expired/revoked sessions, expired/consumed/invalidated OTPs, and expired rate-limit buckets. `CRON_SECRET` must be configured in Vercel before the job can run; cron schedules apply to production deployments.
- Added baseline browser security headers and production HSTS, plus Sentry server/edge/client instrumentation and global error reporting. Sentry automatic collection of identity, cookies, headers, bodies, query values, database query data, and stack variables is disabled; event request/user/breadcrumb/extra/message content is stripped and exception values are redacted. Sentry remains inactive until `SENTRY_DSN` is configured.
- Added focused security tests. No Cloudflare dashboard rate-limit rules could be configured from this repository; configure edge rules when the production domain/account is available. CSRF and rate-limit helpers must be applied by the later auth/recovery routes.
- Files added/updated: `src/lib/security/*`, `src/app/api/cron/security-cleanup/route.ts`, `src/app/global-error.tsx`, `src/instrumentation.ts`, `src/instrumentation-client.ts`, `src/sentry.server.config.ts`, `src/sentry.edge.config.ts`, `src/lib/env.ts`, `next.config.ts`, `.env.example`, `vercel.json`, `prisma/schema.prisma`, `prisma/migrations/20261121020000_security_rate_limits/migration.sql`, `TASK.md`, `PROGRESS.md`; installed `@sentry/nextjs` and updated package manifests.
- Verification: full Vitest suite PASS (16 files, 48 tests); TypeScript PASS; focused ESLint PASS; `npm run format:check` PASS; `npm run db:validate` PASS; `npm run db:generate` PASS. `npm run build` compiled successfully but Next's post-compile TypeScript worker failed with `spawn EPERM`; standalone TypeScript passed. No deployment, production migration, real cron invocation, or Sentry delivery was performed.
- Next: T22 — auth core. Apply CSRF and login throttling to the implemented auth routes, then apply OTP attempt/resend policies in T24.

## Frontend completion phase — editorial UI pass

- Status: IN PROGRESS; frontend and backend are now tracked separately for T22–T40 in `TASK.md`. Backend items remain unchecked for later task-by-task delivery. This pass did not start or complete T22.
- Design follows `design.md`, `rules.md`, `architechture.md`, and `prd.md`: existing navy/ivory/gold palette, editorial serif plus readable sans, restrained surfaces, meaningful empty states, and no invented academy contact/faculty/result claims.
- Replaced the homepage's multi-column pill image collage and parallax behavior with one local, replaceable AI-generated classroom study image on the left and a navy gradient that deepens toward the right. Added one restrained primary-copy entrance animation; global reduced-motion rules disable it.
- Added direct desktop/mobile header links for Study Materials, Class Videos, and Gallery. Replaced student and admin login placeholders with responsive sign-in form surfaces and clear non-production status messaging; no credentials are sent or accepted until backend auth is implemented.
- Asset: `public/assets/hero/classroom-study.png`; its README identifies it as generated, illustrative content that must be replaced with owner-approved imagery. Existing shared palette/type/header/footer and public routes were preserved.
- Expanded this pass: student recovery-details/change-password forms; profile and fees overview shells; responsive student/admin portal navigation; intentionally empty admin dashboard; admin route and empty-state shells for enquiries, students, teachers, academics, materials, videos, gallery, and fees. Their forms, record tables, OTP steps, payment interactions and connected states remain outstanding and are explicitly unchecked in `TASK.md`.
- Still outstanding in the frontend split: full admin CRUD interactions, OTP verification/resend/success states, fee calendar/history/payment states, complete route-by-route desktop/tablet/mobile visual and accessibility QA, and connected data states after the backend tasks. Public catalogues remain empty until verified client data is supplied.
- Verification: full unit suite PASS (16 files, 48 tests); `npm run type-check` PASS; focused ESLint PASS; `npm run format:check` PASS; `git diff --check` PASS with CRLF normalization warnings. Next.js production build and dev-server launch both stop at `spawn EPERM` (Windows errno -4048) during worker process creation, so rendered browser QA could not run. Browser plugin is not available. Frontend completion remains IN PROGRESS until remaining workflows and visual QA are completed.
- Next: continue frontend-only items task by task from T22, leaving each backend checkbox unchecked until backend implementation begins.

### T17–T20 integrated verification

- Full unit suite PASS: 9 test files, 29 tests.
- TypeScript PASS; focused ESLint on all changed application source/tests PASS; `npm run format:check` PASS; `npm run db:validate` PASS; `git diff --check` PASS.
- Production build PASS on the final source. Next.js compiled, type-checked, generated 32 static/partial pages, and emitted `/api/health` as a dynamic route. This build was slow in this environment (approximately five minutes) but exited successfully.
- Production dependency audit PASS: `npm audit --omit=dev` reports 0 vulnerabilities. Full-tree npm install audit reported 3 high-severity advisories; not force-fixed.
- Repository-wide `npm run lint` remains blocked by three `@typescript-eslint/no-require-imports` errors in the existing generated `.gitnexus/run.cjs`, outside T17–T20 changes. No tooling files were altered to suppress them.
- No Supabase migration, R2 object operation, or Brevo email was executed because credentials are not configured.

## T10 — Faculty page

- Status: DONE with an honest empty state pending approved teacher records.
- Requirements: show approved faculty portraits, names, qualifications, subjects, and experience with data-driven populated/empty states.
- Implementation: replaced the Faculty placeholder with an editorial page and a typed `FacultyProfile` rendering path. Because the repository contains no approved faculty identities, qualifications, experience, or portraits, the current data collection is empty and the page clearly says profiles will appear after approval. The card renderer supports circular portraits and the requested information for future approved records; T28 will supply/manage those records.
- Files changed: `src/app/(public)/faculty/page.tsx`, `tests/e2e/faculty.spec.ts`, `TASK.md`, `PROGRESS.md`.
- Database/API/dependencies: none.
- Verification: new Playwright test was authored first. The restricted runner failed to start workers with Windows `spawn EPERM`; the elevated retry started a browser test but hung before returning and was interrupted. No passing browser verification is claimed. Direct `node_modules/.bin/tsc --noEmit` passed, focused ESLint passed, and `git diff --check` passed. Prettier initially flagged formatting in the new test (now corrected) and pre-existing style in `TASK.md`; full build and browser verification remain unrun.
- GitNexus: pre-edit impact on the placeholder file returned UNKNOWN, zero resolved callers, and index one commit behind. This is a route file (framework referenced); no shared symbols were modified.
- Risks/limitations: the data collection is empty until T28; the page intentionally does not invent staff credentials or imagery. The current populated renderer uses a remote image URL and needs the future approved image-hosting convention.
- Next task: T11 — Study Materials public page.
- Owner commit command: `git add -- "src/app/(public)/faculty/page.tsx" tests/e2e/faculty.spec.ts TASK.md PROGRESS.md; git commit -m "feat(T10): build faculty page"`

## T11 — Study Materials public page

- Status: PARTIAL: public library shell implemented; hierarchy filters depend on T29/T30 data.
- Files changed: `src/app/(public)/study-materials/page.tsx`, `TASK.md`, `PROGRESS.md`.
- Added Notes and Sample Papers & PYQs navigation, typed file metadata/access states, free View/Download vs restricted-login rendering, and empty states. No document records are fabricated.
- Verification: type-check/lint/format/build/E2E pending at this checkpoint.
- Dependencies/risks: board/class/subject/chapter selectors require approved academic and material records. No API or storage URL exists yet.
- Next: T12 — Video Lectures page.
- Owner commit: `git add -- "src/app/(public)/study-materials/page.tsx" TASK.md PROGRESS.md; git commit -m "feat(T11): build study materials page"`

## T12 — Videos page

- Status: PARTIAL: safe playlist display path and empty state implemented; no approved playlist exists.
- Files changed: `src/app/(public)/videos/page.tsx`, `TASK.md`, `PROGRESS.md`.
- Added typed playlist records, featured first-playlist treatment, responsive playlist layout, privacy-enhanced YouTube embeds, and strict HTTPS `youtube.com` playlist-ID validation. Invalid links render a status message; arbitrary hostnames are not embedded.
- Verification: pending.
- Dependency: approved playlists await T31.
- Next: T13 — Gallery page.
- Owner commit: `git add -- "src/app/(public)/videos/page.tsx" TASK.md PROGRESS.md; git commit -m "feat(T12): build video lectures page"`

## T13 — Gallery page

- Status: PARTIAL: responsive captioned gallery and safe empty state implemented; keyboard lightbox not implemented.
- Files changed: `src/app/(public)/gallery/page.tsx`, `TASK.md`, `PROGRESS.md`.
- Added data-driven responsive masonry layout, descriptive alt/caption fields, and an empty state pending approved institute photographs. No images or captions are invented.
- Verification: pending.
- Dependency: approved gallery records await T32; lightbox remains an acceptance gap.
- Next: T14 — Contact and Enquiry pages.
- Owner commit: `git add -- "src/app/(public)/gallery/page.tsx" TASK.md PROGRESS.md; git commit -m "feat(T13): build gallery page"`

## T14 — Contact and Enquiry pages

- Status: PARTIAL: pages and existing validated form integrated; verified contact values and backend submission are unavailable.
- Files changed: `src/app/(public)/contact/page.tsx`, `src/app/(public)/enquiry/page.tsx`, `TASK.md`, `PROGRESS.md`.
- Contact page states details are pending verification and links to Enquiry. Enquiry route reuses existing Zod-validated form and has route metadata; service continues to report unavailable rather than fake success. No address, phone, email, map, WhatsApp, or social account was invented.
- Verification: pending.
- Dependencies: owner must provide contact details; backend submission follows T27.
- Next: T15 — Privacy, disclaimer, metadata, and public audit.
- Owner commit: `git add -- "src/app/(public)/contact/page.tsx" "src/app/(public)/enquiry/page.tsx" TASK.md PROGRESS.md; git commit -m "feat(T14): add contact and enquiry pages"`

## T15 — Privacy, disclaimer, metadata, and public audit

- Status: PARTIAL: draft legal routes and metadata implemented; owner/legal review and sitewide audit remain.
- Files changed: `src/app/(public)/privacy-policy/page.tsx`, `src/app/(public)/disclaimer/page.tsx`, `TASK.md`, `PROGRESS.md`.
- Both pages explicitly identify drafts. Privacy copy accurately states the current enquiry form is not persisted and flags unknown retention/use/contact practices for review. Disclaimer notes illustrative catalogue entries and external provider limitations. Both routes have descriptive metadata and semantic section headings.
- Verification: pending. Sitewide broken-link and alt-text audit not completed.
- Owner action: review and approve legal policy text and supply privacy contact/process.
- Next: T16 — Supabase + Prisma setup.
- Owner commit: `git add -- "src/app/(public)/privacy-policy/page.tsx" "src/app/(public)/disclaimer/page.tsx" TASK.md PROGRESS.md; git commit -m "feat(T15): add draft legal pages"`

## T16 — Supabase + Prisma setup

- Status: PARTIAL. Initial Prisma 7.10.1 configuration and PostgreSQL schema scaffold added; no database is connected.
- Files changed: `prisma.config.ts`, `prisma/schema.prisma`, `TASK.md`, `PROGRESS.md`.
- Configuration points Prisma CLI to `prisma/schema.prisma` and `prisma/migrations`, reading `DATABASE_URL` without recording its value. Production migrations were not run.
- Verification/blockers: Prisma CLI reports 7.10.1, `@prisma/client` is not installed, and `prisma --version` failed when its schema-engine child process returned `spawn EPERM` / `E_CANNOT_RESOLVE_VERSION`. No `.env` credentials were read or displayed. No migration, seed script, Supabase connection, or database health check was claimed.
- Required to finish: restore permission to execute the installed Prisma engine, add/configure a compatible Prisma runtime adapter/client, supply local approved DB credentials, then validate schema, generate client, create non-production migration, seed strategy, and connection health check. Do not run production migration without explicit authorization.
- Next: T17 — Complete relational schema.
- Owner commit: `git add -- prisma.config.ts prisma/schema.prisma TASK.md PROGRESS.md; git commit -m "chore(T16): configure Prisma database setup"`

### T10–T16 final verification and follow-up

- Completed follow-up files: `src/features/videos/playlist-url.ts`, `src/features/videos/playlist-url.test.ts`, `src/components/gallery/gallery-grid.tsx`, `src/app/(admin-login)/admin/login/page.tsx`, `src/app/api/health/route.ts`, `src/lib/prisma.ts`, `prisma/SEED.md`, `prisma/seed.mjs`, `tests/e2e/public-content.spec.ts`, `tests/e2e/public-audit.spec.ts`, package scripts/dependencies, and generated-client ignore rule.
- Verification after follow-up: TypeScript, focused ESLint, Prettier, all 9 Vitest tests, 3 targeted/audit Playwright tests, Prisma client generation, Prisma schema validation, seed command, and production build pass.
- Production dependency audit: `npm audit --omit=dev` reports 0 vulnerabilities. The full install audit reported 3 advisories in the complete dependency tree; no automated upgrades were applied.
- The production build includes `/admin/login` and `/api/health`. The health check correctly returns HTTP 503 with `database: not_configured` in this environment.
- T16 is complete as local Prisma/Supabase infrastructure setup. No `DATABASE_URL` is configured, the initial schema remains intentionally model-free until T17, and no migration or database write was attempted.
- Owner-provided content remains needed for faculty records, materials, playlists, gallery photos, and contact channels. Privacy and Disclaimer remain clearly marked drafts pending owner/legal review.
