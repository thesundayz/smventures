// The site's languages: English at / (no prefix) and Indonesian at /id. Server components look
// the copy up here and hand client components only the strings they show (client components
// import from ./paths, so the dictionaries stay out of the browser bundle).
import { en, type Dictionary } from './en'
import { id } from './id'
import type { Lang } from './paths'

export { LANGS, type Lang, fmt, isLang, localePath, stripLang } from './paths'
export type { Dictionary }

const dictionaries: Record<Lang, Dictionary> = { en, id }

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang]
}
