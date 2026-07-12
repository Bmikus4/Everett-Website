import { ArrowRight } from '@phosphor-icons/react'
import { compare } from '../lib/content'

// Then / Now: two panels. Distinct layout family (side-by-side compare).
export function Compare() {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
      <div className="reveal grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
        {/* Then */}
        <div className="rounded-[var(--radius-card)] border border-hairline bg-paper p-8 sm:p-10">
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-faint">{compare.then.label}</span>
          <p className="mt-4 text-[1.15rem] text-ink">{compare.then.line}</p>
          <ul className="mt-7 flex flex-col gap-3.5">
            {compare.then.points.map((p) => (
              <li key={p} className="flex gap-3 text-[0.95rem] text-ink-soft">
                <span aria-hidden className="mt-2 h-px w-4 flex-none bg-ink-faint" />
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Now */}
        <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-raised p-8 shadow-[var(--shadow-soft)] sm:p-10"
          style={{ borderColor: 'color-mix(in srgb, var(--color-gold) 40%, var(--color-hairline))' }}>
          <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-gold">{compare.now.label}</span>
          <p className="mt-4 text-[1.15rem] text-ink">{compare.now.line}</p>
          <ul className="mt-7 flex flex-col gap-3.5">
            {compare.now.points.map((p) => (
              <li key={p} className="flex gap-3 text-[0.95rem] text-ink">
                <ArrowRight size={17} weight="bold" className="mt-1 flex-none text-gold" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
