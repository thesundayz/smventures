// "How we work": Build, Fund, Operate (docs/desain/layar/Situs-Beranda.html).
import type { Dictionary } from '@/app/i18n'
import { Container, Kicker, Lead, SectionTitle } from '../ui'

export default function Approach({ t }: { t: Dictionary['home']['approach'] }) {
  return (
    <section id="how-we-work" aria-labelledby="approach-title" className="scroll-mt-20 bg-paper py-16 md:py-[88px]">
      <Container className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <Kicker>{t.kicker}</Kicker>
          <SectionTitle id="approach-title" className="mt-3">
            {t.title}
          </SectionTitle>
          <Lead className="mt-[18px]">{t.lead}</Lead>
        </div>
        <ol className="flex flex-col gap-[22px]">
          {t.steps.map((step) => (
            <li key={step.title} className="flex flex-col gap-2 border-t border-line-control pt-[18px] sm:flex-row sm:items-start sm:justify-between sm:gap-6">
              <h3 className="text-lg font-bold text-ink">{step.title}</h3>
              <p className="max-w-[40ch] text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
