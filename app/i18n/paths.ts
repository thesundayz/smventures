// Languages and paths, without the dictionaries, so client components can use them cheaply.
// No imports, so `node --test` can load it directly.

export const LANGS = ['en', 'id'] as const
export type Lang = (typeof LANGS)[number]

export function isLang(value: string): value is Lang {
  return (LANGS as readonly string[]).includes(value)
}

/** Fills `{name}` placeholders: fmt('© {year} SMVentures', { year: 2026 }). */
export function fmt(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match))
}

/** A site path in one language: localePath('id', '/about') → '/id/about'; '/' → '/' or '/id'. */
export function localePath(lang: Lang, path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`
  if (lang === 'en') return clean
  return clean === '/' ? '/id' : `/id${clean}`
}

/** The path without its language: '/id/about' → '/about', '/en' → '/', '/about' → '/about'. */
export function stripLang(pathname: string): string {
  const match = /^\/(en|id)(?=\/|$)(.*)$/.exec(pathname)
  if (!match) return pathname || '/'
  return match[2] || '/'
}

/** The same page in another language, for the EN · ID switcher. An Insights post exists in one
 * language only, so the other language gets its Insights list, or its home page if it has none. */
export function languageTarget(path: string, target: Lang, insightSlugs: Record<Lang, string[]>): string {
  const post = /^\/insights\/([^/]+)$/.exec(path)
  if (post && !insightSlugs[target].includes(post[1])) return localePath(target, insightSlugs[target].length > 0 ? '/insights' : '/')
  if (path === '/insights' && insightSlugs[target].length === 0) return localePath(target, '/')
  return localePath(target, path)
}
