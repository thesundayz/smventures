const criteria = [
  {
    icon: 'ti ti-map-pin',
    text: 'Indonesia-first market focus',
    sub: 'Solutions designed for local needs — not a copy-paste from Western playbooks.',
  },
  {
    icon: 'ti ti-award',
    text: 'Committed founders',
    sub: 'Not a side project. We need founders who are all-in and ready for intensive collaboration.',
  },
  {
    icon: 'ti ti-building-bank',
    text: 'Regulated or B2B industries',
    sub: 'LegalTech, FinTech, GovTech, or enterprise SaaS — where we have the deepest unfair advantage.',
  },
  {
    icon: 'ti ti-rocket',
    text: 'Pre-seed to seed stage',
    sub: 'We\'re most effective early — when the foundational decisions are still being shaped.',
  },
]

export default function WhoWeLookFor() {
  return (
    <div style={{ padding: '64px 0', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} className="px-5 md:px-[48px]">
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1.2, color: '#0E8F6A', marginBottom: 10 }}>
          Who we build with
        </div>
        <div style={{ fontSize: 30, fontWeight: 600, color: '#171717', letterSpacing: -0.6, marginBottom: 10 }}>
          Who we&#39;re looking for.
        </div>
        <div style={{ fontSize: 15, color: '#666', lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
          We&#39;re selective — not because we&#39;re exclusive, but because we go all-in. The fit has to be right on both sides.
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 2, border: '1px solid #eee', borderRadius: 14, overflow: 'hidden' }}>
          {criteria.map((c, i) => (
            <div key={c.text} style={{
              display: 'flex', alignItems: 'center', gap: 16,
              background: '#fff', padding: '20px 26px',
              borderBottom: i < criteria.length - 1 ? '1px solid #f0f0f0' : 'none',
            }}>
              <i className={c.icon} style={{ fontSize: 20, color: '#0E8F6A', width: 26, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 14, fontWeight: 500, color: '#171717' }}>{c.text}</div>
                <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>{c.sub}</div>
              </div>
              <i className="ti ti-check" style={{ marginLeft: 'auto', fontSize: 16, color: '#0E8F6A' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
