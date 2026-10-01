'use client'

// The contact form, in a dialog opened by "Pitch your idea" (Hero) and "Get in touch" (Cta).
// It posts to /api/contact. Whatever happens, what was typed stays in the form until it is sent.
import { type FormEvent, type ReactNode, useEffect, useRef, useState } from 'react'
import type { Dictionary } from '@/app/i18n'
import { CONTACT_KINDS, CONTACT_MESSAGES, type ContactField, type ContactKind, LINKEDIN_URL } from '../lib/contact'
import { CloseIcon } from './icons'

const OPEN_EVENT = 'smv:open-contact'

/** Opens the contact dialog, optionally with "what is this about" chosen. */
export function openContact(kind?: ContactKind) {
  window.dispatchEvent(new CustomEvent(OPEN_EVENT, { detail: { kind } }))
}

/** A button that opens the contact dialog; styling is the caller's. */
export function ContactButton({ kind, className, children }: { kind?: ContactKind; className: string; children: ReactNode }) {
  return (
    <button type="button" onClick={() => openContact(kind)} className={className}>
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

const label = 'mb-1.5 block text-[13px] font-semibold text-muted'
const input =
  'block w-full min-h-11 rounded-control border border-line-control bg-surface px-3 text-[15px] text-ink ' +
  'focus:border-brand-600 focus:outline-2 focus:outline-offset-1 focus:outline-brand-600 aria-[invalid=true]:border-danger-700'
const fieldError = 'mt-1 text-xs text-danger-700'

export default function ContactForm({ t }: { t: Dictionary['contact'] }) {
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
      className="fixed inset-0 z-[200] flex items-center justify-center bg-brand-900/55 p-4"
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-title"
        className="max-h-[calc(100vh-32px)] w-full max-w-[520px] overflow-y-auto rounded-card bg-surface px-6 py-7 shadow-2xl sm:px-8"
      >
        <div className="mb-1.5 flex items-start justify-between gap-3">
          <h2 id="contact-title" className="m-0 text-2xl font-extrabold tracking-[-0.02em] text-ink">
            {t.title}
          </h2>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label={t.close}
            className="-mt-2 -mr-2 inline-flex size-11 shrink-0 items-center justify-center rounded-control text-subtle hover:bg-surface-muted hover:text-ink"
          >
            <CloseIcon size={20} />
          </button>
        </div>
        <p className="mb-5 text-sm leading-relaxed text-subtle">{t.intro}</p>

        {status.state === 'sent' ? (
          <div role="status" className="rounded-note bg-brand-50 px-4 py-3.5 text-sm leading-relaxed text-brand-900">
            {status.message}
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="flex flex-col gap-4">
            <div>
              <label htmlFor="contact-name" className={label}>{t.name}</label>
              <input id="contact-name" ref={firstFieldRef} value={values.name} onChange={set('name')} autoComplete="name" required maxLength={100} className={input} aria-invalid={Boolean(errors.name)} />
              {errors.name && <p className={fieldError}>{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className={label}>{t.email}</label>
              <input id="contact-email" type="email" value={values.email} onChange={set('email')} autoComplete="email" required maxLength={200} className={input} aria-invalid={Boolean(errors.email)} />
              {errors.email && <p className={fieldError}>{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="contact-organisation" className={label}>
                {t.organisation} <span className="font-normal text-subtle">{t.optional}</span>
              </label>
              <input id="contact-organisation" value={values.organisation} onChange={set('organisation')} autoComplete="organization" maxLength={150} className={input} aria-invalid={Boolean(errors.organisation)} />
              {errors.organisation && <p className={fieldError}>{errors.organisation}</p>}
            </div>
            <div>
              <label htmlFor="contact-kind" className={label}>{t.kind}</label>
              <select id="contact-kind" value={values.kind} onChange={set('kind')} required className={input} aria-invalid={Boolean(errors.kind)}>
                <option value="" disabled>
                  {t.chooseOne}
                </option>
                {CONTACT_KINDS.map((k) => (
                  <option key={k} value={k}>
                    {t.kinds[k]}
                  </option>
                ))}
              </select>
              {errors.kind && <p className={fieldError}>{errors.kind}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className={label}>{t.message}</label>
              <textarea id="contact-message" value={values.message} onChange={set('message')} required rows={5} maxLength={5000} className={`${input} resize-y py-3`} aria-invalid={Boolean(errors.message)} />
              {errors.message && <p className={fieldError}>{errors.message}</p>}
            </div>
            {/* Honeypot: hidden from people and screen readers; bots fill it in. */}
            <div aria-hidden="true" className="absolute -left-[10000px] size-px overflow-hidden">
              <label htmlFor="contact-website">{t.website}</label>
              <input id="contact-website" tabIndex={-1} autoComplete="off" value={values.website} onChange={set('website')} />
            </div>

            {status.state === 'error' && (
              <div role="alert" className="rounded-note bg-danger-50 px-3.5 py-3 text-[13px] leading-relaxed text-danger-700">
                {status.message}
                {status.linkedIn && (
                  <>
                    {' '}
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 underline underline-offset-2">
                      {t.openLinkedIn}
                    </a>
                  </>
                )}
              </div>
            )}

            <button
              type="submit"
              disabled={status.state === 'sending'}
              className="inline-flex min-h-11 items-center justify-center rounded-control bg-brand-700 px-[18px] text-sm font-bold text-white hover:bg-brand-900 disabled:cursor-wait disabled:opacity-70"
            >
              {status.state === 'sending' ? t.sending : t.send}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
