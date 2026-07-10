// All site copy. Source of truth = the marketing synthesis dossier (docs/marketing-synth.json).
// Voice: calm premium authority. Death is the doorway, never the dwelling. No em-dashes.

export const nav = {
  brand: 'Ouro Praxis',
  links: [
    { label: 'The Cycle', href: '#cycle' },
    { label: 'The Engine', href: '#products' },
    { label: 'The Return', href: '#proof' },
    { label: 'Worth', href: '#calculator' },
  ],
  cta: 'Begin the cycle',
}

export const hero = {
  eyebrow: 'Ouro Praxis · AI Database Reactivation',
  headline: 'The end of a lead is the beginning of a sale.',
  subhead:
    'AI SMS conversations that turn the dormant leads already in your CRM into booked calls. No new ad spend. No new staff.',
  supporting: 'The revenue was never gone. It was waiting to be reawakened.',
  ctaPrimary: 'Begin the cycle',
  ctaSecondary: 'See what your list is worth',
}

export const proof = {
  eyebrow: 'The Return',
  headline: "The numbers a dead list produces once it's alive again.",
  sub: 'Quiet proof, not a screenshot wall.',
  metrics: [
    { value: 41, suffix: '%', label: 'average reply rate', against: 'vs 8% industry average' },
    { value: 500, prefix: '£', suffix: 'K+', label: 'recovered for clients' },
    { value: 200, suffix: 'K+', label: 'leads reactivated' },
    { value: 536, suffix: '%', label: 'increase in conversions' },
    { value: 10, suffix: '+', label: 'businesses reawakened' },
  ],
  micro: 'Average £40,000 to £100,000 recovered per campaign.',
}

export const products = {
  eyebrow: 'The Four Serpents',
  headline: 'Four coils. One closing loop.',
  sub: 'Each bot is a segment of the same cycle, always on, revenue where there was silence.',
  items: [
    {
      name: 'The Revival',
      role: 'Database Reactivation',
      body: 'Our AI texts your dormant list in your brand voice, reopens real conversations, and books the buyers hiding in leads you already paid to acquire. We have reawakened more than 200,000 of them.',
      tag: 'The flagship Engine',
      wash: 'lavender',
    },
    {
      name: 'First Response',
      role: 'Speed to Lead',
      body: 'Every new lead gets a human-quality reply in under 60 seconds, day or night. Responding inside a minute triples close rates and beats the 47-hour industry average that hands your leads to whoever answered first.',
      tag: 'Under 60 seconds',
      wash: 'mint',
    },
    {
      name: 'The Night Shift',
      role: 'Out of Hours',
      body: 'Half your leads arrive when you are closed. This one never closes. It qualifies and books across evenings, weekends and holidays, so a dark office never costs you another sale.',
      tag: 'Never sleeps',
      wash: 'sky',
    },
    {
      name: 'The Chorus',
      role: 'Google Reviews',
      body: 'It replies to every review in your brand voice within minutes, protecting your rating and compounding your local reputation while you get on with the work.',
      tag: 'Reputation, protected',
      wash: 'blush',
    },
  ],
}

export const cycle = {
  eyebrow: 'The Cycle',
  headline: 'Base matter into gold.',
  sub: 'The oldest idea in the world, run by AI. What died is not lost. It is dormant, waiting to be turned.',
  phases: [
    {
      no: 'I',
      name: 'Exhume',
      stage: 'nigredo · the blackening',
      body: 'We audit, clean, dedupe and compliance-scrub your dormant database to surface the buried buyers. The dead list, made ready.',
    },
    {
      no: 'II',
      name: 'Revive',
      stage: 'albedo · the dawn',
      body: 'A custom AI SMS agent, trained on your brand voice and never a template, reopens the conversation, answers questions, handles objections and qualifies intent at a human pace.',
    },
    {
      no: 'III',
      name: 'Return',
      stage: 'rubedo · the gold',
      body: 'Qualified prospects land on your calendar as booked appointments. The tail feeds the head. The cycle pays, and then it begins again.',
    },
  ],
}

export const calculator = {
  eyebrow: 'The Transmutation Engine',
  title: 'How much revenue is dead in your database right now?',
  sub: 'Feed in the base matter. Watch it resolve to gold.',
  framing: 'Revenue you already paid to acquire and wrote off, reborn.',
  inputs: {
    leads: { label: 'Leads sitting cold in your CRM', min: 500, max: 50000, step: 250, default: 5000 },
    aov: { label: 'Average job or customer value', min: 100, max: 10000, step: 50, default: 800, prefix: '£' },
    replyRate: { label: 'Reply rate', min: 5, max: 50, step: 1, default: 41, suffix: '%', note: 'Industry average 8%. Ouro Praxis average 41%.' },
    closeRate: { label: 'Close rate on conversations', min: 5, max: 40, step: 1, default: 25, suffix: '%' },
  },
  anchor: 'Reactivating an old lead costs 5 to 7 times less than buying a new one. Most of this revenue is just sitting there.',
  proofChip: '41% avg reply vs 8% industry · £500K+ recovered · 200K+ leads revived',
  cta: 'See what returns',
}

export const testimonials = {
  headline: 'The voices of the reawakened.',
  items: [
    {
      quote:
        "3,800 old enquiries were just rotting in our CRM. Within a fortnight the bot was in real conversations with 4 in 10 of them. We booked 31 surveys off a list I'd written off as dead.",
      name: 'Gareth Whitfield',
      role: 'Owner, Whitfield Heating & Plumbing, Leeds',
      vertical: 'Home Services · UK',
    },
    {
      quote:
        'These were lapsed patients we had chased twice and given up on. First campaign brought back just under $58,000 in treatment revenue. It paid for itself before we had finished onboarding.',
      name: 'Dr. Marissa Cole',
      role: 'Practice Owner, Brightwater Family Dental, Austin TX',
      vertical: 'Dental · US',
    },
    {
      quote:
        'Our lead list was a graveyard. Conversions off that segment went up more than 5x versus my front desk chasing by hand. Members walking in quoting a text they got at 9pm on a Sunday.',
      name: 'Danny Osei',
      role: 'Founder, Ironworks Strength Co., Manchester',
      vertical: 'Gym · UK',
    },
    {
      quote:
        "Nobody on our small crew has time to work an old lead list. The leads I'd exported to a 'do not bother' spreadsheet are the ones now paying our bills. No new hire required.",
      name: 'Rick Tannenbaum',
      role: 'GM, ClearView Windows & Exteriors, Columbus OH',
      vertical: 'Windows & Exteriors · US',
    },
  ],
}

export const faq = {
  headline: 'Questions before the cycle begins.',
  items: [
    {
      q: "Won't texting old leads annoy them or damage my brand?",
      a: 'No blasting. Every message references their original enquiry, opens in your brand voice, and leads with something useful rather than a hard pitch. It honours every opt-out instantly. Our 41% average reply rate tells us people are glad to hear from you.',
    },
    {
      q: "Is this compliant? I don't want my number blacklisted.",
      a: 'Protecting your sender reputation is our job, not your homework. We handle A2P registration, scrub against reassigned-number databases, honour every opt-out instantly, and keep STOP rates well under carrier limits. We reactivate without ever burning your list.',
    },
    {
      q: 'My leads are basically dead. Is there really anything left?',
      a: 'Dead is a label you assigned, not a fact. Those people had a real need and their timing simply changed. We routinely turn lists owners had written off to zero into tens of thousands in booked revenue. We have reawakened over 200,000 leads. Dormant is not dead.',
    },
    {
      q: "Won't an AI bot sound robotic and make my business look bad?",
      a: 'It is trained on your brand voice, not a template, and texts like a real person. The moment a lead is genuinely interested it hands the conversation to your team. It never fumbles a hot lead. It just makes sure one finally gets worked.',
    },
    {
      q: 'Do I need to hire anyone or change my systems?',
      a: 'You do not touch it. The Engine works your entire database on its own and only pings your team when someone is ready to book. It runs alongside the CRM you already use, and you are live in 7 days. Zero extra headcount.',
    },
    {
      q: 'How quickly do I see results?',
      a: 'Reactivation is the fastest revenue you own, because these people already know you. Replies land within days and booked calls in the first week. Most clients recover £40,000 to £100,000 from a single campaign.',
    },
  ],
}

export const founder = {
  eyebrow: 'Praxis',
  name: 'Everett',
  title: 'Founder, Ouro Praxis',
  paragraph:
    'Ouro Praxis was founded on one refusal: to accept that a lead is ever truly dead. The most valuable asset a business owns is the list it has stopped calling, every dormant contact money already spent to earn attention that was never converted. The name is deliberate. Ouroboros for the cycle that has no end. Praxis for the work that makes it real.',
  motto: 'The cycle is the philosophy. Praxis is where it pays.',
}

export const finalCta = {
  headline: 'Close the loop. Recover the revenue.',
  sub: 'The riskiest thing you can do with your database is nothing. It loses value every day it sits. Bring us the list you gave up on. We will hand it back as booked calls.',
  guarantee:
    'The Rebirth Guarantee: if your first 30-day cycle does not book qualified appointments, your setup fee is refunded. After that you only ever pay for results.',
  scarcity: 'Founder-built Engines. A limited number of onboards each month. One Engine per niche, per market.',
  ctaPrimary: 'Begin the cycle',
  ctaSecondary: 'Book a reactivation call',
}

export const footer = {
  brand: 'Ouro Praxis',
  tagline: 'Nothing is lost. Everything returns.',
  descriptor:
    'AI database reactivation for local service businesses. We revive the dormant leads you already own into booked calls and recovered revenue.',
  motto: 'The cycle is the philosophy. Praxis is where it pays.',
  columns: {
    Cycle: ['The Revival', 'First Response', 'The Night Shift', 'The Chorus'],
    Company: ['The Return', 'The Rebirth Guarantee', 'About Everett', 'Book a call'],
    Trust: ['Consent-checked', 'Reassignment-scrubbed', 'A2P-registered', 'Sent in your brand voice'],
  },
  legal: 'We reactivate without burning your list. Your sender reputation is the asset.',
  copyright: '© Ouro Praxis. The end of a lead is the beginning of a sale.',
}
