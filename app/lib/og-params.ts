// The language of an Open Graph image route (params may arrive as a promise or a plain object).
import { type Lang, isLang } from '@/app/i18n/paths'

export async function ogLang(params: Promise<{ lang: string }> | { lang: string }): Promise<Lang> {
  const { lang } = await params
  return isLang(lang) ? lang : 'en'
}
