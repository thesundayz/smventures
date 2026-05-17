const people = [
  {
    initials: 'SM',
    initialsClass: 'founder',
    badge: 'Founder & Managing Partner',
    badgeClass: 'founder',
    name: 'Sandi Mardiansyah',
    title: 'Builder, operator, and the person who gets things done.',
    bio: 'Solo founder and developer behind SMVentures and its portfolio companies. Combines deep technical hands-on capability with business strategy — from architecting production systems to closing corporate clients. Operates across all ventures as managing partner, embedding directly into each company\'s product, operations, and growth.',
    tags: ['Full-stack engineering', 'Product strategy', 'B2B SaaS', 'LegalTech', 'Jakarta'],
    links: [
      { icon: 'ti ti-brand-linkedin', label: 'LinkedIn', href: '#' },
      { icon: 'ti ti-brand-github', label: 'GitHub', href: 'https://github.com/thesundayz' },
      { icon: 'ti ti-world', label: 'Website', href: 'https://www.sandimardiansyah.com/' },
    ],
    photoBg: 'linear-gradient(135deg,#E1F5EE,#80D4B8)',
    photo: '/images/sandi.png',
  },
  {
    initials: 'SD',
    initialsClass: 'advisor',
    badge: 'Advisor',
    badgeClass: 'advisor',
    name: 'Shinta W. Dhanuwardoyo',
    title: "Indonesia's digital pioneer since 1996.",
    bio: "Founder & CEO of Bubu.com — Indonesia's first and leading digital agency, founded in 1996. Angel investor, startup mentor, and one of the most networked figures in Southeast Asian tech. Former Managing Partner at Nusantara Ventures, co-founder of Silicon Valley Asia Technology Alliance. Recognized by Forbes Indonesia as \"Inspiring Women Honor Roll\" and Globe Asia's \"99 Most Powerful Women.\"",
    tags: ['Angel investor', 'Bubu.com', 'Nusantara Ventures', 'KADIN', 'Silicon Valley'],
    links: [
      { icon: 'ti ti-brand-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/shintabubu/' },
      { icon: 'ti ti-brand-instagram', label: 'Instagram', href: 'https://www.instagram.com/shintabubu' },
      { icon: 'ti ti-external-link', label: 'bubu.com', href: 'https://www.bubu.com' },
    ],
    photoBg: 'linear-gradient(135deg,#EEEDFE,#AFA9EC)',
    photo: '/images/shinta-dhanuwardoyo.jpg',
  },
]

const colors = {
  founder: { initials: { background: '#E1F5EE', color: '#0A6650' }, badge: { background: '#E1F5EE', color: '#0A6650' } },
  advisor: { initials: { background: '#EEEDFE', color: '#3C3489' }, badge: { background: '#EEEDFE', color: '#3C3489' } },
}

export default function People() {
  return (
    <div id="people" style={{ padding: '64px 0', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} className="px-5 md:px-[48px]">
        <div style={{ fontSize: 11, fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: 1.2, color: '#0E8F6A', marginBottom: 10 }}>
          The people
        </div>
        <div style={{ fontSize: 30, fontWeight: 600, color: '#171717', letterSpacing: -0.6, marginBottom: 10 }}>
          Who&#39;s behind SMVentures.
        </div>
        <div style={{ fontSize: 15, color: '#666', lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
          A founder who builds and an advisor who has been shaping Indonesia&#39;s tech landscape since before the internet was mainstream.
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2" style={{ gap: 18 }}>
          {people.map(p => {
            const c = colors[p.initialsClass as keyof typeof colors]
            return (
              <div key={p.name} style={{ background: '#fff', border: '1px solid #eee', borderRadius: 14, overflow: 'hidden' }}>

                {/* Desktop: large circular photo in header */}
                <div className="hidden md:flex" style={{
                  height: 220, width: '100%', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center', gap: 12,
                  background: '#f7f7f5', borderRadius: '14px 14px 0 0',
                  boxSizing: 'border-box',
                }}>
                  <div style={{
                    width: 160, height: 160, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                    border: '3px solid #fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    background: p.photoBg,
                  }}>
                    {p.photo ? (
                      <img src={p.photo} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                    ) : (
                      <span style={{ fontSize: 40, fontWeight: 600, ...c.initials, background: 'transparent' }}>{p.initials}</span>
                    )}
                  </div>
                  {!p.photo && (
                    <div style={{ fontSize: 11, color: '#aaa', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <i className="ti ti-camera" style={{ fontSize: 12 }} /> Photo coming soon
                    </div>
                  )}
                </div>

                <div style={{ padding: '20px 22px' }} className="md:px-[26px] md:py-[22px]">
                  {/* Mobile: horizontal row — small avatar + badge/name/title */}
                  <div className="flex md:hidden items-center gap-3 mb-4">
                    <div style={{
                      width: 56, height: 56, borderRadius: '50%', overflow: 'hidden', flexShrink: 0,
                      background: p.photoBg, display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {p.photo ? (
                        <img src={p.photo} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                      ) : (
                        <span style={{ fontSize: 18, fontWeight: 600, ...c.initials, background: 'transparent' }}>{p.initials}</span>
                      )}
                    </div>
                    <div>
                      <div style={{ fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 20, display: 'inline-block', marginBottom: 4, ...c.badge }}>
                        {p.badge}
                      </div>
                      <div style={{ fontSize: 16, fontWeight: 600, color: '#171717', letterSpacing: -0.3, lineHeight: 1.2 }}>{p.name}</div>
                      <div style={{ fontSize: 12, color: '#0E8F6A', fontWeight: 500, marginTop: 2 }}>{p.title}</div>
                    </div>
                  </div>

                  {/* Desktop: badge + name + title (avatar is above in header) */}
                  <div className="hidden md:block">
                    <div style={{ fontSize: 11, fontWeight: 600, padding: '4px 11px', borderRadius: 20, display: 'inline-block', marginBottom: 12, ...c.badge }}>
                      {p.badge}
                    </div>
                    <div style={{ fontSize: 20, fontWeight: 600, color: '#171717', letterSpacing: -0.3, marginBottom: 4 }}>{p.name}</div>
                    <div style={{ fontSize: 13, color: '#0E8F6A', fontWeight: 500, marginBottom: 14 }}>{p.title}</div>
                  </div>

                  <div style={{ fontSize: 13, color: '#555', lineHeight: 1.7, marginBottom: 18 }}>{p.bio}</div>

                  <div style={{ display: 'flex', flexWrap: 'wrap' as const, gap: 7, marginBottom: 18 }}>
                    {p.tags.map(t => (
                      <span key={t} style={{ fontSize: 11, color: '#666', background: '#f5f5f3', padding: '4px 10px', borderRadius: 20 }}>{t}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: 14 }}>
                    {p.links.map(l => (
                      <a key={l.label} href={l.href} target={l.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                        style={{ fontSize: 12, color: '#888', display: 'flex', alignItems: 'center', gap: 5, textDecoration: 'none' }}>
                        <i className={l.icon} style={{ fontSize: 15 }} /> {l.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
