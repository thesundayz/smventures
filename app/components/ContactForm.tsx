'use client'

// The contact form, in a dialog opened by "Pitch your idea" (Hero) and "Get in touch" (Cta).
// It posts to /api/contact. Whatever happens, what was typed stays in the form until it is sent.
import { type CSSProperties, type FormEvent, type ReactNode, useEffect, useRef, useState } from 'react'
import { CONTACT_KINDS, CONTACT_MESSAGES, type ContactField, type ContactKind, KIND_LABELS, LINKEDIN_URL } from '../lib/contact'

const OPEN_EVENT = 'smv:open-contact'

/** Opens the contact dialog, optionally with "what is this about" chosen. */
export function openContact(kind?: ContactKind) {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { kind } }))
}

/** A button that opens the contact dialog; styling is the caller's. */
export function ContactButton({ kind, style, children }: { kind?: ContactKind; style: CSSProperties; children: ReactNode }) {
  return (
    <button type="button" onClick={() => openContact(kind)} style={style}>
      {children}
    </button>
  )
}

type Status =
  | { state: 'idle' }
  | { state: 'sending' }
  | { state: 'sent'; message: string }
  | { state: 'error'; message: string; linkedIn: boolean }

const EMPTY = { name: '', email: '', organisation: '', kind: '', message: '', website: '' }

const label: CSSProperties = { display: 'block', fontSize: 13, fontWeight: 500, color: '#171717', marginBottom: 6 }
const input: CSSProperties = {
  width: '100%', fontSize: 14, padding: '10px 12px', borderRadius: 8, border: '1px solid #ddd',
  fontFamily: 'inherit', color: '#171717', background: '#fff',
}
const fieldError: CSSProperties = { fontSize: 12, color: '#B42318', marginTop: 4 }

export default function ContactForm() {
  const [open, setOpen] = useState(false)
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({})
  const [status, setStatus] = useState<Status>({ state: 'idle' })
  const firstFieldRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onOpen = (event: Event) => {
      const kind = (event as CustomEvent<{ kind?: ContactKind }>).detail?.kind
      setValues((v) => (kind && !v.kind ? { ...v, kind } : v))
      setStatus((s) => (s.state === 'sent' ? { state: 'idle' } : s))
      setOpen(true)
    }
    window.addEventListener(OPEN_EVENT, onOpen)
    return () => window.removeEventListener(OPEN_EVENT, onOpen)
  }, [])

  useEffect(() => {
    if (!open) return
    firstFieldRef.current?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    const overflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = overflow
    }
  }, [open])

  const set = (field: keyof typeof EMPTY) => (event: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [field]: event.target.value }))
    setErrors((e) => ({ ...e, [field]: undefined }))
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    setStatus({ state: 'sending' })
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const body = (await response.json().catch(() => ({}))) as {
        ok?: boolean
        reason?: string
        message?: string
        errors?: Partial<Record<ContactField, string>>
      }
      if (response.ok && body.ok) {
        setValues(EMPTY)
        setErrors({})
        setStatus({ state: 'sent', message: body.message ?? CONTACT_MESSAGES.sent })
        return
      }
      if (body.reason === 'invalid') setErrors(body.errors ?? {})
      setStatus({
        state: 'error',
        message: body.message ?? CONTACT_MESSAGES.failed,
        linkedIn: body.reason === 'not_configured' || body.reason === 'failed' || !body.reason,
      })
    } catch {
      setStatus({ state: 'error', message: CONTACT_MESSAGES.failed, linkedIn: true })
    }
  }

  if (!open) return null

  return (
    <div
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false)
      }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200, background: 'rgba(4,52,44,0.55)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        style={{
          background: '#fff', borderRadius: 14, width: '100%', maxWidth: 520, maxHeight: 'calc(100vh - 32px)',
          overflowY: 'auto', padding: '28px 24px', boxShadow: '0 20px 60px rgba(0,0,0,0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 6 }}>
          <h2 id="contact-title" style={{ fontSize: 22, fontWeight: 600, letterSpacing: -0.4, color: '#171717', margin: 0 }}>
            Let&#39;s talk
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#666' }}
          >
            <i className="ti ti-x" style={{ fontSize: 20 }} />
          </button>
        </div>
        <p style={{ fontSize: 14, color: '#666', lineHeight: 1.6, margin: '0 0 20px' }}>
          Tell us a bit about yourself and what you have in mind. No deck required.
        </p>

        {status.state === 'sent' ? (
          <div role="status" style={{ background: '#E1F5EE', color: '#04342C', borderRadius: 8, padding: '14px 16px', fontSize: 14, lineHeight: 1.6 }}>
            {status.message}
          </div>
        ) : (
          <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div>
              <label htmlFor="contact-name" style={label}>Name</label>
              <input id="contact-name" ref={firstFieldRef} value={values.name} onChange={set('name')} autoComplete="name" required maxLength={100} style={input} aria-invalid={Boolean(errors.name)} />
              {errors.name && <p style={fieldError}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" style={label}>Email</label>
              <input id="contact-email" type="email" value={values.email} onChange={set('email')} autoComplete="email" required maxLength={200} style={input} aria-invalid={Boolean(errors.email)} />
              {errors.email && <p style={fieldError}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="contact-organisation" style={label}>
                Organisation <span style={{ fontWeight: 400, color: '#999' }}>(optional)</span>
              </label>
              <input id="contact-organisation" value={values.organisation} onChange={set('organisation')} autoComplete="organization" maxLength={150} style={input} aria-invalid={Boolean(errors.organisation)} />
              {errors.organisation && <p style={fieldError}>{errors.organisation}</p>}
            </div>
            <div>
              <label htmlFor="contact-kind" style={label}>What is this about?</label>
              <select id="contact-kind" value={values.kind} onChange={set('kind')} required style={input} aria-invalid={Boolean(errors.kind)}>
                <option value="" disabled>
                  Choose one
                </option>
                {CONTACT_KINDS.map((k) => (
                  <option key={k} value={k}>
                    {KIND_LABELS[k]}
                  </option>
                ))}
              </select>
              {errors.kind && <p style={fieldError}>{errors.kind}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" style={label}>Message</label>
              <textarea id="contact-message" value={values.message} onChange={set('message')} required rows={5} maxLength={5000} style={{ ...input, resize: 'vertical' }} aria-invalid={Boolean(errors.message)} />
              {errors.message && <p style={fieldError}>{errors.message}</p>}
            </div>
            {/* Honeypot: hidden from people and screen readers; bots fill it in. */}
            <div aria-hidden="true" style={{ position: 'absolute', left: -10000, width: 1, height: 1, overflow: 'hidden' }}>
              <label htmlFor="contact-website">Website</label>
              <input id="contact-website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
            </div>

            {status.state === 'error' && (
              <div role="alert" style={{ background: '#FEF3F2', color: '#912018', borderRadius: 8, padding: '12px 14px', fontSize: 13, lineHeight: 1.6 }}>
                {status.message}
                {status.linkedIn && (
                  <>
                    {' '}
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" style={{ color: '#0A6650', fontWeight: 500 }}>
                      Open LinkedIn
                    </a>
                  </>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={status.state === 'sending'}
              style={{
                background: '#0A6650', color: '#E1F5EE', padding: '12px 20px', borderRadius: 8, fontSize: 14,
                fontWeight: 500, border: 'none', cursor: status.state === 'sending' ? 'wait' : 'pointer', fontFamily: 'inherit',
                opacity: status.state === 'sending' ? 0.7 : 1,
              }}
            >
              {status.state === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
