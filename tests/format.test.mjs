// Display formatting (app/lib/format.ts).
import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { formatFounded } from '../app/lib/format.ts'

describe('founded', () => {
  it('shows a year as is, and a year-month as month and year per language', () => {
    assert.equal(formatFounded('2024', 'en'), '2024')
    assert.equal(formatFounded('2024-06', 'en'), 'June 2024')
    assert.equal(formatFounded('2024-06', 'id'), 'Juni 2024')
  })
})
