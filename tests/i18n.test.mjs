// Both languages (app/i18n): the dictionaries have the same keys, every visible string comes from
// them (no text written into components), and paths keep the page when switching language.
import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'
import { describe, it } from 'node:test'
import { en } from '../app/i18n/en.ts'
import { id } from '../app/i18n/id.ts'
import { languageTarget, localePath, stripLang } from '../app/i18n/paths.ts'

function shape(value, path = '') {
  if (Array.isArray(value)) return value.flatMap((v, i) => shape(v, `${path}[${i}]`))
  if (value && typeof value === 'object') return Object.keys(value).sort().flatMap((k) => shape(value[k], path ? `${path}.${k}` : k))
  return [`${path}:${typeof value}`]
}

function strings(value, path = '') {
  if (Array.isArray(value)) return value.flatMap((v, i) => strings(v, `${path}[${i}]`))
  if (value && typeof value === 'object') return Object.entries(value).flatMap(([k, v]) => strings(v, path ? `${path}.${k}` : k))
  return [[path, value]]
}

const placeholders = (text) => [...text.matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort()

describe('dictionaries', () => {
  it('have exactly the same keys, lists of the same length, and the same types', () => {
    assert.deepEqual(shape(id), shape(en))
  })

  it('have no empty text, and the same {placeholders} in both languages', () => {
    const idStrings = new Map(strings(id))
    for (const [path, text] of strings(en)) {
      assert.ok(text.trim(), `en ${path} is empty`)
      assert.ok(idStrings.get(path).trim(), `id ${path} is empty`)
      assert.deepEqual(placeholders(idStrings.get(path)), placeholders(text), path)
    }
  })

  it('say in both languages that nothing is an offer of securities, and never "harga saham"', () => {
    assert.equal(en.footer.disclaimer, 'Nothing on this site is an offer of securities.')
    assert.equal(id.footer.disclaimer, 'Tidak ada isi situs ini yang merupakan penawaran efek.')
    assert.doesNotMatch(JSON.stringify(id), /harga saham|valuasi|valuation/i)
  })
})

function files(dir, ext) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return files(path, ext)
    return path.endsWith(ext) ? [path] : []
  })
}

/** Text written straight into JSX, or into attributes people read. */
function embeddedText(source) {
  const code = source
    .replace(/\{\/\*[\s\S]*?\*\/\}/g, '')
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/(^|\s)\/\/.*$/gm, '$1')
  const found = []
  for (const m of code.matchAll(/(?<![=-])>([^<>{}]+)</g)) {
    const text = m[1].trim()
    // TypeScript generics (`Props<'/x'>): Promise<…`) are code, not JSX text.
    if (/^[)\],;:=|&?(.]/.test(text) || /\breturn\b|=|\($/.test(text)) continue
    if (/\p{L}{2,}/u.test(text)) found.push(text)
  }
  for (const m of code.matchAll(/\b(aria-label|alt|title|placeholder)="([^"]*)"/g)) {
    if (/\p{L}/u.test(m[2])) found.push(`${m[1]}="${m[2]}"`)
  }
  return found
}

describe('components', () => {
  it('take every visible string from the dictionaries', () => {
    const tsx = [...files('app', '.tsx'), 'mdx-components.tsx']
    assert.ok(tsx.length > 10)
    for (const file of tsx) assert.deepEqual(embeddedText(readFileSync(file, 'utf8')), [], file)
  })

  it('the check itself catches written-in text', () => {
    assert.deepEqual(embeddedText('<p className="x">Hello there</p>'), ['Hello there'])
    assert.deepEqual(embeddedText('<img alt="A logo" />'), ['alt="A logo"'])
    assert.deepEqual(embeddedText('<p>{t.title}</p><span aria-hidden="true">·</span>'), [])
  })
})

describe('paths', () => {
  it('put Indonesian under /id and English without a prefix', () => {
    assert.equal(localePath('en', '/'), '/')
    assert.equal(localePath('id', '/'), '/id')
    assert.equal(localePath('id', '/portfolio/neracaku'), '/id/portfolio/neracaku')
    assert.equal(stripLang('/id/about'), '/about')
    assert.equal(stripLang('/id'), '/')
    assert.equal(stripLang('/en/about'), '/about')
    assert.equal(stripLang('/about'), '/about')
    assert.equal(stripLang('/idea'), '/idea')
  })

  it('switch language on the same page; an Insights post falls back to the list or home', () => {
    const slugs = { en: ['a'], id: ['b'] }
    assert.equal(languageTarget('/for-shareholders', 'id', slugs), '/id/for-shareholders')
    assert.equal(languageTarget('/insights/a', 'id', slugs), '/id/insights')
    assert.equal(languageTarget('/insights/a', 'id', { en: ['a'], id: [] }), '/id')
    assert.equal(languageTarget('/insights', 'en', { en: [], id: ['b'] }), '/')
    assert.equal(languageTarget('/insights/b', 'id', slugs), '/id/insights/b')
  })
})
