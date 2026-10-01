// Portfolio cards on the home page: logo, status pill, sector, description. Only listed ventures.
import { listedVentures } from '@/app/data/ventures'
import { type Dictionary, type Lang, fmt } from '@/app/i18n'
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
            <li key={v.slug} className="flex flex-col gap-3 rounded-card border border-line-strong bg-surface p-6">
              <div className="flex items-center justify-between gap-4">
                <VentureTile venture={v} />
                <Pill>{v.status[lang]}</Pill>
              </div>
              <h3 className="text-[22px] leading-tight font-extrabold text-ink">{v.name}</h3>
              <p className="text-[13px] font-semibold text-subtle">{v.tag[lang]}</p>
              <p className="text-[13px] leading-relaxed text-muted">{v.desc[lang]}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
