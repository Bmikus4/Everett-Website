// Long-form legal copy for Ouro Praxis (ouropraxis.com), rendered by pages/Legal.tsx.
// Ouro Praxis is a done-for-you SMS lead-reactivation service for US window & door
// dealers, operated by Samurai Solutions. Structure mirrors samuraisolutions.co.uk.
// House style: US English, no em-dashes, plain and defensible.

export interface LegalSection {
  h: string
  p?: string[]
  list?: string[]
}
export interface LegalDoc {
  kicker: string
  title: string
  updated: string
  intro: string[]
  sections: LegalSection[]
}

const UPDATED = 'July 16, 2026'
const COMPANY = 'Ouro Praxis, operated by Samurai Solutions'
const CONTACT_EMAIL = 'hello@ouropraxis.com'

export const legal = {
  contactEmail: CONTACT_EMAIL,

  terms: {
    kicker: 'Legal',
    title: 'Terms & Conditions',
    updated: UPDATED,
    intro: [
      `These Terms & Conditions ("Terms") govern your access to and use of the Ouro Praxis website at ouropraxis.com (the "Site") and the lead-reactivation and messaging services we provide (the "Services"). The Site and Services are operated by ${COMPANY} ("Ouro Praxis," "we," "us," or "our").`,
      'By using the Site, requesting a demo, or engaging us to deliver the Services, you agree to these Terms. If you do not agree, do not use the Site or the Services.',
    ],
    sections: [
      {
        h: 'The Services',
        p: [
          'Ouro Praxis is a done-for-you follow-up service for window and door replacement dealers. On your instruction and using contact lists you provide, we send two-way text messages to your existing and prior contacts, hold conversations in your company voice, and book qualified appointments onto your calendar.',
          'We are a service provider, not a software platform. We do not sell you a tool to operate yourself. Specific deliverables, campaigns, pricing, and any performance commitments are defined in the separate written order or service agreement between you and us. If anything in that agreement conflicts with these Terms, the service agreement controls.',
        ],
      },
      {
        h: 'Eligibility and your account',
        p: [
          'The Services are offered to businesses in the United States only. By engaging us you represent that you are at least 18 years old, are authorized to bind the business you represent, and will provide accurate information. You are responsible for keeping your account and any credentials secure and for all activity under them.',
        ],
      },
      {
        h: 'Your contact lists and consent',
        p: [
          'You are the owner and controller of the contact data you provide to us. Before we send any message on your behalf, you represent and warrant that:',
        ],
        list: [
          'Each contact was collected lawfully and has a documented basis to be contacted by text at the number provided, consistent with the Telephone Consumer Protection Act (TCPA), applicable state law, and carrier requirements.',
          'The contacts are your own customers, prospects, or leads, and the data was not purchased, rented, scraped, or otherwise acquired without a lawful basis to message them.',
          'You have honored, and will provide to us, any prior opt-out, do-not-contact, or revocation requests those contacts have made.',
          'You keep records evidencing consent for each contact and will produce them on request. We recommend retaining them for at least four years, matching the TCPA limitations period.',
          'The business information you provide for carrier (10DLC) registration is accurate.',
          'You will not instruct us to send content that is unlawful, deceptive, or that you are not authorized to send, including any SHAFT content (sex, hate, alcohol, firearms, tobacco).',
        ],
      },
      {
        h: 'How we message',
        p: [
          'We operate the Services in line with recognized messaging compliance standards, including the TCPA, CTIA messaging principles, and carrier 10DLC registration requirements. As part of standard practice we:',
        ],
        list: [
          'Scrub each list against known litigators and prior opt-outs before any campaign is sent.',
          'Send only within permitted local hours, generally 8:00 a.m. to 9:00 p.m. in the recipient’s time zone, and 8:00 a.m. to 8:00 p.m. where a state (such as Florida, Oklahoma, or Washington) requires it.',
          'Identify your company in messaging and provide a clear opt-out mechanism (reply STOP) and help mechanism (reply HELP) in line with carrier rules.',
          'Honor opt-out and revocation requests made by any reasonable means, treat them as effective on receipt, and process them no later than the timeframe required by law (currently 10 business days), keeping suppression records so a person who opts out is not messaged again through us.',
        ],
      },
      {
        h: 'Fees and pay-on-sits billing',
        p: [
          'Fees are set out in your service agreement and typically consist of a one-time setup fee plus a performance component payable per sat appointment and, where agreed, a percentage of collected revenue. A "sit" and the conditions for payment are defined in your service agreement.',
          'Unless your agreement states otherwise, setup fees are payable in advance, performance fees are invoiced on the agreed cycle, and all amounts are stated and payable in US dollars and are exclusive of applicable taxes. Late amounts may be suspended or paused until brought current.',
          'Any performance guarantee (for example, a pilot appointment guarantee with a setup-fee refund) applies only on the specific terms, list, and time window described in your service agreement.',
        ],
      },
      {
        h: 'One dealer per metro',
        p: [
          'Where we agree to metro exclusivity, we will not simultaneously deliver the same category of Services to a directly competing window and door dealer in the same defined market for as long as your engagement is active and in good standing. The scope, market definition, and duration of any exclusivity are set out in your service agreement.',
        ],
      },
      {
        h: 'Data ownership and confidentiality',
        p: [
          'Your contact lists and customer data remain yours. We do not sell, rent, or share your contact data, and we do not use it to market to your customers for anyone other than you. We process it only to deliver the Services to you and as described in our Privacy Policy.',
          'Each party will protect the other’s confidential information and use it only as needed to perform under these Terms.',
        ],
      },
      {
        h: 'Intellectual property',
        p: [
          'The Site, our messaging frameworks, campaign templates, and all related materials are owned by Ouro Praxis and its licensors and are protected by intellectual property laws. We grant you no rights in them except the limited right to receive the Services. You retain all rights in your brand, content, and data.',
        ],
      },
      {
        h: 'No guarantee of results',
        p: [
          'Reactivation outcomes depend on factors outside our control, including the size, age, and quality of your list, your pricing, your sales process, and market conditions. Except for an express written guarantee in your service agreement, the Services are provided without any guarantee of specific appointment volume, revenue, or return.',
          'Figures shown on the Site, including the calculator and any statistics, are illustrative estimates for education only and are not a promise of results.',
        ],
      },
      {
        h: 'Disclaimers',
        p: [
          'The Site and Services are provided "as is" and "as available." To the fullest extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
        ],
      },
      {
        h: 'Limitation of liability',
        p: [
          'To the fullest extent permitted by law, neither party will be liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits or revenues, arising out of or related to the Services. Our total liability arising out of or related to the Services will not exceed the amounts you paid to us in the three months before the event giving rise to the claim.',
        ],
      },
      {
        h: 'Indemnification',
        p: [
          'You will defend, indemnify, and hold harmless Ouro Praxis and its personnel from any claim, loss, or liability arising from the contact data or content you provide, your breach of the consent warranties above, or your violation of law. This reflects that you control the source and consent status of the contacts we message on your behalf.',
        ],
      },
      {
        h: 'Term and termination',
        p: [
          'These Terms apply while you use the Site or receive the Services. Either party may end an engagement as described in the service agreement. We may suspend or terminate access if you breach these Terms, fail to pay, or provide contacts we reasonably believe were collected or used unlawfully. Provisions that by their nature should survive termination will survive.',
        ],
      },
      {
        h: 'Dispute resolution and class-action waiver',
        p: [
          'The parties will first attempt to resolve any dispute in good faith. If that fails, any dispute arising out of or relating to these Terms or the Services will be resolved by binding individual arbitration administered under the rules of a recognized US arbitration body, rather than in court, except that either party may seek injunctive relief for misuse of confidential information or intellectual property.',
          'To the fullest extent permitted by law, disputes will be brought only in an individual capacity and not as a plaintiff or class member in any class or representative proceeding. If this class-action waiver is found unenforceable, the arbitration provision will not apply to that dispute.',
        ],
      },
      {
        h: 'Governing law and jurisdiction',
        p: [
          'These Terms are governed by the laws of the US State identified in your service agreement, or if none is identified, the state in which Ouro Praxis principally conducts the engagement, without regard to conflict-of-laws rules. Subject to the arbitration provision above, the state and federal courts located in that state have exclusive jurisdiction.',
        ],
      },
      {
        h: 'Changes to these Terms',
        p: [
          'We may update these Terms from time to time. The current version is always posted here with its "last updated" date. Material changes take effect when posted, and your continued use of the Site or Services after that constitutes acceptance.',
        ],
      },
      {
        h: 'Contact',
        p: [
          `Questions about these Terms can be sent to ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  } as LegalDoc,

  privacy: {
    kicker: 'Legal',
    title: 'Privacy Policy',
    updated: UPDATED,
    intro: [
      `This Privacy Policy explains how ${COMPANY} ("Ouro Praxis," "we," "us," or "our") collects, uses, and protects personal information in connection with the website at ouropraxis.com (the "Site") and the lead-reactivation and messaging services we provide (the "Services").`,
      'It covers two groups: visitors who interact with our Site, and the consumer contacts (homeowners) that our dealer clients ask us to message on their behalf. We take both seriously.',
    ],
    sections: [
      {
        h: 'Information we collect',
        p: [
          'From Site visitors, when you request a demo or contact us, we collect the information you submit, such as your name, business name, email, phone number, metro or city, approximate revenue, and any notes. We also automatically collect limited technical data such as IP address, device and browser type, and pages viewed, through cookies and similar technologies.',
          'From our dealer clients, we receive contact lists that may include a homeowner’s name, phone number, email, address, and details about a prior estimate or interaction. That data is supplied to us by the dealer, who is responsible for its accuracy and for the lawful basis to contact each person.',
        ],
      },
      {
        h: 'How we use information',
        list: [
          'To respond to demo requests, schedule calls, and communicate with you.',
          'To deliver the Services: to scrub lists, send messages, hold conversations, and book appointments on behalf of the dealer that engaged us.',
          'To operate, secure, and improve the Site and Services.',
          'To comply with law, enforce our terms, and prevent misuse or fraud.',
        ],
      },
      {
        h: 'Roles: who controls the data',
        p: [
          'For information collected through our Site, Ouro Praxis is the controller of that data. For homeowner contact lists, the dealer that supplies the list is the controller and Ouro Praxis acts as a service provider or processor, using the data only to perform the Services for that dealer and never for our own marketing.',
        ],
      },
      {
        h: 'Text messaging and consent',
        p: [
          'We send text messages only on behalf of dealers who represent that each recipient has a lawful basis to be contacted. Our messaging follows recognized standards, including the TCPA, CTIA messaging principles, and carrier 10DLC requirements.',
          'Recipients can opt out at any time by replying STOP, and can reply HELP for assistance. Message and data rates may apply, and message frequency varies by campaign. We honor opt-out requests promptly and maintain suppression lists so that a person who opts out is not messaged again through us.',
        ],
      },
      {
        h: 'How we share information',
        p: [
          'We do not sell your personal information, and we do not sell or rent dealer-supplied contact lists. We share information only as needed to run the Services, including with:',
        ],
        list: [
          'Service providers who help us operate, such as messaging and telecom providers, CRM and scheduling tools, hosting, and analytics, all bound to protect the data and use it only for our instructions.',
          'The specific dealer client on whose behalf a conversation or appointment was created.',
          'Authorities or others when required by law, to protect rights and safety, or in connection with a business transfer.',
        ],
      },
      {
        h: 'Data retention',
        p: [
          'We keep personal information only as long as needed for the purposes above, including to provide the Services, meet legal and compliance obligations (such as retaining opt-out and consent records), resolve disputes, and enforce agreements. When a dealer engagement ends, we return or delete the dealer’s contact data on request, except records we are required to keep.',
        ],
      },
      {
        h: 'Your privacy rights',
        p: [
          'Depending on where you live, you may have rights to access, correct, delete, or receive a copy of your personal information, and to opt out of certain uses. California residents have rights under the CCPA/CPRA, including the right to know, delete, correct, and to opt out of the "sale" or "sharing" of personal information. We do not sell or share personal information in that sense.',
          'To exercise a right, contact us using the details below. If your request concerns data a dealer supplied to us, we will refer it to, or handle it with, that dealer as the controller. We will not discriminate against you for exercising your rights, and we honor browser-based opt-out signals such as Global Privacy Control where required.',
        ],
      },
      {
        h: 'Other US state privacy rights',
        p: [
          'Residents of Virginia, Colorado, Connecticut, Texas, and other states with comprehensive privacy laws may have similar rights to access, correct, delete, and obtain a copy of their personal information, and to opt out of targeted advertising or the sale of personal information. You can exercise these rights using the same contact details below, and we will respond within the timeframe your state law requires.',
        ],
      },
      {
        h: 'How homeowners can opt out',
        p: [
          'If you received a text through our Services and no longer wish to be contacted, reply STOP to that message and you will be removed. You may also email us and we will suppress your number and pass your request to the relevant dealer.',
        ],
      },
      {
        h: 'Security',
        p: [
          'We use reasonable administrative, technical, and physical safeguards to protect personal information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security, but we work to protect your data and limit access to those who need it.',
        ],
      },
      {
        h: 'Cookies',
        p: [
          'Our Site uses cookies and similar technologies to remember preferences such as your light or dark theme, to keep the Site working, and to understand usage, which may include analytics or advertising tools. You can control cookies through your browser settings, and where required we honor the Global Privacy Control (GPC) signal as an opt-out of sale or sharing. Disabling some cookies may affect how the Site works.',
        ],
      },
      {
        h: 'Children',
        p: [
          'The Site and Services are intended for businesses and are not directed to children under 16. We do not knowingly collect personal information from children.',
        ],
      },
      {
        h: 'Changes to this policy',
        p: [
          'We may update this Privacy Policy from time to time. The current version is always posted here with its "last updated" date, and material changes take effect when posted.',
        ],
      },
      {
        h: 'Contact',
        p: [
          `For privacy questions or to exercise a right, email ${CONTACT_EMAIL}.`,
        ],
      },
    ],
  } as LegalDoc,
}
