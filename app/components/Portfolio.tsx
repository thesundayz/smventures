'use client'

import Image from 'next/image'
import { ventures, ventureCountWord, type VentureTagKey } from '../data/ventures'

const tagColors: Record<VentureTagKey, { background: string; color: string }> = {
  legal:  { background: '#E1F5EE', color: '#0A6650' },
  tech:   { background: '#EEEDFE', color: '#3C3489' },
  fin:    { background: '#FAEEDA', color: '#854F0B' },
  acc:    { background: '#E6F1FB', color: '#185FA5' },
  prop:   { background: '#FAECE7', color: '#993C1D' },
}

export default function Portfolio() {
  return (
    <div id="portfolio" style={{ padding: '64px 0', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} className="px-5 md:px-[48px]">
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1.2, color: '#0E8F6A', marginBottom: 10 }}>
          Portfolio
        </div>
        <div style={{ fontSize: 30, fontWeight: 600, color: '#171717', letterSpacing: -0.6, marginBottom: 10 }}>
          Our ventures.
        </div>
        <div style={{ fontSize: 15, color: '#666', lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
          {ventureCountWord} companies across LegalTech, PropTech, FinTech, and digital infrastructure — all built within the SMVentures ecosystem.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3" style={{ gap: 12 }}>
          {ventures.map(v => (
            <div
              key={v.name}
              className={v.featured ? 'md:col-span-2' : ''}
              style={{
                background: '#fff',
                border: `1px solid ${v.featured ? '#45BC97' : '#eee'}`,
                borderRadius: 14, padding: 22,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#888', marginBottom: 14 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0E8F6A', flexShrink: 0 }} />
                {v.status}
              </div>
              <div style={{
                fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20,
                display: 'inline-block', marginBottom: 14, ...tagColors[v.tagKey],
              }}>
                {v.tag}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 11 }}>
                <Image
                  src={v.logo}
                  alt={v.name}
                  width={44}
                  height={44}
                  style={{ borderRadius: 10, objectFit: 'cover', flexShrink: 0 }}
                />
                <div>
                  <div style={{ fontSize: 17, fontWeight: 600, color: '#171717', letterSpacing: -0.2, lineHeight: 1.2 }}>
                    {v.name}
                  </div>
                  <a
                    href={`https://${v.domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: 12, color: '#0E8F6A', fontWeight: 500, marginTop: 2, textDecoration: 'none', display: 'block' }}
                    onMouseEnter={e => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={e => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    {v.domain}
                  </a>
                </div>
              </div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.65, marginBottom: 16, marginTop: 2 }}>{v.desc}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 7 }}>
                {v.pills.map(pill => (
                  <span key={pill} style={{ fontSize: 11, color: '#666', background: '#f5f5f3', padding: '3px 10px', borderRadius: 20 }}>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
