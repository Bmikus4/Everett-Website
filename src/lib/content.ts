// All site copy. Audience: US window & door replacement dealers.
// Angle: FOUND MONEY, PAID ON SITS. Plain contractor vernacular, results-first.
// RULES (enforced): no "AI/bot/automation/algorithm" language; USD + US only;
// every service block ends on results + pay-on-sits; one defensible number per claim;
// one CTA label per intent ("Get a free demo"); ZERO em-dashes anywhere.
// Stats are the validated set (MIT/HBR speed-to-lead, 3-5 shared, 5-15% recovery, etc).

export const CTA_LABEL = 'Get a free demo'

export const nav = {
  brand: 'Ouro Praxis',
  links: [
    { label: 'Services', href: '/services' },
    { label: 'Case studies', href: '/cases' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  cta: CTA_LABEL,
}

export const hero = {
  kicker: 'For window & door dealers',
  headline: "Who's working your 2024 unsold demos right now?",
  subhead:
    "If the answer is nobody, we are your rehash department, redefined. You only pay when the appointment sits.",
  cta: CTA_LABEL,
  // The product, shown: a real reactivation text thread that ends in a sat appointment.
  demo: {
    business: 'Summit Window & Door',
    setter: 'Dana',
    messages: [
      { from: 'setter', text: "Hey Jim, it's Dana over at Summit Window & Door. My manager asked me to reach out, didn't want to spam you." },
      { from: 'setter', text: "Your 2025 quote is actually under today's replacement cost. If windows are still on the list, we can lock that price before the next increase." },
      { from: 'lead', text: 'Honestly forgot about it. How much are we talking?' },
      { from: 'setter', text: 'For the 8 windows we measured, still in your original range. Want someone to swing by this week to confirm?' },
      { from: 'lead', text: 'Thursday afternoon works' },
      { from: 'setter', text: "Done, Thursday 3pm. I'll send a confirmation and make sure Karen is there too." },
    ],
    status: 'Appointment sat, both homeowners confirmed',
  },
  // Trust strip sits UNDER the hero (never inside it).
  trust: [
    'You only pay on sits',
    'One dealer per metro',
    'Consent-sourced, quiet-hours enforced',
  ],
}

export const compare = {
  then: {
    label: 'Rehash, the old way',
    line: 'Two weeks of dialing, low answer rates, high payroll. Then it quietly dies.',
    points: [
      'A setter seat costs $40-60K a year',
      "Homeowners stopped answering unknown numbers years ago",
      'Only ever works fresh leads, the old layer never gets touched',
      'You pay whether it produces or not',
    ],
  },
  now: {
    label: 'The Ouro Praxis way',
    line: 'We work every layer of your CRM, and you only pay when the appointment sits.',
    points: [
      'No headcount. Done for you, end to end',
      'Text gets read. Two-way conversation, live bookings',
      'The 6 to 36 month layer, the money nobody else touches',
      'Pay per sit, not per promise',
    ],
  },
}

export const bridge = {
  headline: 'Be-backs that actually come back.',
  body:
    'We work the demo-no-sales, dead Angi leads, cancels, and past customers sitting in your MarketSharp, and book the live ones back onto your calendar. In your voice, with both homeowners confirmed.',
}

export const pain = {
  eyebrow: 'The leaks',
  headline: 'We follow your funnel. We plug every leak in it.',
  sub: "You have spent years and six figures filling your CRM. Here is where it leaks, stage by stage.",
  leaks: [
    {
      k: 'Demos walk',
      body: 'Roughly 65-75% of demos leave without buying the same day. Reps chase be-backs for two weeks, then the demo-no-sales go into the CRM to die. Nobody touches the 6-to-36-month layer.',
    },
    {
      k: 'Shared leads',
      body: 'Angi and shared leads are sold to 3-5 contractors at once and close in the low-to-mid teens. The other 85 out of every 100 are paid for, consented, and buried.',
    },
    {
      k: 'Dials go nowhere',
      body: "Homeowners stopped answering unknown numbers. Dialing old leads is a morale shredder, so nobody does it, and your setters can't get anyone on the phone.",
    },
    {
      k: 'After-hours goes cold',
      body: '40%+ of inquiries land after your setters go home. The 9pm Saturday lead is ice by Monday’s dial.',
    },
    {
      k: 'Sits fall off',
      body: 'No-shows, cancels, and one-leggers drop off the calendar and almost none get re-set. That is a rep’s route slot and windshield time, gone.',
    },
    {
      k: 'Empty January',
      body: 'Crews on payroll, trucks in the lot, and nothing on the install calendar to start the year.',
    },
    {
      k: 'Underpriced quotes',
      body: 'Every quote you wrote last year is under today’s material cost, and the 25C tax credit ended for anything installed after Dec 31, 2025.',
    },
  ],
  close: 'Every one of those leaks has a name in your CRM. We work all of them, and you pay on sits.',
}

// Six funnel-stage services. Home walks the funnel; Database Reactivation is the
// flagship ("start here"). Every block closes on results + pay-on-sits.
export const services = {
  eyebrow: 'What we run',
  headline: 'Six services, one for every leak.',
  sub: 'Most dealers start with Database Reactivation, because it is money already in the CRM. The rest of the funnel builds from there.',
  items: [
    {
      stage: '01',
      tag: 'New leads',
      name: 'Speed to Lead',
      hook: 'Shared leads are a footrace, and right now you are losing it.',
      body: 'Every new lead, from Angi, Google, Meta, or your website, gets a real two-way response in under 60 seconds, around the clock. We qualify the project and confirm both homeowners before your competitor picks up the phone.',
      wins: [
        'Under 60 seconds to first contact, 24/7',
        'Both homeowners confirmed, no more one-leggers',
        'Set rate climbs without adding a setter seat',
      ],
      flagship: false,
    },
    {
      stage: '02',
      tag: 'Nights & weekends',
      name: 'After-Hours Setter',
      hook: 'Your call center goes home at 6. About 40% of your leads do not.',
      body: 'Facebook leads at 9pm, website inquiries Sunday morning: we answer, qualify, and book them the moment they land. Monday your issue sheet is already full, with no overtime and no weekend shift.',
      wins: [
        'Zero missed inquiries, whenever they arrive',
        'Fully qualified before your team gets in',
        'Pairs with Speed to Lead so no lead goes cold',
      ],
      flagship: false,
    },
    {
      stage: '03',
      tag: 'DMs & comments',
      name: 'Social Media Manager',
      hook: 'Every unanswered comment and DM is a lead walking to your competitor.',
      body: '"How much do windows run?" "Do you do doors?" We respond in your voice within minutes across Facebook, Instagram, ad comment threads, and local groups, qualify the prospect, and book the live ones.',
      wins: [
        'Every DM answered in minutes, 24/7',
        'Ad comments managed so spend never leaks',
        'Qualified prospects booked onto your calendar',
      ],
      flagship: false,
    },
    {
      stage: '04',
      tag: 'Dead leads & demos',
      name: 'Database Reactivation',
      hook: 'Your CRM is full of paid-for homeowners nobody is talking to. That is your goldmine.',
      body: 'Demo-no-sales, unset aged leads, cancels, and financing declines: we text every layer of your database, open real two-way conversations, and book the live ones. In your voice, with both homeowners confirmed.',
      wins: [
        'Demo-no-sales, educated and quoted, your warmest inventory',
        'Cancels re-approached so your rep never has the awkward call',
        'The price-lock angle turned into the market’s best urgency hook',
        'One CSV export and one 20-minute call is your entire workload',
      ],
      flagship: true,
    },
    {
      stage: '05',
      tag: 'Post-install',
      name: 'Reviews & Reputation',
      hook: 'Your Google profile is your highest-converting lead source, and most dealers treat it like an afterthought.',
      body: 'Google officially lists review count and rating as a Local Services Ads ranking factor. We answer every review in your voice within 24 hours and time post-install asks to the moment satisfaction peaks.',
      wins: [
        'Every review answered, positive and negative, within 24 hours',
        'Negative reviews handled before they do quiet damage',
        'More reviews feed your LSA ranking and lower cost per lead',
      ],
      flagship: false,
    },
    {
      stage: '06',
      tag: 'Past customers',
      name: 'Referral Campaigns',
      hook: 'Your best leads already live in houses you installed. Nobody is asking them.',
      body: 'Referrals close at 45-65% versus 8-15% on shared leads, at near-zero cost. We run structured text campaigns to your installed base, timed to the post-install high, the anniversary, and seasonal triggers.',
      wins: [
        'Post-install ask timed 2-3 weeks out when it feels natural',
        'Neighbor and cross-sell campaigns to your warmest audience',
        'Roughly 10x cheaper per job than a shared lead',
      ],
      flagship: false,
    },
  ],
}

export const how = {
  eyebrow: 'How it works',
  headline: 'Your whole job is one CSV and twenty minutes.',
  steps: [
    {
      no: '01',
      name: 'Export one list',
      body: 'MarketSharp, LeadPerfection, i360, whatever you run. Your office manager pulls one CSV. Ten minutes.',
    },
    {
      no: '02',
      name: 'Approve the scripts',
      body: 'We write every campaign in your company’s voice. You approve every word on one 20-minute call.',
    },
    {
      no: '03',
      name: 'Watch the calendar',
      body: 'We scrub, register, send, converse, book, and confirm. You get one number every Friday: dollars booked.',
    },
  ],
}

export const calculator = {
  eyebrow: 'The math',
  title: "There's a number buried in your CRM.",
  sub: 'Move the sliders. This is revenue you already paid to acquire, waiting to be recovered.',
  inputs: {
    contacts: { label: 'Dead contacts in your CRM', min: 500, max: 25000, step: 250, default: 5000 },
    ticket: { label: 'Average job ticket', min: 4000, max: 25000, step: 250, default: 11000, prefix: '$' },
    rate: { label: 'List-to-sale rate', min: 0.5, max: 3, step: 0.1, default: 1.5, suffix: '%', note: 'Systematic follow-up recovers about 5-15% of unsold estimates. This is jobs, not replies.' },
  },
  closeRateForSits: 0.35, // sits -> sold jobs assumption, to derive sits from jobs
  anchor: 'Reactivating an old lead costs a fraction of buying a new one. Most of this is simply waiting.',
  cta: CTA_LABEL,
}

export const offer = {
  eyebrow: 'The offer',
  headline: 'Pay like you pay your salespeople: on results.',
  points: [
    { title: 'A one-time setup fee', body: 'Covers the list scrub, compliance registration, and campaigns built in your voice. Skin in the game on both sides.' },
    { title: 'Then pay per sit', body: 'Plus a small percent of collected revenue. The same shape as rep commission, on leads you had already written off.' },
    { title: 'The guarantee', body: 'Give us your 500 oldest demo-no-sales. If we do not put 10 sat appointments on your calendar in 21 days, the setup fee comes back.' },
    { title: 'One dealer per metro', body: 'Everything we learn reactivating your market’s homeowners works for you, and nobody else.' },
  ],
  cta: CTA_LABEL,
}

export const compliance = {
  eyebrow: 'On the record',
  headline: 'Texting done right.',
  points: [
    'Consent-sourced contacts only, nothing without a documented basis gets a message',
    'Every list scrubbed against known litigators and prior opt-outs before a single send',
    'Texts sent 8am to 9pm local, opt-outs honored within 10 business days',
    'Every message identifies your company and how to opt out',
  ],
  bottomLine: 'More defensible than whoever is texting from the office cell phone today.',
}

export const faq = {
  eyebrow: 'Straight answers',
  headline: 'Fair questions.',
  items: [
    {
      q: 'We already do rehash.',
      a: 'Good, most real companies do, for about two weeks per lead. Who texts the ones from fourteen months ago? That layer is most of your list, and it is where we make our money.',
    },
    {
      q: 'My list is too old.',
      a: 'Maybe. We will know within seven days for the cost of a CSV. Old is fine: windows they did not replace in 2023 are draftier and cost more today. Junk gets filtered before anything sends, so you never pay on noise.',
    },
    {
      q: "Won't this train homeowners to wait for discounts?",
      a: 'Only if rehash means "call back cheaper." Ours does not. We re-open conversations on new information: price increases, crew availability, financing changes, never price cuts.',
    },
    {
      q: 'How is this different from the software platforms?',
      a: 'Software is a gym membership. You still have to script it, staff it, and manage it, and you pay every month whether it produces or not. We are the team, not the tool, done for you and paid on sits.',
    },
    {
      q: 'Will homeowners know the difference?',
      a: 'You approve every word. Messages are short, human, and in your company’s voice, and anyone who asks for a person gets one immediately. The most common reply we see is relief that somebody finally followed up.',
    },
  ],
}

export const founder = {
  eyebrow: 'The founder',
  name: 'Everett Smith',
  title: 'Founder, Ouro Praxis',
  quote:
    'Why can’t we craft an offer so compelling that a dealer would have to be crazy to say no, and then deliver on it?',
  body:
    'Ouro Praxis was built on one belief: replacement dealers are sitting on a goldmine of paid-for homeowners, and the right follow-up unlocks it without adding headcount, complexity, or upfront cost. So we built the system we wished existed, priced it on results, and put it to work.',
}

export const finalCta = {
  headline: "There's a number buried in your CRM. Let's find out what it is.",
  sub: 'Fifteen minutes, three inputs. You leave with the math whether we ever work together or not.',
  cta: CTA_LABEL,
  underline: 'One dealer per metro',
}

export const footer = {
  brand: 'Ouro Praxis',
  tagline: 'Found money, paid on sits.',
  descriptor:
    'The rehash department for window and door dealers. We work every layer of your CRM and book the live ones onto your calendar. You only pay when the appointment sits.',
  email: 'hello@ouropraxis.com',
  columns: {
    Company: [
      { label: 'Services', href: '/services' },
      { label: 'Case studies', href: '/cases' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
    Start: [
      { label: CTA_LABEL, href: '/contact' },
      { label: 'The math', href: '/#calculator' },
    ],
  },
  trust: ['Consent-sourced', 'Litigator-scrubbed', 'Quiet hours enforced', 'Opt-outs honored'],
  legal: 'We message only previously-consented contacts and protect your number as the asset it is.',
  copyright: 'Ouro Praxis. The end of a lead is the beginning of a sale.',
}

// ---------- Services page ----------
export const servicesPage = {
  kicker: 'Our services',
  headline: 'We follow your funnel. We plug every leak in it.',
  sub: 'Every service maps to a stage of your sales process, from the second a lead lands to years after the install. Most dealers start with Database Reactivation, because it is money already in the CRM.',
  funnel: ['Lead in', 'Set', 'Sit', 'Close', 'Install', 'Past customer'],
}

// ---------- About page ----------
export const aboutPage = {
  kicker: 'About',
  headlineTop: 'We saw a problem.',
  headlineEm: 'We built the fix.',
  intro:
    'Window and door dealers were sitting on thousands of paid-for leads earning nothing. No system was working them the right way, so we built one from scratch, priced it on results, and put it to work.',
  story: [
    'For years the agency world told dealers to do it the hard way: retainer contracts, funnels, expensive ads. It was exhausting, and it did not have to be.',
    'The problem was obvious. Dealers spend six figures a year on new leads while thousands of already-paid-for contacts, demo-no-sales, dead Angi leads, cancels, and past customers, sit untouched in the CRM. The leads were there. The consent was there. The revenue was there. What was missing was a team willing to do the work.',
  ],
  timeline: [
    { k: 'The problem', h: 'The same graveyard, every dealer', b: 'Years of ad spend, thousands of contacts, and a CRM nobody worked past week two. The database was not broken. The follow-up was.' },
    { k: 'The insight', h: 'Dials do not work. Text does.', b: 'Homeowners stopped answering unknown calls years ago. A two-way text that feels personal gets read, gets a reply, and gets appointments. Same leads, different channel, different result.' },
    { k: 'The build', h: 'Six services, every stage of the funnel', b: 'One service for each leak: speed to lead, after-hours, social, database reactivation, reviews, and referrals. Each one solving a specific problem that was being ignored.' },
    { k: 'The model', h: 'Pay on sits. Nothing else.', b: 'No retainers for results you cannot see. A small setup fee to build it right, then you pay per sat appointment. Our incentives are identical to yours.' },
  ],
  values: [
    { h: 'Results over everything', b: 'Every campaign is measured by one thing: sat appointments and collected revenue.' },
    { h: 'Partners, not vendors', b: 'We are paid like your reps, on performance. Your success is the only version of ours.' },
    { h: 'Speed wins', b: 'The first responder takes the job. We build for speed at every stage, new lead in, old lead out.' },
    { h: 'Radical transparency', b: 'No vanity metrics. You see sits booked, sits run, jobs closed, and revenue collected.' },
    { h: 'Compliance built in', b: 'Consent-sourced, litigator-scrubbed, quiet hours enforced by state. We protect your business while we grow it.' },
    { h: 'One dealer per metro', b: 'Everything we learn reactivating your market works for you, and nobody else.' },
  ],
  whyNow: {
    headline: 'Why replacement dealers. Why now.',
    items: [
      { n: '01', h: 'The market is squeezed', b: 'Tariffs pushed material costs up around 5 to 6% and the 25C tax credit ended for anything installed after Dec 31, 2025. Dealers who do not work their database are leaving their only free lead source untouched.' },
      { n: '02', h: 'PE is outspending independents', b: 'Private-equity platforms have call centers and dedicated rehash teams. The independent dealer with a part-time setter is at a structural disadvantage. We close that gap.' },
      { n: '03', h: 'Every 2025 quote is underpriced', b: 'Painful, but it is the most honest urgency hook the industry has handed you. "Lock your old pricing before the next increase" only exists right now.' },
      { n: '04', h: 'The one-call close is aging', b: 'Younger buyers research everything and will not sign night one. The follow-up-dependent share of revenue grows every year. Dealers with a system for it win.' },
    ],
  },
}

// ---------- Contact page ----------
export const contactPage = {
  kicker: 'Get in touch',
  headline: "There's a number buried in your CRM.",
  sub: 'Fifteen minutes, your numbers live on screen. You leave knowing exactly what your dormant database is worth, and how we would go after it. No pitch deck, no pressure.',
  whatHappens: {
    title: 'What happens on the call',
    items: [
      { h: 'We run your numbers live', b: 'List count, average ticket, close rate. We build your recoverable-revenue figure while you watch.' },
      { h: 'We show you real campaigns', b: 'Actual text conversations: demo-no-sale rescues, cancel re-books, past-customer cross-sells, in a dealer’s voice.' },
      { h: 'We walk the pilot offer', b: 'Exactly what the setup covers, what you pay per sit, and what the 21-day guarantee looks like for your list.' },
      { h: 'Fifteen minutes flat', b: 'You are a busy dealer, not a prospect at a timeshare. We respect that.' },
    ],
  },
  beforeYouSend: {
    title: 'Before you hit send',
    items: [
      'One dealer per metro, we will confirm your market is open',
      'Consent-compliant from day one',
      'Your list stays yours, we never share or resell contact data',
      'No retainer, no long-term contract, pay on sits only',
    ],
  },
  form: {
    title: 'Request your free dead-lead audit',
    sub: "Tell us a bit about your operation. We'll confirm your metro is open and get a call on the calendar.",
    focusLabel: 'What do you want to focus on?',
    focusOptions: [
      { v: 'reactivation', label: 'Database Reactivation', note: 'work my demo-no-sales, dead leads, and cancels' },
      { v: 'speed', label: 'Speed to Lead / After-Hours', note: 'stop losing new leads to faster competitors' },
      { v: 'social', label: 'Social Media Manager', note: 'answer my DMs, comments, and ad threads' },
      { v: 'referrals', label: 'Referral & Reviews', note: 'turn past customers into my cheapest leads' },
      { v: 'all', label: 'All of the above', note: 'show me the whole funnel' },
    ],
    revenueRanges: ['Under $2M', '$2M - $5M', '$5M - $10M', '$10M - $25M', 'Over $25M'],
    spendRanges: ['Under $5K / mo', '$5K - $15K / mo', '$15K - $40K / mo', 'Over $40K / mo'],
    crmOptions: ['MarketSharp', 'LeadPerfection', 'i360 / improveit', 'JobNimbus', 'HubSpot', 'Spreadsheet / other'],
    submit: 'Send my request, claim my metro',
    footnote: "We'll confirm your metro is open and send calendar options within one business day. No spam, no retainer pitch.",
  },
}

// ---------- Case studies page ----------
export const casesPage = {
  kicker: 'Case studies',
  headline: "The best proof is your own list.",
  body:
    'We run one dealer per metro, so we do not publish another dealer’s numbers where their competitors can read them. That protection is part of the deal, and one day it protects yours.',
  points: [
    { h: 'See real campaigns on your call', b: 'Actual text threads, real demo-no-sale rescues and cancel re-books, walked through live with your own list in mind.' },
    { h: 'The 21-day proof', b: 'Give us your 500 oldest demo-no-sales. If we do not put 10 sat appointments on your calendar in 21 days, the setup fee comes back.' },
    { h: 'You keep the math either way', b: 'Fifteen minutes, three inputs, and you leave knowing what your database is worth whether we work together or not.' },
  ],
  cta: CTA_LABEL,
}
