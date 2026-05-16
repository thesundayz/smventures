'use client'

export default function Navbar() {
  const scroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{
      borderBottom: '1px solid #f0f0f0',
      background: '#fff', position: 'sticky', top: 0, zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '16px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <a href="#">
          <img
            src="https://res.cloudinary.com/ddr9t2l0o/image/upload/v1774944179/smvc_logo_transparent_zlwinx.png"
            alt="SMVC Venture Capital"
            style={{ height: 36, width: 'auto', display: 'block' }}
          />
        </a>

        <ul style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0, padding: 0 }}>
          {[
            { label: 'About', id: 'how-we-work' },
            { label: 'Portfolio', id: 'portfolio' },
            { label: 'People', id: 'people' },
            { label: 'Contact', id: 'contact' },
          ].map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={e => { e.preventDefault(); scroll(id) }}
                style={{ fontSize: 13, color: '#666', textDecoration: 'none' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#171717')}
                onMouseLeave={e => (e.currentTarget.style.color = '#666')}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => scroll('contact')}
          style={{
            fontSize: 13, fontWeight: 500, background: '#0A6650', color: '#E1F5EE',
            padding: '9px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Work with us
        </button>
      </div>
    </nav>
  )
}
