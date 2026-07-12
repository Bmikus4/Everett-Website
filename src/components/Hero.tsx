import { ArrowRight } from '@phosphor-icons/react'
import { MagneticButton } from './MagneticButton'
import { SmsDemo } from './SmsDemo'
import { Mark } from './Mark'
import { hero } from '../lib/content'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden bg-paper">
      {/* faint ouroboros watermark + soft gold glow behind the phone */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute right-[-6%] top-1/2 hidden h-[70vh] w-[70vh] -translate-y-1/2 rounded-full lg:block"
          style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--color-gold-pastel) 42%, transparent), transparent 68%)', filter: 'blur(30px)', opacity: 0.55 }}
        />
        <div className="absolute right-[-14%] top-1/2 hidden -translate-y-1/2 opacity-[0.05] lg:block">
          <Mark size={640} spin />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-14 px-6 pb-16 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pb-12 lg:pt-24">
        <div>
          <span className="eyebrow">{hero.kicker}</span>
          <h1 className="mt-5 text-[clamp(2.5rem,5.4vw,4.4rem)]" style={{ lineHeight: 1.03, letterSpacing: '-0.03em' }}>
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-[34rem] text-[1.12rem] text-ink-soft">{hero.subhead}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <MagneticButton href="/contact" variant="primary">{hero.cta}</MagneticButton>
            <a
              href="/contact"
              className="group inline-flex items-center gap-1.5 text-[0.95rem] text-ink-soft underline decoration-hairline decoration-1 underline-offset-4 transition-colors hover:text-ink"
            >
              Book a call
              <ArrowRight size={15} weight="bold" className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        <div className="relative">
          <SmsDemo />
        </div>
      </div>
    </section>
  )
}
