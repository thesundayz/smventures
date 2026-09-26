// The contact form's rules, shared by the form (app/components/ContactForm.tsx) and the route
// handler (app/api/contact/route.ts). No imports, so `node --test` can load it directly.

export const CONTACT_KINDS = ['pitch', 'partnership', 'investor', 'other'] as const
export type ContactKind = (typeof CONTACT_KINDS)[number]

export const KIND_LABELS: Record<ContactKind, string> = {
  pitch: 'Pitch an idea',
  partnership: 'Partnership',
  investor: 'Investor',
  other: 'Something else',
}

export const LINKEDIN_URL = 'https://www.linkedin.com/company/smventures'

export type ContactMessage = {
  name: string
  email: string
  organisation: string | null
  kind: ContactKind
  message: string
}

export type ContactField = 'name' | 'email' | 'organisation' | 'kind' | 'message'
export type ValidationResult =
  | { ok: true; value: ContactMessage; spam: boolean }
  | { ok: false; errors: Partial<Record<ContactField, string>> }

const LIMITS = { name: 100, email: 200, organisation: 150, messageMin: 10, messageMax: 5000 }
const EMAIL = /^[^\s@<>()",;:]+@[^\s@<>()",;:]+\.[^\s@<>()",;:]{2,}$/

const text = (value: unknown) => (typeof value === 'string' ? value.trim() : '')

/**
 * Checks what the browser sent. `website` is the honeypot: people never see it, so a filled one
 * marks a bot (the message is then dropped, and the bot is told it worked).
 */
export function validateContact(input: unknown): ValidationResult {
  const body = (input && typeof input === 'object' ? input : {}) as Record<string, unknown>
  const name = text(body.name)
  const email = text(body.email)
  const organisation = text(body.organisation)
  const kind = text(body.kind)
  const message = text(body.message)
  const errors: Partial<Record<ContactField, string>> = {}

  if (!name) errors.name = 'Please tell us your name.'
  else if (name.length > LIMITS.name) errors.name = `Please keep your name under ${LIMITS.name} characters.`
  if (!email) errors.email = 'Please add your email so we can reply.'
  else if (email.length > LIMITS.email || !EMAIL.test(email)) errors.email = 'That email address doesn’t look right.'
  if (organisation.length > LIMITS.organisation) errors.organisation = `Please keep this under ${LIMITS.organisation} characters.`
  if (!(CONTACT_KINDS as readonly string[]).includes(kind)) errors.kind = 'Please choose what this is about.'
  if (message.length < LIMITS.messageMin) errors.message = 'Please write a little more about what you have in mind.'
  else if (message.length > LIMITS.messageMax) errors.message = `Please keep your message under ${LIMITS.messageMax} characters.`

  if (Object.keys(errors).length > 0) return { ok: false, errors }
  return {
    ok: true,
    spam: text(body.website) !== '',
    value: { name, email, organisation: organisation || null, kind: kind as ContactKind, message },
  }
}

/**
 * Fixed-window counter per client IP, kept in the function instance's memory. Vercel reuses
 * instances, so it stops floods from one address; it is not a global limit across instances.
 */
export class RateLimiter {
  private readonly hits = new Map<string, { windowStart: number; count: number }>()
  private readonly limit: number
  private readonly windowMs: number

  constructor(limit: number, windowMs: number) {
    this.limit = limit
    this.windowMs = windowMs
  }

  /** Counts one request; returns the seconds to wait when over the limit, or 0 when allowed. */
  hit(key: string, now: number = Date.now()): number {
    const windowStart = Math.floor(now / this.windowMs) * this.windowMs
    const entry = this.hits.get(key)
    const count = entry && entry.windowStart === windowStart ? entry.count + 1 : 1
    this.hits.set(key, { windowStart, count })
    if (this.hits.size > 10_000) {
      for (const [k, v] of this.hits) if (v.windowStart < windowStart) this.hits.delete(k)
    }
    return count > this.limit ? Math.max(1, Math.ceil((windowStart + this.windowMs - now) / 1000)) : 0
  }
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!)

/** The email to the SMVentures inbox; replying goes straight to the sender. */
export function contactEmail(m: ContactMessage, receivedAt: Date) {
  const subject = `[smventures.id] ${KIND_LABELS[m.kind]}: ${m.name}${m.organisation ? ` (${m.organisation})` : ''}`
  const fields: [string, string][] = [
    ['Name', m.name],
    ['Email', m.email],
    ['Organisation', m.organisation ?? '—'],
    ['About', KIND_LABELS[m.kind]],
    ['Received', `${receivedAt.toISOString()} (UTC)`],
  ]
  const text = `${fields.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\n${m.message}\n`
  const html =
    `<table style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse">` +
    fields.map(([k, v]) => `<tr><td style="padding:2px 12px 2px 0;color:#666">${k}</td><td>${escapeHtml(v)}</td></tr>`).join('') +
    `</table><p style="font-family:Arial,sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(m.message)}</p>`
  return { subject, text, html }
}

/** The polite answers the form shows (English, like the site). */
export const CONTACT_MESSAGES = {
  sent: 'Thank you — your message is on its way. We’ll reply by email.',
  notConfigured:
    'Our contact form isn’t switched on yet, so nothing was sent. Please reach us on LinkedIn instead (the link is in the footer) — your message is still here to copy.',
  failed:
    'Sorry, we couldn’t send your message just now, so nothing was sent. Please try again in a few minutes, or reach us on LinkedIn (the link is in the footer).',
  rateLimited: (seconds: number) =>
    `That’s a lot of messages in a short time. Please wait about ${seconds} seconds and try again — your message is still here.`,
  invalid: 'Please check the highlighted fields.',
} as const
