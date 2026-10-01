// Site footer (docs/desain/layar/Situs-Beranda.html): logo, where we are, the securities
// disclaimer (on every page), and links out.
import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary } from '@/app/i18n'
import { type Lang, localePath } from '@/app/i18n/paths'
import { INSTAGRAM, INVESTOR_PORTAL, LINKEDIN_COMPANY, LOGO_URL } from '@/app/lib/links'
import CurrentYear from './CurrentYear'

export default function Footer({ t, lang, logoAlt, buildYear }: { t: Dictionary['footer']; lang: Lang; logoAlt: string; buildYear: number }) {
  const [before, after] = t.copyright.split('{year}')
  const links = [
    { href: LINKEDIN_COMPANY, label: t.linkedin },
    { href: INSTAGRAM, label: t.instagram },
    { href: INVESTOR_PORTAL, label: t.investorPortal },
  ]
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-10">
        <div>
          <Image src={LOGO_URL} alt={logoAlt} width={93} height={36} className="block brightness-0 invert" />
          <p className="mt-3 max-w-[40ch] text-[13px] leading-relaxed">
            {t.tagline} {t.disclaimer}
          </p>
          <p className="mt-3 text-xs text-brand-300">
            {before}
            <CurrentYear buildYear={buildYear} />
            {after}
          </p>
        </div>
        <nav aria-label={t.linksLabel}>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[13px]">
            <li>
              <Link
                href={localePath(lang, '/privacy')}
                className="inline-flex min-h-11 items-center text-brand-100 underline-offset-2 hover:text-white hover:underline"
              >
                {t.privacy}
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center text-brand-100 underline-offset-2 hover:text-white hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
