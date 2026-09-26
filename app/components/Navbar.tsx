'use client'

import { useState } from 'react'
import Image from 'next/image'

const links = [
  { label: 'About', id: 'how-we-work' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'People', id: 'people' },
  { label: 'Contact', id: 'contact' },
]

const INVESTOR_LOGIN = 'https://investor.smventures.id/login'

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
          <Image
            src="https://res.cloudinary.com/ddr9t2l0o/image/upload/v1774944179/smvc_logo_transparent_zlwinx.png"
            alt="SMVC Venture Capital"
            width={93}
            height={36}
            loading="eager"
            style={{ display: 'block' }}
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
        <a
          href={INVESTOR_LOGIN}
          className="hidden md:block"
          style={{
            fontSize: 13, fontWeight: 500, background: '#0A6650', color: '#E1F5EE',
            padding: '9px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
            fontFamily: 'inherit', textDecoration: 'none',
          }}
        >
          Login as Investor
        </a>

        {/* Mobile hamburger */}
        <button
          className="flex md:hidden items-center justify-center"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
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
            <a
              href={INVESTOR_LOGIN}
              style={{
                marginTop: 14, fontSize: 13, fontWeight: 500, background: '#0A6650', color: '#E1F5EE',
                padding: '11px 18px', borderRadius: 8, border: 'none', cursor: 'pointer',
                fontFamily: 'inherit', textAlign: 'center', textDecoration: 'none',
              }}
            >
              Login as Investor
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
