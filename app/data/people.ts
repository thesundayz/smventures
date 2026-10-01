// The people on /about (#people). Text in both languages; names, links and photos as they are.
// No imports, so `node --test` can load this file directly.

type Localized = { en: string; id: string }

export type PersonLink = { kind: 'linkedin' | 'github' | 'website' | 'instagram' | 'external'; label: Localized; href: string }

export type Person = {
  name: string
  initials: string
  tone: 'founder' | 'advisor'
  badge: Localized
  title: Localized
  bio: Localized
  tags: { en: string[]; id: string[] }
  links: PersonLink[]
  photo: string | null
}

export const people: Person[] = [
  {
    name: 'Sandi Mardiansyah',
    initials: 'SM',
    tone: 'founder',
    badge: { en: 'Founder & Managing Partner', id: 'Pendiri & Managing Partner' },
    title: {
      en: 'Builder, operator, and the person who gets things done.',
      id: 'Pembangun, operator, dan orang yang memastikan semuanya terlaksana.',
    },
    bio: {
      en: 'Solo founder and developer behind SMVentures and its portfolio companies. Combines deep technical hands-on capability with business strategy — from architecting production systems to closing corporate clients. Operates across all ventures as managing partner, embedding directly into each company’s product, operations, and growth.',
      id: 'Pendiri tunggal sekaligus developer di balik SMVentures dan perusahaan-perusahaan portofolionya. Memadukan kemampuan teknis yang dalam dan turun tangan langsung dengan strategi bisnis, mulai dari merancang sistem produksi sampai menutup kesepakatan dengan klien korporat. Menjadi managing partner di semua venture dan terlibat langsung dalam produk, operasional, dan pertumbuhan setiap perusahaan.',
    },
    tags: {
      en: ['Full-stack engineering', 'Product strategy', 'B2B SaaS', 'LegalTech', 'Jakarta'],
      id: ['Rekayasa full-stack', 'Strategi produk', 'SaaS B2B', 'LegalTech', 'Jakarta'],
    },
    links: [
      { kind: 'linkedin', label: { en: 'LinkedIn', id: 'LinkedIn' }, href: 'https://www.linkedin.com/in/thesundayz/' },
      { kind: 'github', label: { en: 'GitHub', id: 'GitHub' }, href: 'https://github.com/thesundayz' },
      { kind: 'website', label: { en: 'Website', id: 'Situs web' }, href: 'https://www.sandimardiansyah.com/' },
    ],
    photo: '/images/sandi.png',
  },
  {
    name: 'Shinta W. Dhanuwardoyo',
    initials: 'SD',
    tone: 'advisor',
    badge: { en: 'Advisor', id: 'Penasihat' },
    title: { en: 'Indonesia’s digital pioneer since 1996.', id: 'Pionir digital Indonesia sejak 1996.' },
    bio: {
      en: 'Founder & CEO of Bubu.com — Indonesia’s first and leading digital agency, founded in 1996. Angel investor, startup mentor, and one of the most networked figures in Southeast Asian tech. Former Managing Partner at Nusantara Ventures, co-founder of Silicon Valley Asia Technology Alliance. Recognized by Forbes Indonesia as “Inspiring Women Honor Roll” and Globe Asia’s “99 Most Powerful Women.”',
      id: 'Pendiri & CEO Bubu.com, agensi digital pertama dan terdepan di Indonesia yang berdiri pada 1996. Angel investor, mentor startup, dan salah satu tokoh dengan jejaring terluas di dunia teknologi Asia Tenggara. Pernah menjadi Managing Partner di Nusantara Ventures dan salah satu pendiri Silicon Valley Asia Technology Alliance. Masuk “Inspiring Women Honor Roll” versi Forbes Indonesia dan “99 Most Powerful Women” versi Globe Asia.',
    },
    tags: {
      en: ['Angel investor', 'Bubu.com', 'Nusantara Ventures', 'KADIN', 'Silicon Valley'],
      id: ['Angel investor', 'Bubu.com', 'Nusantara Ventures', 'KADIN', 'Silicon Valley'],
    },
    links: [
      { kind: 'linkedin', label: { en: 'LinkedIn', id: 'LinkedIn' }, href: 'https://www.linkedin.com/in/shintabubu/' },
      { kind: 'instagram', label: { en: 'Instagram', id: 'Instagram' }, href: 'https://www.instagram.com/shintabubu' },
      { kind: 'external', label: { en: 'bubu.com', id: 'bubu.com' }, href: 'https://www.bubu.com' },
    ],
    photo: '/images/shinta-dhanuwardoyo.jpg',
  },
]
