# SMVentures

Marketing site for [SMVentures](https://smventures.id), a venture builder in Indonesia, in English and Indonesian. The design follows the mockups approved on 1 Oct 2026 in `docs/desain/` (read `docs/desain/README.md`; the static mockups are in `docs/desain/layar/`).

## Stack

- Next.js 16 (App Router, Turbopack), React 19, TypeScript
- Tailwind CSS 4 with design tokens in `app/globals.css` (`@theme`, default palette reset: use the tokens, never hex values in markup)
- Plus Jakarta Sans and IBM Plex Mono via `next/font` (self-hosted); line icons as inline SVG in `app/components/icons.tsx`
- MDX for Insights posts (`@next/mdx` with `remark-frontmatter`)
- Open Graph images with `next/og`; the fonts for them are in `assets/fonts` (SIL Open Font License)
- Google Analytics (`G-MPJCQW41XD`) via `@next/third-parties`

Read the Next.js 16 docs bundled in `node_modules/next/dist/docs/` before changing code; APIs differ from older versions (see `AGENTS.md`).

## Pages

| Page | English | Indonesian | Source |
|---|---|---|---|
| Home | `/` | `/id` | `app/[lang]/page.tsx` |
| About and people | `/about` (`#people`) | `/id/about` | `app/[lang]/about/` |
| For shareholders | `/for-shareholders` | `/id/for-shareholders` | `app/[lang]/for-shareholders/` |
| Venture | `/portfolio/<slug>` | `/id/portfolio/<slug>` | `app/[lang]/portfolio/[slug]/` |
| Insights | `/insights`, `/insights/<slug>` | `/id/insights`, `/id/insights/<slug>` | `app/[lang]/insights/` |
| Insights RSS | `/insights/rss.xml` | `/id/insights/rss.xml` | `app/[lang]/insights/rss.xml/route.ts` |
| Privacy policy | `/privacy` | `/id/privacy` | `app/[lang]/privacy/` |
| Contact form API | `POST /api/contact` | | `app/api/contact/route.ts` |
| Sitemap, robots | `/sitemap.xml`, `/robots.txt` | | `app/sitemap.ts`, `app/robots.ts` |

Every page is prerendered at build time, except the contact API and the 404 page for unknown addresses.

### Languages

- All pages live under `app/[lang]` (`en` or `id`). `next.config.ts` rewrites addresses without a prefix to the English pages and redirects `/en/...` to the address without a prefix. There is no redirect based on the browser's language.
- `<html lang>`, canonical URLs and `hreflang` alternates are set per page (`app/lib/seo.ts`).
- The EN · ID switcher in the header keeps the page you are on. An Insights post exists only in its own language, so switching from a post goes to the other language's Insights list (or its home page when it has no posts).

## Where the content lives

| What | Where |
|---|---|
| All interface text, both languages | `app/i18n/en.ts` and `app/i18n/id.ts` (same keys; `{name}` is a placeholder) |
| Portfolio ventures | `app/data/ventures.ts` |
| People on /about | `app/data/people.ts` |
| Home statistics that are not filled in yet | `app/data/site.ts` |
| Insights posts | `content/insights/*.mdx` |
| Privacy policy date and settings | `app/lib/legal.ts` (text in the dictionaries) |
| Logos and photos | `public/images/` (the SMVC logo is on Cloudinary, `app/lib/links.ts`) |

Rules (from `docs/desain/README.md`, checked by the tests):

- No text written into components: every visible string comes from the dictionaries, and `tests/i18n.test.mjs` fails if the keys of `en.ts` and `id.ts` differ.
- A field that is empty (`null`) is not rendered; nothing shows a placeholder.
- Only confirmed facts. No "harga saham", no valuations or venture financial figures.
- The footer always says that nothing on the site is an offer of securities. "Login as Investor" always goes to https://investor.smventures.id/login.

### Ventures

Each venture in `app/data/ventures.ts` has text in both languages (`{ en, id }`) and these optional fields, shown on its page only when filled in:

- `founded`: `"2024"` or `"2024-06"`
- `basedIn`, `smvcRole`: `{ en, id }`
- `products`: a list of product names
- `story.problem`, `story.built`, `story.now`: `{ en, id }` each

**Showing a hidden venture again (e.g. Sahamku):** set its `listed` to `true`. It then appears on the home page, gets its page at `/portfolio/<slug>`, and is added to the statistics and the sitemap. `listed: false` hides it everywhere while keeping its data.

### Home statistics

The number of active ventures is counted from the listed ventures. "First company built" (`firstCompanyYear`) and "people employed" (`peopleEmployed`) in `app/data/site.ts` appear once filled in, each taking the place of one of the earlier figures (industries, hands-on involvement).

### Adding an Insights post

1. Create `content/insights/<slug>.mdx`. The file name is the address: lowercase words joined by `-`.
2. Start it with the frontmatter, then write the body in Markdown:

   ```mdx
   ---
   title: "The post's title"
   date: "2026-10-15"
   summary: "One or two sentences for lists, search results and RSS."
   lang: "en"
   draft: true
   ---

   The body, in Markdown.
   ```

   `lang` is `en` (shown at `/insights`) or `id` (shown at `/id/insights`). `content/insights/example-post.mdx` shows the format.
3. With `draft: true` the post is visible in `npm run dev` (marked "Draft") but never in a production build. Set `draft: false` to publish, then push to `main`.
4. The Insights item in the nav and the Insights section on the home page appear in a language once it has at least one published post. A post with a missing or malformed field stops the build with a message saying what to fix.

## Environment variables

Set in Vercel (project `smventures`, Production). Changes apply from the next deployment.

| Name | What it does |
|---|---|
| `RESEND_API_KEY` | Resend key for the contact form. Without it (or `CONTACT_TO`), the form says politely that it is not switched on yet and points to LinkedIn. |
| `CONTACT_TO` | Inbox that receives the contact form. |
| `SITE_PRIVACY_CONTACT` | Email address for privacy requests, shown on `/privacy`. Empty: the page points to the contact form instead. |
| `LEGAL_DOCS_FINAL` | `true` removes the "DRAF — perlu ditinjau" marker from `/privacy` once the policy has been reviewed. |

`SITE_PRIVACY_CONTACT` and `LEGAL_DOCS_FINAL` are read when the site is built, as the privacy page is static.

## Develop

```bash
npm install
npm run dev     # http://localhost:3000
npm test        # node --test: contact form, ventures, dictionaries, markup rules, Insights, SEO, privacy
npm run lint -- --max-warnings 0
npm run build   # production build
```

If `npm run dev` reports a Turbopack panic after routes are moved, stop it and delete `.next/dev`.

Never test the contact form against a real inbox: without `RESEND_API_KEY` and `CONTACT_TO` locally, nothing is sent.

## Deploy

Deployment runs through Vercel's Git integration: **push to `main` deploys to production** (smventures.id). Do not deploy with `vercel --prod`.
