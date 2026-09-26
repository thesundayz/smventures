// POST /api/contact: the contact form. Validated here (not only in the browser), with a
// honeypot and a per-IP limit, then emailed through Resend to CONTACT_TO with the sender as
// reply-to. Until RESEND_API_KEY and CONTACT_TO are set, it says so (503) and sends nothing;
// the form keeps what was typed and points to LinkedIn.
import { CONTACT_MESSAGES, RateLimiter, contactEmail, validateContact } from '@/app/lib/contact'

export const dynamic = 'force-dynamic'

const FROM = 'SMVentures Website <noreply@mail.smventures.id>'
const limiter = new RateLimiter(5, 10 * 60 * 1000)

const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } })

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || request.headers.get('x-real-ip') || 'unknown'
  const wait = limiter.hit(ip)
  if (wait > 0) {
    return json({ ok: false, reason: 'rate_limited', message: CONTACT_MESSAGES.rateLimited(wait) }, 429, { 'Retry-After': String(wait) })
  }

  let body: unknown
  try {
    body = await request.json()
  } catch {
    return json({ ok: false, reason: 'invalid', message: CONTACT_MESSAGES.invalid, errors: {} }, 400)
  }
  const result = validateContact(body)
  if (!result.ok) return json({ ok: false, reason: 'invalid', message: CONTACT_MESSAGES.invalid, errors: result.errors }, 400)
  if (result.spam) return json({ ok: true, message: CONTACT_MESSAGES.sent })

  const apiKey = process.env.RESEND_API_KEY?.trim()
  const to = process.env.CONTACT_TO?.trim()
  if (!apiKey || !to) return json({ ok: false, reason: 'not_configured', message: CONTACT_MESSAGES.notConfigured }, 503)

  const email = contactEmail(result.value, new Date())
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: FROM,
        to: [to],
        reply_to: result.value.email,
        subject: email.subject,
        text: email.text,
        html: email.html,
        tags: [{ name: 'category', value: 'contact' }],
      }),
    })
    if (!response.ok) throw new Error(`Resend answered ${response.status}`)
  } catch (error) {
    // Logged without the message or the sender's details.
    console.error(JSON.stringify({ event: 'contact_send_failed', error: error instanceof Error ? error.message : 'unknown' }))
    return json({ ok: false, reason: 'failed', message: CONTACT_MESSAGES.failed }, 502)
  }
  return json({ ok: true, message: CONTACT_MESSAGES.sent })
}
