# OURO PRAXIS — Build Plan (Plan of Record)

Reimagined site for **Ouro Praxis**, an AI database-reactivation agency (revives dormant
CRM leads into booked calls via brand-voice AI SMS). Founder: Everett.

**Spine:** the ouroboros. The inevitable cycle of death and rebirth. The end of a lead is the
beginning of a sale. Death is always the doorway, never the dwelling.

**Design read:** landing page, service-business owners, premium-minimalist / editorial-kinetic,
pastel-with-intent. Dials VARIANCE 8 / MOTION 8 / DENSITY 3.

## Stack (decided)
- Vite + React 19 + TS + Tailwind v4 (`@theme` tokens) + Motion 12.
- Self-hosted variable fonts via `@fontsource-variable/*` (no external `<link>`).
- Single vanilla **Canvas2D** generative hero (dep: `simplex-noise`). No WebGL/three.js.
- Native CSS scroll-driven animations for reveals; tiny IntersectionObserver fallback.
- Deploy: **GitHub Pages** via Actions (`base: '/Everett-Website/'`).
- Deviation from research synth: it recommended Next + Vercel + Fraunces. Vite/GH-Pages meets
  every functional need more leanly; **Fraunces is banned by the taste skill** so display serif
  is **Newsreader**.

## Type system
- Display (h1/h2, editorial gravitas): **Newsreader Variable** (opsz, wght 300-500, italic for emphasis).
- Body/UI: **Geist Variable** (400/500, lh 1.6-1.65).
- Numerals / eyebrows / labels / calculator: **Geist Mono Variable** (`tabular-nums`).
- Fluid scale: hero `clamp(3.5rem,8vw,8rem)`; h1 `clamp(2.5rem,5vw,4rem)`; h2 `clamp(2rem,3.5vw,3rem)`.
- Eyebrow rationing: at most half the sections; never hero/D/F; never two adjacent.

## Palette (warm paper + plum death-pole + clay/gold rebirth + desaturated pastels)
paper `#F7F4EE` · raised `#FCFAF5` · sunken `#F0ECE3` · ink `#171614` · inkSoft `#5C574E`
· inkFaint `#A39D92` · hairline `rgba(23,22,20,.10)` · anchorPlum `#3B2F4A` · accentClay `#B5654A`
· accentGold `#E6C98B` · lavender `#DAD3F0` · mint `#CDE4D6` · blush `#F1D6D3` · peach `#F6DDC7`
· sky `#CCDEEC` · cream `#FBF3E4`. Dark variant for the final anchor CTA + `prefers-color-scheme`.
Mandatory feTurbulence grain (soft-light, ~0.04) is the cheapness-killer.

## Sections / layout families (A-F, each shape used once; zigzag <=1; eyebrow rationed)
- **A** Centered full-bleed hero over the generative ouroboros canvas. Headline = LCP text. Magnetic CTA. No eyebrow.
- **B** Horizontal proof band: mono tabular counters (41% vs 8% racing bars, £500K+, 200K+, 536%). Eyebrow OK.
- **C** Bento product grid (4 "serpents": Revival / First Response / Night Shift / Chorus). One wash per card. Eyebrow OK.
- **E** Editorial narrative column: the Exhume->Revive->Return cycle (nigredo/albedo/rubedo) + founder Everett. Eyebrow on one.
- **D** Split instrument: the live revenue calculator, giant GBP result with ouroboros arc. No eyebrow.
- **F** Full-bleed anchor CTA (dark/plum), ring spine closes (serpent bites tail), gold glint. No eyebrow.
- Footer: minimal ink-on-paper, mini mark, nav, visible reduce-motion toggle.

Order: A (hero) -> B (proof) -> C (products) -> E (how it works / cycle) -> D (calculator) -> testimonials -> F (CTA) -> footer.

## Signature interactions (contract: only these + calculator animate)
1. Global scroll-drawn ouroboros **ring spine** in the page margins (dashoffset = L*(1-p)); closes at F.
2. Hero cursor-reactive generative particle field (parallax + spotlight + rebirth pulse).
3. Exactly **one** magnetic primary CTA.
4. Native CSS section reveals (fade-up, staggered), finished-state is the CSS default.
5. One-shot easing counters on the real proof numbers.
6. Composting section-boundary crossfade (subtle).
7. Centerpiece live revenue calculator (no email gate).
All gated by `prefers-reduced-motion` / `pointer:coarse` / `save-data`; visible reduce-motion toggle.

## Ouroboros assets (single SVG symbol, one source of truth)
- Parametric generator (Node) -> frozen `d` strings: (a) hairline single-line mark (logo/favicon),
  (b) filled organic taper (hero seal / large), (c) thin ring path for the scroll spine.
- Giant faint watermark (`<use>`, 120-160vmin, opacity ~0.045, plum, radial-mask feather, ultra-slow spin).
- Self-draw motion via `pathLength=1` + dashoffset; gold "eternal glint" dash loop.

## Hero animation math (Canvas2D)
Superellipse ring LUT (512 samples) -> ~2,500 particles spring-bound to ring + curl-noise flow
advection -> proximity lines (spatial hash, multiply blend) -> Gaussian rebirth pulse travelling
the loop (dead grey -> mint/peach/rose + gold comet) -> cursor parallax/spotlight. dt-clamped rAF,
DPR capped, IntersectionObserver + visibilitychange pause, reduced-motion = one resolved still.

## Phase flow
research (done) -> plan (this) -> **critique plan** -> build -> **critique build (adversarial workflow)**
-> plan changes -> rebuild -> verify (dev + build) -> commit + push + deploy to GitHub Pages.
