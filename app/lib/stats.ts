// The four cells of the home statistics (docs/desain/layar/Situs-Beranda.html). The number of
// active ventures and the number of industries (distinct sectors) are computed from the listed
// ventures, so hiding or showing a venture changes both. "First company built" and "people
// employed" appear only once filled in (app/data/site.ts), each taking the place of one of the
// other figures (industries, hands-on involvement). No imports, so `node --test` can load it.

export type StatKey = 'ventures' | 'firstCompany' | 'people' | 'industries' | 'handsOn' | 'market'
export type Stat = { key: StatKey; value: string }

/** Distinct sectors: the part of the English tag before " · " ("PropTech · Design & Build" → "PropTech"). */
export function sectorCount(listed: { tag: { en: string } }[]): number {
  return new Set(listed.map((v) => v.tag.en.split(' · ')[0].trim())).size
}

export function homeStats(
  listed: { tag: { en: string } }[],
  facts: { firstCompanyYear: number | null; peopleEmployed: number | null },
): Stat[] {
  const filledIn: Stat[] = []
  if (facts.firstCompanyYear) filledIn.push({ key: 'firstCompany', value: String(facts.firstCompanyYear) })
  if (facts.peopleEmployed) filledIn.push({ key: 'people', value: String(facts.peopleEmployed) })
  const existing: Stat[] = [
    { key: 'industries', value: String(sectorCount(listed)) },
    { key: 'handsOn', value: '100%' },
  ]
  return [
    { key: 'ventures', value: String(listed.length) },
    ...filledIn,
    ...existing.slice(0, 2 - filledIn.length),
    { key: 'market', value: 'ID' },
  ]
}
