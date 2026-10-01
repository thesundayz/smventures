// English copy for the site. Every visible string comes from a dictionary like this one; the
// Indonesian dictionary has exactly the same keys. `{name}` marks a value filled in with fmt().
export const en = {
  brand: {
    name: 'SMVentures',
    logoAlt: 'SMVC Venture Capital',
    home: 'SMVentures home',
  },
  meta: {
    title: 'SMVentures — Venture Builder, Indonesia',
    description:
      'SMVentures is a venture builder that co-builds and operates companies across Indonesia’s most important industries — LegalTech, FinTech, PropTech, and enterprise SaaS.',
    ogDescription:
      'Co-building companies across Indonesia’s most important industries. LegalTech, FinTech, PropTech, and enterprise SaaS.',
    shortDescription: 'Co-building companies across Indonesia’s most important industries.',
  },
  language: {
    label: 'Language',
    en: 'EN',
    id: 'ID',
    enName: 'EN, English',
    idName: 'ID, Bahasa Indonesia',
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
    privacy: 'Privacy',
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
  privacy: {
    metaTitle: 'Privacy policy',
    metaDescription: 'How SMVentures handles the personal data you send through the contact form on smventures.id, and how the site uses Google Analytics.',
    kicker: 'Privacy',
    title: 'Privacy policy',
    updated: 'Last updated {date}',
    draft: 'DRAFT — to be reviewed',
    draftNote: 'This policy is a draft that has not yet been reviewed by legal counsel.',
    controller: 'SMVentures',
    who: {
      title: 'Who we are',
      text: '{controller} (“we”) runs smventures.id and decides how the personal data described here is used. We follow Indonesia’s Personal Data Protection Law (Law No. 27 of 2022, “UU PDP”).',
    },
    collect: {
      title: 'What the contact form collects',
      intro: 'When you send the contact form, we receive:',
      items: [
        'your name;',
        'your email address, so we can reply;',
        'your organisation, if you fill it in;',
        'what your message is about (pitching an idea, a partnership, investing, or something else);',
        'your message.',
      ],
      technical:
        'To stop floods of messages, the server counts messages per internet (IP) address. That count is kept only in the server’s working memory, is not written to storage or logs, and disappears when the server restarts. If sending fails, our error log records only that it failed, never your message or details.',
    },
    purpose: {
      title: 'Why we use it',
      text: 'We use what you send only to read your message, answer you, and follow up on what you asked. We do not sell it, and we do not add you to a mailing list.',
    },
    processors: {
      title: 'Who processes it for us',
      items: [
        'Resend delivers the form to our email inbox, with your address as the reply-to.',
        'Vercel hosts the site and runs the form.',
        'Google provides Google Analytics (see below).',
      ],
      transfer: 'These providers may process data outside Indonesia, for example in the United States.',
    },
    retention: {
      title: 'How long we keep it',
      items: [
        'Your message stays in our email inbox for as long as we need it to handle your request and any follow-up, and is then deleted.',
        'The per-address count lasts only while the server keeps it in memory.',
        'Our providers keep their own delivery and request records for a limited time under their terms.',
      ],
    },
    analytics: {
      title: 'Google Analytics',
      text: 'We use Google Analytics to see how the site is used: which pages are viewed, roughly where visitors are, which device and browser they use, and how they arrived. Google Analytics sets cookies in your browser, and Google processes this data, possibly outside Indonesia. You can block these cookies in your browser settings, or install Google’s opt-out add-on.',
      optOut: 'Google Analytics opt-out add-on',
    },
    rights: {
      title: 'Your rights',
      intro: 'Under UU PDP you have the right, among others, to:',
      items: [
        'be told how your personal data is processed;',
        'see your personal data and get a copy of it;',
        'have inaccurate or incomplete data corrected;',
        'have your data deleted, unless the law requires us to keep it;',
        'withdraw your consent at any time;',
        'ask us to delay or restrict processing;',
        'receive your data in a commonly used format;',
        'object, and claim compensation for a breach in how your data was processed.',
      ],
    },
    contact: {
      title: 'How to reach us about your data',
      withEmail: 'Email {email}, preferably from the address you used. We may ask you to confirm who you are before acting on a request.',
      withoutEmail: 'Send us a message through the contact form, choose “Something else”, and say what you would like us to do. We may ask you to confirm who you are before acting on a request.',
      button: 'Open the contact form',
    },
    portal: {
      title: 'The investor portal',
      text: 'The investor portal at investor.smventures.id has its own privacy policy, which covers shareholder data.',
      link: 'Read the investor portal’s privacy policy',
    },
    changes: {
      title: 'Changes',
      text: 'When this policy changes, we update this page and the date at the top.',
    },
    consent: 'By sending this form you agree that we use your details to reply, as described in our {link}.',
    consentLink: 'privacy policy',
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
    // The English form shows the server's own wording (app/lib/contact.ts); these match it.
    messages: {
      sent: 'Thank you — your message is on its way. We’ll reply by email.',
      notConfigured:
        'Our contact form isn’t switched on yet, so nothing was sent. Please reach us on LinkedIn instead (the link is in the footer) — your message is still here to copy.',
      failed:
        'Sorry, we couldn’t send your message just now, so nothing was sent. Please try again in a few minutes, or reach us on LinkedIn (the link is in the footer).',
      rateLimited: 'That’s a lot of messages in a short time. Please wait about {seconds} seconds and try again — your message is still here.',
      invalid: 'Please check the highlighted fields.',
    },
    errors: {
      name: 'Please tell us your name (up to 100 characters).',
      email: 'That email address doesn’t look right.',
      organisation: 'Please keep this under 150 characters.',
      kind: 'Please choose what this is about.',
      message: 'Please write between 10 and 5,000 characters.',
    },
  },
}

export type Dictionary = typeof en
