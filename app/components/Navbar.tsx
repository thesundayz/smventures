'use client'

import { useState } from 'react'

const links = [
  { label: 'About', id: 'how-we-work' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'People', id: 'people' },
  { label: 'Contact', id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scroll = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav style={{ borderBottom: '1px solid #f0f0f0', background: '#fff', position: 'sticky', top: 0, zIndex: 100 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }} className="flex items-center justify-between px-5 md:px-[48px] py-[16px]">
        <a href="#">
          <img
            src="https://res.cloudinary.com/ddr9t2l0o/image/upload/v1774944179/smvc_logo_transparent_zlwinx.png"
            alt="SMVC Venture Capital"
            style={{ height: 36, width: 'auto', display: 'block' }}
          />
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex" style={{ gap: 28, listStyle: 'none', margin: 0, padding: 0 }}>
          {links.map(({ label, id }) => (
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

        {/* Desktop CTA */}
        <button
          className="hidden md:block"
          onClick={() => scroll('contact')}
          style={{
            fontSize: 13, fontWeight: 500, background: '#0A6650', color: '#E1F5EE',
            padding: '9px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
            fontFamily: 'inherit',
          }}
        >
          Work with us
        </button>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center"
          onClick={() => setOpen(o => !o)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#171717' }}
        >
          <i className={open ? 'ti ti-x' : 'ti ti-menu-2'} style={{ fontSize: 22 }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden" style={{ borderTop: '1px solid #f0f0f0', background: '#fff' }}>
          <div style={{ padding: '12px 20px', display: 'flex', flexDirection: 'column', gap: 0 }}>
            {links.map(({ label, id }) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={e => { e.preventDefault(); scroll(id) }}
                style={{
                  fontSize: 14, color: '#444', textDecoration: 'none',
                  padding: '12px 0', borderBottom: '1px solid #f5f5f5',
                }}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => scroll('contact')}
              style={{
                marginTop: 14, fontSize: 13, fontWeight: 500, background: '#0A6650', color: '#E1F5EE',
                padding: '11px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontFamily: 'inherit', textAlign: 'center',
              }}
            >
              Work with us
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
