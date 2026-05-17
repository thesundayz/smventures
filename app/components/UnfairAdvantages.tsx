const items = [
  {
    icon: 'ti ti-code',
    title: 'Product & engineering',
    desc: "Hands-on technical leadership — product strategy, architecture, and execution from an operator who has shipped.",
  },
  {
    icon: 'ti ti-users',
    title: 'Corporate network',
    desc: 'Direct access to decision-makers in enterprise, government, and financial institutions across Indonesia.',
  },
  {
    icon: 'ti ti-scale',
    title: 'Regulatory expertise',
    desc: 'Deep familiarity with OJK, Kominfo, BSrE, and the regulatory landscape that trips up most founders.',
  },
  {
    icon: 'ti ti-chart-arrows-vertical',
    title: 'GTM for Indonesia',
    desc: 'Battle-tested go-to-market playbooks for B2B, enterprise, and SME segments in the Indonesian market.',
  },
]

export default function UnfairAdvantages() {
  return (
    <div style={{ padding: '64px 0', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} className="px-5 md:px-[48px]">
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1.2, color: '#0E8F6A', marginBottom: 10 }}>
          What we bring
        </div>
        <div style={{ fontSize: 30, fontWeight: 600, color: '#171717', letterSpacing: -0.6, marginBottom: 10 }}>
          The unfair advantages.
        </div>
        <div style={{ fontSize: 15, color: '#666', lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
          Every venture in our ecosystem gets direct access to these capabilities from day one.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 12 }}>
          {items.map(item => (
            <div key={item.title} style={{ display: 'flex', gap: 16, background: '#f9f9f7', padding: 20, borderRadius: 10 }}>
              <div style={{
                width: 38, height: 38, background: '#E1F5EE', borderRadius: 9,
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <i className={item.icon} style={{ fontSize: 18, color: '#0A6650' }} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#171717', marginBottom: 5 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: '#666', lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
