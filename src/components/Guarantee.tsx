import { OuroRing } from './OuroRing'
import { guarantee } from '../lib/content'

export function Guarantee() {
  return (
    <section id="guarantee" className="relative overflow-hidden border-y border-hairline bg-sunken">
      <div className="pointer-events-none absolute right-[-6%] top-1/2 hidden -translate-y-1/2 md:block">
        <OuroRing size={420} opacity={0.06} spin />
      </div>
      <div className="mx-auto max-w-[820px] px-6 py-[clamp(5rem,11vw,9rem)] text-center">
        <h2 className="reveal font-display font-light text-ink" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', lineHeight: 1.04 }}>
          {guarantee.headline}
        </h2>
        <p className="reveal measure mx-auto mt-6 text-[1.15rem] text-ink-soft">{guarantee.body}</p>
        <ul className="reveal mt-9 flex flex-wrap justify-center gap-3">
          {guarantee.points.map((p) => (
            <li key={p} className="rounded-full border border-hairline bg-raised px-4 py-2 text-[0.85rem] text-ink">{p}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
