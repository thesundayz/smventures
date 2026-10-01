// The sitemap’s entries (app/sitemap.ts): every page in both languages with its hreflang alternates, listed
// ventures only, and published Insights posts in their own language. Data comes in as arguments,
// so `node --test` can load this file directly.

type Lang = 'en' | 'id'
type Entry = { url: string; lastModified?: string; alternates?: { languages: Record<string, string> } }

const LANGS: Lang[] = ['en', 'id']
const prefixed = (lang: Lang, path: string) => (lang === 'en' ? path : path === '/' ? '/id' : `/id${path}`)

export function sitemapEntries({
  base,
  pages,
  ventureSlugs,
  insights,
}: {
  base: string
  /** Pages that exist in both languages, e.g. '/', '/about'. */
  pages: string[]
  ventureSlugs: string[]
  /** Published posts only. */
  insights: { slug: string; lang: Lang; date: string }[]
}): Entry[] {
  const url = (lang: Lang, path: string) => `${base}${prefixed(lang, path)}`.replace(/\/$/, '') || base
  const both = (path: string): Entry[] => {
    const languages: Record<string, string> = { en: url('en', path), id: url('id', path), 'x-default': url('en', path) }
    return LANGS.map((lang) => ({ url: url(lang, path), alternates: { languages } }))
  }
  const entries: Entry[] = [...pages.flatMap(both), ...ventureSlugs.flatMap((slug) => both(`/portfolio/${slug}`))]
  for (const lang of LANGS) {
    const posts = insights.filter((p) => p.lang === lang)
    if (posts.length === 0) continue
    entries.push({ url: url(lang, '/insights'), lastModified: posts[0].date })
    for (const post of posts) entries.push({ url: url(lang, `/insights/${post.slug}`), lastModified: post.date })
  }
  return entries
}
