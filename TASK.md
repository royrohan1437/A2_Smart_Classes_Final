A2Smart Classes --- TASK.md
Implementation deadline: 22 November 2026
Production deployment deadline: 23 November 2026
Goal: Deliver the complete previously agreed project, not a reduced
MVP.
The schedule is extremely aggressive for the full scope. Codex must
not silently omit features or claim unfinished work is complete. If
the deadline is at risk, report incomplete task IDs, blockers,
remaining effort and risks, then ask the owner for a decision.

1. Mandatory project context
Before coding, read these root documents: ARCHITECTURE.md,
DESIGN.md, RULES.md, TASK.md, and the latest PROGRESS.md. Treat
them as the approved specification. If a document is missing or
documents conflict, stop and ask the owner; do not invent or silently
resolve requirements.

Stack and architecture: - Next.js App Router, TypeScript strict mode,
modular monolith, feature-based structure. - Supabase PostgreSQL, Prisma
(one schema.prisma), service + repository pattern. - Custom
authentication, database-backed sessions with sliding expiry. - Roles:
STUDENT, SUPER_ADMIN; one Super Admin in V1; no teacher accounts or
public admin registration. - Cloudflare R2 private buckets and presigned
upload/download URLs. - Brevo transactional email API, server-side
only. - Zod + React Hook Form; Zustand + React state; standardized API
responses. - Vitest unit tests, integration tests, Playwright E2E. -
Sentry + structured server logs; Cloudflare edge rate limiting plus
application login/OTP protection. - Vercel Cron for periodic cleanup
where needed; enforce expiry on requests too. - Development and
Production only; use Vercel Preview deployments, no permanent staging
DB. - Production DB migrations require explicit owner approval. No
general audit-log system in V1. - Use Prisma transactions for
multi-record consistency. Supabase managed backups initially; R2 backup
strategy separately. - vercel.json in project root; custom
src/app/not-found.tsx. - Global Sonner toasts; success only after
server confirmation; meaningful errors; no duplicate toasts; accessible
controls; destructive actions require confirmation.
2. Full scope --- do not drop any agreed feature
Public routes
/, /about, /academics, /academics/[board]/[class], /faculty,
/study-materials, /videos, /gallery, /contact, /enquiry,
/privacy-policy, /disclaimer.

Public/student-facing pages share the public footer. Admin pages have no
public footer.
Student routes and experience
/student/login, /student/forgot-password,
/student/change-password, /profile, /fees. - Student login uses
registered phone/student ID + password; success redirects to
/study-materials. - Profile is read-only for student; Super Admin
edits it. Fields: name, phone/student ID, email, DOB, board, class,
academic session. - Temporary password format <FirstName><BirthYear>
(e.g. Rahul2008); advise student to change it; do not force
first-login change. - Forgot password: phone + email match; random
4-digit OTP by Brevo; 5-minute validity; 30-second resend cooldown; new
OTP invalidates old; attempt limits; one-use; OTP hashed server-side. -
Authenticated password change requires current password and new/confirm
password. - Student sees only their own profile and fees. Restricted
materials require an active student matching the material's board/class.
Admin routes
/admin/login, /admin/dashboard, /admin/students,
/admin/teachers, /admin/academics, /admin/materials,
/admin/videos, /admin/enquiries, /admin/gallery, /admin/fees. -
One Super Admin, full access. No teacher accounts. - Dashboard
intentionally empty: no stats, charts, cards, or recent activity
widgets. - Initial Super Admin provisioned securely using
environment-controlled one-time setup; password hashed; secret never
exposed; disable/remove setup after creation. - Admin forgot-password
uses registered email OTP with same OTP security rules. - Logout
confirmation, revoke session, clear cookie, redirect to /admin/login,
prevent protected pages from being revisited via browser back.
Enquiries
Fields: name, class, board, DOB, phone, email. Persist to DB; success
only after server confirmation. Send admin notification via Brevo and
create in-app new-enquiry indicator. No student account or automatic
student email. Statuses: New, Contacted, Responded,
Not Interested, Admitted. One private editable note. Filters: date
range, status, board, class. Never delete enquiries. Admission does not
auto-create student; admin creates manually.
Students
Workflow: choose board/class/academic year, then table. Table: name,
class, DOB, email, phone/ID, enrolled subjects, guardian name/phone,
admission date, account status, actions. Search name/phone/email;
pagination. Add fields: name, DOB, email, phone, board, class, academic
year, enrolled subjects, guardian name, guardian phone, admission date.
Edit all. Delete = soft delete (account_status=INACTIVE, deleted
flag), preserve all records including fees/academic history, revoke
sessions/access. Reactivate restores active access. Inactive hidden by
default. Every auth/data query checks active/not-deleted. Admin
generates temporary password.
Teachers
Form-based add/edit. Fields: name, photo, multiple qualifications,
multiple subjects, numeric experience. Delete confirmation; deleted
teacher disappears from public Faculty page. No teacher login.
Academics
Hierarchy: Boards → Classes → Subjects → Chapters. Sessions managed
independently in same interface. Manual names;
add/edit/delete/deactivate where agreed. Drag/drop ordering for classes
within board, subjects, chapters. Subject fields: name, photo,
description, mode, duration, fees. Academic session: name, start/end
dates, active/inactive. Only one active at a time; activating one
deactivates prior. Active session defaults for student creation and
fees. Preserve historical sessions; prevent deletion when dependencies
exist.
Study materials
Admin selects board/class/subject/chapter, then categories/files.
Sections: Notes and Sample Papers & PYQs. Categories per chapter and
section; cannot delete category while files remain. Upload PDF/DOCX with
title, section, category, access FREE/`RESTRICTED`. Admin can edit
metadata/access/category, reorder files within category, permanently
delete. Safe replacement workflow. PDF opens separate page with
browser-native viewer; DOCX downloads directly. Restricted access is
server-enforced for active matching board/class student; FREE needs no
login.
Videos and Gallery
Videos: select board/class/subject; multiple playlists per subject; CRUD
custom title + YouTube playlist URL. Gallery: multiple image uploads,
optional/editable captions, permanent delete from R2 + DB; responsive
gallery and lightbox.
Fees
Admin filters: board, class, academic year. Consolidated table: name,
phone, monthly fee, last month paid, upcoming month, total paid,
outstanding, status (Clear/`Due`), action. Individual student page:
overview + 12-month calendar with fee, status, date, method. - One
academic year at a time (April--March); user selects year; no historical
years shown by default; new students have no fee records. - Monthly fee,
last paid month, upcoming fee month, payment calendar, total paid,
outstanding. - Calendar: Paid green, Unpaid red, Upcoming grey. Current
unpaid month is Due/Unpaid, not Upcoming. Do not auto-mark past months
unpaid. - Admin manually creates fee records. Amount changes apply from
selected month onward; retain previous amounts, including unpaid months.
Unpaid carries forward. - No partial payments; each month fully Paid or
Unpaid. Payment against a specific month. Paid record immutable. -
Transaction: student, year, month, amount, date, method UPI/`Cash`.
Design and public content
Follow DESIGN.md: luxury editorial × premium academic; navy-dominant
palette, gold details; 70% serif / 30% calligraphic typography;
responsive layouts and approved page-specific structures. Homepage
sequence: hero, editorial story, featured courses (course + board only),
More Courses, enquiry section, footer. Hero uses left-aligned editorial
heading, CTAs, three image groups/columns with at least nine images,
specified alternating vertical parallax and reverse on scroll-up. Mobile
hero text first, three rows of three images, full-width stacked CTAs.
Header starts deep navy and becomes glassmorphic on scroll. Student
portal premium academic; admin utility-focused. Also implement agreed
custom 404, scroll-to-top, skeletons, branded loading states, global
toasts, accessible interactions, and responsive breakpoints (mobile
<768, tablet 768--1023, desktop >=1024). Do not invent sections or
features.
3. Required workflow after EVERY task
For each task: 1. Read all project docs and latest progress log. 2.
State task ID, objective, prerequisites, expected files/areas, and
acceptance criteria before editing. 3. Inspect existing code and working
tree first. Do not overwrite blindly. 4. Implement only the task scope.
Ask before scope, architecture, stack, dependency, schema, auth, or
infrastructure changes. 5. Run relevant tests and checks. Report exact
commands and results; never claim tests passed if not run. 6. Update
this TASK.md status and append a dated entry to PROGRESS.md. 7. Give
the owner a handoff report: - Task ID and status: DONE, BLOCKED, or
PARTIAL. - What was implemented and how it works. - Technical
decisions and rationale. - Files created/modified/deleted. -
Schema/migration/API changes. - Environment variable names added (never
values). - Tests/checks run and exact results. - Known issues,
limitations, blockers, and owner actions. - Exact next task ID and first
action for the next session. 8. Write a self-contained next-session
handoff in PROGRESS.md, so another GPT/Codex can continue without this
conversation. Include current architecture, completed work, decisions,
important paths, commands, blockers, and next steps. 9. Give exact Git
commands for the owner to review, commit, and push. Use actual branch
and actual changed paths; never guess paths or use git add . by
default. 10. Do not run commit, push, merge, force-push, production
deployment, or production migration for the owner. The owner runs
commands. Never claim an action succeeded unless verified.

PROGRESS.md must be created in T00 and appended after every task;
never erase prior entries. Never place secrets, tokens, passwords,
private URLs, or personal data in it.
4. Git rules
- Owner creates the GitHub repository and connects it before coding.
- Use protected main and short-lived task branches,
  e.g. feat/T01-bootstrap.
- One logical task per commit. Inspect git status, branch,
  git diff, and git diff --check before suggesting commands.
- Never stage secrets, .env* except safe .env.example, build
  output, dependency folders, local DBs, logs, or unrelated files.
- Provide exact owner-run commands, e.g.:
  git status
  git diff --check
  git diff
  git switch -c feat/TXX-short-description
  git add path/to/actual-file path/to/another-actual-file
  git diff --cached
  git commit -m "feat(scope): concise outcome"
  git push -u origin feat/TXX-short-description
  Adapt commands to actual branch and paths. If branch exists, do not
  recreate it. Ask before direct commits to main. Do not use
  git add ., force push, hard reset, or destructive history
  rewriting without explicit approval. Explain whether the next task
  uses a new branch and how the owner integrates branches. Never merge
  automatically.
5. Ordered execution plan
Tasks are sequential and dependencies matter. A task is complete only
when acceptance criteria and verification pass.
Phase 0 --- Foundation
T00 --- [x] Repository and specification inspection - Verified root,
branch, remote, Node/npm versions, and working tree. Reviewed
architecture/design/rules specifications, identified the
`architechture.md` filename mismatch and credential-bearing source file,
and recorded the baseline in `PROGRESS.md`. - Acceptance: repository
state and approved specs documented. STATUS: DONE.

T01 --- [x] Next.js bootstrap - Created a Next.js App Router + strict
TypeScript project under `src/`, npm scripts, `.gitignore`, `.env.example`,
and root `vercel.json`. The owner GitHub remote remains configured and no
secrets are committed. - Acceptance: local app runs, remote remains verified,
and no secrets committed. STATUS: DONE.

T02 --- [x] Dependencies and developer tooling - Added approved
Prisma/Supabase, Zod, React Hook Form, Zustand, Sonner, Vitest,
Playwright, and Prettier tooling. Added environment validation, unit-test
and E2E configuration, test scripts, and baseline formatting scripts.
- Acceptance: baseline lint/type-check, unit tests, formatting, and
production build pass. STATUS: DONE.

T03 --- [x] Design system - Implemented navy/gold/ivory/charcoal
palette and typography tokens, responsive base styles, visible focus,
reduced-motion treatment, and reusable button/input/card/badge/dialog/
skeleton primitives. - Acceptance: matches DESIGN.md and is responsive
and keyboard usable. STATUS: DONE.

T04 --- [x] Shared application shells - Implemented public, student,
and admin layouts; public header/login dropdown/footer; portal sidebars;
Sonner provider; scroll-to-top; branded loading; custom 404; and shell
route placeholders. Admin pages have no public footer. - Acceptance:
route shells and responsive navigation work. STATUS: DONE.
Phase 1 --- Public website
T05 --- [x] Homepage hero - Implemented solid navy editorial hero,
calligraphic accent, short introduction, Explore Courses and Enroll Now
CTAs, three desktop image columns with nine temporary replaceable images,
alternating scroll parallax, three mobile image rows, reduced-motion support,
and horizontal overflow protection. - Acceptance: approved layout,
responsive mobile composition, nine images, and CTA routes verified.
STATUS: DONE.

T06 --- Homepage story and featured courses: editorial story,
featured course/board cards only, More Courses link; preserve approved
section order.

T07 --- Homepage enquiry section and footer: split enquiry layout,
typed service boundary, complete footer and links. No fake success.

T08 --- About page: quote banner, story, institute images, CTA.

T09 --- Academics/course directory: /academics and
/academics/[board]/[class], board/class/subject hierarchy and subject
details.

T10 --- Faculty page: image-led circular portraits, name,
qualifications, subjects, experience; data-driven states.

T11 --- Study Materials public page: board/class/subject/chapter
navigation, Notes and Sample Papers & PYQs, category tabs, file lists,
free/restricted states.

T12 --- Videos page: featured playlist, playlist grid, embedded
YouTube playlists, safe URL handling.

T13 --- Gallery page: responsive masonry/uniform grid, captions,
keyboard-accessible lightbox.

T14 --- Contact and standalone Enquiry pages: approved contact
details, map/social/WhatsApp; validated enquiry form. Never invent
contact details.

T15 --- Privacy, disclaimer, metadata, public audit: owner-approved
or clearly marked draft policy content; metadata, semantic headings, alt
text, broken-link audit.
Phase 2 --- Backend foundation
T16 --- Supabase + Prisma setup: configure DB, Prisma for installed
version, migrations, seed strategy, health check. Production migrations
remain manual/approved.

T17 --- Complete relational schema: users, students, sessions,
OTP/reset, boards/classes/subjects/chapters, academic sessions,
teachers, enquiries, material categories/files, playlists, gallery, fee
schedules/monthly fees/payments. Add enums, relations, indexes,
constraints, timestamps, soft-delete/dependency rules. No unapproved
schema fields.

T18 --- API foundation: standardized response/error helpers, Zod
validation, typed service/repository pattern, structured logging, thin
route handlers.

T19 --- Cloudflare R2: private bucket integration, presigned
upload/download, validation, safe replacement, permanent delete; test
access control.

T20 --- Brevo: server-side API integration, admin enquiry and OTP
email templates, safe error handling and logging.

T21 --- Security/infrastructure: secure cookies, CSRF protections
appropriate to request model, rate limits, login/OTP throttles, headers,
Sentry, expiry enforcement and cleanup support. Verify no sensitive
logs.
Phase 3 --- Authentication and student
T22 --- Auth core: password hashing, login verification, DB
sessions, sliding expiry, cookie management, revocation, logout,
role/account guards.

T23 --- Super Admin provisioning/auth: one-time env-controlled
bootstrap, hashed password, admin login/reset/logout, protected routes;
disable bootstrap after creation.

T24 --- Student auth: login, phone/email matching, four-digit OTP
reset, five-minute expiry, 30-second resend cooldown, invalidation,
attempt limits, one-use/hash; authenticated password change.

T25 --- Student portal/profile: responsive shell and read-only
profile; student can only access own data; login redirects to study
materials.
Phase 4 --- Admin modules
T26 --- Admin shell/dashboard: protected navigation, deliberately
empty dashboard, new-enquiry indicator.

T27 --- Enquiries: DB submission, admin email, status updates,
private note, date/status/board/class filters; never delete or
auto-create student.

T28 --- Teachers: add/edit/delete confirmation,
qualifications/subjects, photo and experience; connect Faculty page.

T29 --- Academics: boards/classes/subjects/chapters CRUD, ordering,
dependency protection, academic session management with only one active;
connect public courses.

T30 --- Students: workflow filters, table, search/pagination,
add/edit, soft delete/reactivate, temporary credentials, account/session
revocation; preserve history.

T31 --- Materials admin: hierarchy, categories, PDF/DOCX upload,
metadata/access, ordering, replacement/delete, R2, PDF view/DOCX
download; server-enforce restricted access.

T32 --- Video admin: multiple playlists per subject, title/URL
validation, CRUD, public integration.

T33 --- Gallery admin: multi-upload, captions, edit/delete, R2
integration and public gallery.
Phase 5 --- Fees and integration
T34 --- Fee calculations/model: April--March year mapping, monthly
schedules, effective-month changes, historical fee retention,
carry-forward; unit-test calculations.

T35 --- Admin fees: filters, consolidated table, individual 12-month
calendar, manual records, UPI/Cash, immutable paid records, no partial
payments.

T36 --- Student fees: year selection, overview, calendar, payment
history, totals/outstanding/status; own-record authorization.

T37 --- End-to-end integration: verify enquiry → admin
notification/status → manual student creation; student creation → login
→ profile/materials/fees; teacher → faculty; academics →
courses/materials; admin CRUD → public pages.
Phase 6 --- Verification and release
T38 --- Automated tests: Vitest unit tests, integration tests,
Playwright E2E for public enquiry, admin, student, materials, and fee
flows. Document any skipped test and obtain owner approval.

T39 --- Responsive/accessibility/visual QA: mobile/tablet/desktop;
keyboard, focus, labels, contrast, reduced motion, dialogs, toasts, alt
text, forms; compare pages to DESIGN.md and fix overflow/layout shifts.

T40 --- Security/performance/release audit: IDOR, authorization,
session revocation/expiry, OTP brute force, file access, upload limits,
caching, headers, secrets, logs, rate limits. Run lint, type-check,
tests, production build. Prepare migration/backup/rollback notes.

T41 --- Vercel Preview: configure preview env; avoid production data
unless owner approves; smoke-test routes, auth, forms, storage, email,
cron. Owner approves production release.

T42 --- Production deployment (23 Nov): owner approval, production
env, backup confirmation, explicit migration approval, Vercel
deployment, domain/DNS/HTTPS, smoke tests, verify Super Admin bootstrap
disabled. Record results.

T43 --- Final handoff: actual architecture, env variable names,
service setup, local run, deploy/rollback, backup notes, known
limitations, final Git status and owner-run Git commands.
6. Deadline guidance
Suggested schedule: - 20 Nov: T00--T04, begin public pages. - 21
Nov: finish public pages; backend foundation; begin
auth/admin/student. - 22 Nov: complete all admin/student/fee
features, integration, tests, QA, preview verification. - 23 Nov:
production migration with approval, deployment, smoke tests, handoff.

This is an aggressive plan. Parallel agents may help, but assign
non-overlapping modules and explicit file ownership. One integrator must
own Prisma schema, shared types, API contracts, global layouts/styles,
and integration. Do not have multiple agents edit these concurrently.
Merge and test each contribution. Generated code is not verified code.

If the deadline is at risk, report exact unfinished task IDs, blockers,
remaining effort, and risks; ask the owner. Never quietly drop a feature
or misrepresent completion.
7. Final release checklist
- [ ] All public routes and agreed designs complete.
- [ ] Enquiry persistence, admin email, in-app indicator work.
- [ ] Super Admin bootstrap, login, reset, logout, route protection
  work.
- [ ] Student creation, credentials, login, reset, profile, access
  rules work.
- [ ] Teacher CRUD and public faculty integration work.
- [ ] Boards/classes/subjects/chapters/sessions work.
- [ ] Materials upload, R2, free/restricted access, PDF/DOCX delivery
  work.
- [ ] Video playlist admin/public display work.
- [ ] Gallery admin/public display work.
- [ ] Admin/student fees, calculations, and payment rules work.
- [ ] Unit, integration, and E2E tests completed and recorded.
- [ ] Type-check, lint, production build pass.
- [ ] Responsive, accessibility, security, performance checks
  completed.
- [ ] Preview deployment smoke tests pass.
- [ ] Production migration explicitly approved and backed up.
- [ ] Production deployment and smoke tests completed on 23 Nov.
- [ ] PROGRESS.md contains a complete handoff for the next model.
8. Non-negotiable per-task documentation and Git handoff
This section is mandatory for every single task from T00 through T43.
It is not optional, and it is not satisfied by a short summary in the
chat.

At the end of each task, Codex must leave the repository itself in a
state that a completely new GPT/Codex session can pick up without access
to the previous conversation.
8.1 Update the project documents
After completing each task, Codex must:
1. Update the task's checkbox/status in TASK.md ([x] only when all
   acceptance criteria pass; otherwise mark it PARTIAL or BLOCKED
   in the task notes).
2. Append a new dated, task-specific entry to PROGRESS.md. Never
   overwrite previous task entries.
3. Update any other project documentation directly affected by the
   implementation (for example, API contracts, schema notes, setup
   instructions, or deployment notes).
4. Ensure the documentation describes the implementation that actually
   exists---not the implementation that was intended.
5. Record any divergence from ARCHITECTURE.md, DESIGN.md, or
   RULES.md and obtain owner approval before treating an
   approved-spec change as final.
8.2 Required PROGRESS.md entry --- use this template every time
## TXX — Task title

- Date:
- Status: DONE / PARTIAL / BLOCKED
- Branch:
- Commit: Not committed by Codex; owner-run commands supplied below.

### 1. Objective and acceptance criteria
Restate the task objective and list each acceptance criterion with PASS / FAIL / NOT RUN.

### 2. What was completed
Describe every change in concrete terms. Do not write vague statements such as "implemented backend".

### 3. How it was implemented
Explain the approach, key components, important functions, request/data flow, validation, authorization, error handling, and relevant design decisions. Include enough technical detail for another model to understand and safely modify it.

### 4. Files changed
For every created, modified, moved, or deleted file, give its repository-relative path and explain why it changed.

### 5. Database and API impact
Record schema/model changes, migrations, indexes, constraints, seed changes, API routes, request/response shapes, service/repository changes, and compatibility considerations. Explicitly write "No database/API changes" when none occurred.

### 6. Dependencies and configuration
List dependencies added/removed/updated and the reason for each. List environment-variable NAMES and configuration changes only. Never include secret values.

### 7. Verification
List the exact commands run and their actual outcomes. Include tests, type-check, lint, build, manual browser checks, and relevant negative/security tests. Mark anything not run as NOT RUN; never imply it passed.

### 8. Issues, risks, and limitations
Record bugs, incomplete acceptance criteria, technical debt, assumptions, edge cases, and anything that may affect the next task. If none, say "None known as of this handoff."

### 9. Owner actions required
List any manual actions, credentials/configuration setup, dashboard settings, approvals, or decisions needed from the owner. Never ask the owner to paste secrets into chat or documentation.

### 10. Current project state
Explain what works now, what is still stubbed/mocked, what is not yet connected, and any important commands needed to run the project locally.

### 11. Next task — exact continuation instructions
- Next task ID and title:
- Why it is next:
- Prerequisites:
- First files/areas the next GPT/Codex should inspect:
- Exact first steps:
- Acceptance criteria to satisfy:
- Known pitfalls and things not to redo:

### 12. Self-contained next-session context
Write a concise but complete handoff prompt that can be copied into a brand-new GPT/Codex chat. It must identify the project, stack, relevant approved documents, completed task IDs, current branch/state, implementation details, important paths, commands, environment variable NAMES, test results, unresolved issues, and the exact next task. It must not rely on "as discussed earlier" or any inaccessible chat history.

### 13. Owner-run Git commands
Provide exact commands based on the actual `git status`, current branch, and actual changed file paths. Include review, staging, staged-diff inspection, commit, and push. Do not use guessed paths or `git add .`.

```bash
git status
git branch --show-current
git diff --check
git diff
# If the task branch does not already exist:
git switch -c feat/TXX-short-description
# Stage only the actual files changed by this task:
git add path/to/actual-file path/to/another-actual-file
git diff --cached
git commit -m "feat(scope): describe completed task"
git push -u origin feat/TXX-short-description
Replace every example path, branch name, and commit message with exact
values from the repository. If the branch already exists, do not
recreate it. If there are no changes to commit, say so and do not
provide misleading commit commands. If unrelated user changes exist,
leave them untouched and explain how to avoid staging them.

Codex must not execute the commit or push. The owner reviews and
runs the commands. Never use git add ., git push --force,
destructive reset, history rewriting, or automatic merge without
explicit owner approval. Explain whether the next task should use a new
branch and how the owner should integrate branches.
8.3 Chat response after each task
The chat response must also contain: - Clear task status. - Short
summary of what changed. - Test/check results. - Any owner action
needed. - Exact next task. - The complete owner-run Git command sequence
with a proposed conventional commit message.

The chat response does not replace the detailed PROGRESS.md entry.
Both are required.
8.4 Definition of a completed task
A task may be marked DONE only when: - All its acceptance criteria
pass. - Required checks have actually been run and results recorded. -
TASK.md status is updated. - The full PROGRESS.md entry above is
complete. - The next-session handoff is self-contained. - Exact
owner-run Git commands are supplied.

Otherwise mark it PARTIAL or BLOCKED, document what remains, and do
not proceed as though it were complete.
9. Client content, database-first development, and deferred integrations
This is an approved implementation rule for the full project.
9.1 Build database-backed management now
Do not postpone these features because client data is not yet
available: - Boards, classes, subjects, chapters, and academic
sessions. - Student records, student account provisioning, and fee
records. - Enquiry forms, records, statuses, filters, and private
notes. - Study-material sections, categories, metadata, access settings,
and file records. - Teacher records and management. - Video playlist
records and management. - Gallery records and management.

Build the real admin forms, tables, validation, database models,
services/repositories, APIs, authorization, and public/student data
views. Use clearly identified removable demo data only where useful.
Never present demo data as verified client information. Provide polished
empty states.
9.2 Implement R2 and Brevo without real credentials
Do not omit integration code because client approval or credentials are
pending. - Implement the Cloudflare R2 adapter, upload/download/delete
services, presigned URL flow, validation, authorization, and tests. -
Implement the Brevo email adapter, enquiry notification and OTP flows,
templates, and error handling. - Add required environment-variable names
to .env.example with empty or safe placeholders only. - Never invent,
generate, or commit fake API keys, passwords, tokens, access keys, or
secrets. - Keep real credentials only in the owner's local .env.local
and deployment environment settings. - Detect missing configuration
clearly. Never pretend an upload or email succeeded. - Until R2 is
configured, keep forms/workflows implemented but show an actionable
configuration error to authorized admins when they attempt a real
upload. Do not store files on Vercel's ephemeral filesystem or claim
local files are durable. - Until Brevo is configured, test the provider
boundary using a development-only mock/test adapter. Never silently drop
production emails or log real OTPs/secrets. - Once credentials are
approved, run end-to-end provider verification.
9.3 Separate file metadata from file bytes
Build database records and management workflows for study materials,
faculty photos, gallery images, and other file-backed content now. Store
metadata and storage object keys in PostgreSQL; store actual file bytes
in R2 once configured. Do not store binary files in PostgreSQL without
explicit approval.
9.4 Temporary copy and static assets
- Use original or verified appropriately licensed temporary images.
  Prefer replaceable local files under public/assets/; record their
  source/licensing.
- Keep filenames/references stable so assets can be replaced without
  component rewrites.
- Draft temporary homepage, About, tagline, and other editable
  marketing copy.
- Mark temporary copy and unverified claims. Never invent institute
  facts such as address, contact details, faculty qualifications,
  accreditation, achievements, or results.
- Dynamic faculty, playlists, materials, gallery, academics, students,
  fees, and enquiries must be database/admin-managed, not hardcoded in
  page components.
- Provide polished empty states until real client data is entered.
9.5 Client handover readiness
Record missing client content/configuration as owner actions in
PROGRESS.md, without recording secrets. Include a final checklist to
populate real content, configure R2/Brevo, test uploads/email, and
replace temporary assets/copy.