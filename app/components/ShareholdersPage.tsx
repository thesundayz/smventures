// /for-shareholders (docs/desain/layar/Situs-Investor.html): what the investor portal shows, the
// four steps from register to portal, and questions before signing in. The answers follow what
// the portal actually does (see the smventures-portal README and its privacy policy).
import type { Dictionary } from '@/app/i18n'
import { INVESTOR_LOGIN, PORTAL_PRIVACY } from '@/app/lib/links'
import { ContactButton } from './ContactForm'
import { ArrowRightIcon, PlusIcon } from './icons'
import { Container, Kicker, Lead, SectionTitle, buttonClass } from './ui'

export default function ShareholdersPage({ t }: { t: Dictionary['shareholders'] }) {
  return (
    <main>
      <section className="pt-16 pb-12 md:pt-[88px]">
        <Container>
          <Kicker>{t.kicker}</Kicker>
          <h1 className="mt-4 max-w-[16ch] text-[40px] leading-[1.04] font-extrabold tracking-[-0.03em] text-ink md:text-[52px] xl:text-[64px] xl:tracking-[-0.035em]">
            {t.title}
          </h1>
          <Lead className="mt-5">{t.lead}</Lead>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={INVESTOR_LOGIN} className={buttonClass.primary}>
              {t.login}
            </a>
            <ContactButton kind="investor" className={buttonClass.secondary}>
              {t.contact}
            </ContactButton>
          </div>
        </Container>
      </section>

      <section aria-label={t.stepsLabel} className="pb-16 md:pb-[72px]">
        <Container>
          <ol className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {t.steps.map((step, i) => (
              <li key={step.title} className="flex flex-col gap-2.5 rounded-card border border-line-strong bg-surface px-6 py-[22px]">
                <span className="font-mono text-sm font-semibold text-brand-700">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="text-lg leading-snug font-bold text-ink">{step.title}</h2>
                <p className="text-[13px] leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="faq-title" className="bg-paper py-16 md:py-[88px]">
        <Container>
          <Kicker>{t.faqKicker}</Kicker>
          <SectionTitle id="faq-title" className="mt-3 mb-7">
            {t.faqTitle}
          </SectionTitle>
          <div>
            {t.faq.map((item) => (
              <details key={item.q} className="group border-t border-line-strong last:border-b">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-5 text-[17px] font-bold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <PlusIcon size={20} className="shrink-0 text-brand-700 transition-transform group-open:rotate-45" />
                </summary>
                <p className="max-w-[68ch] pb-6 text-muted">{item.a}</p>
              </details>
            ))}
          </div>
          <p className="mt-6">
            <a href={PORTAL_PRIVACY} className="inline-flex min-h-11 items-center gap-2 font-semibold text-brand-700 underline underline-offset-2">
              {t.privacyLink} <ArrowRightIcon size={16} />
            </a>
          </p>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <p className="rounded-note border border-line-strong bg-surface-muted px-4 py-3 text-[13px] text-muted">{t.disclaimer}</p>
        </Container>
      </section>
    </main>
  )
}
