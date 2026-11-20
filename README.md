# A2Smart Classes

A2Smart Classes is a Next.js App Router, TypeScript, and Supabase/PostgreSQL application for a public academy website, student experience, and Super Admin portal.

## Development

Requirements:

- Node.js 24+
- npm 11+

Install and run:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` — start the development server
- `npm run lint` — run ESLint
- `npm run type-check` — run strict TypeScript checking
- `npm run check` — run lint and type-check
- `npm run build` — create a production build
- `npm start` — serve a production build

## Environment

Copy `.env.example` to `.env.local` for local development. Fill only approved environment values in local or deployment settings. Never commit real credentials.

## Repository workflow

Use short-lived task branches. Do not commit secrets, `.env*` files except `.env.example`, build output, dependency folders, local database data, logs, or credentials.

The authoritative project specification is in:

- `TASK.md`
- `PRD.md`
- `architechture.md`
- `DESIGN.md`
- `RULES.md`
- `PROGRESS.md`
