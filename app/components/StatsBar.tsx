const stats = [
  { num: '5', label: 'Active ventures' },
  { num: '5+', label: 'Industries' },
  { num: '100%', label: 'Hands-on involvement' },
  { num: 'ID', label: 'Built for Indonesia' },
]

function cellClass(i: number) {
  // Mobile 2×2: col-0 gets right+bottom, col-1 gets bottom, col-2 gets right, col-3 nothing
  // Desktop 4×1: 0-2 get right, 3 gets nothing
  const base = 'border-[#f0f0f0]'
  if (i === 0) return `${base} border-r border-b md:border-b-0`
  if (i === 1) return `${base} border-b md:border-r md:border-b-0`
  if (i === 2) return `${base} border-r`
  return ''
}

export default function StatsBar() {
  return (
    <div style={{ borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={s.label} style={{ padding: '22px 32px' }} className={cellClass(i)}>
            <div style={{ fontSize: 26, fontWeight: 600, color: '#171717', letterSpacing: -0.5 }}>{s.num}</div>
            <div style={{ fontSize: 12, color: '#888', marginTop: 3 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
