// The portfolio. Only ventures with `listed: true` appear anywhere on the site (home, venture
// pages, sitemap, statistics); set it back to true to show one again. Optional facts and story
// parts that are empty (null) are not rendered: fill them in only with confirmed facts.
// No imports, so `node --test` can load this file directly.

export type Localized = { en: string; id: string }

export type VentureTagKey = 'legal' | 'tech' | 'fin' | 'acc' | 'prop' | 'build'

export type Venture = {
  /** URL of the venture page: /portfolio/<slug> */
  slug: string
  name: string
  /** false hides the venture everywhere on the site; its data stays here. */
  listed: boolean
  /** Shown and linked on the site; null for a venture whose site is closed (no link, no domain). */
  domain: string | null
  featured: boolean
  status: Localized
  /** Colour of the status pill: 'info' for a venture that has not launched yet; otherwise the default. */
  statusTone?: 'info'
  tagKey: VentureTagKey
  /** "Sector · focus"; the part before " · " is shown as the sector. */
  tag: Localized
  /** One line used as the lead on the venture page. */
  headline: Localized
  /** The description on the home card, in metadata and in JSON-LD. */
  desc: Localized
  /** The paragraph under the headline on the venture page, when it differs from `desc`. */
  intro?: Localized
  pills: { en: string[]; id: string[] }
  logo: string
  /** The logo is an app icon with its own background and rounded corners: shown without the tile's frame. */
  logoIsAppIcon?: boolean
  /** Year ("2024") or year and month ("2024-06") the company was founded. */
  founded: string | null
  basedIn: Localized | null
  /** Product names, as the company writes them. */
  products: string[] | null
  smvcRole: Localized | null
  story: {
    problem: Localized | null
    built: Localized | null
    now: Localized | null
  }
}

const noStory = { problem: null, built: null, now: null }

export const ventures: Venture[] = [
  {
    slug: 'tandatangan-id',
    name: 'Tandatangan.ID',
    listed: true,
    domain: 'tandatangan.id',
    featured: true,
    status: { en: 'Live · Flagship', id: 'Beroperasi · Unggulan' },
    tagKey: 'legal',
    tag: { en: 'LegalTech · e-Signature', id: 'LegalTech · Tanda tangan elektronik' },
    headline: {
      en: 'Indonesia’s e-signature platform, built for compliance.',
      id: 'Platform tanda tangan elektronik Indonesia, dibangun untuk kepatuhan.',
    },
    desc: {
      en: 'Indonesia’s e-signature and digital document platform — TTE, e-Meterai, HRIS, and corporate document management. Built for PSRE compliance and serving B2B clients across Indonesia.',
      id: 'Platform tanda tangan elektronik dan dokumen digital Indonesia: TTE, e-Meterai, HRIS, dan manajemen dokumen perusahaan. Dibangun untuk memenuhi ketentuan PSrE dan melayani klien B2B di seluruh Indonesia.',
    },
    pills: {
      en: ['TTE / Digital Signature', 'e-Meterai', 'HRIS module', 'B2B SaaS', 'PSRE roadmap'],
      id: ['TTE / Tanda tangan digital', 'e-Meterai', 'Modul HRIS', 'SaaS B2B', 'Peta jalan PSrE'],
    },
    logo: '/images/logo-tandatangan.png',
    founded: null,
    basedIn: null,
    products: null,
    smvcRole: null,
    story: noStory,
  },
  {
    slug: 'intermediatek',
    name: 'Intermediatek',
    listed: true,
    domain: 'intermediatek.com',
    featured: false,
    status: { en: 'Live', id: 'Beroperasi' },
    tagKey: 'tech',
    tag: { en: 'Technology · IT Services', id: 'Teknologi · Layanan TI' },
    headline: {
      en: 'Digital transformation for Indonesian businesses.',
      id: 'Transformasi digital untuk bisnis di Indonesia.',
    },
    desc: {
      en: 'Technology solutions and IT services for businesses across Indonesia — from infrastructure to digital transformation.',
      id: 'Solusi teknologi dan layanan TI untuk bisnis di seluruh Indonesia, dari infrastruktur sampai transformasi digital.',
    },
    pills: {
      en: ['IT Consulting', 'Digital Solutions'],
      id: ['Konsultasi TI', 'Solusi digital'],
    },
    logo: '/images/logo-intermediatek.png',
    founded: null,
    basedIn: null,
    products: null,
    smvcRole: null,
    story: noStory,
  },
  {
    // Not shown until WS-9 is decided; set listed to true to bring it back.
    slug: 'sahamku',
    name: 'Sahamku',
    listed: false,
    domain: null,
    featured: false,
    status: { en: 'Live', id: 'Beroperasi' },
    tagKey: 'fin',
    tag: { en: 'FinTech · Investment', id: 'FinTech · Investasi' },
    headline: {
      en: 'Empowering Indonesia’s retail investors.',
      id: 'Memberdayakan investor ritel Indonesia.',
    },
    desc: {
      en: 'Stock market platform empowering Indonesian retail investors with tools, insights, and portfolio management.',
      id: 'Platform pasar modal yang membekali investor ritel Indonesia dengan alat, wawasan, dan pengelolaan portofolio.',
    },
    pills: {
      en: ['Stock Market', 'Retail Investors'],
      id: ['Pasar modal', 'Investor ritel'],
    },
    logo: '/images/logo-sahamku.png',
    founded: null,
    basedIn: null,
    products: null,
    smvcRole: null,
    story: noStory,
  },
  {
    slug: 'wangunin',
    name: 'Wangun.in',
    listed: true,
    domain: 'wangun.in',
    featured: false,
    status: { en: 'Coming soon', id: 'Segera hadir' },
    statusTone: 'info',
    tagKey: 'build',
    tag: { en: 'ConTech · Marketplace', id: 'ConTech · Marketplace' },
    headline: {
      en: 'Find a contractor you can trust.',
      id: 'Temukan kontraktor terpercaya.',
    },
    desc: {
      en: 'A platform that connects you with trusted contractors for homes, renovations and other construction projects.',
      id: 'Platform yang mempertemukan Anda dengan kontraktor terpercaya untuk rumah, renovasi, dan berbagai proyek konstruksi.',
    },
    intro: {
      en: 'Homes, renovations and more. Search contractors by need and location, see their portfolios, and compare quotes in one place.',
      id: 'Rumah, renovasi, dan lebih banyak. Cari kontraktor sesuai kebutuhan dan lokasi, lihat portofolionya, dan bandingkan penawaran di satu tempat.',
    },
    pills: {
      en: ['Find contractors', 'Verified contractors', 'Compare quotes'],
      id: ['Cari kontraktor', 'Kontraktor terverifikasi', 'Bandingkan penawaran'],
    },
    logo: '/images/logo-wangunin.png',
    founded: null,
    basedIn: null,
    products: null,
    smvcRole: null,
    story: noStory,
  },
  {
    // Not shown since Wangun.in took its place; set listed to true to bring it back.
    slug: 'neracaku',
    name: 'Neracaku',
    listed: false,
    domain: 'neracaku.id',
    featured: false,
    status: { en: 'Live', id: 'Beroperasi' },
    tagKey: 'acc',
    tag: { en: 'FinTech · Accounting', id: 'FinTech · Akuntansi' },
    headline: {
      en: 'Bookkeeping made simple for Indonesian SMEs.',
      id: 'Pembukuan yang sederhana untuk UMKM Indonesia.',
    },
    desc: {
      en: 'Simple bookkeeping and accounting for Indonesian SMEs — financial management without an accountant on payroll.',
      id: 'Pembukuan dan akuntansi sederhana untuk UMKM Indonesia: keuangan tetap tertata tanpa harus menggaji akuntan.',
    },
    pills: {
      en: ['Bookkeeping', 'SME Finance'],
      id: ['Pembukuan', 'Keuangan UMKM'],
    },
    logo: '/images/logo-neracaku.png',
    founded: null,
    basedIn: null,
    products: null,
    smvcRole: null,
    story: noStory,
  },
  {
    // The slug and domain keep the full name; the site shows "Natara".
    slug: 'natara-projects',
    name: 'Natara',
    listed: true,
    domain: 'nataraprojects.com',
    featured: false,
    status: { en: 'Live', id: 'Beroperasi' },
    tagKey: 'prop',
    tag: { en: 'PropTech · Design & Build', id: 'PropTech · Desain & bangun' },
    headline: {
      en: 'Professional design & build across Jabodetabek & Bandung.',
      id: 'Desain dan bangun profesional di Jabodetabek dan Bandung.',
    },
    desc: {
      en: 'Design & build contractor for residential, commercial, and industrial projects — Jabodetabek & Bandung, 8+ years experience.',
      id: 'Kontraktor desain dan bangun untuk proyek hunian, komersial, dan industri di Jabodetabek dan Bandung, dengan pengalaman lebih dari 8 tahun.',
    },
    pills: {
      en: ['Design & Build', 'Renovation', 'Project Management'],
      id: ['Desain & bangun', 'Renovasi', 'Manajemen proyek'],
    },
    logo: '/images/logo-natara.png',
    logoIsAppIcon: true,
    founded: null,
    basedIn: null,
    products: null,
    smvcRole: null,
    story: noStory,
  },
]

/** The ventures shown on the site, in order. */
export const listedVentures: Venture[] = ventures.filter((v) => v.listed)

export function findListedVenture(slug: string): Venture | undefined {
  return listedVentures.find((v) => v.slug === slug)
}

/** "LegalTech · e-Signature" → "LegalTech" */
export function sectorOf(tag: string): string {
  return tag.split(' · ')[0]
}
