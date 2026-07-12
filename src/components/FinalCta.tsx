import { Mark } from './Mark'
import { finalCta } from '../lib/content'

// Closing climax. Gold-tinted band that flips with the theme (pale champagne in
// light, deep warm gold in dark). Single CTA, one dealer per metro.
export function FinalCta() {
  return (
    <section id="cta" className="relative overflow-hidden" style={{ background: 'var(--color-gold-tint)' }}>
      <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]">
        <Mark size={720} spin />
      </div>
      <div className="relative z-10 mx-auto flex max-w-[820px] flex-col items-center px-6 py-[clamp(6rem,14vw,11rem)] text-center">
        <Mark size={68} className="mb-9" title="Ouro Praxis" />
        <h2 className="text-[clamp(2.2rem,5.2vw,3.9rem)] text-ink" style={{ lineHeight: 1.04 }}>
          {finalCta.headline}
        </h2>
        <p className="mt-6 max-w-[48ch] text-[1.12rem] text-ink-soft">{finalCta.sub}</p>
        <a href="/contact" className="btn-gold mt-10 inline-flex items-center rounded-full px-9 py-4 text-[1rem] font-medium">
          {finalCta.cta}
        </a>
        <p className="mt-9 font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-faint">
          {finalCta.underline}
        </p>
      </div>
    </section>
  )
}
