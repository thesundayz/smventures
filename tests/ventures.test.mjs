// The portfolio data (app/data/ventures.ts) and the home statistics (app/lib/stats.ts).
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { findListedVenture, listedVentures, ventures } from '../app/data/ventures.ts'
import { siteFacts } from '../app/data/site.ts'
import { homeStats } from '../app/lib/stats.ts'

const localizedFields = (v) => [v.status, v.tag, v.headline, v.desc, v.basedIn, v.smvcRole, v.story.problem, v.story.built, v.story.now]

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
    for (const file of ['app/data/ventures.ts', 'app/components/home/PortfolioGrid.tsx', 'app/page.tsx', 'app/layout.tsx']) {
      assert.doesNotMatch(readFileSync(file, 'utf8'), /sahamku\.net/i, file)
    }
  })
})

describe('home statistics', () => {
  it('count the listed ventures and hide what is not filled in', () => {
    const cells = homeStats(listedVentures.length, { firstCompanyYear: null, peopleEmployed: null })
    assert.deepEqual(cells.map((c) => c.key), ['ventures', 'industries', 'handsOn', 'market'])
    assert.equal(cells[0].value, String(listedVentures.length))
  })

  it('show "people employed" and "first company built" once filled in, still four cells', () => {
    const cells = homeStats(4, { firstCompanyYear: 2024, peopleEmployed: 30 })
    assert.deepEqual(cells.map((c) => [c.key, c.value]), [['ventures', '4'], ['firstCompany', '2024'], ['people', '30'], ['market', 'ID']])
    assert.deepEqual(homeStats(4, { firstCompanyYear: null, peopleEmployed: 12 }).map((c) => c.key), ['ventures', 'people', 'industries', 'market'])
  })

  it('has no unconfirmed facts filled in', () => {
    assert.deepEqual(siteFacts, { firstCompanyYear: null, peopleEmployed: null })
  })
})
