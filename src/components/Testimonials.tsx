import { testimonials } from '../lib/content'

/* Editorial quote grid, hairline-divided. Not a screenshot wall. */
export function Testimonials() {
  return (
    <section id="voices" className="relative border-t border-hairline bg-sunken">
      <div className="mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
        <h2
          className="reveal max-w-[16ch] font-display font-light"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
        >
          {testimonials.headline}
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-14 md:grid-cols-2">
          {testimonials.items.map((t) => (
            <figure key={t.name} className="reveal flex flex-col border-t border-hairline pt-8">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em]" style={{ color: 'var(--color-clay)' }}>
                {t.vertical}
              </span>
              <blockquote
                className="mt-5 font-display text-[1.35rem] font-light leading-snug text-ink"
                style={{ letterSpacing: '-0.01em' }}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 text-[0.9rem] text-ink-soft">
                <span className="font-medium text-ink">{t.name}</span>
                <span className="mx-2 text-ink-faint">/</span>
                {t.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
