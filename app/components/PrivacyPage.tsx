// /privacy (no mockup): what the contact form collects and why, who processes it, how long it is
// kept, Google Analytics, rights under UU PDP, and how to reach us. Marked as a draft until
// LEGAL_DOCS_FINAL is "true".
import type { ReactNode } from 'react'
import type { Dictionary, Lang } from '@/app/i18n'
import { fmt } from '@/app/i18n/paths'
import { formatDate } from '@/app/lib/format'
import { PRIVACY_UPDATED } from '@/app/lib/legal'
import { PORTAL_PRIVACY } from '@/app/lib/links'
import { ContactButton } from './ContactForm'
import { ArrowRightIcon } from './icons'
import { Container, Kicker, buttonClass } from './ui'

const GA_OPT_OUT = 'https://tools.google.com/dlpage/gaoptout'

function Clause({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="border-t border-line-strong pt-6">
      <h2 className="text-xl font-bold text-ink">{title}</h2>
      <div className="mt-3 flex flex-col gap-3 text-muted">{children}</div>
    </section>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-1.5 pl-6 marker:text-brand-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

const textLink = 'font-semibold text-brand-700 underline underline-offset-2 hover:text-brand-900'

export default function PrivacyPage({ t, lang, final, contact }: { t: Dictionary['privacy']; lang: Lang; final: boolean; contact: string | null }) {
  const [beforeEmail, afterEmail] = t.contact.withEmail.split('{email}')
  return (
    <main>
      <Container className="pt-12 pb-16 md:pt-[88px] md:pb-[88px]">
        <article className="max-w-[72ch]">
          {!final && (
            <div role="note" className="mb-8 rounded-note border border-warn-700/30 bg-warn-50 px-4 py-3 text-warn-700">
              <p className="text-sm font-extrabold tracking-[0.06em] uppercase">{t.draft}</p>
              <p className="mt-1 text-[13px]">{t.draftNote}</p>
            </div>
          )}
          <Kicker>{t.kicker}</Kicker>
          <h1 className="mt-4 text-[40px] leading-[1.05] font-extrabold tracking-[-0.03em] text-ink md:text-[52px]">{t.title}</h1>
          <p className="mt-3 font-mono text-[13px] text-subtle">{fmt(t.updated, { date: formatDate(PRIVACY_UPDATED, lang) })}</p>

          <div className="mt-10 flex flex-col gap-8">
            <Clause title={t.who.title}>
              <p>{fmt(t.who.text, { controller: t.controller })}</p>
            </Clause>
            <Clause title={t.collect.title}>
              <p>{t.collect.intro}</p>
              <List items={t.collect.items} />
              <p>{t.collect.technical}</p>
            </Clause>
            <Clause title={t.purpose.title}>
              <p>{t.purpose.text}</p>
            </Clause>
            <Clause title={t.processors.title}>
              <List items={t.processors.items} />
              <p>{t.processors.transfer}</p>
            </Clause>
            <Clause title={t.retention.title}>
              <List items={t.retention.items} />
            </Clause>
            <Clause title={t.analytics.title}>
              <p>{t.analytics.text}</p>
              <p>
                <a href={GA_OPT_OUT} target="_blank" rel="noopener noreferrer" className={textLink}>
                  {t.analytics.optOut}
                </a>
              </p>
            </Clause>
            <Clause title={t.rights.title}>
              <p>{t.rights.intro}</p>
              <List items={t.rights.items} />
            </Clause>
            <Clause title={t.contact.title}>
              {contact ? (
                <p>
                  {beforeEmail}
                  <a href={`mailto:${contact}`} className={textLink}>
                    {contact}
                  </a>
                  {afterEmail}
                </p>
              ) : (
                <>
                  <p>{t.contact.withoutEmail}</p>
                  <div>
                    <ContactButton kind="other" className={buttonClass.secondary}>
                      {t.contact.button}
                    </ContactButton>
                  </div>
                </>
              )}
            </Clause>
            <Clause title={t.portal.title}>
              <p>{t.portal.text}</p>
              <p>
                <a href={PORTAL_PRIVACY} className={`${textLink} inline-flex items-center gap-1.5`}>
                  {t.portal.link} <ArrowRightIcon size={16} />
                </a>
              </p>
            </Clause>
            <Clause title={t.changes.title}>
              <p>{t.changes.text}</p>
            </Clause>
          </div>
        </article>
      </Container>
    </main>
  )
}
