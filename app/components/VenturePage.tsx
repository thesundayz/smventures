// /portfolio/[slug] (docs/desain/layar/Situs-Venture.html): logo tile, name, status, description,
// "Visit <domain>", the facts that are filled in, and the story parts that are filled in.
import Link from 'next/link'
import { type Venture, sectorOf } from '@/app/data/ventures'
import { type Dictionary, type Lang, fmt } from '@/app/i18n'
import { formatFounded } from '@/app/lib/format'
import { ArrowLeftIcon, ExternalLinkIcon } from './icons'
import { Container, Kicker, Pill, VentureTile, buttonClass } from './ui'

export default function VenturePage({ venture: v, t, lang, portfolioHref }: { venture: Venture; t: Dictionary['venture']; lang: Lang; portfolioHref: string }) {
  const facts: { label: string; value: string }[] = []
  if (v.founded) facts.push({ label: t.founded, value: formatFounded(v.founded, lang) })
  facts.push({ label: t.sector, value: sectorOf(v.tag[lang]) })
  if (v.products?.length) facts.push({ label: t.products, value: v.products.join(', ') })
  if (v.basedIn) facts.push({ label: t.basedIn, value: v.basedIn[lang] })
  if (v.smvcRole) facts.push({ label: t.smvcRole, value: v.smvcRole[lang] })
  if (v.domain) facts.push({ label: t.website, value: v.domain })

  const story = (['problem', 'built', 'now'] as const).flatMap((part) => {
    const text = v.story[part]
    return text ? [{ part, title: t[part], text: text[lang] }] : []
  })

  return (
    <main>
      <section className="pt-12 pb-14 md:pt-[88px]">
        <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-14">
          <div>
            <Link href={portfolioHref} className="-ml-1 inline-flex min-h-11 items-center gap-1.5 px-1 text-[13px] font-semibold text-brand-700">
              <ArrowLeftIcon size={16} /> {t.back}
            </Link>
            <div className="mt-4 flex items-center gap-4">
              <VentureTile venture={v} size={64} />
              <Pill tone={v.statusTone ?? 'ok'}>{v.status[lang]}</Pill>
            </div>
            <h1 className="mt-5 text-[40px] leading-[1.04] font-extrabold tracking-[-0.03em] text-ink md:text-[56px] md:tracking-[-0.035em]">{v.name}</h1>
            <p className="mt-4 max-w-[58ch] text-[19px] leading-[1.5] font-semibold text-ink">{v.headline[lang]}</p>
            <p className="mt-3 max-w-[62ch] text-[17px] leading-[1.6] text-muted">{(v.intro ?? v.desc)[lang]}</p>
            {v.pills[lang].length > 0 && (
              <ul aria-label={t.focusLabel} className="mt-5 flex flex-wrap gap-2">
                {v.pills[lang].map((pill) => (
                  <li key={pill} className="rounded-full bg-surface-sunken px-3 py-1 text-xs font-semibold text-muted">
                    {pill}
                  </li>
                ))}
              </ul>
            )}
            {v.domain && (
              <div className="mt-6">
                <a href={`https://${v.domain}`} target="_blank" rel="noopener noreferrer" className={buttonClass.primary}>
                  {fmt(t.visit, { domain: v.domain })} <ExternalLinkIcon size={16} />
                </a>
              </div>
            )}
          </div>
          <dl
            aria-label={t.factsLabel}
            className="m-0 grid grid-cols-[minmax(0,120px)_minmax(0,1fr)] items-baseline gap-x-4 gap-y-3.5 rounded-card border border-line-strong bg-surface px-6 py-[22px] sm:grid-cols-[140px_minmax(0,1fr)]"
          >
            {facts.map((fact) => (
              <div key={fact.label} className="contents">
                <dt className="text-[13px] text-subtle">{fact.label}</dt>
                <dd className="m-0 font-semibold text-ink">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {story.length > 0 && (
        <section aria-label={t.storyLabel} className="pb-16 md:pb-[88px]">
          <Container>
            <div className="grid gap-5 md:grid-cols-3">
              {story.map((s) => (
                <div key={s.part} className="rounded-card border border-line-strong bg-surface px-6 py-[22px]">
                  <Kicker>{s.title}</Kicker>
                  <p className="mt-2.5 text-muted">{s.text}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  )
}
