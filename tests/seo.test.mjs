// SEO (app/lib/sitemap-entries.ts): both languages with hreflang, only listed ventures, only published posts.
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { listedVentures } from '../app/data/ventures.ts'
import { sitemapEntries } from '../app/lib/sitemap-entries.ts'

describe('sitemap', () => {
  const entries = sitemapEntries({
    base: 'https://smventures.id',
    pages: ['/', '/about'],
    ventureSlugs: listedVentures.map((v) => v.slug),
    insights: [{ slug: 'tulisan', lang: 'id', date: '2026-10-01' }],
  })
  const urls = entries.map((e) => e.url)

  it('lists every page in English (no prefix) and Indonesian (/id) with hreflang alternates', () => {
    assert.ok(urls.includes('https://smventures.id'))
    assert.ok(urls.includes('https://smventures.id/id'))
    assert.ok(urls.includes('https://smventures.id/about'))
    assert.ok(urls.includes('https://smventures.id/id/about'))
    const about = entries.find((e) => e.url === 'https://smventures.id/id/about')
    assert.deepEqual(about.alternates.languages, {
      en: 'https://smventures.id/about',
      id: 'https://smventures.id/id/about',
      'x-default': 'https://smventures.id/about',
    })
  })

  it('lists listed ventures only, and published posts in their own language', () => {
    assert.ok(urls.includes('https://smventures.id/portfolio/tandatangan-id'))
    assert.ok(urls.includes('https://smventures.id/id/portfolio/neracaku'))
    assert.equal(urls.some((u) => u.includes('sahamku')), false)
    assert.ok(urls.includes('https://smventures.id/id/insights/tulisan'))
    assert.equal(urls.some((u) => u === 'https://smventures.id/insights'), false)
  })

  it('robots allow the site, keep /api out, and point at the sitemap', () => {
    const robots = readFileSync('app/robots.ts', 'utf8')
    assert.match(robots, /disallow: "\/api\/"/)
    assert.match(robots, /sitemap\.xml/)
  })

  it('Google Analytics stays on every page', () => {
    assert.match(readFileSync('app/[lang]/layout.tsx', 'utf8'), /<GoogleAnalytics gaId="G-MPJCQW41XD" \/>/)
  })
})
