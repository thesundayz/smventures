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
      <svg viewBox="0 0 680 320" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <rect x="80" y="60" width="200" height="260" rx="6" fill="#0A5240" stroke="#1D9E75" strokeWidth="0.5"/>
        <rect x="95" y="60" width="200" height="260" rx="6" fill="#0C5E4A" stroke="#1D9E75" strokeWidth="0.5"/>
        <rect x="110" y="60" width="200" height="260" rx="6" fill="#0F6E56" stroke="#5DCAA5" strokeWidth="0.5"/>
        <rect x="130" y="100" width="120" height="8" rx="2" fill="#9FE1CB" opacity="0.8"/>
        <rect x="130" y="118" width="150" height="5" rx="2" fill="#5DCAA5" opacity="0.5"/>
        <rect x="130" y="131" width="140" height="5" rx="2" fill="#5DCAA5" opacity="0.5"/>
        <rect x="130" y="144" width="120" height="5" rx="2" fill="#5DCAA5" opacity="0.5"/>
        <rect x="130" y="165" width="150" height="5" rx="2" fill="#5DCAA5" opacity="0.3"/>
        <rect x="130" y="178" width="130" height="5" rx="2" fill="#5DCAA5" opacity="0.3"/>
        <line x1="130" y1="240" x2="260" y2="240" stroke="#5DCAA5" strokeWidth="0.5" strokeDasharray="4 3"/>
        <path d="M135 238 Q145 228 155 235 Q165 242 175 230 Q185 218 200 228 Q210 235 220 225 Q228 217 235 224" fill="none" stroke="#9FE1CB" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="265" cy="268" r="24" fill="#1D9E75" stroke="#9FE1CB" strokeWidth="1"/>
        <path d="M255 268 L262 276 L278 258" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M460 80 L520 80 L520 140 Q520 175 490 190 Q460 175 460 140 Z" fill="#0A4A39" stroke="#1D9E75" strokeWidth="0.5"/>
        <path d="M472 80 L508 80 L508 138 Q508 165 490 177 Q472 165 472 138 Z" fill="#0F6E56"/>
        <path d="M480 125 L487 133 L502 113" fill="none" stroke="#9FE1CB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="430" y="210" width="70" height="70" rx="4" fill="#0A4A39" stroke="#1D9E75" strokeWidth="0.5"/>
        <rect x="438" y="218" width="22" height="22" rx="2" fill="#1D9E75"/>
        <rect x="470" y="218" width="22" height="22" rx="2" fill="#1D9E75"/>
        <rect x="438" y="250" width="22" height="22" rx="2" fill="#1D9E75"/>
        <rect x="470" y="250" width="10" height="10" rx="1" fill="#5DCAA5"/>
        <rect x="482" y="250" width="10" height="10" rx="1" fill="#5DCAA5"/>
        <rect x="560" y="70" width="90" height="36" rx="18" fill="#1D9E75"/>
        <text x="605" y="93" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fontWeight="500" fill="#E1F5EE">e-Signature</text>
        <rect x="570" y="125" width="70" height="28" rx="14" fill="#0A4A39" stroke="#1D9E75" strokeWidth="0.5"/>
        <text x="605" y="144" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="11" fill="#9FE1CB">e-Meterai</text>
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
      <svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <rect x="30" y="40" width="60" height="160" rx="4" fill="#1E1A4A" stroke="#7F77DD" strokeWidth="0.5"/>
        <rect x="38" y="55" width="44" height="8" rx="2" fill="#534AB7"/>
        <rect x="38" y="70" width="44" height="8" rx="2" fill="#534AB7"/>
        <rect x="38" y="85" width="44" height="8" rx="2" fill="#7F77DD" opacity="0.7"/>
        <circle cx="72" cy="59" r="3" fill="#5DCAA5"/>
        <circle cx="72" cy="74" r="3" fill="#5DCAA5"/>
        <circle cx="72" cy="89" r="3" fill="#EF9F27"/>
        <circle cx="170" cy="120" r="36" fill="#2D2870" stroke="#AFA9EC" strokeWidth="0.5"/>
        <circle cx="170" cy="120" r="24" fill="#534AB7"/>
        <circle cx="170" cy="120" r="12" fill="#7F77DD"/>
        <circle cx="170" cy="120" r="4" fill="#AFA9EC"/>
        <line x1="90" y1="100" x2="134" y2="115" stroke="#7F77DD" strokeWidth="0.5" strokeDasharray="3 3"/>
        <line x1="90" y1="130" x2="134" y2="125" stroke="#7F77DD" strokeWidth="0.5" strokeDasharray="3 3"/>
        <line x1="250" y1="80" x2="206" y2="108" stroke="#7F77DD" strokeWidth="0.5" strokeDasharray="3 3"/>
        <line x1="250" y1="160" x2="206" y2="132" stroke="#7F77DD" strokeWidth="0.5" strokeDasharray="3 3"/>
        <rect x="248" y="55" width="60" height="50" rx="4" fill="#1E1A4A" stroke="#7F77DD" strokeWidth="0.5"/>
        <rect x="256" y="67" width="44" height="6" rx="2" fill="#534AB7"/>
        <rect x="248" y="135" width="60" height="50" rx="4" fill="#1E1A4A" stroke="#7F77DD" strokeWidth="0.5"/>
        <rect x="256" y="147" width="44" height="6" rx="2" fill="#534AB7"/>
        <rect x="140" y="25" width="60" height="28" rx="4" fill="#1E1A4A" stroke="#AFA9EC" strokeWidth="0.5"/>
        <text x="170" y="43" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#AFA9EC">Cloud</text>
        <rect x="140" y="190" width="60" height="28" rx="4" fill="#1E1A4A" stroke="#AFA9EC" strokeWidth="0.5"/>
        <text x="170" y="208" textAnchor="middle" fontFamily="Inter,sans-serif" fontSize="10" fill="#AFA9EC">Database</text>
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
      <svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <rect x="30" y="160" width="22" height="50" rx="2" fill="#BA7517" opacity="0.5"/>
        <rect x="58" y="130" width="22" height="80" rx="2" fill="#BA7517" opacity="0.6"/>
        <rect x="86" y="145" width="22" height="65" rx="2" fill="#BA7517" opacity="0.5"/>
        <rect x="114" y="100" width="22" height="110" rx="2" fill="#EF9F27" opacity="0.8"/>
        <rect x="142" y="120" width="22" height="90" rx="2" fill="#BA7517" opacity="0.6"/>
        <rect x="170" y="80" width="22" height="130" rx="2" fill="#EF9F27"/>
        <rect x="198" y="110" width="22" height="100" rx="2" fill="#BA7517" opacity="0.6"/>
        <rect x="226" y="65" width="22" height="145" rx="2" fill="#FAC775"/>
        <rect x="254" y="95" width="22" height="115" rx="2" fill="#EF9F27" opacity="0.8"/>
        <rect x="282" y="50" width="22" height="160" rx="2" fill="#FAC775"/>
        <polyline points="41,155 69,128 97,142 125,98 153,118 181,78 209,108 237,63 265,93 293,48" fill="none" stroke="#FAC775" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="293" cy="48" r="5" fill="#FAC775" stroke="#412402" strokeWidth="1.5"/>
        <line x1="20" y1="210" x2="320" y2="210" stroke="#BA7517" strokeWidth="0.5"/>
        <line x1="20" y1="30" x2="20" y2="210" stroke="#BA7517" strokeWidth="0.5"/>
        <rect x="30" y="15" width="280" height="22" rx="4" fill="#341C02" stroke="#BA7517" strokeWidth="0.5"/>
        <text x="45" y="30" fontFamily="Inter,sans-serif" fontSize="10" fill="#FAC775" fontWeight="500">BBCA</text>
        <text x="85" y="30" fontFamily="Inter,sans-serif" fontSize="10" fill="#5DCAA5">+2.4%</text>
        <text x="130" y="30" fontFamily="Inter,sans-serif" fontSize="10" fill="#FAC775" fontWeight="500">TLKM</text>
        <text x="170" y="30" fontFamily="Inter,sans-serif" fontSize="10" fill="#EF4444">-0.8%</text>
        <text x="215" y="30" fontFamily="Inter,sans-serif" fontSize="10" fill="#FAC775" fontWeight="500">ASII</text>
        <text x="245" y="30" fontFamily="Inter,sans-serif" fontSize="10" fill="#5DCAA5">+1.2%</text>
        <polygon points="293,25 303,35 283,35" fill="#5DCAA5"/>
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
      <svg viewBox="0 0 340 240" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <rect x="25" y="30" width="290" height="165" rx="5" fill="#042044" stroke="#378ADD" strokeWidth="0.5"/>
        <rect x="25" y="30" width="290" height="28" rx="5" fill="#0C447C"/>
        <text x="45" y="49" fontFamily="Inter,sans-serif" fontSize="10" fill="#85B7EB" fontWeight="500">Description</text>
        <text x="185" y="49" fontFamily="Inter,sans-serif" fontSize="10" fill="#85B7EB" fontWeight="500">Debit</text>
        <text x="255" y="49" fontFamily="Inter,sans-serif" fontSize="10" fill="#85B7EB" fontWeight="500">Credit</text>
        <line x1="165" y1="30" x2="165" y2="195" stroke="#185FA5" strokeWidth="0.5"/>
        <line x1="235" y1="30" x2="235" y2="195" stroke="#185FA5" strokeWidth="0.5"/>
        <line x1="25" y1="78" x2="315" y2="78" stroke="#185FA5" strokeWidth="0.5"/>
        <rect x="35" y="63" width="100" height="7" rx="2" fill="#378ADD" opacity="0.5"/>
        <rect x="175" y="63" width="40" height="7" rx="2" fill="#85B7EB" opacity="0.6"/>
        <rect x="245" y="63" width="40" height="7" rx="2" fill="#85B7EB" opacity="0.3"/>
        <line x1="25" y1="100" x2="315" y2="100" stroke="#185FA5" strokeWidth="0.5"/>
        <rect x="35" y="85" width="80" height="7" rx="2" fill="#378ADD" opacity="0.5"/>
        <rect x="175" y="85" width="50" height="7" rx="2" fill="#85B7EB" opacity="0.3"/>
        <rect x="245" y="85" width="40" height="7" rx="2" fill="#85B7EB" opacity="0.6"/>
        <line x1="25" y1="122" x2="315" y2="122" stroke="#185FA5" strokeWidth="0.5"/>
        <rect x="35" y="107" width="120" height="7" rx="2" fill="#378ADD" opacity="0.5"/>
        <line x1="25" y1="144" x2="315" y2="144" stroke="#185FA5" strokeWidth="0.5"/>
        <rect x="35" y="129" width="90" height="7" rx="2" fill="#378ADD" opacity="0.5"/>
        <line x1="25" y1="166" x2="315" y2="166" stroke="#185FA5" strokeWidth="0.5"/>
        <rect x="25" y="166" width="290" height="29" rx="5" fill="#0C447C"/>
        <text x="45" y="184" fontFamily="Inter,sans-serif" fontSize="10" fill="#85B7EB" fontWeight="500">Total</text>
        <text x="175" y="184" fontFamily="Inter,sans-serif" fontSize="10" fill="#5DCAA5" fontWeight="500">Balanced</text>
        <circle cx="297" cy="180" r="8" fill="#5DCAA5"/>
        <path d="M292 180 L295 183 L302 176" fill="none" stroke="#042C53" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="170" y1="205" x2="170" y2="225" stroke="#378ADD" strokeWidth="1.5"/>
        <line x1="120" y1="212" x2="220" y2="212" stroke="#378ADD" strokeWidth="1.5"/>
        <circle cx="120" cy="220" r="8" fill="#0C447C" stroke="#378ADD" strokeWidth="0.5"/>
        <circle cx="220" cy="220" r="8" fill="#0C447C" stroke="#378ADD" strokeWidth="0.5"/>
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
      <svg viewBox="0 0 680 280" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
        <line x1="0" y1="235" x2="680" y2="235" stroke="#D85A30" strokeWidth="0.5"/>
        <rect x="60" y="85" width="90" height="150" rx="2" fill="#341208" stroke="#D85A30" strokeWidth="0.5"/>
        <rect x="70" y="95" width="20" height="14" rx="1" fill="#F0997B" opacity="0.4"/>
        <rect x="96" y="95" width="20" height="14" rx="1" fill="#F0997B" opacity="0.6"/>
        <rect x="70" y="117" width="20" height="14" rx="1" fill="#F0997B" opacity="0.5"/>
        <rect x="96" y="117" width="20" height="14" rx="1" fill="#F0997B" opacity="0.7"/>
        <rect x="305" y="50" width="120" height="185" rx="2" fill="#5C2010" stroke="#F0997B" strokeWidth="1"/>
        <rect x="316" y="60" width="28" height="20" rx="1" fill="#FAC775" opacity="0.5"/>
        <rect x="350" y="60" width="28" height="20" rx="1" fill="#FAC775" opacity="0.7"/>
        <rect x="384" y="60" width="28" height="20" rx="1" fill="#FAC775" opacity="0.4"/>
        <rect x="316" y="88" width="28" height="20" rx="1" fill="#FAC775" opacity="0.6"/>
        <rect x="350" y="88" width="28" height="20" rx="1" fill="#FAC775" opacity="0.5"/>
        <rect x="316" y="116" width="28" height="20" rx="1" fill="#FAC775" opacity="0.4"/>
        <rect x="350" y="116" width="28" height="20" rx="1" fill="#FAC775" opacity="0.6"/>
        <rect x="455" y="100" width="85" height="135" rx="2" fill="#341208" stroke="#D85A30" strokeWidth="0.5"/>
        <rect x="465" y="112" width="20" height="16" rx="1" fill="#F0997B" opacity="0.5"/>
        <rect x="491" y="112" width="20" height="16" rx="1" fill="#F0997B" opacity="0.3"/>
        <rect x="565" y="150" width="70" height="85" rx="2" fill="#3D1509" stroke="#D85A30" strokeWidth="0.5"/>
        <rect x="575" y="160" width="18" height="14" rx="1" fill="#F0997B" opacity="0.4"/>
        <rect x="599" y="160" width="18" height="14" rx="1" fill="#F0997B" opacity="0.6"/>
        <circle cx="620" cy="30" r="16" fill="#5C2010" stroke="#FAC775" strokeWidth="0.5"/>
        <circle cx="628" cy="26" r="12" fill="#4A1B0C"/>
        <circle cx="50" cy="40" r="1.5" fill="#FAC775" opacity="0.6"/>
        <circle cx="200" cy="25" r="1" fill="#FAC775" opacity="0.5"/>
        <circle cx="450" cy="35" r="1.5" fill="#FAC775" opacity="0.7"/>
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
      </div>

      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: s.overlay, transition: 'background 0.9s ease' }} />

      {/* Illustration — right half, above overlay */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: '55%', height: '100%', opacity: 0.85 }}>
        {s.svg}
      </div>

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
