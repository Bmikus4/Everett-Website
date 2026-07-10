import { Ouroboros } from './Ouroboros'
import { finalCta } from '../lib/content'

export function FinalCta() {
  return (
    <section className="section-dark relative overflow-hidden">
      <div className="relative z-10 mx-auto flex max-w-[840px] flex-col items-center px-6 py-[clamp(6rem,14vw,11rem)] text-center">
        <Ouroboros variant="line" size={64} color="var(--color-gold)" glint className="mb-10" title="Ouro Praxis" />
        <h2
          className="font-display font-light"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.02, color: 'var(--color-ink)' }}
        >
          {finalCta.headline}
        </h2>
        <p className="measure mt-7 text-[1.15rem]" style={{ color: 'var(--color-ink-soft)', maxWidth: '44ch' }}>
          {finalCta.sub}
        </p>

        <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#calculator"
            className="inline-flex items-center rounded-full px-8 py-4 text-[1rem] font-medium transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{ background: 'var(--color-gold)', color: '#2e2440' }}
          >
            {finalCta.ctaPrimary}
          </a>
          <a
            href="#calculator"
            className="text-[0.95rem] font-medium underline decoration-1 underline-offset-[6px] transition-colors"
            style={{ color: 'var(--color-ink-soft)' }}
          >
            {finalCta.ctaSecondary}
          </a>
        </div>

        <div className="mt-14 flex max-w-[52ch] flex-col gap-3 border-t pt-8" style={{ borderColor: 'var(--color-hairline)' }}>
          <p className="text-[0.9rem]" style={{ color: 'var(--color-ink-soft)' }}>
            {finalCta.guarantee}
          </p>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.1em]" style={{ color: 'var(--color-ink-faint)' }}>
            {finalCta.scarcity}
          </p>
        </div>
      </div>
    </section>
  )
}
