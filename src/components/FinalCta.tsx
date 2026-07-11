import { Mark } from './Mark'
import { finalCta } from '../lib/content'

export function FinalCta() {
  return (
    <section id="book" className="section-dark relative overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-[820px] flex-col items-center px-6 py-[clamp(6rem,14vw,11rem)] text-center">
        <Mark size={76} variant="gold" className="mb-10" title="Ouro Praxis" />
        <span className="font-mono text-[0.8rem] uppercase tracking-[0.16em]" style={{ color: 'var(--color-ink-faint)' }}>{finalCta.eyebrow}</span>
        <h2 className="mt-5 font-display font-light" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.02, color: 'var(--color-ink)' }}>
          {finalCta.headline}
        </h2>
        <p className="measure mt-7 text-[1.15rem]" style={{ color: 'var(--color-ink-soft)', maxWidth: '46ch' }}>{finalCta.sub}</p>

        <a
          href="mailto:hello@ouropraxis.com?subject=Book%20a%20reactivation%20call"
          className="mt-11 inline-flex items-center rounded-full px-9 py-4 text-[1rem] font-medium transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
          style={{ background: 'var(--color-gold)', color: '#2e2440' }}
        >
          {finalCta.ctaPrimary}
        </a>

        <p className="mt-10 max-w-[44ch] font-mono text-[0.72rem] uppercase tracking-[0.1em]" style={{ color: 'var(--color-ink-faint)' }}>
          {finalCta.scarcity}
        </p>
      </div>
    </section>
  )
}
