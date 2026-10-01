// Markup rules from docs/desain/README.md: colours only from the tokens in app/globals.css
// (no hex values or inline styles in components), no icon webfont, the securities disclaimer in
// the footer, and "Login as Investor" always pointing at the portal's login page.
import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { en } from '../app/i18n/en.ts'
import { INVESTOR_LOGIN } from '../app/lib/links.ts'

function files(dir, ext) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return files(path, ext)
    return path.endsWith(ext) ? [path] : []
  })
}

// Generated images (next/og) cannot use Tailwind classes; they take colours from app/lib/tokens.ts.
const markup = files('app', '.tsx').filter((f) => !/opengraph-image|og-image/.test(f))

describe('markup', () => {
  it('uses no hex colours and no inline styles', () => {
    for (const file of markup) {
      const source = readFileSync(file, 'utf8')
      assert.doesNotMatch(source, /(?<![\w/&])#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{3})\b/, file)
      assert.doesNotMatch(source, /\sstyle=\{/, file)
    }
  })

  it('loads no icon webfont or stylesheet from a CDN', () => {
    for (const file of markup) assert.doesNotMatch(readFileSync(file, 'utf8'), /tabler|cdn\.jsdelivr|className="ti /, file)
  })

  it('says in the footer that nothing is an offer of securities', () => {
    assert.match(en.footer.disclaimer, /Nothing on this site is an offer of securities\./)
    assert.match(readFileSync('app/components/Footer.tsx', 'utf8'), /\{t\.disclaimer\}/)
  })

  it('sends "Login as Investor" to the portal login', () => {
    assert.equal(INVESTOR_LOGIN, 'https://investor.smventures.id/login')
    for (const file of markup) {
      const source = readFileSync(file, 'utf8')
      if (/t\.login|labels\.login/.test(source)) assert.match(source, /href=\{INVESTOR_LOGIN\}/, file)
    }
  })

  it('never says "harga saham" or shows a valuation', () => {
    const copy = JSON.stringify(en)
    assert.doesNotMatch(copy, /harga saham|valuation|valuasi/i)
  })
})
