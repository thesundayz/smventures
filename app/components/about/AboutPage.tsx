// /about: the sections that were on the home page before the redesign, with the same copy in the
// new style: how we work, the people, venture builder vs VC, what we bring, who we build with,
// and the contact call to action.
import Image from 'next/image'
import { type Person, people } from '@/app/data/people'
import { type Dictionary, type Lang, fmt } from '@/app/i18n'
import Cta from '../Cta'
import {
  AwardIcon,
  BankIcon,
  BulbIcon,
  CheckIcon,
  CodeIcon,
  CogIcon,
  ExternalLinkIcon,
  GitHubIcon,
  GlobeIcon,
  type IconComponent,
  InstagramIcon,
  LinkedInIcon,
  MapPinIcon,
  MinusIcon,
  NetworkIcon,
  RocketIcon,
  ScaleIcon,
  TrendIcon,
  UsersIcon,
} from '../icons'
import { Container, Kicker, Lead, SectionTitle } from '../ui'

type T = Dictionary['about']

const PILLAR_ICONS: IconComponent[] = [BulbIcon, NetworkIcon, CogIcon]
const ADVANTAGE_ICONS: IconComponent[] = [CodeIcon, UsersIcon, ScaleIcon, TrendIcon]
const CRITERIA_ICONS: IconComponent[] = [MapPinIcon, AwardIcon, BankIcon, RocketIcon]
const LINK_ICONS: Record<Person['links'][number]['kind'], IconComponent> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  website: GlobeIcon,
  instagram: InstagramIcon,
  external: ExternalLinkIcon,
}

function SectionHead({ kicker, title, lead, id }: { kicker: string; title: string; lead: string; id: string }) {
  return (
    <div className="mb-8 md:mb-10">
      <Kicker>{kicker}</Kicker>
      <SectionTitle id={id} className="mt-3">
        {title}
      </SectionTitle>
      <Lead className="mt-3.5">{lead}</Lead>
    </div>
  )
}

function HowWeWork({ t }: { t: T['howWeWork'] }) {
  return (
    <section id="how-we-work" className="scroll-mt-20 pt-16 pb-16 md:pt-[88px] md:pb-[88px]">
      <Container>
        <Kicker>{t.kicker}</Kicker>
        <h1 className="mt-4 text-[40px] leading-[1.04] font-extrabold tracking-[-0.03em] text-ink md:text-[52px] xl:text-[64px] xl:tracking-[-0.035em]">
          {t.title}
        </h1>
        <Lead className="mt-5">{t.lead}</Lead>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {t.pillars.map((pillar, i) => {
            const Icon = PILLAR_ICONS[i] ?? BulbIcon
            return (
              <li key={pillar.title} className="flex flex-col gap-3 rounded-card border border-line-strong bg-surface-muted p-6 md:p-7">
                <span className="font-mono text-sm font-semibold text-brand-700">{String(i + 1).padStart(2, '0')}</span>
                <span className="grid size-10 place-items-center rounded-tile bg-brand-50 text-brand-700">
                  <Icon size={20} />
                </span>
                <h2 className="text-lg font-bold text-ink">{pillar.title}</h2>
                <p className="text-[15px] leading-relaxed text-muted">{pillar.text}</p>
              </li>
            )
          })}
        </ol>
      </Container>
    </section>
  )
}

function PersonCard({ person: p, lang, linksLabel }: { person: Person; lang: Lang; linksLabel: string }) {
  const tone = p.tone === 'founder' ? 'bg-brand-50 text-brand-700' : 'bg-violet-50 text-violet-700'
  return (
    <li className="overflow-hidden rounded-card border border-line-strong bg-surface">
      <div className="flex items-center gap-4 px-6 pt-6 md:h-[220px] md:justify-center md:bg-surface-muted md:p-0">
        <div className={`grid size-16 shrink-0 place-items-center overflow-hidden rounded-full border-[3px] border-surface md:size-40 ${tone}`}>
          {p.photo ? (
            <Image src={p.photo} alt={p.name} width={160} height={160} className="size-full object-cover object-top" />
          ) : (
            <span aria-hidden="true" className="text-lg font-extrabold md:text-[40px]">
              {p.initials}
            </span>
          )}
        </div>
        <div className="md:hidden">
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${tone}`}>{p.badge[lang]}</span>
          <h3 className="mt-1 text-lg leading-tight font-extrabold text-ink">{p.name}</h3>
        </div>
      </div>
      <div className="px-6 pt-4 pb-6 md:px-7 md:pt-6">
        <div className="hidden md:block">
          <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-bold ${tone}`}>{p.badge[lang]}</span>
          <h3 className="mt-3 text-[22px] leading-tight font-extrabold text-ink">{p.name}</h3>
        </div>
        <p className="mt-1 text-sm font-semibold text-brand-700">{p.title[lang]}</p>
        <p className="mt-3.5 text-[15px] leading-relaxed text-muted">{p.bio[lang]}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {p.tags[lang].map((tag) => (
            <li key={tag} className="rounded-full bg-surface-sunken px-3 py-1 text-xs font-semibold text-muted">
              {tag}
            </li>
          ))}
        </ul>
        <ul aria-label={fmt(linksLabel, { name: p.name })} className="mt-3 flex flex-wrap gap-x-5">
          {p.links.map((link) => {
            const Icon = LINK_ICONS[link.kind]
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-1.5 text-[13px] font-semibold text-subtle hover:text-brand-700"
                >
                  <Icon size={16} /> {link.label[lang]}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </li>
  )
}

function People({ t, lang }: { t: T['people']; lang: Lang }) {
  return (
    <section id="people" aria-labelledby="people-title" className="scroll-mt-20 bg-paper py-16 md:py-[88px]">
      <Container>
        <SectionHead id="people-title" kicker={t.kicker} title={t.title} lead={t.lead} />
        <ul className="grid gap-5 md:grid-cols-2">
          {people.map((p) => (
            <PersonCard key={p.name} person={p} lang={lang} linksLabel={t.linksLabel} />
          ))}
        </ul>
      </Container>
    </section>
  )
}

function Comparison({ t }: { t: T['comparison'] }) {
  return (
    <section aria-labelledby="comparison-title" className="py-16 md:py-[88px]">
      <Container>
        <SectionHead id="comparison-title" kicker={t.kicker} title={t.title} lead={t.lead} />
        <div className="grid overflow-hidden rounded-card border border-line-strong md:grid-cols-2">
          <div className="bg-surface p-6 md:p-8">
            <span className="inline-block rounded-full bg-surface-sunken px-2.5 py-0.5 text-xs font-bold text-muted">{t.vcLabel}</span>
            <h3 className="mt-4 text-lg font-bold text-ink">{t.vcTitle}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {t.vcItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-subtle">
                  <MinusIcon size={16} className="mt-1 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-900 p-6 md:p-8">
            <span className="inline-block rounded-full bg-brand-400 px-2.5 py-0.5 text-xs font-bold text-brand-900">{t.ourLabel}</span>
            <h3 className="mt-4 text-lg font-bold text-white">{t.ourTitle}</h3>
            <ul className="mt-5 flex flex-col gap-3">
              {t.ourItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[15px] text-brand-100">
                  <CheckIcon size={16} className="mt-1 shrink-0 text-brand-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Advantages({ t }: { t: T['advantages'] }) {
  return (
    <section aria-labelledby="advantages-title" className="bg-paper py-16 md:py-[88px]">
      <Container>
        <SectionHead id="advantages-title" kicker={t.kicker} title={t.title} lead={t.lead} />
        <ul className="grid gap-5 md:grid-cols-2">
          {t.items.map((item, i) => {
            const Icon = ADVANTAGE_ICONS[i] ?? CodeIcon
            return (
              <li key={item.title} className="flex gap-4 rounded-card border border-line-strong bg-surface p-6">
                <span className="grid size-10 shrink-0 place-items-center rounded-tile bg-brand-50 text-brand-700">
                  <Icon size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-ink">{item.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{item.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

function LookingFor({ t }: { t: T['lookingFor'] }) {
  return (
    <section aria-labelledby="looking-for-title" className="py-16 md:py-[88px]">
      <Container>
        <SectionHead id="looking-for-title" kicker={t.kicker} title={t.title} lead={t.lead} />
        <ul className="overflow-hidden rounded-card border border-line-strong bg-surface">
          {t.criteria.map((c, i) => {
            const Icon = CRITERIA_ICONS[i] ?? MapPinIcon
            return (
              <li key={c.title} className="flex items-center gap-4 border-b border-line px-5 py-5 last:border-b-0 md:px-7">
                <Icon size={22} className="shrink-0 text-brand-700" />
                <div>
                  <h3 className="font-bold text-ink">{c.title}</h3>
                  <p className="mt-0.5 text-sm text-subtle">{c.text}</p>
                </div>
                <CheckIcon size={18} className="ml-auto shrink-0 text-brand-700" />
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

export default function AboutPage({ t, lang }: { t: T; lang: Lang }) {
  return (
    <main>
      <HowWeWork t={t.howWeWork} />
      <People t={t.people} lang={lang} />
      <Comparison t={t.comparison} />
      <Advantages t={t.advantages} />
      <LookingFor t={t.lookingFor} />
      <Cta t={t.cta} />
    </main>
  )
}
