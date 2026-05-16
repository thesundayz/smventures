'use client'

import { useState, useEffect, useRef } from 'react'

const DURATION = 4500

const SLIDES = [
  {
    venture: '01', bg: '#04342C', overlay: 'rgba(4,52,44,0.72)',
    domain: 'tandatangan.id', domainColor: '#80D4B8', status: 'Live · Flagship',
    badgeColor: '#45BC97', badgeBg: 'rgba(14,143,106,0.2)', badgeBorder: 'rgba(69,188,151,0.3)',
    icon: 'ti ti-file-certificate', badgeText: 'LegalTech · e-Signature',
    title: "Indonesia's e-signature\nplatform, built for compliance.",
    desc: 'TTE, e-Meterai, document management, and HRIS — all in one platform serving corporate clients across Indonesia.',
    svg: (
      <svg style={{ position: 'absolute', opacity: 0.1 }} width="520" height="380" viewBox="0 0 520 380">
        <rect x="40" y="50" width="200" height="130" rx="8" fill="none" stroke="#80D4B8" strokeWidth="1"/>
        <rect x="60" y="70" width="90" height="9" rx="3" fill="#80D4B8"/>
        <rect x="60" y="88" width="140" height="6" rx="2" fill="#45BC97"/>
        <rect x="60" y="102" width="110" height="6" rx="2" fill="#45BC97"/>
        <rect x="60" y="136" width="56" height="24" rx="5" fill="#0E8F6A"/>
        <rect x="280" y="50" width="200" height="130" rx="8" fill="none" stroke="#80D4B8" strokeWidth="1"/>
        <rect x="300" y="68" width="72" height="9" rx="3" fill="#80D4B8"/>
        <rect x="300" y="86" width="120" height="6" rx="2" fill="#45BC97"/>
        <rect x="300" y="100" width="96" height="6" rx="2" fill="#45BC97"/>
        <rect x="300" y="114" width="120" height="6" rx="2" fill="#45BC97"/>
        <path d="M 140 180 L 280 180" stroke="#0E8F6A" strokeWidth="1" strokeDasharray="5 3"/>
        <circle cx="140" cy="180" r="4" fill="#0E8F6A"/>
        <circle cx="280" cy="180" r="4" fill="#0E8F6A"/>
        <rect x="110" y="220" width="300" height="88" rx="8" fill="none" stroke="#80D4B8" strokeWidth="1"/>
        <rect x="130" y="238" width="100" height="9" rx="3" fill="#80D4B8"/>
        <rect x="130" y="256" width="220" height="6" rx="2" fill="#45BC97"/>
        <rect x="130" y="270" width="180" height="6" rx="2" fill="#45BC97"/>
        <path d="M 260 220 L 260 180" stroke="#0E8F6A" strokeWidth="1" strokeDasharray="5 3"/>
      </svg>
    ),
  },
  {
    venture: '02', bg: '#26215C', overlay: 'rgba(38,33,92,0.75)',
    domain: 'intermediatek.com', domainColor: '#AFA9EC', status: 'Live',
    badgeColor: '#AFA9EC', badgeBg: 'rgba(127,119,221,0.2)', badgeBorder: 'rgba(175,169,236,0.3)',
    icon: 'ti ti-cpu', badgeText: 'Technology · IT Services',
    title: 'Digital transformation\nfor Indonesian businesses.',
    desc: 'End-to-end IT consulting and technology solutions — from infrastructure to software, built by practitioners who\'ve shipped real products.',
    svg: (
      <svg style={{ position: 'absolute', opacity: 0.12 }} width="440" height="320" viewBox="0 0 440 320">
        <rect x="30" y="30" width="380" height="52" rx="7" fill="none" stroke="#AFA9EC" strokeWidth="1"/>
        <rect x="52" y="48" width="150" height="9" rx="3" fill="#AFA9EC"/>
        <rect x="30" y="104" width="180" height="186" rx="7" fill="none" stroke="#AFA9EC" strokeWidth="1"/>
        <rect x="52" y="122" width="66" height="7" rx="2" fill="#AFA9EC"/>
        <rect x="52" y="138" width="118" height="6" rx="2" fill="#7F77DD"/>
        <rect x="52" y="152" width="96" height="6" rx="2" fill="#7F77DD"/>
        <rect x="52" y="252" width="66" height="22" rx="5" fill="#534AB7"/>
        <rect x="230" y="104" width="180" height="186" rx="7" fill="none" stroke="#AFA9EC" strokeWidth="1"/>
        <rect x="250" y="122" width="88" height="7" rx="2" fill="#AFA9EC"/>
        <rect x="250" y="138" width="118" height="6" rx="2" fill="#7F77DD"/>
        <rect x="250" y="152" width="96" height="6" rx="2" fill="#7F77DD"/>
        <rect x="250" y="252" width="66" height="22" rx="5" fill="#534AB7"/>
      </svg>
    ),
  },
  {
    venture: '03', bg: '#412402', overlay: 'rgba(65,36,2,0.78)',
    domain: 'sahamku.net', domainColor: '#FAC775', status: 'Live',
    badgeColor: '#FAC775', badgeBg: 'rgba(186,117,23,0.2)', badgeBorder: 'rgba(250,199,117,0.3)',
    icon: 'ti ti-chart-line', badgeText: 'FinTech · Investment',
    title: "Empowering Indonesia's\nretail investors.",
    desc: 'Tools, insights, and portfolio management for Indonesian retail investors navigating the local stock market with confidence.',
    svg: (
      <svg style={{ position: 'absolute', opacity: 0.13 }} width="460" height="320" viewBox="0 0 460 320">
        <polyline points="40,260 110,200 175,222 240,148 305,168 365,96 420,116" fill="none" stroke="#FAC775" strokeWidth="2"/>
        <circle cx="110" cy="200" r="5" fill="#FAC775"/>
        <circle cx="175" cy="222" r="5" fill="#FAC775"/>
        <circle cx="240" cy="148" r="5" fill="#FAC775"/>
        <circle cx="305" cy="168" r="5" fill="#FAC775"/>
        <circle cx="365" cy="96" r="5" fill="#FAC775"/>
        <line x1="40" y1="278" x2="420" y2="278" stroke="#EF9F27" strokeWidth="0.5"/>
        <line x1="40" y1="64" x2="40" y2="278" stroke="#EF9F27" strokeWidth="0.5"/>
        <rect x="210" y="24" width="116" height="26" rx="5" fill="#BA7517"/>
        <rect x="224" y="32" width="80" height="7" rx="2" fill="#FAC775"/>
      </svg>
    ),
  },
  {
    venture: '04', bg: '#042C53', overlay: 'rgba(4,44,83,0.78)',
    domain: 'neracaku.id', domainColor: '#85B7EB', status: 'Live',
    badgeColor: '#85B7EB', badgeBg: 'rgba(55,138,221,0.2)', badgeBorder: 'rgba(133,183,235,0.3)',
    icon: 'ti ti-calculator', badgeText: 'FinTech · Accounting',
    title: 'Bookkeeping made simple\nfor Indonesian SMEs.',
    desc: 'Accessible financial management for small businesses — no accountant on payroll required. Track, report, and stay on top of your numbers.',
    svg: (
      <svg style={{ position: 'absolute', opacity: 0.13 }} width="460" height="320" viewBox="0 0 460 320">
        <rect x="40" y="64" width="380" height="44" rx="7" fill="none" stroke="#85B7EB" strokeWidth="1"/>
        <rect x="58" y="76" width="76" height="9" rx="3" fill="#85B7EB"/>
        <rect x="295" y="76" width="76" height="9" rx="3" fill="#85B7EB"/>
        <rect x="378" y="72" width="30" height="18" rx="4" fill="#185FA5"/>
        <rect x="40" y="126" width="380" height="44" rx="7" fill="none" stroke="#85B7EB" strokeWidth="1"/>
        <rect x="58" y="138" width="96" height="9" rx="3" fill="#85B7EB"/>
        <rect x="285" y="138" width="86" height="9" rx="3" fill="#85B7EB"/>
        <rect x="378" y="134" width="30" height="18" rx="4" fill="#378ADD"/>
        <rect x="40" y="188" width="380" height="44" rx="7" fill="none" stroke="#85B7EB" strokeWidth="1"/>
        <rect x="58" y="200" width="66" height="9" rx="3" fill="#85B7EB"/>
        <rect x="295" y="200" width="76" height="9" rx="3" fill="#85B7EB"/>
        <rect x="378" y="196" width="30" height="18" rx="4" fill="#185FA5"/>
        <rect x="40" y="258" width="190" height="32" rx="7" fill="#0C447C"/>
        <rect x="60" y="268" width="88" height="9" rx="3" fill="#85B7EB"/>
      </svg>
    ),
  },
  {
    venture: '05', bg: '#4A1B0C', overlay: 'rgba(74,27,12,0.78)',
    domain: 'nataraprojects.com', domainColor: '#F0997B', status: 'Live',
    badgeColor: '#F0997B', badgeBg: 'rgba(216,90,48,0.2)', badgeBorder: 'rgba(240,153,123,0.3)',
    icon: 'ti ti-building', badgeText: 'PropTech · Design & Build',
    title: 'Professional design & build\nacross Greater Jakarta.',
    desc: 'Residential, commercial, renovation, and industrial — end-to-end with 8+ years of experience and full project transparency.',
    svg: (
      <svg style={{ position: 'absolute', opacity: 0.13 }} width="460" height="320" viewBox="0 0 460 320">
        <rect x="114" y="114" width="64" height="172" rx="3" fill="none" stroke="#D85A30" strokeWidth="1"/>
        <rect x="198" y="82" width="84" height="204" rx="3" fill="none" stroke="#D85A30" strokeWidth="1"/>
        <rect x="302" y="126" width="58" height="160" rx="3" fill="none" stroke="#D85A30" strokeWidth="1"/>
        <line x1="64" y1="286" x2="396" y2="286" stroke="#F0997B" strokeWidth="0.5"/>
        <rect x="150" y="48" width="170" height="30" rx="5" fill="#993C1D"/>
        <rect x="168" y="58" width="110" height="8" rx="3" fill="#F0997B"/>
      </svg>
    ),
  },
]

const gridPattern = {
  position: 'absolute' as const, inset: 0, opacity: 0.035,
  backgroundImage: 'repeating-linear-gradient(0deg,transparent,transparent 39px,#fff 39px,#fff 40px), repeating-linear-gradient(90deg,transparent,transparent 39px,#fff 39px,#fff 40px)',
}

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
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, background: s.bg, transition: 'background 0.9s ease' }}>
        <div style={gridPattern} />
        {s.svg}
      </div>

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: s.overlay, transition: 'background 0.9s ease' }} />

      {/* Centered content wrapper — max-width 1280px, full height */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0,
        left: '50%', transform: 'translateX(-50%)',
        width: '100%', maxWidth: 1280,
      }}>

        {/* Float card */}
        <div style={{
          position: 'absolute', top: 40, right: 48,
          background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.16)',
          borderRadius: 12, padding: '18px 22px', minWidth: 168,
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

      {/* Progress bar — stays full width */}
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
