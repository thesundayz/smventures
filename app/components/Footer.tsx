'use client'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #f0f0f0' }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '26px 48px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <img
          src="https://res.cloudinary.com/ddr9t2l0o/image/upload/v1774944179/smvc_logo_transparent_zlwinx.png"
          alt="SMVC Venture Capital"
          style={{ height: 36, width: 'auto', display: 'block' }}
        />
        <div style={{ fontSize: 12, color: '#aaa' }}>© 2025 SMVentures · Jakarta, Indonesia</div>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/smventures' },
            { label: 'Instagram', href: '#' },
            { label: 'Contact', href: '#contact' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              style={{ fontSize: 12, color: '#aaa', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#0E8F6A')}
              onMouseLeave={e => (e.currentTarget.style.color = '#aaa')}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
