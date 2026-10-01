// Insights (app/lib/insights.ts, app/lib/rss.ts): frontmatter, drafts, and the RSS feed.
import assert from 'node:assert/strict'
import { mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { after, describe, it } from 'node:test'
import { parseFrontmatter, publishedInsights, readInsights, toInsight, visibleInsights } from '../app/lib/insights.ts'
import { rssFeed } from '../app/lib/rss.ts'

const dir = mkdtempSync(join(tmpdir(), 'insights-'))
after(() => rmSync(dir, { recursive: true, force: true }))
const post = (slug, fm) => writeFileSync(join(dir, `${slug}.mdx`), `---\n${fm}\n---\n\nBody of ${slug}.\n`)
post('older', 'title: "Older"\ndate: 2026-01-05\nsummary: An older post.\nlang: en\ndraft: false')
post('newer', 'title: "Newer: with a colon"\ndate: "2026-03-01"\nsummary: "A newer post."\nlang: en')
post('draft-one', 'title: Draft\ndate: 2026-04-01\nsummary: Not yet.\nlang: en\ndraft: true')
post('tulisan', 'title: Tulisan\ndate: 2026-02-01\nsummary: Bahasa Indonesia.\nlang: id\ndraft: false')

describe('frontmatter', () => {
  it('reads quoted and plain values and booleans', () => {
    assert.deepEqual(parseFrontmatter('---\ntitle: "A: b"\ndraft: true\nlang: en\n---\nbody'), { title: 'A: b', draft: true, lang: 'en' })
    assert.deepEqual(parseFrontmatter('no frontmatter'), {})
  })

  it('refuses a post with missing or wrong fields', () => {
    assert.throws(() => toInsight('ok', { title: 'T', date: '1 Oct 2026', summary: 'S', lang: 'en' }), /date must be YYYY-MM-DD/)
    assert.throws(() => toInsight('ok', { date: '2026-10-01', summary: 'S', lang: 'fr' }), /title is missing.*lang must be en or id/)
    assert.throws(() => toInsight('Bad_Name', { title: 'T', date: '2026-10-01', summary: 'S', lang: 'en' }), /file name/)
  })
})

describe('which posts appear', () => {
  it('lists newest first, per language', () => {
    assert.deepEqual(readInsights(dir).map((p) => p.slug), ['draft-one', 'newer', 'tulisan', 'older'])
    assert.deepEqual(publishedInsights('id', dir).map((p) => p.slug), ['tulisan'])
  })

  it('never shows drafts when drafts are off (production builds)', () => {
    assert.deepEqual(visibleInsights('en', { includeDrafts: false, dir }).map((p) => p.slug), ['newer', 'older'])
    assert.deepEqual(publishedInsights('en', dir).map((p) => p.slug), ['newer', 'older'])
    assert.deepEqual(visibleInsights('en', { includeDrafts: true, dir }).map((p) => p.slug), ['draft-one', 'newer', 'older'])
  })

  it('keeps the example post in content/insights a draft', () => {
    const example = readInsights().find((p) => p.slug === 'example-post')
    assert.ok(example)
    assert.equal(example.draft, true)
    assert.equal(publishedInsights('en').some((p) => p.slug === 'example-post'), false)
  })
})

describe('RSS', () => {
  it('escapes text and links every post', () => {
    const xml = rssFeed({
      title: 'Feed & co',
      description: 'D',
      link: 'https://smventures.id/insights',
      language: 'en',
      posts: [{ slug: 'a', title: 'A <b>', date: '2026-10-01', summary: 'S "q"' }],
    })
    assert.match(xml, /<title>Feed &amp; co<\/title>/)
    assert.match(xml, /<title>A &lt;b&gt;<\/title>/)
    assert.match(xml, /<link>https:\/\/smventures\.id\/insights\/a<\/link>/)
    assert.match(xml, /<pubDate>Thu, 01 Oct 2026 00:00:00 GMT<\/pubDate>/)
  })
})
