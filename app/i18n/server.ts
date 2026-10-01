// Reading the language from the route: /[lang]/… is always "en" or "id" (other values are a 404).
import { notFound } from 'next/navigation'
import { type Lang, isLang } from './paths'

export async function langFrom(params: Promise<{ lang: string }>): Promise<Lang> {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return lang
}
