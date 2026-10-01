// Canonical URL and hreflang alternates for a page in each language it exists in.
import type { Metadata } from 'next'
import { LANGS, type Lang, localePath } from '@/app/i18n'

export function alternates(lang: Lang, path: string, langs: readonly Lang[] = LANGS): NonNullable<Metadata['alternates']> {
  const languages: Record<string, string> = {}
  for (const l of langs) languages[l] = localePath(l, path)
  if (langs.includes('en')) languages['x-default'] = localePath('en', path)
  return { canonical: localePath(lang, path), languages }
}
