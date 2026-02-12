# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio site for Sungbae Lee (seungbae2.github.io). Static site deployed to GitHub Pages.

## Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at localhost:3000
npm run build      # static export to out/
```

No test runner or linter is configured.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys on push to `main`. Builds with `npm ci && npm run build`, uploads `out/` to GitHub Pages.

## Architecture

**Stack**: Next.js 16 (App Router), React 19, Tailwind CSS 4, TypeScript. Static export (`output: "export"`) — no server-side features.

**Source layout** (`src/`):

- `app/` — Next.js App Router pages. Routes: `/`, `/projects`, `/projects/[slug]`, `/career`, `/about`, `/blog`
- `content/` — Static data as typed TS arrays (`projects.ts`, `experience.ts`). This is the content layer — no CMS or markdown files.
- `components/layout/` — `Header.tsx` (client component with mobile nav), `Footer.tsx`
- `components/ui/` — Reusable UI: `Badge`, `StoreLinks`, `ProjectCard`
- `lib/` — `config.ts` (site metadata, social links), `types.ts` (shared interfaces: `Project`, `Experience`, `BlogPost`)

**Key patterns**:
- Content is data-driven: add projects/experiences by appending to arrays in `content/`. Pages render from these arrays.
- Project detail pages are statically generated via `generateStaticParams()` from the projects array.
- Dark-mode only. Custom color tokens defined in `globals.css` `@theme inline` block (background, foreground, muted, accent, card, border).
- Path alias `@/*` maps to `./src/*`.
- Images are unoptimized (`next.config.ts`) since it's a static export.

## Git

- `main` branch triggers deployment. Work on feature branches.
- Use merge commits, not squash.
