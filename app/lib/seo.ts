// Page metadata per language: title, description, canonical URL, hreflang alternates, and the
// Open Graph / X card text. The Open Graph image comes from each route's opengraph-image.tsx.
import type { Metadata } from 'next'
import { LANGS, type Lang, localePath } from '@/app/i18n'

export function alternates(lang: Lang, path: string, langs: readonly Lang[] = LANGS): NonNullable<Metadata['alternates']> {
  const languages: Record<string, string> = {}
  for (const l of langs) languages[l] = localePath(l, path)
  if (langs.includes('en')) languages['x-default'] = localePath('en', path)
  return { canonical: localePath(lang, path), languages }
}

export function pageMetadata({
  lang,
  path,
  title,
  description,
  langs = LANGS,
  type = 'website',
  absoluteTitle = false,
}: {
  lang: Lang
  path: string
  title: string
  description: string
  /** The languages the page exists in (an Insights post has one). */
  langs?: readonly Lang[]
  type?: 'website' | 'article'
  /** true when `title` is already the full title (no " — SMVentures" added). */
  absoluteTitle?: boolean
}): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} — SMVentures`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: alternates(lang, path, langs),
    openGraph: {
      type,
      url: localePath(lang, path),
      title: fullTitle,
      description,
      siteName: 'SMVentures',
      locale: lang === 'id' ? 'id_ID' : 'en_ID',
      ...(langs.length > 1 ? { alternateLocale: lang === 'id' ? 'en_ID' : 'id_ID' } : {}),
    },
    twitter: { card: 'summary_large_image', title: fullTitle, description },
  }
}
