// Settings of the site's privacy policy (/privacy, /id/privacy), read when the site is built:
// a change to these variables shows after the next deployment.
// No imports, so `node --test` can load it directly.

/** The date of the current wording (YYYY-MM-DD). */
export const PRIVACY_UPDATED = '2026-10-01'

/** "DRAF — perlu ditinjau" shows until LEGAL_DOCS_FINAL is "true" (as in the investor portal). */
export function legalDocsFinal(env: Record<string, string | undefined> = process.env): boolean {
  return env.LEGAL_DOCS_FINAL?.trim() === 'true'
}

/** Email address for privacy requests, from SITE_PRIVACY_CONTACT; null sends people to the contact form. */
export function privacyContact(env: Record<string, string | undefined> = process.env): string | null {
  const value = env.SITE_PRIVACY_CONTACT?.trim()
  return value && /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/.test(value) ? value : null
}
