import { how } from '../lib/content'

// Three moves. Big gold numerals, verb-noun names (no "Step 1" labels).
// Distinct family: numbered horizontal sequence.
export function HowItWorks() {
  return (
    <section id="how" className="scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
        <h2 className="reveal max-w-[20ch] text-[clamp(2rem,4.4vw,3.3rem)]">{how.headline}</h2>

        <ol className="reveal mt-16 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-3">
          {how.steps.map((s) => (
            <li key={s.no} className="border-t-2 pt-6" style={{ borderColor: 'color-mix(in srgb, var(--color-gold) 55%, var(--color-hairline))' }}>
              <span className="tnum font-display text-[3.4rem] font-semibold leading-none text-gold" style={{ letterSpacing: '-0.04em' }}>{s.no}</span>
              <h3 className="mt-5 text-[1.5rem] font-semibold tracking-tight text-ink">{s.name}</h3>
              <p className="mt-3 text-[1rem] leading-relaxed text-ink-soft">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
