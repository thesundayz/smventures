// Portfolio cards on the home page: logo, status pill, sector, description. Only listed ventures.
import Link from 'next/link'
import { listedVentures } from '@/app/data/ventures'
import { type Dictionary, type Lang, fmt, localePath } from '@/app/i18n'
import { Container, Kicker, Pill, SectionTitle, VentureTile } from '../ui'

export default function PortfolioGrid({ t, numberWords, lang }: { t: Dictionary['home']['portfolio']; numberWords: string[]; lang: Lang }) {
  const count = numberWords[listedVentures.length] ?? String(listedVentures.length)
  return (
    <section id="portfolio" aria-labelledby="portfolio-title" className="scroll-mt-20 py-16 md:py-[88px]">
      <Container>
        <Kicker>{t.kicker}</Kicker>
        <SectionTitle id="portfolio-title" className="mt-3">
          {fmt(t.title, { count })}
        </SectionTitle>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 md:mt-10 xl:grid-cols-4">
          {listedVentures.map((v) => (
            <li key={v.slug} className="relative flex flex-col gap-3 rounded-card border border-line-strong bg-surface p-6 hover:border-line-control has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-brand-600">
              <div className="flex items-center justify-between gap-4">
                <VentureTile venture={v} />
                <Pill tone={v.statusTone ?? 'mute'}>{v.status[lang]}</Pill>
              </div>
              <h3 className="text-[22px] leading-tight font-extrabold text-ink">{v.name}</h3>
              <p className="text-[13px] font-semibold text-subtle">{v.tag[lang]}</p>
              <p className="text-[13px] leading-relaxed text-muted">{v.desc[lang]}</p>
              {/* The link covers the whole card. */}
              <Link
                href={localePath(lang, `/portfolio/${v.slug}`)}
                aria-label={fmt(t.readStoryOf, { name: v.name })}
                className="mt-auto pt-1 text-[13px] font-bold text-brand-700 after:absolute after:inset-0 after:rounded-card focus-visible:outline-none"
              >
                {t.readStory}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
