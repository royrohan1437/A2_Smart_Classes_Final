# A2Smart Classes — Development Rules

**Purpose:** Establish mandatory development, security, design and AI-agent guidelines for A2Smart Classes.

These rules apply to Codex and every other AI coding agent working on this project.

---

## 1. Core Principles

- Build production-ready, maintainable software.
- Follow the approved `ARCHITECTURE.md`.
- Prioritize security, reliability, accessibility and performance.
- Do not introduce unnecessary complexity.
- Preserve existing functionality.
- Never sacrifice correctness for implementation speed.

## 2. AI Agent Boundaries

### Allowed without additional approval

- Implement explicitly approved features.
- Fix bugs.
- Refactor code without changing existing behaviour.
- Improve performance and accessibility.
- Write tests and documentation.
- Improve existing implementations within the approved architecture.

### Approval required

- Adding, removing or changing features.
- Changing architecture or technology choices.
- Installing or removing dependencies.
- Making unapproved database schema changes.
- Changing authentication or authorization rules.
- Destructive operations.
- Modifying production data.
- Changing production infrastructure or deployment configuration.

### Mandatory restrictions

- Never invent features, workflows, fields, pages or roles.
- Never remove functionality to simplify implementation.
- Never introduce fake data or non-functional controls into production.
- Never silently weaken security.
- Ask for clarification when requirements are ambiguous.
- Suggestions are welcome, but implementation requires approval when outside the agreed scope.

## 3. Planning Before Implementation

For substantial tasks:

1. Inspect the existing codebase.
2. Read relevant project documentation.
3. Understand existing implementations before changing them.
4. Prepare a brief implementation plan.
5. Identify affected modules, APIs, database tables and dependencies.
6. Identify potential risks and regressions.
7. Obtain approval for changes outside the approved scope.
8. Implement in small, verifiable steps.

Small, straightforward tasks can proceed without a separate plan.

## 4. Technology and Dependencies

Follow the approved technology stack in `ARCHITECTURE.md`.

- Prefer existing dependencies.
- Prefer native JavaScript, TypeScript and browser capabilities for simple functionality.
- New dependencies require approval and technical justification.
- Avoid overlapping libraries.
- Check compatibility, security, maintenance and bundle impact before proposing a package.
- Never introduce a package simply because an AI-generated example uses it.
- Do not replace existing technologies without approval.

## 5. Code Quality

- Follow TypeScript strict mode.
- Avoid `any`; use proper types and `unknown` where appropriate.
- Write small, focused and reusable components and functions.
- Avoid unnecessarily large files and components.
- Do not duplicate business logic.
- Follow consistent naming conventions.
- Separate UI, business logic, services and repositories.
- Avoid unnecessary abstractions.
- Remove unused imports, variables, dead code and debugging statements.
- Comment complex logic and important decisions, not obvious code.
- Write readable code that another developer can maintain.

## 6. API Development

- Follow one standardized API response structure.
- Validate incoming data using Zod.
- Use appropriate HTTP status codes.
- Keep API route handlers thin.
- Put business logic in service layers.
- Put database operations in repository layers.
- Validate query parameters, request bodies and route parameters.
- Enforce authentication and authorization on the server.
- Never trust client-provided roles, permissions or ownership information.
- Prevent duplicate submissions where relevant.
- Use database transactions for operations requiring multiple related changes.
- Never return fake success responses.

## 7. Error Handling and Logging

- Handle expected errors consistently.
- Centralize unexpected error handling.
- Return meaningful, user-friendly error messages.
- Use the existing Sonner toast system for user-facing feedback.
- Do not expose stack traces, database errors, secrets or internal implementation details.
- Log unexpected errors server-side using structured logging.
- Never silently swallow errors.
- Do not show success messages before server confirmation.
- Avoid duplicate notifications.
- Handle loading, empty, success and error states.

## 8. Database Rules

- Use the approved Supabase PostgreSQL and Prisma architecture.
- Keep one authoritative Prisma schema.
- Use migrations for schema changes.
- Review database changes before execution.
- Production migrations require manual approval.
- Use transactions for multi-record consistency.
- Enforce relational integrity and appropriate constraints.
- Never bypass existing dependency or historical-record protection.
- Never run destructive database commands without explicit approval.
- Never use production data for testing.
- Enforce data ownership and access restrictions in server-side queries.

## 9. Authentication and Security

Security is non-negotiable.

- Enforce authentication and authorization server-side.
- Never rely exclusively on frontend route protection.
- Hash passwords using a secure password-hashing algorithm.
- Never store plaintext passwords or OTPs.
- Store secrets only in server-side environment variables.
- Use appropriately configured HTTP-only, Secure and SameSite session cookies.
- Validate session expiry and revocation server-side.
- Protect against SQL injection, XSS, CSRF and insecure direct object references.
- Apply rate limits to login, OTP generation and verification.
- Enforce OTP expiry, one-time use and attempt limits.
- Never log passwords, OTPs, session tokens or sensitive information.
- Validate file types, sizes and upload permissions.
- Keep private R2 files private.
- Use appropriately scoped presigned URLs.
- Never expose permanent public access to restricted materials.
- Never expose admin-only data or operations to students.
- If a vulnerability is discovered, report it and propose a safe fix.

## 10. File Storage

- Use the approved Cloudflare R2 architecture.
- Keep private files in private storage.
- Generate presigned URLs server-side.
- Validate file metadata and permissions before upload.
- Verify file ownership and access before download.
- Keep database records and storage operations consistent.
- Handle failed uploads, replacements and deletions safely.
- Never trust file extensions alone for file validation.

## 11. UI/UX Design Philosophy

The application must look like a thoughtfully designed educational platform, not a generic AI-generated SaaS template.

### Design principles

- Clean, premium and restrained visual direction.
- Consistent spacing and alignment.
- Strong typography and visual hierarchy.
- Accessible colour contrast.
- Purposeful use of whitespace.
- Consistent component behaviour.
- Functional interactions over decorative effects.
- Responsive layouts across mobile, tablet and desktop.
- Public, student and admin interfaces may have different layouts but must share a coherent design system.

Do not invent brand colours, fonts or visual identities without approval.

### 20 prohibited design patterns

Avoid the following:

1. Purple-to-blue gradients.
2. Gradient hero text.
3. Badges above headlines.
4. Three icon boxes in a row as a default layout pattern.
5. Emojis in headings.
6. Coloured left-border cards.
7. Glassmorphism cards.
8. Untouched default shadcn components.
9. Lucide icons everywhere.
10. Inter as the automatic font choice.
11. Space Grotesk combined with Instrument Serif as a default aesthetic.
12. Serif italics used merely to accent words.
13. Excessive em-dash usage.
14. Generic marketing buzzwords.
15. Sections fading in automatically as users scroll.
16. Cursor-following lines or decorative cursor effects.
17. Buttons that merely fade on hover.
18. Low-contrast dark mode.
19. Inconsistent spacing.
20. Decorative grain or noise textures.

### Additional design restrictions

- Do not overload pages with cards.
- Do not use unnecessary gradients, glows or blur effects.
- Avoid floating decorative shapes and gratuitous shadows.
- Avoid unnecessary rounded containers.
- Do not use animations without a functional purpose.
- Do not use random icons as decoration.
- Do not repeat identical template layouts across every page.
- Do not introduce unnecessary badges or visual labels.
- Customize component-library defaults to match the established design system.
- Implement meaningful hover, focus, active and disabled states.
- Do not create visual elements that have no functional or informational purpose.

## 12. Accessibility

- Use semantic HTML.
- Provide accessible labels for form controls.
- Support keyboard navigation.
- Maintain visible focus indicators.
- Use sufficient colour contrast.
- Provide appropriate alternative text for meaningful images.
- Do not communicate important information through colour alone.
- Ensure dialogs and interactive components are accessible.

## 13. Performance

- Avoid unnecessary client-side rendering.
- Use Server Components by default where appropriate.
- Use Client Components only when interactivity requires them.
- Avoid unnecessary API requests and database queries.
- Prevent N+1 query patterns.
- Optimize images and media.
- Use Next.js Image where appropriate.
- Implement caching and revalidation according to the approved architecture.
- Avoid unnecessary dependencies and oversized bundles.
- Never compromise data correctness for caching.

## 14. Testing and Verification

Before declaring a task complete, perform applicable checks:

- Unit tests for relevant logic.
- Integration tests for affected APIs and database workflows.
- E2E tests for important user-facing workflows where applicable.
- TypeScript type-check.
- ESLint/lint checks.
- Production build verification.
- Review for security issues and regressions.

Rules:

- Never claim a test passed unless it was actually executed.
- Never hide failing tests.
- Never bypass checks just to report completion.
- Explain checks that could not be performed and why.
- Do not add irrelevant tests simply to satisfy a checklist.

Every completion report must include:

1. What was implemented.
2. Important files changed.
3. Tests and checks performed.
4. Any failures or known limitations.

## 15. Git and Deployment

- Use feature branches for significant changes.
- Never push directly to the production branch without approval.
- Never force-push or rewrite Git history without approval.
- Never commit `.env` files, secrets or credentials.
- Do not commit generated build files.
- Review changes before committing.
- Use focused, descriptive commit messages.
- Never execute destructive database commands without approval.
- Never deploy to production without approval.
- Production migrations require manual review and approval.
- Never test using production data.

## 16. Environment and Configuration

- Keep environment-specific configuration in environment variables.
- Maintain an accurate `.env.example` containing variable names and safe placeholders only.
- Never expose server secrets through `NEXT_PUBLIC_` variables.
- Validate required environment variables during application startup or initialization.
- Never hardcode credentials, API keys or private URLs.
- Keep development and production configuration separate.

## 17. Documentation

- Read `ARCHITECTURE.md` and `RULES.md` before starting substantial work.
- Keep documentation consistent with approved implementation decisions.
- Update relevant documentation when an approved change modifies existing architecture or behaviour.
- Do not silently change documented decisions.
- Do not document features that have not been implemented or approved.

## 18. Definition of Done

A task is complete only when:

- The requested requirements are implemented.
- No unapproved functionality has been introduced.
- Existing functionality remains intact.
- Security and authorization requirements are respected.
- Loading, empty, error and success states are handled.
- Relevant tests and checks have been performed.
- No known critical regression remains.
- Documentation is updated where necessary.
- The implementation summary accurately describes the work.

---

**Final instruction to AI agents:**

When in doubt, do not invent, assume, simplify or silently change requirements. Inspect the existing implementation, consult project documentation and ask for clarification when necessary.

Your responsibility is to implement the approved product correctly, securely and consistently, not to redesign the product or expand its scope independently.