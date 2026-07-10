import { MagneticButton } from './MagneticButton'
import { SmsDemo } from './SmsDemo'
import { OuroRing } from './OuroRing'
import { hero } from '../lib/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      {/* soft pastel glow + subtle ouroboros ring behind the product visual */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute right-[-10%] top-[10%] hidden h-[70vh] w-[70vh] rounded-full lg:block"
          style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--color-lavender) 60%, transparent), transparent 70%)', filter: 'blur(40px)' }}
        />
      </div>

      <div className="mx-auto grid max-w-[1240px] items-center gap-14 px-6 pb-24 pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-40">
        <div>
          <span className="eyebrow">{hero.eyebrow}</span>
          <h1
            className="mt-5 font-display font-light text-ink"
            style={{ fontSize: 'clamp(2.6rem, 5.2vw, 4.6rem)', lineHeight: 1.02, letterSpacing: '-0.025em' }}
          >
            Turn your dead leads into{' '}
            <span className="italic" style={{ color: 'var(--color-clay)' }}>
              booked calls.
            </span>
          </h1>
          <p className="mt-6 max-w-[34rem] text-[1.15rem] text-ink-soft">{hero.subhead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#book" variant="primary">
              {hero.ctaPrimary}
            </MagneticButton>
            <a
              href="#how"
              className="text-[0.95rem] font-medium text-ink-soft underline decoration-hairline decoration-1 underline-offset-[6px] transition-colors hover:text-ink hover:decoration-clay"
            >
              {hero.ctaSecondary}
            </a>
          </div>
          <p className="mt-10 max-w-[30rem] text-[0.85rem] text-ink-faint">{hero.trustLine}</p>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-0 flex items-center justify-center">
            <OuroRing size="min(120%, 620px)" opacity={0.07} spin />
          </div>
          <div className="relative z-10">
            <SmsDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
