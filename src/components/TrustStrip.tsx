import { hero } from '../lib/content'

// Sits directly under the hero (never inside it). Plain, checkable claims.
export function TrustStrip() {
  return (
    <div className="border-y border-hairline bg-sunken">
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 divide-y divide-hairline px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        {hero.trust.map((t) => (
          <div key={t} className="py-5 text-center font-mono text-[0.76rem] uppercase tracking-[0.12em] text-ink-soft sm:py-6">
            {t}
          </div>
        ))}
      </div>
    </div>
  )
}
