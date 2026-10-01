// English copy for the site. Every visible string comes from a dictionary like this one; the
// Indonesian dictionary has exactly the same keys. `{name}` marks a value filled in with fmt().
export const en = {
  brand: {
    name: 'SMVentures',
    logoAlt: 'SMVC Venture Capital',
    home: 'SMVentures home',
  },
  nav: {
    label: 'Main',
    about: 'About',
    portfolio: 'Portfolio',
    people: 'People',
    shareholders: 'For shareholders',
    insights: 'Insights',
    login: 'Login as Investor',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  footer: {
    tagline: 'Venture builder based in Jakarta.',
    disclaimer: 'Nothing on this site is an offer of securities.',
    linksLabel: 'SMVentures elsewhere',
    linkedin: 'LinkedIn',
    instagram: 'Instagram',
    investorPortal: 'investor.smventures.id',
    copyright: '© {year} SMVentures · Jakarta, Indonesia',
  },
  numberWords: ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'],
  home: {
    hero: {
      kicker: 'Venture builder · Jakarta',
      title: 'We build companies with the operators who run them.',
      lead: 'SMVC starts, funds and operates technology businesses for Indonesia, and stays hands-on long after launch.',
      pitch: 'Pitch your idea',
      seePortfolio: 'See portfolio',
      statsLabel: 'SMVentures in numbers',
    },
    stats: {
      ventures: 'active ventures',
      firstCompany: 'first company built',
      people: 'people employed',
      industries: 'industries',
      handsOn: 'hands-on involvement',
      market: 'built for Indonesia',
    },
    portfolio: {
      kicker: 'Portfolio',
      title: '{count} companies, one operating bench.',
      readStory: 'Read the story →',
      readStoryOf: 'Read the story of {name}',
    },
    approach: {
      kicker: 'How we work',
      title: 'Operator first, capital second.',
      lead: 'We put people inside the company, not on a board call once a quarter.',
      steps: [
        { title: 'Build', text: 'We co-found with an operator, write the first product and land the first customers.' },
        { title: 'Fund', text: 'We fund early rounds and bring shareholders in through a clear, recorded process.' },
        { title: 'Operate', text: 'Shared finance, legal, design and engineering teams keep each company moving.' },
      ],
    },
    shareholders: {
      kicker: 'For shareholders',
      title: 'Your holdings, documents and updates in one place.',
      lead: 'Shareholders of SMVC companies follow their holdings, company updates, dividends and general meetings in the investor portal.',
      login: 'Login as Investor',
      howItWorks: 'How the portal works',
      note: 'Access is by invitation for registered shareholders only.',
    },
  },
  shareholders: {
    metaTitle: 'For shareholders',
    metaDescription:
      'How shareholders of SMVC companies see their holdings, documents, dividends and company updates in the invite-only investor portal.',
    kicker: 'For shareholders',
    title: 'Owning part of a private company, made clear.',
    lead: 'Private shares have no market price. We show what you own, what it is recorded at and why, and what happens next.',
    login: 'Login as Investor',
    contact: 'Contact investor relations',
    stepsLabel: 'How it works',
    steps: [
      {
        title: 'You are registered as a shareholder',
        text: 'After the deed is signed, we record your shares in the company’s share register.',
      },
      {
        title: 'You receive an invitation',
        text: 'We invite the email address of the Google account you choose. Only invited addresses can sign in.',
      },
      {
        title: 'You see what you own',
        text: 'Shares, percentage, recorded value with its basis, dividends and documents for each company.',
      },
      {
        title: 'You stay informed',
        text: 'Company updates, general meetings and other dates on the agenda, and questions to management in one place.',
      },
    ],
    faqKicker: 'Questions',
    faqTitle: 'Before you sign in',
    faq: [
      {
        q: 'Is this a public offering?',
        a: 'No. The portal is only for existing shareholders of SMVC companies. Nothing on it is an offer of securities to the public.',
      },
      {
        q: 'How do I sign in?',
        a: 'Open the login page and sign in with Google, using the address we invited. Before you see any data, you are asked to accept the portal’s privacy policy and terms of use.',
      },
      {
        q: 'How is the value of my shares worked out?',
        a: 'From the latest recorded event for each company: a funding round, an independent appraisal, book value or an internal estimate. The portal always shows which basis was used, and when.',
      },
      {
        q: 'Where is my data stored?',
        a: 'The portal, its database and its documents are hosted in Singapore. Google sign-in and email delivery may process data in other countries. The portal’s privacy policy lists what we keep and how to ask for a copy or a correction.',
      },
      {
        q: 'Can someone else see my holdings?',
        a: 'Only you, delegates linked to your investor account, and the SMVC team according to their role: administrators, data-entry staff and auditors we appoint (read-only). Downloaded documents carry the name of the person who downloaded them, and every download is recorded.',
      },
    ],
    privacyLink: 'Read the portal’s privacy policy',
    disclaimer:
      'Nothing on this page is an offer of securities. The investor portal is for registered shareholders of SMVC companies only.',
  },
  about: {
    metaTitle: 'About',
    metaDescription:
      'SMVentures is a venture builder that co-builds and operates companies across Indonesia’s most important industries — LegalTech, FinTech, PropTech, and enterprise SaaS.',
    howWeWork: {
      kicker: 'How we work',
      title: 'Beyond the check.',
      lead: 'Most investors write a check and wait. We show up — in the product, the org, the pitch room, and the client meetings.',
      pillars: [
        {
          title: 'Advisory & strategy',
          text: 'Business model design, go-to-market, and competitive positioning — shaped by real operator experience, not theory.',
        },
        {
          title: 'Network & access',
          text: 'Warm intros to enterprise clients, regulators, partners, and talent that would take years to reach on your own.',
        },
        {
          title: 'Operational partner',
          text: 'We take a seat as managing partner — not just on the board, but in the day-to-day operations building the company.',
        },
      ],
    },
    people: {
      kicker: 'The people',
      title: 'Who’s behind SMVentures.',
      lead: 'A founder who builds and an advisor who has been shaping Indonesia’s tech landscape since before the internet was mainstream.',
      linksLabel: '{name} elsewhere',
    },
    comparison: {
      kicker: 'Venture Builder vs VC',
      title: 'What makes us different.',
      lead: 'Venture capital provides capital. Venture builders provide everything else — and then some.',
      vcLabel: 'Traditional VC',
      vcTitle: 'Passive by design',
      vcItems: [
        'Capital only, quarterly board updates',
        'Founder figures out operations alone',
        'Network access is hit-or-miss',
        'Exits when returns are realized',
      ],
      ourLabel: 'SMVentures',
      ourTitle: 'Active builder',
      ourItems: [
        'Advisory + strategy + execution support',
        'Managing partner embedded in operations',
        'Direct access to ecosystem & relationships',
        'Long-term co-builder, not a timer',
      ],
    },
    advantages: {
      kicker: 'What we bring',
      title: 'The unfair advantages.',
      lead: 'Every venture in our ecosystem gets direct access to these capabilities from day one.',
      items: [
        {
          title: 'Product & engineering',
          text: 'Hands-on technical leadership — product strategy, architecture, and execution from an operator who has shipped.',
        },
        {
          title: 'Corporate network',
          text: 'Direct access to decision-makers in enterprise, government, and financial institutions across Indonesia.',
        },
        {
          title: 'Regulatory expertise',
          text: 'Deep familiarity with OJK, Kominfo, BSrE, and the regulatory landscape that trips up most founders.',
        },
        {
          title: 'GTM for Indonesia',
          text: 'Battle-tested go-to-market playbooks for B2B, enterprise, and SME segments in the Indonesian market.',
        },
      ],
    },
    lookingFor: {
      kicker: 'Who we build with',
      title: 'Who we’re looking for.',
      lead: 'We’re selective — not because we’re exclusive, but because we go all-in. The fit has to be right on both sides.',
      criteria: [
        {
          title: 'Indonesia-first market focus',
          text: 'Solutions designed for local needs — not a copy-paste from Western playbooks.',
        },
        {
          title: 'Committed founders',
          text: 'Not a side project. We need founders who are all-in and ready for intensive collaboration.',
        },
        {
          title: 'Regulated or B2B industries',
          text: 'LegalTech, FinTech, GovTech, or enterprise SaaS — where we have the deepest unfair advantage.',
        },
        {
          title: 'Pre-seed to seed stage',
          text: 'We’re most effective early — when the foundational decisions are still being shaped.',
        },
      ],
    },
    cta: {
      title: 'Have an idea? Let’s talk.',
      text: 'We’re open to early conversations — no deck required. What matters is a solid idea and a founder who is serious about building something real in Indonesia.',
      button: 'Get in touch',
    },
  },
  insights: {
    metaTitle: 'Insights',
    metaDescription: 'Notes and articles from SMVentures, a venture builder in Jakarta.',
    kicker: 'Insights',
    title: 'Insights',
    lead: 'Notes and articles from SMVentures.',
    back: 'Insights',
    draft: 'Draft',
    readMore: 'Read →',
    readMoreOf: 'Read “{title}”',
    rss: 'RSS feed',
    homeTitle: 'Latest from SMVentures',
    all: 'All insights',
    feedTitle: 'SMVentures Insights',
  },
  venture: {
    metaTitle: '{name} — SMVentures portfolio',
    back: 'Portfolio',
    visit: 'Visit {domain}',
    factsLabel: 'Key facts',
    founded: 'Founded',
    sector: 'Sector',
    products: 'Products',
    basedIn: 'Based in',
    smvcRole: 'SMVC role',
    website: 'Website',
    focusLabel: 'What it covers',
    storyLabel: 'The story',
    problem: 'The problem',
    built: 'What we built',
    now: 'Where it is now',
  },
  notFound: {
    metaTitle: 'Page not found',
    kicker: '404',
    title: 'We couldn’t find that page.',
    lead: 'The address may be mistyped, or the page has moved.',
    home: 'Back to the home page',
  },
  contact: {
    title: 'Let’s talk',
    intro: 'Tell us a bit about yourself and what you have in mind. No deck required.',
    close: 'Close',
    name: 'Name',
    email: 'Email',
    organisation: 'Organisation',
    optional: '(optional)',
    kind: 'What is this about?',
    chooseOne: 'Choose one',
    kinds: {
      pitch: 'Pitch an idea',
      partnership: 'Partnership',
      investor: 'Investor',
      other: 'Something else',
    },
    message: 'Message',
    website: 'Website',
    send: 'Send message',
    sending: 'Sending…',
    openLinkedIn: 'Open LinkedIn',
  },
}

export type Dictionary = typeof en
