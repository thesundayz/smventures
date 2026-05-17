'use client'

import { useState, useEffect, useRef } from 'react'

const DURATION = 4500

const SLIDES = [
  {
    venture: '01',
    photo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80',
    domain: 'tandatangan.id', domainColor: '#80D4B8', status: 'Live · Flagship',
    badgeColor: '#45BC97', badgeBg: 'rgba(14,143,106,0.2)', badgeBorder: 'rgba(69,188,151,0.3)',
    icon: 'ti ti-file-certificate', badgeText: 'LegalTech · e-Signature',
    title: "Indonesia's e-signature\nplatform, built for compliance.",
    desc: 'TTE, e-Meterai, document management, and HRIS — all in one platform serving corporate clients across Indonesia.',
  },
  {
    venture: '02',
    photo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
    domain: 'intermediatek.com', domainColor: '#AFA9EC', status: 'Live',
    badgeColor: '#AFA9EC', badgeBg: 'rgba(127,119,221,0.2)', badgeBorder: 'rgba(175,169,236,0.3)',
    icon: 'ti ti-cpu', badgeText: 'Technology · IT Services',
    title: 'Digital transformation\nfor Indonesian businesses.',
    desc: 'End-to-end IT consulting and technology solutions — from infrastructure to software, built by practitioners who\'ve shipped real products.',
  },
  {
    venture: '03',
    photo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80',
    domain: 'sahamku.net', domainColor: '#FAC775', status: 'Live',
    badgeColor: '#FAC775', badgeBg: 'rgba(186,117,23,0.2)', badgeBorder: 'rgba(250,199,117,0.3)',
    icon: 'ti ti-chart-line', badgeText: 'FinTech · Investment',
    title: "Empowering Indonesia's\nretail investors.",
    desc: 'Tools, insights, and portfolio management for Indonesian retail investors navigating the local stock market with confidence.',
  },
  {
    venture: '04',
    photo: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80',
    domain: 'neracaku.id', domainColor: '#85B7EB', status: 'Live',
    badgeColor: '#85B7EB', badgeBg: 'rgba(55,138,221,0.2)', badgeBorder: 'rgba(133,183,235,0.3)',
    icon: 'ti ti-calculator', badgeText: 'FinTech · Accounting',
    title: 'Bookkeeping made simple\nfor Indonesian SMEs.',
    desc: 'Accessible financial management for small businesses — no accountant on payroll required. Track, report, and stay on top of your numbers.',
  },
  {
    venture: '05',
    photo: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80',
    domain: 'nataraprojects.com', domainColor: '#F0997B', status: 'Live',
    badgeColor: '#F0997B', badgeBg: 'rgba(216,90,48,0.2)', badgeBorder: 'rgba(240,153,123,0.3)',
    icon: 'ti ti-building', badgeText: 'PropTech · Design & Build',
    title: 'Professional design & build\nacross Greater Jakarta.',
    desc: 'Residential, commercial, renovation, and industrial — end-to-end with 8+ years of experience and full project transparency.',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [progressKey, setProgressKey] = useState(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = (i: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setCurrent(i)
    setProgressKey(k => k + 1)
  }

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent(c => (c + 1) % SLIDES.length)
      setProgressKey(k => k + 1)
    }, DURATION)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [current])

  const s = SLIDES[current]

  return (
    <div style={{ position: 'relative', height: 520, overflow: 'hidden' }}>

      {/* Photo background */}
      <img
        key={s.photo}
        src={s.photo}
        alt=""
        style={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', objectPosition: 'center',
        }}
      />

      {/* Dark gradient overlay: left heavier for text legibility, right lighter for float card */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.58) 45%, rgba(0,0,0,0.40) 100%)',
      }} />

      {/* Subtle top-right darkening to keep float card readable */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 260, height: 140,
        background: 'linear-gradient(135deg, rgba(0,0,0,0.35) 0%, transparent 100%)',
      }} />

      {/* Centered content wrapper — max-width 1100px, full height */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0,
        left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: 1100,
      }}>

        {/* Float card */}
        <div style={{
          position: 'absolute', top: 40, right: 48,
          background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.16)',
          borderRadius: 12, padding: '18px 22px', minWidth: 168,
          backdropFilter: 'blur(8px)',
        }}>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.45)', marginBottom: 5 }}>
            Venture {s.venture}
          </div>
          <div style={{ fontSize: 15, fontWeight: 500, color: s.domainColor }}>{s.domain}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 10, fontSize: 11, color: 'rgba(255,255,255,0.45)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0E8F6A', flexShrink: 0 }} />
            {s.status}
          </div>
        </div>

        {/* Slide content */}
        <div style={{
          position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
          justifyContent: 'flex-end', padding: '52px 48px',
        }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 11, fontWeight: 600, padding: '5px 12px',
            borderRadius: 20, marginBottom: 16, width: 'fit-content',
            color: s.badgeColor, background: s.badgeBg, border: `1px solid ${s.badgeBorder}`,
          }}>
            <i className={s.icon} /> {s.badgeText}
          </div>
          <div style={{ fontSize: 40, fontWeight: 600, color: '#fff', letterSpacing: -1, lineHeight: 1.12, marginBottom: 12, whiteSpace: 'pre-line' }}>
            {s.title}
          </div>
          <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: 500, marginBottom: 28 }}>
            {s.desc}
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button style={{
              background: '#0E8F6A', color: '#E1F5EE', padding: '11px 24px',
              borderRadius: 8, fontSize: 13, fontWeight: 500, border: 'none', cursor: 'pointer', fontFamily: 'inherit',
            }}>
              Pitch your idea
            </button>
            <button
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.88)',
                padding: '11px 24px', borderRadius: 8, fontSize: 13,
                border: '1px solid rgba(255,255,255,0.22)', cursor: 'pointer', fontFamily: 'inherit',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              See portfolio <i className="ti ti-arrow-right" />
            </button>
          </div>
        </div>

        {/* Dots */}
        <div style={{ position: 'absolute', bottom: 52, right: 56, display: 'flex', gap: 7 }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === current ? 22 : 6, height: 6, borderRadius: i === current ? 3 : '50%',
                background: i === current ? '#0E8F6A' : 'rgba(255,255,255,0.32)',
                border: 'none', cursor: 'pointer', padding: 0,
                transition: 'all 0.25s',
              }}
            />
          ))}
        </div>

      </div>{/* end centered content wrapper */}

      {/* Progress bar */}
      <div
        key={progressKey}
        style={{
          position: 'absolute', bottom: 0, left: 0, height: 2, background: '#0E8F6A',
          animation: `progress-fill ${DURATION}ms linear forwards`,
        }}
      />

      <style>{`
        @keyframes progress-fill {
          from { width: 0% }
          to { width: 100% }
        }
      `}</style>
    </div>
  )
}
