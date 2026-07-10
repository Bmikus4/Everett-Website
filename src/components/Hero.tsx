import { HeroCanvas } from './HeroCanvas'
import { MagneticButton } from './MagneticButton'
import { hero } from '../lib/content'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center justify-center overflow-hidden bg-paper">
      <HeroCanvas />

      {/* legibility scrim: paper glow behind the headline, fades into the field */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 46%, color-mix(in srgb, var(--color-paper) 72%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-[900px] px-6 pt-24 text-center">
        <h1
          className="mx-auto font-display font-light text-ink"
          style={{ fontSize: 'clamp(2.75rem, 7vw, 6rem)', lineHeight: 1.02, letterSpacing: '-0.025em' }}
        >
          The end of a lead is the
          <br className="hidden sm:block" /> beginning of a{' '}
          <span className="italic" style={{ color: 'var(--color-clay)' }}>
            sale.
          </span>
        </h1>

        <p className="measure mx-auto mt-7 text-[1.1rem] text-ink-soft" style={{ maxWidth: '38rem' }}>
          {hero.subhead}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href="#calculator" variant="primary">
            {hero.ctaPrimary}
          </MagneticButton>
          <a
            href="#proof"
            className="text-[0.95rem] font-medium text-ink-soft underline decoration-hairline decoration-1 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-clay"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  )
}
