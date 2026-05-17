'use client'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #f0f0f0' }}>
      <div
        className="flex flex-col gap-4 items-center text-center md:flex-row md:items-center md:justify-between md:text-left px-5 md:px-[48px] py-[26px]"
        style={{ maxWidth: 1100, margin: '0 auto' }}
      >
        <img
          src="https://res.cloudinary.com/ddr9t2l0o/image/upload/v1774944179/smvc_logo_transparent_zlwinx.png"
          alt="SMVC Venture Capital"
          style={{ height: 36, width: 'auto', display: 'block' }}
        />
        <div style={{ fontSize: 12, color: '#aaa' }}>© 2025 SMVentures · Jakarta, Indonesia</div>
        <div style={{ display: 'flex', gap: 20 }}>
          {[
            { label: 'LinkedIn', href: 'https://www.linkedin.com/company/smventures' },
            { label: 'Instagram', href: 'https://www.instagram.com/smventures' },
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
