import { ArrowRight, Star } from '@phosphor-icons/react'
import { Mark } from './Mark'
import { services } from '../lib/content'

// Six funnel-stage services as a filled 6-cell bento. The flagship (Database
// Reactivation) gets a gold-tinted treatment and the mark motif so it stands out
// without breaking the grid. Every card closes on outcomes.
export function Services() {
  return (
    <section id="services" className="scroll-mt-24 bg-sunken">
      <div className="mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
        <div className="max-w-[52rem]">
          <span className="eyebrow">{services.eyebrow}</span>
          <h2 className="reveal mt-4 text-[clamp(2rem,4.4vw,3.3rem)]">{services.headline}</h2>
          <p className="reveal mt-5 max-w-[58ch] text-[1.05rem] text-ink-soft">{services.sub}</p>
        </div>

        <div className="reveal mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s) => (
            <article
              key={s.stage}
              className="relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border p-7"
              style={
                s.flagship
                  ? { background: 'var(--color-gold-tint)', borderColor: 'color-mix(in srgb, var(--color-gold) 45%, var(--color-hairline))' }
                  : { background: 'var(--color-raised)', borderColor: 'var(--color-hairline)' }
              }
            >
              {s.flagship && (
                <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 opacity-[0.08]">
                  <Mark size={180} />
                </div>
              )}
              <div className="flex items-center gap-3">
                <span className="tnum font-mono text-[0.72rem] font-medium text-gold">{s.stage}</span>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-faint">{s.tag}</span>
                {s.flagship && (
                  <span className="ml-auto inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-gold" style={{ background: 'color-mix(in srgb, var(--color-gold) 16%, transparent)' }}>
                    <Star size={10} weight="fill" /> Start here
                  </span>
                )}
              </div>

              <h3 className="mt-4 text-[1.35rem] font-semibold tracking-tight text-ink">{s.name}</h3>
              <p className="mt-3 text-[0.98rem] leading-snug text-ink">{s.hook}</p>
              {s.flagship && <p className="mt-3 text-[0.92rem] leading-relaxed text-ink-soft">{s.body}</p>}

              <ul className="mt-5 flex flex-col gap-2.5 border-t border-hairline pt-5">
                {s.wins.map((w) => (
                  <li key={w} className="flex gap-2.5 text-[0.88rem] text-ink-soft">
                    <ArrowRight size={15} weight="bold" className="mt-1 flex-none text-gold" />
                    {w}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
