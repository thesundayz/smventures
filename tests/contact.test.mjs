// The contact form's rules (app/lib/contact.ts), run with Node's own test runner:
// `npm test` (Node strips the TypeScript types itself; no test framework is installed).
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { CONTACT_MESSAGES, RateLimiter, contactEmail, validateContact } from '../app/lib/contact.ts'

const good = { name: 'Ana', email: 'ana@example.test', organisation: '', kind: 'pitch', message: 'A legal tech idea for SMEs.', website: '' }

describe('validation', () => {
  it('accepts a complete message and trims it', () => {
    const r = validateContact({ ...good, name: '  Ana  ', organisation: '  PT Contoh ' })
    assert.equal(r.ok, true)
    assert.deepEqual(r.value, { name: 'Ana', email: 'ana@example.test', organisation: 'PT Contoh', kind: 'pitch', message: 'A legal tech idea for SMEs.' })
    assert.equal(r.spam, false)
  })

  it('explains every missing or wrong field', () => {
    const r = validateContact({ name: '', email: 'not-an-email', kind: 'lottery', message: 'hi' })
    assert.equal(r.ok, false)
    assert.deepEqual(Object.keys(r.errors).sort(), ['email', 'kind', 'message', 'name'])
    assert.equal(validateContact(null).ok, false)
    assert.equal(validateContact({ ...good, message: 'x'.repeat(5001) }).ok, false)
    assert.equal(validateContact({ ...good, organisation: 'x'.repeat(151) }).ok, false)
  })

  it('flags a filled honeypot as spam', () => {
    assert.equal(validateContact({ ...good, website: 'http://spam.example' }).spam, true)
  })
})

describe('rate limit', () => {
  it('allows 5 per window per address, then says how long to wait', () => {
    const limiter = new RateLimiter(5, 600_000)
    const t = 1_000_000_000
    for (let i = 0; i < 5; i++) assert.equal(limiter.hit('203.0.113.9', t), 0)
    assert.equal(limiter.hit('203.0.113.9', t), Math.ceil((Math.floor(t / 600_000) * 600_000 + 600_000 - t) / 1000))
    assert.equal(limiter.hit('198.51.100.7', t), 0)
    assert.equal(limiter.hit('203.0.113.9', t + 600_000), 0)
  })
})

describe('the email to SMVentures', () => {
  it('names the sender and escapes what they typed', () => {
    const e = contactEmail({ name: 'Ana <b>', email: 'ana@example.test', organisation: null, kind: 'partnership', message: '<script>x</script>' }, new Date('2026-09-27T01:00:00Z'))
    assert.equal(e.subject, '[smventures.id] Partnership: Ana <b>')
    assert.match(e.text, /Email: ana@example\.test/)
    assert.doesNotMatch(e.html, /<script>/)
    assert.match(e.html, /&lt;script&gt;/)
  })
})

describe('the route', () => {
  const route = readFileSync('app/api/contact/route.ts', 'utf8')
  it('limits per IP, validates on the server, drops spam, and needs RESEND_API_KEY and CONTACT_TO', () => {
    assert.match(route, /const wait = limiter\.hit\(ip\)/)
    assert.match(route, /const result = validateContact\(body\)/)
    assert.match(route, /if \(result\.spam\) return json/)
    assert.match(route, /if \(!apiKey \|\| !to\) return json\(\{ ok: false, reason: 'not_configured'/)
    assert.match(route, /reply_to: result\.value\.email/)
    assert.match(route, /to: \[to\]/)
  })

  it('tells people politely when it is not active, and points to LinkedIn in the footer', () => {
    assert.match(CONTACT_MESSAGES.notConfigured, /isn’t switched on yet/)
    assert.match(CONTACT_MESSAGES.notConfigured, /LinkedIn/)
    assert.match(CONTACT_MESSAGES.notConfigured, /footer/)
  })

  it('both buttons open the form', () => {
    assert.match(readFileSync('app/components/Hero.tsx', 'utf8'), /onClick=\{\(\) => openContact\('pitch'\)\}[\s\S]*?Pitch your idea/)
    assert.match(readFileSync('app/components/Cta.tsx', 'utf8'), /<ContactButton[\s\S]*?Get in touch/)
  })
})
