// Open Graph images in the brand style: Hutan background, the SMVC wordmark, a kicker, the page or
// venture name and one line under it. Rendered with next/og at build time; the fonts are
// Plus Jakarta Sans (assets/fonts, SIL Open Font License).
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { ImageResponse } from 'next/og'
import { tokens } from './tokens'

export const OG_SIZE = { width: 1200, height: 630 }
export const OG_TYPE = 'image/png'

const fonts = Promise.all([
  readFile(join(process.cwd(), 'assets/fonts/PlusJakartaSans-Medium.ttf')),
  readFile(join(process.cwd(), 'assets/fonts/PlusJakartaSans-ExtraBold.ttf')),
])

const WORDMARK = ['SM', 'V', 'C'] as const
const SITE = 'smventures.id'

/** One image per page: `kicker` above, `title` large, `subtitle` under it. */
export async function ogImage({ kicker, title, subtitle }: { kicker: string; title: string; subtitle?: string }) {
  const [medium, extraBold] = await fonts
  const titleSize = title.length > 60 ? 56 : title.length > 32 ? 68 : 84
  // A long line under the title would crowd the card; it is left out.
  const line = subtitle && subtitle.length <= 110 ? subtitle : undefined
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: tokens.hutan,
          color: tokens.white,
          fontFamily: 'Plus Jakarta Sans',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', fontSize: 40, fontWeight: 800, letterSpacing: 2 }}>
          <span>{WORDMARK[0]}</span>
          <span style={{ color: tokens.mintOnHutan }}>{WORDMARK[1]}</span>
          <span>{WORDMARK[2]}</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: 4, textTransform: 'uppercase', color: tokens.mintOnHutan }}>{kicker}</div>
          <div style={{ marginTop: 20, fontSize: titleSize, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2, maxWidth: 1000 }}>{title}</div>
          {line ? (
            <div style={{ marginTop: 24, fontSize: 32, fontWeight: 500, lineHeight: 1.35, color: tokens.leadOnHutan, maxWidth: 960 }}>{line}</div>
          ) : null}
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderTop: `2px solid ${tokens.hutanLine}`,
            paddingTop: 24,
            fontSize: 24,
            fontWeight: 500,
            color: tokens.secondOnHutan,
          }}
        >
          <span>{SITE}</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: 'Plus Jakarta Sans', data: medium, weight: 500, style: 'normal' },
        { name: 'Plus Jakarta Sans', data: extraBold, weight: 800, style: 'normal' },
      ],
    },
  )
}
