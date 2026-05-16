const pillars = [
  {
    num: '01', icon: 'ti ti-bulb',
    title: 'Advisory & strategy',
    desc: 'Business model design, go-to-market, and competitive positioning — shaped by real operator experience, not theory.',
  },
  {
    num: '02', icon: 'ti ti-network',
    title: 'Network & access',
    desc: 'Warm intros to enterprise clients, regulators, partners, and talent that would take years to reach on your own.',
  },
  {
    num: '03', icon: 'ti ti-settings-cog',
    title: 'Operational partner',
    desc: 'We take a seat as managing partner — not just on the board, but in the day-to-day operations building the company.',
  },
]

export default function HowWeWork() {
  return (
    <div id="how-we-work" style={{ padding: '64px 0', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1.2, color: '#0E8F6A', marginBottom: 10 }}>
          How we work
        </div>
        <div style={{ fontSize: 30, fontWeight: 600, color: '#171717', letterSpacing: -0.6, marginBottom: 10 }}>
          Beyond the check.
        </div>
        <div style={{ fontSize: 15, color: '#666', lineHeight: 1.7, maxWidth: 520, marginBottom: 40 }}>
          Most investors write a check and wait. We show up — in the product, the org, the pitch room, and the client meetings.
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {pillars.map(p => (
            <div key={p.num} style={{ background: '#f9f9f7', borderRadius: 10, padding: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#0E8F6A', marginBottom: 16 }}>{p.num}</div>
              <div style={{ fontSize: 22, color: '#0E8F6A', marginBottom: 12 }}>
                <i className={p.icon} />
              </div>
              <div style={{ fontSize: 15, fontWeight: 600, color: '#171717', marginBottom: 8 }}>{p.title}</div>
              <div style={{ fontSize: 13, color: '#666', lineHeight: 1.65 }}>{p.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
