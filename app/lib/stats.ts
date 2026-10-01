// The four cells of the home statistics (docs/desain/layar/Situs-Beranda.html). The venture count
// is computed from the listed ventures; "first company built" and "people employed" appear only
// once filled in (app/data/site.ts), each taking the place of one of the figures the site already
// showed before (industries, hands-on involvement). No imports, so `node --test` can load it.

export type StatKey = 'ventures' | 'firstCompany' | 'people' | 'industries' | 'handsOn' | 'market'
export type Stat = { key: StatKey; value: string }

export function homeStats(
  listedVentureCount: number,
  facts: { firstCompanyYear: number | null; peopleEmployed: number | null },
): Stat[] {
  const filledIn: Stat[] = []
  if (facts.firstCompanyYear) filledIn.push({ key: 'firstCompany', value: String(facts.firstCompanyYear) })
  if (facts.peopleEmployed) filledIn.push({ key: 'people', value: String(facts.peopleEmployed) })
  const existing: Stat[] = [
    { key: 'industries', value: '5+' },
    { key: 'handsOn', value: '100%' },
  ]
  return [
    { key: 'ventures', value: String(listedVentureCount) },
    ...filledIn,
    ...existing.slice(0, 2 - filledIn.length),
    { key: 'market', value: 'ID' },
  ]
}
