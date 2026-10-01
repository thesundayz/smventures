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
