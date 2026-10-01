// A list of Insights posts: date, title, summary and a link that covers the item.
import Link from 'next/link'
import { type Dictionary, type Lang, fmt } from '@/app/i18n'
import { formatDate } from '@/app/lib/format'
import type { Insight } from '@/app/lib/insights'
import { Pill } from '../ui'

export default function InsightList({ posts, t, lang, base, headingLevel = 2 }: { posts: Insight[]; t: Dictionary['insights']; lang: Lang; base: string; headingLevel?: 2 | 3 }) {
  const Heading = headingLevel === 2 ? 'h2' : 'h3'
  return (
    <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <li
          key={post.slug}
          className="relative flex flex-col gap-2.5 rounded-card border border-line-strong bg-surface p-6 hover:border-line-control has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-brand-600"
        >
          <div className="flex items-center gap-3">
            <time dateTime={post.date} className="font-mono text-[13px] font-medium text-subtle">
              {formatDate(post.date, lang)}
            </time>
            {post.draft && <Pill tone="warn">{t.draft}</Pill>}
          </div>
          <Heading className="text-lg leading-snug font-bold text-ink">{post.title}</Heading>
          <p className="text-[15px] leading-relaxed text-muted">{post.summary}</p>
          <Link
            href={`${base}/${post.slug}`}
            aria-label={fmt(t.readMoreOf, { title: post.title })}
            className="mt-auto pt-1 text-[13px] font-bold text-brand-700 after:absolute after:inset-0 after:rounded-card focus-visible:outline-none"
          >
            {t.readMore}
          </Link>
        </li>
      ))}
    </ul>
  )
}
