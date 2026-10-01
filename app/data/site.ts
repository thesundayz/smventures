// Facts about SMVentures itself that the site shows only once they are filled in (null = hidden).
// No imports, so `node --test` can load this file directly.
export const siteFacts: {
  /** Year the first SMVC company was built, e.g. 2024; shown in the home statistics. */
  firstCompanyYear: number | null
  /** Number of people employed across SMVC companies; shown in the home statistics. */
  peopleEmployed: number | null
} = {
  firstCompanyYear: null,
  peopleEmployed: null,
}
