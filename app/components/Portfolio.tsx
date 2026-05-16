const tagColors: Record<string, { background: string; color: string }> = {
  legal:  { background: '#E1F5EE', color: '#0A6650' },
  tech:   { background: '#EEEDFE', color: '#3C3489' },
  fin:    { background: '#FAEEDA', color: '#854F0B' },
  acc:    { background: '#E6F1FB', color: '#185FA5' },
  prop:   { background: '#FAECE7', color: '#993C1D' },
}

const ventures = [
  {
    featured: true,
    status: 'Live · Flagship',
    tagKey: 'legal', tag: 'LegalTech · e-Signature',
    name: 'Tandatangan.ID', domain: 'tandatangan.id',
    desc: 'Indonesia\'s e-signature and digital document platform — TTE, e-Meterai, HRIS, and corporate document management. Built for PSRE compliance and serving B2B clients across Indonesia.',
    pills: ['TTE / Digital Signature', 'e-Meterai', 'HRIS module', 'B2B SaaS', 'PSRE roadmap'],
  },
  {
    featured: false,
    status: 'Live',
    tagKey: 'tech', tag: 'Technology · IT Services',
    name: 'Intermediatek', domain: 'intermediatek.com',
    desc: 'Technology solutions and IT services for businesses across Indonesia — from infrastructure to digital transformation.',
    pills: ['IT Consulting', 'Digital Solutions'],
  },
  {
    featured: false,
    status: 'Live',
    tagKey: 'fin', tag: 'FinTech · Investment',
    name: 'Sahamku', domain: 'sahamku.net',
    desc: 'Stock market platform empowering Indonesian retail investors with tools, insights, and portfolio management.',
    pills: ['Stock Market', 'Retail Investors'],
  },
  {
    featured: false,
    status: 'Live',
    tagKey: 'acc', tag: 'FinTech · Accounting',
    name: 'Neracaku', domain: 'neracaku.id',
    desc: 'Simple bookkeeping and accounting for Indonesian SMEs — financial management without an accountant on payroll.',
    pills: ['Bookkeeping', 'SME Finance'],
  },
  {
    featured: false,
    status: 'Live',
    tagKey: 'prop', tag: 'PropTech · Design & Build',
    name: 'Natara Projects', domain: 'nataraprojects.com',
    desc: 'Design & build contractor for residential, commercial, and industrial projects — Jabodetabek & Bandung, 8+ years experience.',
    pills: ['Design & Build', 'Renovation', 'Project Management'],
  },
]

export default function Portfolio() {
  return (
    <div id="portfolio" style={{ padding: '64px 0', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1.2, color: '#0E8F6A', marginBottom: 10 }}>
          Portfolio
        </div>
        <div style={{ fontSize: 30, fontWeight: 600, color: '#171717', letterSpacing: -0.6, marginBottom: 10 }}>
          Our ventures.
        </div>
        <div style={{ fontSize: 15, color: '#666', lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
          Five companies across LegalTech, PropTech, FinTech, and digital infrastructure — all built within the SMVentures ecosystem.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {ventures.map(v => (
            <div
              key={v.name}
              style={{
                background: '#fff',
                border: `1px solid ${v.featured ? '#45BC97' : '#eee'}`,
                borderRadius: 14, padding: 22,
                gridColumn: v.featured ? 'span 2' : undefined,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: '#888', marginBottom: 14 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0E8F6A', flexShrink: 0 }} />
                {v.status}
              </div>
              <div style={{
                fontSize: 11, fontWeight: 600, padding: '3px 10px', borderRadius: 20,
                display: 'inline-block', marginBottom: 12, ...tagColors[v.tagKey],
              }}>
                {v.tag}
              </div>
              <div style={{ fontSize: 17, fontWeight: 600, color: '#171717', marginBottom: 4, letterSpacing: -0.2 }}>
                {v.name}
              </div>
              <div style={{ fontSize: 12, color: '#0E8F6A', marginBottom: 11, fontWeight: 500 }}>{v.domain}</div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.65, marginBottom: 16 }}>{v.desc}</div>
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
