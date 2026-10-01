// The site's privacy policy (/privacy, /id/privacy): draft marker, contact address from the
// environment, and what it says about the contact form matching the form itself.
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { en } from '../app/i18n/en.ts'
import { id } from '../app/i18n/id.ts'
import { legalDocsFinal, privacyContact } from '../app/lib/legal.ts'
import { validateContact } from '../app/lib/contact.ts'

describe('privacy policy', () => {
  it('stays marked as a draft until LEGAL_DOCS_FINAL is "true"', () => {
    assert.equal(legalDocsFinal({}), false)
    assert.equal(legalDocsFinal({ LEGAL_DOCS_FINAL: 'yes' }), false)
    assert.equal(legalDocsFinal({ LEGAL_DOCS_FINAL: 'true' }), true)
    assert.equal(id.privacy.draft, 'DRAF — perlu ditinjau')
    assert.match(readFileSync('app/components/PrivacyPage.tsx', 'utf8'), /\{!final && \(/)
  })

  it('takes the contact address from SITE_PRIVACY_CONTACT, or sends people to the contact form', () => {
    assert.equal(privacyContact({}), null)
    assert.equal(privacyContact({ SITE_PRIVACY_CONTACT: 'not an email' }), null)
    assert.equal(privacyContact({ SITE_PRIVACY_CONTACT: ' privacy@example.test ' }), 'privacy@example.test')
    assert.match(readFileSync('app/components/PrivacyPage.tsx', 'utf8'), /<ContactButton kind="other"/)
  })

  it('lists exactly the fields the contact form sends', () => {
    const r = validateContact({ name: 'A', email: 'a@example.test', organisation: 'O', kind: 'other', message: 'A long enough message.' })
    assert.equal(r.ok, true)
    assert.equal(en.privacy.collect.items.length, Object.keys(r.value).length)
    assert.equal(id.privacy.collect.items.length, Object.keys(r.value).length)
    assert.match(JSON.stringify(en.privacy.processors), /Resend/)
    assert.match(en.privacy.analytics.title, /Google Analytics/)
  })

  it('is linked from the footer and next to the form’s send button', () => {
    assert.match(readFileSync('app/components/Footer.tsx', 'utf8'), /localePath\(lang, '\/privacy'\)/)
    assert.match(readFileSync('app/components/ContactForm.tsx', 'utf8'), /\{consent\.link\}[\s\S]*?<button\s+type="submit"/)
    assert.match(en.privacy.consent, /\{link\}/)
    assert.match(id.privacy.consent, /\{link\}/)
  })

  it('has no cookie banner (left to the legal review)', () => {
    for (const file of ['app/[lang]/layout.tsx', 'app/components/Footer.tsx']) assert.doesNotMatch(readFileSync(file, 'utf8'), /cookie/i, file)
  })
})
