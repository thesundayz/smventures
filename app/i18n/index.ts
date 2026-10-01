// The site's dictionaries. Server components look the copy up here and hand client components
// only the strings they show.
import { en, type Dictionary } from './en'

export type Lang = 'en'
export type { Dictionary }

const dictionaries: Record<Lang, Dictionary> = { en }

export function getDictionary(lang: Lang = 'en'): Dictionary {
  return dictionaries[lang]
}

/** Fills `{name}` placeholders: fmt('© {year} SMVentures', { year: 2026 }). */
export function fmt(text: string, values: Record<string, string | number>): string {
  return text.replace(/\{(\w+)\}/g, (match, key: string) => (key in values ? String(values[key]) : match))
}
