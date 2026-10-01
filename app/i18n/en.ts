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
      note: 'Access is by invitation for registered shareholders only.',
    },
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
