import { Check } from '@phosphor-icons/react'
import { compliance } from '../lib/content'

// Compact compliance strip. Turns fear into a differentiator. Practices, not claims.
export function Compliance() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 pb-[clamp(3rem,7vw,5rem)]">
        <div className="reveal rounded-[var(--radius-card)] border border-hairline bg-sunken p-8 sm:p-10">
          <h2 className="text-[1.5rem] font-semibold tracking-tight text-ink">{compliance.headline}</h2>
          <ul className="mt-7 grid grid-cols-1 gap-x-10 gap-y-4 md:grid-cols-2">
            {compliance.points.map((p) => (
              <li key={p} className="flex gap-3 text-[0.92rem] text-ink-soft">
                <Check size={17} weight="bold" className="mt-1 flex-none text-gold" />
                {p}
              </li>
            ))}
          </ul>
          <p className="mt-7 border-t border-hairline pt-6 text-[0.98rem] font-medium text-ink">{compliance.bottomLine}</p>
        </div>
      </div>
    </section>
  )
}
