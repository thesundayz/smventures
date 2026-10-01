'use client'

// Site header (docs/desain/layar/Situs-Beranda.html): logo, the main nav, the EN · ID switcher
// (which keeps the page you are on), "Login as Investor", and on phones a menu button that
// unfolds the same links under the bar.
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import type { Dictionary } from '@/app/i18n'
import { LANGS, type Lang, languageTarget, localePath, stripLang } from '@/app/i18n/paths'
import { INVESTOR_LOGIN, LOGO_URL } from '@/app/lib/links'
import { CloseIcon, MenuIcon } from './icons'

export type NavLink = { href: string; label: string }

type Labels = {
  nav: string
  login: string
  openMenu: string
  closeMenu: string
  logoAlt: string
  home: string
  language: Dictionary['language']
}

function LanguageSwitch({ lang, path, insightSlugs, labels }: { lang: Lang; path: string; insightSlugs: Record<Lang, string[]>; labels: Dictionary['language'] }) {
  return (
    <ul aria-label={labels.label} className="flex items-center text-[13px] font-bold">
      {LANGS.map((l, i) => (
        <li key={l} className="flex items-center">
          {i > 0 && (
            <span aria-hidden="true" className="text-subtle">
              ·
            </span>
          )}
          {l === lang ? (
            <span aria-current="true" className="inline-flex min-h-11 min-w-9 items-center justify-center text-ink">
              {labels[l]}
            </span>
          ) : (
            <a
              href={languageTarget(path, l, insightSlugs)}
              hrefLang={l}
              lang={l}
              aria-label={l === 'en' ? labels.enName : labels.idName}
              className="inline-flex min-h-11 min-w-9 items-center justify-center text-subtle underline-offset-2 hover:text-brand-700 hover:underline"
            >
              {labels[l]}
            </a>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function Header({ lang, links, labels, insightSlugs }: { lang: Lang; links: NavLink[]; labels: Labels; insightSlugs: Record<Lang, string[]> }) {
  // Without its language prefix, so the prerendered HTML (/en/about) and the browser (/about) agree.
  const path = stripLang(usePathname())
  // The menu stays open only on the page it was opened on, so going to another page closes it.
  const [openOn, setOpenOn] = useState<string | null>(null)
  const open = openOn === path
  const close = () => setOpenOn(null)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpenOn(null)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const current = (href: string) => (stripLang(href) === path ? 'page' : undefined)

  return (
    <header className="sticky top-0 z-[100] border-b border-line-strong bg-surface">
      <div className="mx-auto flex h-16 max-w-page items-center gap-8 px-4 md:px-10 lg:h-[76px]">
        <Link href={localePath(lang, '/')} aria-label={labels.home} className="shrink-0">
          <Image src={LOGO_URL} alt={labels.logoAlt} width={93} height={36} loading="eager" className="block" />
        </Link>

        <nav aria-label={labels.nav} className="hidden flex-1 justify-center lg:flex">
          <ul className="flex items-center gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={current(link.href)}
                  className="inline-flex min-h-11 items-center rounded-control px-3 text-sm font-semibold text-muted hover:bg-surface-muted hover:text-ink aria-[current=page]:bg-brand-50 aria-[current=page]:text-brand-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0 lg:gap-3">
          <LanguageSwitch lang={lang} path={path} insightSlugs={insightSlugs} labels={labels.language} />
          <a
            href={INVESTOR_LOGIN}
            className="hidden min-h-11 items-center justify-center rounded-control border border-line-control bg-surface px-[18px] text-sm font-bold text-ink hover:bg-surface-muted hover:text-ink lg:inline-flex"
          >
            {labels.login}
          </a>
          <button
            type="button"
            onClick={() => setOpenOn(open ? null : path)}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? labels.closeMenu : labels.openMenu}
            className="inline-flex size-11 items-center justify-center rounded-control border border-line-strong bg-surface text-muted lg:hidden"
          >
            {open ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="site-menu" aria-label={labels.nav} className="border-t border-line-strong bg-surface lg:hidden">
          <ul className="mx-auto flex max-w-page flex-col px-4 py-3 md:px-10">
            {links.map((link) => (
              <li key={link.href} className="border-b border-line last:border-b-0">
                <Link
                  href={link.href}
                  aria-current={current(link.href)}
                  onClick={close}
                  className="flex min-h-12 items-center text-[15px] font-semibold text-muted hover:text-ink aria-[current=page]:text-brand-700"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={INVESTOR_LOGIN}
                className="flex min-h-11 items-center justify-center rounded-control border border-transparent bg-brand-700 px-[18px] text-sm font-bold text-white hover:bg-brand-900 hover:text-white"
              >
                {labels.login}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
