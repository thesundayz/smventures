// The "For shareholders" band on the home page: what the investor portal is for, and how to sign in.
import Link from 'next/link'
import { type Dictionary, type Lang, localePath } from '@/app/i18n'
import { INVESTOR_LOGIN } from '@/app/lib/links'
import { Container, Kicker, Lead, SectionTitle, buttonClass } from './ui'

export default function ShareholdersBand({ t, lang }: { t: Dictionary['home']['shareholders']; lang: Lang }) {
  return (
    <section id="for-shareholders" aria-labelledby="shareholders-title" className="scroll-mt-20 py-16 md:py-[88px]">
      <Container>
        <div className="grid items-center gap-8 rounded-card border border-line-strong bg-surface p-6 md:p-12 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-10">
          <div>
            <Kicker>{t.kicker}</Kicker>
            <SectionTitle id="shareholders-title" className="mt-3">
              {t.title}
            </SectionTitle>
            <Lead className="mt-3.5">{t.lead}</Lead>
          </div>
          <div className="flex flex-col gap-3">
            <a href={INVESTOR_LOGIN} className={buttonClass.primary}>
              {t.login}
            </a>
            <Link href={localePath(lang, '/for-shareholders')} className={buttonClass.secondary}>
              {t.howItWorks}
            </Link>
            <p className="text-[13px] text-subtle">{t.note}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
