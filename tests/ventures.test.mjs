// The portfolio data (app/data/ventures.ts) and the home statistics (app/lib/stats.ts).
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { findListedVenture, listedVentures, ventures } from '../app/data/ventures.ts'
import { siteFacts } from '../app/data/site.ts'
import { homeStats, sectorCount } from '../app/lib/stats.ts'

const localizedFields = (v) => [v.status, v.tag, v.headline, v.desc, v.intro ?? null, v.basedIn, v.smvcRole, v.story.problem, v.story.built, v.story.now]

describe('ventures', () => {
  it('have unique, URL-safe slugs', () => {
    const slugs = ventures.map((v) => v.slug)
    assert.equal(new Set(slugs).size, slugs.length)
    for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(-[a-z0-9]+)*$/)
  })

  it('show only the listed ones; Sahamku keeps its data but is not listed', () => {
    assert.deepEqual(listedVentures, ventures.filter((v) => v.listed))
    const sahamku = ventures.find((v) => v.name === 'Sahamku')
    assert.ok(sahamku)
    assert.equal(sahamku.listed, false)
    assert.equal(sahamku.tag.en, 'FinTech · Investment')
    assert.deepEqual(sahamku.pills.en, ['Stock Market', 'Retail Investors'])
    assert.equal(listedVentures.some((v) => v.name === 'Sahamku'), false)
    assert.equal(findListedVenture('sahamku'), undefined)
    assert.equal(findListedVenture('tandatangan-id')?.name, 'Tandatangan.ID')
  })

  it('list Wangun.in in place of Neracaku, which keeps its data but is not listed', () => {
    assert.deepEqual(listedVentures.map((v) => v.slug), ['tandatangan-id', 'intermediatek', 'wangunin', 'natara-projects'])
    const wangun = findListedVenture('wangunin')
    assert.ok(wangun)
    assert.equal(wangun.name, 'Wangun.in')
    assert.equal(wangun.domain, 'wangun.in')
    assert.equal(wangun.statusTone, 'info')
    assert.deepEqual(wangun.status, { en: 'Coming soon', id: 'Segera hadir' })
    assert.equal(wangun.tag.en, 'ConTech · Marketplace')
    assert.equal(wangun.tag.id, 'ConTech · Marketplace')
    assert.deepEqual([wangun.founded, wangun.basedIn, wangun.products, wangun.smvcRole], [null, null, null, null])
    assert.deepEqual(wangun.story, { problem: null, built: null, now: null })
    const neracaku = ventures.find((v) => v.slug === 'neracaku')
    assert.ok(neracaku)
    assert.equal(neracaku.listed, false)
    assert.equal(neracaku.tag.en, 'FinTech · Accounting')
    assert.equal(findListedVenture('neracaku'), undefined)
  })

  it('show Natara as "Natara", with the slug and domain unchanged', () => {
    const natara = findListedVenture('natara-projects')
    assert.ok(natara)
    assert.equal(natara.name, 'Natara')
    assert.equal(natara.domain, 'nataraprojects.com')
    assert.equal(natara.logoIsAppIcon, true)
    const everything = JSON.stringify(ventures) + readFileSync('app/i18n/en.ts', 'utf8') + readFileSync('app/i18n/id.ts', 'utf8')
    assert.doesNotMatch(everything, /Natara Projects/)
  })

  it('have every text in English and Indonesian (or neither, when not filled in)', () => {
    for (const v of ventures) {
      for (const field of localizedFields(v)) {
        if (field === null) continue
        assert.ok(field.en.trim() && field.id.trim(), `${v.slug}: ${JSON.stringify(field)}`)
      }
      assert.equal(v.pills.en.length, v.pills.id.length, v.slug)
    }
  })

  it('never links or names sahamku.net', () => {
    assert.equal(ventures.find((v) => v.name === 'Sahamku').domain, null)
    for (const file of ['app/data/ventures.ts', 'app/components/home/PortfolioGrid.tsx', 'app/[lang]/page.tsx', 'app/[lang]/layout.tsx']) {
      assert.doesNotMatch(readFileSync(file, 'utf8'), /sahamku\.net/i, file)
    }
  })
})

describe('home statistics', () => {
  const none = { firstCompanyYear: null, peopleEmployed: null }
  const value = (cells, key) => cells.find((c) => c.key === key)?.value

  it('count the listed ventures and their distinct sectors, and hide what is not filled in', () => {
    const cells = homeStats(listedVentures, none)
    assert.deepEqual(cells.map((c) => c.key), ['ventures', 'industries', 'handsOn', 'market'])
    assert.equal(value(cells, 'ventures'), String(listedVentures.length))
    const sectors = new Set(listedVentures.map((v) => v.tag.en.split(' · ')[0]))
    assert.equal(value(cells, 'industries'), String(sectors.size))
  })

  it('follow the data when a venture is hidden or shown again', () => {
    const sector = (v) => v.tag.en.split(' · ')[0]
    // Hiding a venture that is alone in its sector removes one venture and one industry.
    const alone = listedVentures.find((v) => listedVentures.filter((w) => sector(w) === sector(v)).length === 1)
    assert.ok(alone)
    const hidden = homeStats(listedVentures.filter((v) => v !== alone), none)
    assert.equal(value(hidden, 'ventures'), String(listedVentures.length - 1))
    assert.equal(value(hidden, 'industries'), String(sectorCount(listedVentures) - 1))
    // Showing Sahamku again (listed: false today) adds a venture; its sector counts only if new.
    const sahamku = ventures.find((v) => v.slug === 'sahamku')
    const shown = homeStats([...listedVentures, sahamku], none)
    const newSector = !listedVentures.some((v) => sector(v) === sector(sahamku))
    assert.equal(value(shown, 'ventures'), String(listedVentures.length + 1))
    assert.equal(value(shown, 'industries'), String(sectorCount(listedVentures) + (newSector ? 1 : 0)))
  })

  it('show "people employed" and "first company built" once filled in, still four cells', () => {
    const cells = homeStats(listedVentures, { firstCompanyYear: 2024, peopleEmployed: 30 })
    assert.deepEqual(cells.map((c) => [c.key, c.value]), [['ventures', String(listedVentures.length)], ['firstCompany', '2024'], ['people', '30'], ['market', 'ID']])
    assert.deepEqual(homeStats(listedVentures, { firstCompanyYear: null, peopleEmployed: 12 }).map((c) => c.key), ['ventures', 'people', 'industries', 'market'])
  })

  it('has no unconfirmed facts filled in', () => {
    assert.deepEqual(siteFacts, { firstCompanyYear: null, peopleEmployed: null })
  })
})
