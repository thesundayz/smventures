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
