'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ventures } from '../data/ventures'

const DURATION = 4500

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
      setCurrent(c => (c + 1) % ventures.length)
      setProgressKey(k => k + 1)
    }, DURATION)
    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) }
  }, [current])

  const venture = ventures[current]
  const s = venture.hero
  const upcoming = ventures[(current + 1) % ventures.length].hero

  return (
    <div className="h-[420px] md:h-[520px]" style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Photo background. The upcoming slide's photo sits underneath the current one and loads
          at low priority; keyed by URL, React moves that same <img> on top when the slide
          advances, so it is already loaded. Only these two photos are ever in the DOM. */}
      {[upcoming, s].map(slide => {
        const isCurrent = slide === s
        return (
          <Image
            key={slide.photo}
            src={slide.photo}
            alt=""
            fill
            sizes="100vw"
            preload={isCurrent && current === 0}
            loading={isCurrent ? undefined : 'eager'}
            fetchPriority={isCurrent ? undefined : 'low'}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        )
      })}

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
        <div
          className="p-[10px_14px] md:p-[18px_22px]"
          style={{
            position: 'absolute', top: 20, right: 16,
            background: 'rgba(255,255,255,0.09)', border: '1px solid rgba(255,255,255,0.16)',
            borderRadius: 12, minWidth: 140,
            backdropFilter: 'blur(8px)',
          }}
        >
          <div className="text-[10px] md:text-[11px]" style={{ color: 'rgba(255,255,255,0.45)', marginBottom: 4 }}>
            Venture {String(current + 1).padStart(2, '0')}
          </div>
          <div className="text-[12px] md:text-[15px]" style={{ fontWeight: 500, color: s.domainColor }}>{venture.domain}</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8, fontSize: 10, color: 'rgba(255,255,255,0.45)' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0E8F6A', flexShrink: 0 }} />
            {venture.status}
          </div>
        </div>

        {/* Slide content */}
        <div
          className="px-5 pb-10 md:px-[48px] md:pb-[52px]"
          style={{
            position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: 11, fontWeight: 600, padding: '5px 12px',
            borderRadius: 20, marginBottom: 16, width: 'fit-content',
            color: s.badgeColor, background: s.badgeBg, border: `1px solid ${s.badgeBorder}`,
          }}>
            <i className={s.icon} /> {venture.tag}
          </div>
          <div className="text-[26px] md:text-[40px]" style={{ fontWeight: 600, color: '#fff', letterSpacing: -1, lineHeight: 1.12, marginBottom: 12, whiteSpace: 'pre-line' }}>
            {s.title}
          </div>
          <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.65, maxWidth: 500, marginBottom: 28 }}>
            {s.desc}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
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
        <div className="bottom-10 right-5 md:bottom-[52px] md:right-[56px]" style={{ position: 'absolute', display: 'flex', gap: 7 }}>
          {ventures.map((v, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Show venture ${i + 1}: ${v.name}`}
              aria-current={i === current}
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
