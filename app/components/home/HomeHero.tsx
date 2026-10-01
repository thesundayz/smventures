// Home hero on Hutan (docs/desain/layar/Situs-Beranda.html): title, lead, "Pitch your idea" (opens
// the contact form) and "See portfolio", with the statistics on the right.
import Link from 'next/link'
import { siteFacts } from '@/app/data/site'
import { listedVentures } from '@/app/data/ventures'
import type { Dictionary } from '@/app/i18n'
import { homeStats } from '@/app/lib/stats'
import { ContactButton } from '../ContactForm'
import { ArrowRightIcon } from '../icons'
import { Container, Kicker, buttonClass } from '../ui'

export default function HomeHero({ t, stats }: { t: Dictionary['home']['hero']; stats: Dictionary['home']['stats'] }) {
  const cells = homeStats(listedVentures.length, siteFacts)
  return (
    <section className="bg-brand-900 text-brand-50">
      <Container className="grid items-end gap-10 py-16 md:py-24 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-14 lg:pt-24 lg:pb-[88px]">
        <div>
          <Kicker className="text-brand-200">{t.kicker}</Kicker>
          <h1 className="mt-4 text-[40px] leading-[1.04] font-extrabold tracking-[-0.03em] text-white md:mt-[18px] md:text-[52px] xl:text-[64px] xl:tracking-[-0.035em]">
            {t.title}
          </h1>
          <p className="mt-5 max-w-[58ch] text-[17px] leading-[1.6] text-brand-100 md:mt-[22px] md:text-[19px]">{t.lead}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContactButton kind="pitch" className={buttonClass.onDarkPrimary}>
              {t.pitch}
            </ContactButton>
            <Link href="/#portfolio" className={buttonClass.onDarkSecondary}>
              {t.seePortfolio} <ArrowRightIcon size={16} />
            </Link>
          </div>
        </div>
        <dl aria-label={t.statsLabel} className="grid grid-cols-2 gap-px overflow-hidden rounded-card bg-brand-850">
          {cells.map((cell) => (
            <div key={cell.key} className="flex flex-col-reverse bg-brand-900 p-5 md:p-[22px]">
              <dt className="text-[13px] text-brand-50">{stats[cell.key]}</dt>
              <dd className="text-[32px] leading-tight font-extrabold tracking-[-0.02em] text-white md:text-[40px]">{cell.value}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
