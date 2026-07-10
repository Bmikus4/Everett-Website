import { engine, how } from '../lib/content'

// ash -> dawn -> gold: the transmutation, felt through color
const TINT = ['var(--color-lavender)', 'var(--color-peach)', 'var(--color-gold)']
const NUMINK = ['var(--color-lavender-ink)', 'var(--color-clay)', 'var(--color-clay)']

export function HowItWorks() {
  return (
    <section id="how" className="relative border-y border-hairline bg-sunken">
      <div className="mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
        {/* the offer statement, oversized (mid-scroll crescendo) */}
        <div className="mx-auto max-w-[900px] text-center">
          <span className="eyebrow reveal">{engine.eyebrow}</span>
          <h2
            className="reveal mt-5 font-display font-light text-ink"
            style={{ fontSize: 'clamp(2.4rem, 5.5vw, 4.4rem)', lineHeight: 1.02, letterSpacing: '-0.02em' }}
          >
            {how.headline}
          </h2>
          <p className="reveal measure mx-auto mt-6 text-[1.15rem] text-ink-soft">{how.sub}</p>
        </div>

        <ol className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {how.steps.map((s, i) => (
            <li
              key={s.no}
              className="reveal relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-hairline p-8"
              style={{ background: `linear-gradient(160deg, color-mix(in srgb, ${TINT[i]} 40%, var(--color-raised)), var(--color-raised) 70%)` }}
            >
              <div>
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-[0.8rem] tracking-[0.1em]" style={{ color: NUMINK[i] }}>{s.no}</span>
                  <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-faint">{s.outcome}</span>
                </div>
                <h3 className="mt-6 font-display text-[1.9rem] font-normal text-ink">{s.name}</h3>
                <p className="mt-4 text-[1rem] text-ink-soft">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
