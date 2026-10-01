// Insights posts: content/insights/<slug>.mdx with a frontmatter block (title, date, summary,
// lang, draft). This reads the frontmatter for lists, metadata, the sitemap and RSS; the post
// body is compiled by @next/mdx. Drafts never appear in a production build (`next build`); in
// `next dev` they are listed with a "Draft" marker so they can be previewed.
// Only Node built-ins, so `node --test` can load it directly.
import { existsSync, readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

export type InsightLang = 'en' | 'id'

export type Insight = {
  slug: string
  title: string
  /** YYYY-MM-DD */
  date: string
  summary: string
  lang: InsightLang
  draft: boolean
}

export const INSIGHTS_DIR = join(process.cwd(), 'content', 'insights')

/** The `---` block at the top of a post: `key: value` lines, values optionally quoted. */
export function parseFrontmatter(source: string): Record<string, string | boolean> {
  const match = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/.exec(source)
  if (!match) return {}
  const data: Record<string, string | boolean> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const pair = /^([A-Za-z][\w-]*):\s*(.*)$/.exec(line.trim())
    if (!pair) continue
    let value = pair[2].trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
      data[pair[1]] = value
    } else if (value === 'true' || value === 'false') {
      data[pair[1]] = value === 'true'
    } else {
      data[pair[1]] = value
    }
  }
  return data
}

/** Checks one post's frontmatter; a broken post stops the build instead of going live half-filled. */
export function toInsight(slug: string, data: Record<string, string | boolean>): Insight {
  const text = (key: string) => (typeof data[key] === 'string' ? (data[key] as string).trim() : '')
  const problems: string[] = []
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(slug)) problems.push('the file name must be lowercase words joined by "-"')
  if (!text('title')) problems.push('title is missing')
  if (!text('summary')) problems.push('summary is missing')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(text('date'))) problems.push('date must be YYYY-MM-DD')
  if (text('lang') !== 'en' && text('lang') !== 'id') problems.push('lang must be en or id')
  if (data.draft !== undefined && typeof data.draft !== 'boolean') problems.push('draft must be true or false')
  if (problems.length > 0) throw new Error(`content/insights/${slug}.mdx: ${problems.join('; ')}`)
  return {
    slug,
    title: text('title'),
    date: text('date'),
    summary: text('summary'),
    lang: text('lang') as InsightLang,
    draft: data.draft === true,
  }
}

/** Every post, newest first. */
export function readInsights(dir: string = INSIGHTS_DIR): Insight[] {
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => toInsight(name.slice(0, -4), parseFrontmatter(readFileSync(join(dir, name), 'utf8'))))
    .sort((a, b) => (a.date === b.date ? a.slug.localeCompare(b.slug) : b.date.localeCompare(a.date)))
}

/** The posts in one language that this build shows: never drafts in production. */
export function visibleInsights(
  lang: InsightLang,
  { includeDrafts = process.env.NODE_ENV !== 'production', dir }: { includeDrafts?: boolean; dir?: string } = {},
): Insight[] {
  return readInsights(dir).filter((post) => post.lang === lang && (includeDrafts || !post.draft))
}

/** Published (not draft) posts in one language: what decides the nav item and the home section. */
export function publishedInsights(lang: InsightLang, dir?: string): Insight[] {
  return visibleInsights(lang, { includeDrafts: false, dir })
}
