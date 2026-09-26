// The portfolio data: Sahamku keeps its card but has no domain or link any more.
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { describe, it } from 'node:test'
import { ventures } from '../app/data/ventures.ts'

describe('ventures', () => {
  it('still lists every venture, Sahamku included, with its content', () => {
    assert.equal(ventures.length, 5)
    const sahamku = ventures.find((v) => v.name === 'Sahamku')
    assert.ok(sahamku)
    assert.equal(sahamku.tag, 'FinTech · Investment')
    assert.deepEqual(sahamku.pills, ['Stock Market', 'Retail Investors'])
  })

  it('never links or names sahamku.net', () => {
    assert.equal(ventures.find((v) => v.name === 'Sahamku').domain, null)
    for (const file of ['app/data/ventures.ts', 'app/components/Portfolio.tsx', 'app/components/Hero.tsx', 'app/page.tsx', 'app/layout.tsx']) {
      assert.doesNotMatch(readFileSync(file, 'utf8'), /sahamku\.net/i, file)
    }
  })
})
