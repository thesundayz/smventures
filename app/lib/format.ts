// Display formatting per language. No imports, so `node --test` can load it directly.

const LOCALES = { en: 'en-GB', id: 'id-ID' } as const

/** "2024" stays "2024"; "2024-06" becomes "June 2024" / "Juni 2024". */
export function formatFounded(value: string, lang: 'en' | 'id'): string {
  const match = /^(\d{4})(?:-(\d{2}))?$/.exec(value)
  if (!match) return value
  const [, year, month] = match
  if (!month) return year
  const date = new Date(Date.UTC(Number(year), Number(month) - 1, 1))
  return new Intl.DateTimeFormat(LOCALES[lang], { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(date)
}
