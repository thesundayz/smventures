// The latest Insights on the home page; the caller renders it only when something is published.
import Link from 'next/link'
import type { Dictionary, Lang } from '@/app/i18n'
import type { Insight } from '@/app/lib/insights'
import { Container, Kicker, SectionTitle, buttonClass } from '../ui'
import InsightList from './InsightList'

export default function InsightsSection({ posts, t, lang, base }: { posts: Insight[]; t: Dictionary['insights']; lang: Lang; base: string }) {
  return (
    <section aria-labelledby="insights-title" className="py-16 md:py-[88px]">
      <Container>
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4 md:mb-10">
          <div>
            <Kicker>{t.kicker}</Kicker>
            <SectionTitle id="insights-title" className="mt-3">
              {t.homeTitle}
            </SectionTitle>
          </div>
          <Link href={base} className={buttonClass.secondary}>
            {t.all}
          </Link>
        </div>
        <InsightList posts={posts.slice(0, 3)} t={t} lang={lang} base={base} headingLevel={3} />
      </Container>
    </section>
  )
}
