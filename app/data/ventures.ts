export type VentureTagKey = 'legal' | 'tech' | 'fin' | 'acc' | 'prop'

export type Venture = {
  name: string
  domain: string
  status: string
  featured: boolean
  tagKey: VentureTagKey
  tag: string
  desc: string
  pills: string[]
  logo: string
  logoHeight: number
  hero: {
    photo: string
    icon: string
    title: string
    desc: string
    domainColor: string
    badgeColor: string
    badgeBg: string
    badgeBorder: string
  }
}

export const ventures: Venture[] = [
  {
    name: 'Tandatangan.ID',
    domain: 'tandatangan.id',
    status: 'Live · Flagship',
    featured: true,
    tagKey: 'legal',
    tag: 'LegalTech · e-Signature',
    desc: 'Indonesia\'s e-signature and digital document platform — TTE, e-Meterai, HRIS, and corporate document management. Built for PSRE compliance and serving B2B clients across Indonesia.',
    pills: ['TTE / Digital Signature', 'e-Meterai', 'HRIS module', 'B2B SaaS', 'PSRE roadmap'],
    logo: '/images/logo-tandatangan.png',
    logoHeight: 36,
    hero: {
      photo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&q=80',
      icon: 'ti ti-file-certificate',
      title: "Indonesia's e-signature\nplatform, built for compliance.",
      desc: 'TTE, e-Meterai, document management, and HRIS — all in one platform serving corporate clients across Indonesia.',
      domainColor: '#80D4B8',
      badgeColor: '#45BC97', badgeBg: 'rgba(14,143,106,0.2)', badgeBorder: 'rgba(69,188,151,0.3)',
    },
  },
  {
    name: 'Intermediatek',
    domain: 'intermediatek.com',
    status: 'Live',
    featured: false,
    tagKey: 'tech',
    tag: 'Technology · IT Services',
    desc: 'Technology solutions and IT services for businesses across Indonesia — from infrastructure to digital transformation.',
    pills: ['IT Consulting', 'Digital Solutions'],
    logo: '/images/logo-intermediatek.png',
    logoHeight: 44,
    hero: {
      photo: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1400&q=80',
      icon: 'ti ti-cpu',
      title: 'Digital transformation\nfor Indonesian businesses.',
      desc: 'End-to-end IT consulting and technology solutions — from infrastructure to software, built by practitioners who\'ve shipped real products.',
      domainColor: '#AFA9EC',
      badgeColor: '#AFA9EC', badgeBg: 'rgba(127,119,221,0.2)', badgeBorder: 'rgba(175,169,236,0.3)',
    },
  },
  {
    name: 'Sahamku',
    domain: 'sahamku.net',
    status: 'Live',
    featured: false,
    tagKey: 'fin',
    tag: 'FinTech · Investment',
    desc: 'Stock market platform empowering Indonesian retail investors with tools, insights, and portfolio management.',
    pills: ['Stock Market', 'Retail Investors'],
    logo: '/images/logo-sahamku.png',
    logoHeight: 52,
    hero: {
      photo: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1400&q=80',
      icon: 'ti ti-chart-line',
      title: "Empowering Indonesia's\nretail investors.",
      desc: 'Tools, insights, and portfolio management for Indonesian retail investors navigating the local stock market with confidence.',
      domainColor: '#FAC775',
      badgeColor: '#FAC775', badgeBg: 'rgba(186,117,23,0.2)', badgeBorder: 'rgba(250,199,117,0.3)',
    },
  },
  {
    name: 'Neracaku',
    domain: 'neracaku.id',
    status: 'Live',
    featured: false,
    tagKey: 'acc',
    tag: 'FinTech · Accounting',
    desc: 'Simple bookkeeping and accounting for Indonesian SMEs — financial management without an accountant on payroll.',
    pills: ['Bookkeeping', 'SME Finance'],
    logo: '/images/logo-neracaku.png',
    logoHeight: 40,
    hero: {
      photo: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80',
      icon: 'ti ti-calculator',
      title: 'Bookkeeping made simple\nfor Indonesian SMEs.',
      desc: 'Accessible financial management for small businesses — no accountant on payroll required. Track, report, and stay on top of your numbers.',
      domainColor: '#85B7EB',
      badgeColor: '#85B7EB', badgeBg: 'rgba(55,138,221,0.2)', badgeBorder: 'rgba(133,183,235,0.3)',
    },
  },
  {
    name: 'Natara Projects',
    domain: 'nataraprojects.com',
    status: 'Live',
    featured: false,
    tagKey: 'prop',
    tag: 'PropTech · Design & Build',
    desc: 'Design & build contractor for residential, commercial, and industrial projects — Jabodetabek & Bandung, 8+ years experience.',
    pills: ['Design & Build', 'Renovation', 'Project Management'],
    logo: '/images/logo-natara.png',
    logoHeight: 40,
    hero: {
      photo: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1400&q=80',
      icon: 'ti ti-building',
      title: 'Professional design & build\nacross Jabodetabek & Bandung.',
      desc: 'Residential, commercial, renovation, and industrial — end-to-end with 8+ years of experience and full project transparency.',
      domainColor: '#F0997B',
      badgeColor: '#F0997B', badgeBg: 'rgba(216,90,48,0.2)', badgeBorder: 'rgba(240,153,123,0.3)',
    },
  },
]

const NUMBER_WORDS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten']

// Venture count spelled out for prose ("Five companies …"); falls back to digits past ten
export const ventureCountWord = NUMBER_WORDS[ventures.length] ?? String(ventures.length)
