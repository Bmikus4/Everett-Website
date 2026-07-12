# OURO PRAXIS — Rebrand & Rebuild Spec (Plan of Record v2)

Supersedes the alchemy/warm-paper concept in PLAN.md. Brand spine (ouroboros ring, gold)
and the tech (generative hero, calculator, SMS demo, scroll reveals) are kept. Everything
else is re-skinned to **gold + white**, re-copied for **US window & door dealers**, and
restructured to the client copy doc.

## Positioning (hard pivot)
- Audience: **US window & door replacement dealers** — skeptical owner-operators.
- Angle: **FOUND MONEY, PAID ON SITS.** Money already spent, recovered; pay when appointments sit.
- Voice: plain contractor vernacular. **"We speak your language."**

### Copy rules (Part C — enforce sitewide)
1. BANNED words: AI, bot, artificial intelligence, automation, algorithm, machine learning,
   "cutting-edge," "revolutionary." Mechanism is "our system" or just "we."
2. REQUIRED vernacular (natural, not stacked): rehash, demo-no-sale, sit/sat/sits, set rate,
   be-backs, one-legger, unset leads, issue sheet, install calendar, Angi leads,
   MarketSharp/LeadPerfection, cost per lead, shared leads, Q1.
3. USD + US only. No £, "enquiries," "diary."
4. Every service block ends on **results + pay-on-sits**, never on a feature.
5. One number per claim, and only defensible ones (see validated table).
6. Kill any "1,000+ businesses / 10+ served" contradiction sitewide.
7. Calculator preset: **5,000 contacts · $11,000 avg ticket · 0.5–3% list-to-sale slider**;
   output framed as **recovered revenue + sits**, never reply rates.

## Validated stats (from claim-validation research — USE THESE, not the doc's originals)
| Claim in doc | Verdict | Use instead |
|---|---|---|
| 78% go with first responder | UNSUPPORTED — drop | "Speed wins — buyers hire whoever gets back first." |
| 5-min → 4x, contractors 5+ days | SOLID (understated) | "Up to **21x** more likely to qualify at 5 min (MIT/InsideSales); avg first response **40+ hrs**, ~1 in 4 never respond (HBR)." |
| Shared/Angi close 8–15%, 4 competitors | OK (conservative) | "Sold to **3–5** contractors at once, close in the **low-to-mid teens**." |
| ~$200 Google CPL; $60–200 shared | Google OVERSTATED | "**~$70–100** per Google lead, $45–120+ shared; effective cost per won job climbs toward **$200+**." |
| 40% after hours | OK (floor) | "**40%+** of inquiries arrive after hours." |
| 70% of demos walk | OK band | "One-call close ~**25–35%**, so ~**65–75%** leave without buying same day." |
| Follow-up recovers 15–25% | 25% OVERSTATED | "Systematic follow-up recovers **5–15%** of unsold estimates." |
| Referrals 45–65%; $0 cost | rates SOLID; $0 SHAKY | "**45–65%** vs 8–15% shared — near-zero cost organic, ~10x cheaper even with an incentive." |
| 100+ reviews = 3–5x calls | 3–5x UNSUPPORTED | "Google **officially lists review count + rating as an LSA ranking factor**; more reviews pull more leads." |
| Deals kick 10–20% | UNSUPPORTED — drop | Reframe to mechanism (3-day rescission, financing declines) or use client CRM data. |
| 25C credit expired | SOLID | "The 25C credit ended for anything **installed after Dec 31, 2025** (OBBB, signed Jul 4 2025)." |
| Tariffs +5–10% | OK (~5–6% center) | "2025 steel/aluminum tariffs pushed material costs up **~5–6% YoY**, premium lines toward 10%." |

### Compliance strip (state as practices, not universal law; NO "fully compliant/lawsuit-proof")
Consent-sourced contacts only · opt-outs honored within **10 business days** · texts sent only
**8am–9pm local** · every message identifies the company · additional safeguards: DNC + litigator
+ reassigned-number scrubbing. (Do NOT cite the vacated "one-to-one consent" rule.)

## Color system — GOLD + WHITE (WCAG-verified, light + dark)
Gold is an ACCENT (~10% of pixels): one CTA + links + ring mark + hairlines. Ground is warm
ivory (not pure white). Warm neutrals throughout. Flat gold functional; gradient only on mark/hero.

### Light `[data-theme="light"]`
```
--bg:#FAF8F3  --bg-alt:#F4F1E9  --surface:#FFFFFF
--ink:#1A1712  --ink-2:#6B6459  --ink-faint:#8A8377  --hairline:#E8E3D8
--gold:#8A6A17 (AA text 5.05:1)  --gold-hover:#7A5E12  --gold-link:#6E5410 (AAA 7.15:1)
--gold-pastel:#E7D3A1 (decoration only)  --gold-tint:#F3EAD2  --slate:#2E4257
--on-gold:#FFFFFF  --on-gold-pastel:#1A1712 (best premium button, 12:1)
```
### Dark `[data-theme="dark"]`
```
--bg:#14120E  --bg-alt:#100E0B  --surface:#1E1B15  --surface-2:#26221A
--ink:#F5F1E8  --ink-2:#B8B0A0  --ink-faint:#837B6A  --hairline:#322E26
--gold:#E3C77A (AAA 11.3:1)  --gold-hover:#EED596  --gold-link:#E3C77A
--gold-pastel:#EAD9A8  --gold-tint:#2A2418  --slate:#8FB0CC  --on-gold:#14120E
```
Gradients: logo `linear-gradient(135deg,#F3E4BE,#E7D3A1 45%,#CBAE6B)`; heading gold-clip
`linear-gradient(90deg,#9C7B24,#7A5E12)` (light) — dark end passes AA. Buttons flat.
Type system unchanged: Newsreader (display), Geist (body/UI), Geist Mono (numerals/eyebrows).

## Logo
`public/ouro-mark.svg` — vectorized from client logo: ring only (no wordmark), transparent,
pastel-gold champagne gradient. Used as nav mark, hero focal mark, favicon. No original colors.

## Top UX rules to apply (home-services CRO research)
1. Problem-first plain headline about dead leads; no jargon. 2. ONE value-specific primary CTA,
repeated on scroll ("Get a free demo"/"Request Free Demo"). 3. Hero shows a real SMS
reactivation thread in a phone frame (keep SmsDemo). 4. Proof = concrete/checkable numbers,
attributed; go deep not wide; link out to Google reviews; no weak counts. 5. Performance
guarantee at the CTA (500 oldest demo-no-sales → 10 sits in 21 days or setup fee back).
6. Calculator: 2–3 inputs, instant result, **no email gate**. 7. 4–8 service blocks, alternate
why/what, end on outcome. 8. Lead form ≤5 fields OR short multi-step w/ easy first click; contact last.
9. 5-page site + sticky nav (5–7 plain labels) + CTA in nav. 10. Mobile-first, tap-to-call/text.
11. <3s load, pass Core Web Vitals, lazy review widgets. 12. Sun/moon day-night toggle in nav.

## Structure
**Nav:** logo mark + wordmark · Home · Services · Case Studies · About · Contact · [sun/moon] · CTA "Get a free demo".

**Home (order per doc):** Hero (headline "Who's working your 2024 unsold demos right now?" + sub +
CTA + phone/DBR SMS mock) → Then/Now compare (rehash vs Ouro Praxis) → value strip
(no headcount / text gets read / 6–36mo layer / pay per sit) → Pain "We follow your funnel /
We plug every leak in it" (7 leaks) → 6 funnel-stage services (01 Speed to Lead, 02 After-Hours,
03 Social, 04 Database Reactivation ⭐flagship, 05 Reviews, 06 Referrals) → How It Works (1 CSV +
20 min, 3 steps) → Calculator (recovered revenue + sits) → Offer (setup + pay-per-sit + guarantee +
one dealer/metro) → Compliance strip → FAQ (5 objections) → Founder/About teaser → Final CTA.

**Services page:** funnel intro + 6 detailed service sections (flagship = Database Reactivation) with
SMS demo threads. **About:** story, "how we got here" timeline, values, "why now" (4 market shifts),
CTA. **Contact:** dead-lead audit form (name/company/mobile/email/metro/CRM/revenue/lead-spend +
focus selector + notes) with "what happens on the call" + "before you hit send" trust rails.
**Case Studies:** tasteful "coming soon / one dealer per metro" placeholder (no fake results — audience checks).
