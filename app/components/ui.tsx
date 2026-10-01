// Shared building blocks on the design tokens in app/globals.css (docs/desain/README.md).
// No hooks, so they work in server and client components alike.
import Image from 'next/image'
import type { ReactNode } from 'react'
import type { Venture } from '@/app/data/ventures'

const buttonBase =
  'inline-flex min-h-11 items-center justify-center gap-2 rounded-control border px-[18px] text-sm font-bold no-underline'

/** Buttons are at least 44px high with a 10px radius; the `onDark` pair sits on Hutan. */
export const buttonClass = {
  primary: `${buttonBase} border-transparent bg-brand-700 text-white hover:bg-brand-900 hover:text-white`,
  secondary: `${buttonBase} border-line-control bg-surface text-ink hover:bg-surface-muted hover:text-ink`,
  onDarkPrimary: `${buttonBase} border-transparent bg-brand-400 text-brand-900 hover:bg-brand-200 hover:text-brand-900`,
  onDarkSecondary: `${buttonBase} border-brand-800 bg-transparent text-white hover:bg-brand-850 hover:text-white`,
}

/** 1240px content column, 40px side padding (16px on phones). */
export function Container({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-page px-4 md:px-10 ${className}`}>{children}</div>
}

/** Small caps label above a title. */
export function Kicker({ children, className = 'text-brand-700' }: { children: ReactNode; className?: string }) {
  return <p className={`text-xs font-bold tracking-[0.14em] uppercase ${className}`}>{children}</p>
}

/** Section title: 34px, 800. */
export function SectionTitle({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <h2 id={id} className={`text-[28px] leading-[1.12] font-extrabold tracking-[-0.025em] text-ink md:text-[34px] ${className}`}>
      {children}
    </h2>
  )
}

/** Lead paragraph under a title. */
export function Lead({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <p className={`max-w-[58ch] text-[17px] leading-[1.6] text-muted md:text-[19px] ${className}`}>{children}</p>
}

const pillTones = {
  ok: 'bg-brand-50 text-brand-700',
  info: 'bg-info-50 text-info-700',
  warn: 'bg-warn-50 text-warn-700',
  mute: 'bg-surface-sunken text-muted',
}

/** Status pill: colour plus text, never colour alone. */
export function Pill({ tone = 'mute', children }: { tone?: keyof typeof pillTones; children: ReactNode }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold whitespace-nowrap ${pillTones[tone]}`}>
      {children}
    </span>
  )
}

const tileTones: Record<Venture['tagKey'], string> = {
  legal: 'bg-brand-50 text-brand-700',
  tech: 'bg-violet-50 text-violet-700',
  fin: 'bg-warn-50 text-warn-700',
  acc: 'bg-info-50 text-info-700',
  prop: 'bg-warn-50 text-warn-700',
}

/** The venture's logo in a rounded tile; coloured initials only when there is no logo. */
export function VentureTile({ venture, size = 48 }: { venture: Pick<Venture, 'name' | 'logo' | 'tagKey'>; size?: 48 | 64 }) {
  const box = size === 64 ? 'size-16 rounded-card text-[22px]' : 'size-12 rounded-note text-base'
  if (venture.logo) {
    return (
      <Image
        src={venture.logo}
        alt=""
        width={size}
        height={size}
        className={`${box} shrink-0 border border-line-strong bg-surface object-cover`}
      />
    )
  }
  const initials = venture.name
    .split(/[\s.]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join('')
  return (
    <span aria-hidden="true" className={`${box} ${tileTones[venture.tagKey]} grid shrink-0 place-items-center font-extrabold`}>
      {initials}
    </span>
  )
}
