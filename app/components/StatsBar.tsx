const stats = [
  { num: '5', label: 'Active ventures' },
  { num: '5+', label: 'Industries' },
  { num: '100%', label: 'Hands-on involvement' },
  { num: 'ID', label: 'Built for Indonesia' },
]

export default function StatsBar() {
  return (
    <div style={{ borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex' }}>
      {stats.map((s, i) => (
        <div key={s.label} style={{
          flex: 1, padding: '22px 32px',
          borderRight: i < stats.length - 1 ? '1px solid #f0f0f0' : 'none',
        }}>
          <div style={{ fontSize: 26, fontWeight: 600, color: '#171717', letterSpacing: -0.5 }}>{s.num}</div>
          <div style={{ fontSize: 12, color: '#888', marginTop: 3 }}>{s.label}</div>
        </div>
      ))}
      </div>
    </div>
  )
}
