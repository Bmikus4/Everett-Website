// All site copy. Marketing-first, professional agency structure (SamurAI-modelled).
// Voice: calm premium authority. Death is the doorway, never the dwelling. No em-dashes.
// Proof spine (only sanctioned figures): 41% reply vs 8% industry, £500K+ recovered,
// 200K+ leads reactivated, 536% increase in conversions.

export const nav = {
  brand: 'Ouro Praxis',
  links: [
    { label: 'How it works', href: '#how' },
    { label: 'What you get', href: '#services' },
    { label: 'Results', href: '#results' },
    { label: 'Your list', href: '#calculator' },
  ],
  cta: 'Book a free call',
}

export const hero = {
  eyebrow: 'AI database reactivation',
  headline: 'Turn your dead leads into booked calls.',
  subhead:
    'We use AI-led SMS to revive the dormant leads already sitting in your CRM. No new ad spend, no new hires.',
  ctaPrimary: 'Book a free call',
  ctaSecondary: 'See how it works',
  trustLine: 'Trusted by home services, dental, fitness and home-improvement businesses.',
  // the product, shown: an AI reactivation conversation that ends in a booking
  demo: {
    business: 'Everett Roofing',
    messages: [
      { from: 'ai', text: "Hi Gordon, it's Sarah at Everett Roofing. You asked about a flat-roof repair back in March. Is that still on your list?" },
      { from: 'lead', text: 'Oh yeah, honestly forgot about it' },
      { from: 'ai', text: "No problem at all. We've a crew in your area next week. Want a free quote while they're nearby?" },
      { from: 'lead', text: 'Go on then, Thursday works' },
      { from: 'ai', text: "Booked you in for Thursday at 2pm. You'll get a confirmation shortly." },
    ],
    caption: 'A real reactivation flow, in your brand voice.',
  },
}

export const trust = {
  line: 'The industries we reactivate for',
  industries: ['Home services', 'Dental', 'Fitness & gyms', 'Windows & roofing', 'Med-spa', 'Home improvement'],
}

export const problem = {
  eyebrow: 'The problem',
  headline: 'Your best leads are the ones you already gave up on.',
  body: [
    'Most businesses spend thousands acquiring leads, work them once, and let the rest go cold. Within weeks a CRM fills with contacts nobody ever calls again.',
    'Those people had a real need. Their timing simply changed. The money to win them was already spent. They are not dead, they are dormant, and they are the cheapest revenue you will ever recover.',
  ],
  stat: { value: 'Up to 70%', label: 'of the leads you pay for are never worked past the first attempt.' },
}

export const engine = {
  eyebrow: 'The Ouroboros Engine',
  headline: 'One system that closes the loop.',
  sub: 'We exhume your dormant database, revive it with AI that texts like a human, and return qualified prospects straight to your calendar. You bring the list. We bring it back to life.',
}

export const how = {
  eyebrow: 'How it works',
  headline: 'From dead list to booked calls in three moves.',
  sub: 'Done for you, start to finish. You take the calls, nothing else.',
  steps: [
    {
      no: '01',
      name: 'Exhume',
      body: 'We audit, clean, dedupe and compliance-scrub your dormant database, then segment it to surface the buyers buried inside.',
      outcome: 'A clean, ready list',
    },
    {
      no: '02',
      name: 'Revive',
      body: 'A custom AI SMS agent, trained on your brand voice, reopens the conversation, answers questions and handles objections at a human pace.',
      outcome: 'Real conversations',
    },
    {
      no: '03',
      name: 'Return',
      body: 'Qualified prospects land on your calendar as booked appointments, handed to your team the moment they are ready to buy.',
      outcome: 'Booked revenue',
    },
  ],
}

export const services = {
  eyebrow: 'What you get',
  headline: 'Four AI systems working your leads around the clock.',
  sub: 'Start with reactivation. Add the others as you scale.',
  items: [
    {
      name: 'Database Reactivation',
      body: 'Our AI texts your dormant list in your brand voice, reopens real conversations, and books the buyers hiding in leads you already paid to acquire.',
      tag: 'The flagship',
      wash: 'lavender',
    },
    {
      name: 'Speed to Lead',
      body: 'Every new enquiry gets a human-quality reply in under 60 seconds, day or night. The business that answers first almost always wins the sale.',
      tag: 'Under 60 seconds',
      wash: 'mint',
    },
    {
      name: 'Out of Hours',
      body: 'Half your leads arrive when you are closed. This one never is. It qualifies and books across evenings, weekends and holidays.',
      tag: 'Never sleeps',
      wash: 'sky',
    },
    {
      name: 'Google Reviews',
      body: 'It replies to every review in your brand voice within minutes, protecting your rating and compounding your local reputation.',
      tag: 'Reputation, protected',
      wash: 'blush',
    },
  ],
}

export const results = {
  eyebrow: 'The results',
  headline: 'What a reawakened list actually returns.',
  metrics: [
    { value: 536, suffix: '%', label: 'increase in lead conversions' },
    { value: 500, prefix: '£', suffix: 'K+', label: 'recovered for clients' },
    { value: 200, suffix: 'K+', label: 'dormant leads reactivated' },
  ],
  reply: { us: 41, industry: 8 },
  replyLabel: 'average reply rate, against an 8% industry average',
}

export const testimonials = {
  eyebrow: 'Client stories',
  headline: 'Owners who wrote the list off, then watched it pay.',
  items: [
    {
      quote: 'A list I had written off as dead was booking surveys within a fortnight. Our own follow-up never came close.',
      name: 'Gareth Whitfield',
      role: 'Owner, Whitfield Heating & Plumbing',
      region: 'Leeds, UK',
      stat: '31 surveys booked',
    },
    {
      quote: 'These were lapsed patients we had chased twice and given up on. It paid for itself before we had finished onboarding.',
      name: 'Dr. Marissa Cole',
      role: 'Practice Owner, Brightwater Family Dental',
      region: 'Austin, TX',
      stat: 'Recall revenue recovered',
    },
    {
      quote: 'Members are walking in quoting a text they got at 9pm on a Sunday. Conversions off that old segment jumped more than 5x.',
      name: 'Danny Osei',
      role: 'Founder, Ironworks Strength Co.',
      region: 'Manchester, UK',
      stat: '5x conversion lift',
    },
    {
      quote: 'Nobody on our small crew has time to work an old lead list. The ones I had exported to a "do not bother" file are paying our bills now.',
      name: 'Rick Tannenbaum',
      role: 'GM, ClearView Windows & Exteriors',
      region: 'Columbus, OH',
      stat: 'No new hire',
    },
  ],
}

export const why = {
  eyebrow: 'Why Ouro Praxis',
  headline: 'Specialists in reactivation. Not another generalist agency.',
  stats: [
    { value: '41%', label: 'average reply rate' },
    { value: '£500K+', label: 'recovered for clients' },
    { value: '200K+', label: 'leads reawakened' },
  ],
  points: [
    {
      title: 'One thing, done deeply',
      body: 'We reactivate dormant databases for local service businesses. It is all we do, so the conversations convert.',
    },
    {
      title: 'Done for you, owned by us',
      body: 'We build it, train it on your voice, run it and own the outcome. You never touch a tool. You just take the calls.',
    },
    {
      title: 'We never burn your list',
      body: 'A2P registered, reassigned-number scrubbed, every opt-out honoured instantly. Your sender reputation is the asset, and we protect it.',
    },
  ],
}

export const guarantee = {
  eyebrow: 'The Rebirth Guarantee',
  headline: 'We take the risk of reviving your list.',
  body: 'If your first 30-day cycle does not book qualified appointments, your setup fee is refunded in full. After that you only ever pay for results we produce.',
  points: ['Refundable setup fee', 'Pay for results after that', 'No long contracts'],
}

export const calculator = {
  eyebrow: 'Your list',
  title: 'How much revenue is sitting dead in your database?',
  sub: 'Move the sliders. The estimate updates as you go.',
  framing: 'Revenue you already paid to acquire, waiting to be recovered.',
  inputs: {
    leads: { label: 'Dormant leads in your CRM', min: 500, max: 50000, step: 250, default: 5000 },
    aov: { label: 'Average customer value', min: 100, max: 10000, step: 50, default: 800, prefix: '£' },
    replyRate: { label: 'Reply rate', min: 5, max: 50, step: 1, default: 41, suffix: '%', note: 'Industry average is 8%. Ouro Praxis averages 41%.' },
    closeRate: { label: 'Close rate on conversations', min: 5, max: 40, step: 1, default: 25, suffix: '%' },
  },
  anchor: 'Reactivating an old lead costs far less than buying a new one. Most of this revenue is simply waiting.',
  cta: 'Recover this revenue',
}

export const faq = {
  eyebrow: 'Before you ask',
  headline: 'The questions owners ask first.',
  items: [
    {
      q: "Won't texting old leads annoy them or damage my brand?",
      a: 'No blasting. Every message references their original enquiry, opens in your brand voice, and leads with something useful rather than a hard pitch. People reply because the first message helps them, not because it sells at them.',
    },
    {
      q: "Is this compliant? I don't want my number blacklisted.",
      a: 'Protecting your sender reputation is our job, not your homework. We handle A2P registration, scrub against reassigned-number databases, honour every opt-out instantly, and keep messaging well within carrier limits. We reactivate without ever burning your list.',
    },
    {
      q: 'My leads are basically dead. Is there really anything left?',
      a: 'Dead is a label you assigned, not a fact. Those people had a real need and their timing changed. We have reawakened over 200,000 leads that owners had written off. Dormant is not dead.',
    },
    {
      q: "Won't an AI bot sound robotic and make my business look bad?",
      a: 'It is trained on your brand voice, not a template, and texts like a real person. The moment a lead is genuinely interested it hands the conversation to your team. It never fumbles a hot lead.',
    },
    {
      q: 'Do I need to hire anyone or change my systems?',
      a: 'No. The Engine works your entire database on its own and only pings your team when someone is ready to book. It runs alongside the CRM you already use. Zero extra headcount.',
    },
    {
      q: 'How quickly do I see results?',
      a: 'Reactivation is the fastest revenue you own, because these people already know you. Replies land within days and the first booked calls usually inside the opening week.',
    },
  ],
}

export const founder = {
  eyebrow: 'The founder',
  name: 'Everett',
  title: 'Founder, Ouro Praxis',
  paragraph:
    'Everett founded Ouro Praxis on one refusal: to accept that a lead is ever truly dead. The most valuable asset a business owns is the list it has stopped calling. Every dormant contact is money already spent to earn attention that never converted. Ouro Praxis exists to close that gap, with AI that texts like a person, listens like a closer, and books like clockwork, always in the client’s own voice.',
  motto: 'The cycle is the philosophy. Praxis is where it pays.',
}

export const finalCta = {
  eyebrow: 'Begin the cycle',
  headline: 'Bring us the list you gave up on.',
  sub: 'The riskiest thing you can do with your database is nothing. It loses value every day it sits. In one free call we will show you what yours is worth.',
  ctaPrimary: 'Book a free call',
  scarcity: 'A limited number of onboards each month. One client per niche, per market.',
}

export const footer = {
  brand: 'Ouro Praxis',
  tagline: 'Nothing is lost. Everything returns.',
  descriptor:
    'AI database reactivation for local service businesses. We revive the dormant leads you already own into booked calls and recovered revenue.',
  email: 'hello@ouropraxis.com',
  columns: {
    Company: [
      { label: 'How it works', href: '#how' },
      { label: 'What you get', href: '#services' },
      { label: 'Results', href: '#results' },
      { label: 'The guarantee', href: '#guarantee' },
    ],
    Start: [
      { label: 'Book a free call', href: '#book' },
      { label: 'Value your list', href: '#calculator' },
      { label: 'About Everett', href: '#founder' },
    ],
  },
  trust: ['A2P registered', 'Reassignment scrubbed', 'Every opt-out honoured', 'Sent in your brand voice'],
  legal: 'We reactivate without burning your list. Your sender reputation is the asset.',
  copyright: '© Ouro Praxis. The end of a lead is the beginning of a sale.',
}
