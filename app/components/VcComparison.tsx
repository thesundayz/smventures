const vcItems = [
  'Capital only, quarterly board updates',
  'Founder figures out operations alone',
  'Network access is hit-or-miss',
  'Exits when returns are realized',
]

const ourItems = [
  'Advisory + strategy + execution support',
  'Managing partner embedded in operations',
  'Direct access to ecosystem & relationships',
  'Long-term co-builder, not a timer',
]

export default function VcComparison() {
  return (
    <div style={{ padding: '64px 0', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} className="px-5 md:px-[48px]">
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1.2, color: '#0E8F6A', marginBottom: 10 }}>
          Venture Builder vs VC
        </div>
        <div style={{ fontSize: 30, fontWeight: 600, color: '#171717', letterSpacing: -0.6, marginBottom: 10 }}>
          What makes us different.
        </div>
        <div style={{ fontSize: 15, color: '#666', lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
          Venture capital provides capital. Venture builders provide everything else — and then some.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1px 1fr', border: '1px solid #eee', borderRadius: 14, overflow: 'hidden' }}>
          <div style={{ padding: 32 }}>
            <div style={{ fontSize: 11, fontWeight: 600, padding: '4px 11px', borderRadius: 20, display: 'inline-block', marginBottom: 18, background: '#f5f5f3', color: '#888' }}>
              Traditional VC
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#171717', marginBottom: 20 }}>Passive by design</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
              {vcItems.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13 }}>
                  <i className="ti ti-minus" style={{ marginTop: 1, flexShrink: 0, fontSize: 15, color: '#bbb' }} />
                  <span style={{ color: '#888' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#eee' }} />

          <div style={{ padding: 32, background: '#04342C' }}>
            <div style={{ fontSize: 11, fontWeight: 600, padding: '4px 11px', borderRadius: 20, display: 'inline-block', marginBottom: 18, background: '#0E8F6A', color: '#E1F5EE' }}>
              SMVentures
            </div>
            <div style={{ fontSize: 16, fontWeight: 600, color: '#80D4B8', marginBottom: 20 }}>Active builder</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
              {ourItems.map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13 }}>
                  <i className="ti ti-check" style={{ marginTop: 1, flexShrink: 0, fontSize: 15, color: '#45BC97' }} />
                  <span style={{ color: '#80D4B8' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
