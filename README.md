# SMVentures

Marketing site for [SMVentures](https://smventures.id), a venture builder in Indonesia. It is a single static page: hero carousel, how we work, people, portfolio, and contact CTA.

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS 4 (configured in `app/globals.css`, no `tailwind.config`)
- Inter via `next/font`, Tabler Icons webfont
- Google Analytics (`G-MPJCQW41XD`)

Read the Next.js 16 docs bundled in `node_modules/next/dist/docs/` before changing code; APIs differ from older versions (see `AGENTS.md`).

## Where content lives

- `app/page.tsx`: section order and JSON-LD
- `app/layout.tsx`: metadata, SEO, analytics
- `app/components/`: one component per section, with its copy inline
- `app/data/ventures.ts`: portfolio ventures, used by Hero, Portfolio, and StatsBar
- `public/images/`: venture logos and people photos

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Deploy

Deployment runs through Vercel's Git integration: **push to `main` deploys to production** (smventures.id). Do not deploy with `vercel --prod`.
