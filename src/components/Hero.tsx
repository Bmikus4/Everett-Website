import { MagneticButton } from './MagneticButton'
import { SmsDemo } from './SmsDemo'
import { hero } from '../lib/content'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      {/* subtle ouroboros watermark + soft pastel glow behind the whole hero */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute right-[-8%] top-[6%] hidden h-[64vh] w-[64vh] rounded-full lg:block"
          style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--color-lavender) 55%, transparent), transparent 70%)', filter: 'blur(40px)' }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={`${import.meta.env.BASE_URL}ouroboros.svg`}
            alt=""
            aria-hidden
            className="w-[min(82vh,760px)] max-w-none"
            style={{ opacity: 0.4 }}
          />
        </div>
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
          <SmsDemo />
        </div>
      </div>
    </section>
  )
}
