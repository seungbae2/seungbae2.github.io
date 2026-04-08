# seungbae2.github.io

Personal portfolio site for Sungbae Lee — Senior Mobile Software Engineer.

## Tech Stack

- **Next.js 16** (App Router, static export)
- **React 19**
- **Tailwind CSS 4**
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/          # Pages: /, /projects, /projects/[slug], /career, /about, /blog
├── content/      # Static data (projects.ts, experience.ts)
├── components/   # Layout (Header, Footer) and UI (Badge, ProjectCard, etc.)
└── lib/          # Config and shared types
```

## Build

```bash
npm run build     # Static export to out/
```

## Deployment

Automatically deployed to GitHub Pages via GitHub Actions on push to `main`.
