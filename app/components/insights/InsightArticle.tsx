// One Insights post: back link, date, title, summary, and the MDX body (rendered on the server).
import Link from 'next/link'
import type { ReactNode } from 'react'
import type { Dictionary, Lang } from '@/app/i18n'
import { formatDate } from '@/app/lib/format'
import type { Insight } from '@/app/lib/insights'
import { ArrowLeftIcon } from '../icons'
import { Container, Lead, Pill } from '../ui'

export default function InsightArticle({ post, t, lang, base, children }: { post: Insight; t: Dictionary['insights']; lang: Lang; base: string; children: ReactNode }) {
  return (
    <main>
      <Container className="pt-12 pb-16 md:pt-[88px] md:pb-[88px]">
        <article lang={post.lang} className="max-w-[72ch]">
          <Link href={base} className="-ml-1 inline-flex min-h-11 items-center gap-1.5 px-1 text-[13px] font-semibold text-brand-700">
            <ArrowLeftIcon size={16} /> {t.back}
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <time dateTime={post.date} className="font-mono text-[13px] font-medium text-subtle">
              {formatDate(post.date, lang)}
            </time>
            {post.draft && <Pill tone="warn">{t.draft}</Pill>}
          </div>
          <h1 className="mt-3 text-[34px] leading-[1.08] font-extrabold tracking-[-0.03em] text-ink md:text-[48px]">{post.title}</h1>
          <Lead className="mt-4">{post.summary}</Lead>
          <div className="mt-8 border-t border-line-strong pt-4">{children}</div>
        </article>
      </Container>
    </main>
  )
}
