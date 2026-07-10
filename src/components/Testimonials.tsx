import { testimonials } from '../lib/content'

export function Testimonials() {
  return (
    <section className="relative border-y border-hairline bg-sunken">
      <div className="mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
        <span className="eyebrow reveal">{testimonials.eyebrow}</span>
        <h2 className="reveal mt-5 max-w-[18ch] font-display font-light text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}>
          {testimonials.headline}
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {testimonials.items.map((t) => (
            <figure key={t.name} className="reveal flex flex-col justify-between rounded-[var(--radius-card)] border border-hairline bg-raised p-8">
              <blockquote className="font-display text-[1.3rem] font-light leading-snug text-ink" style={{ letterSpacing: '-0.01em' }}>
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-hairline pt-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full text-[0.85rem] font-semibold text-paper" style={{ background: 'var(--color-plum)' }}>
                  {t.name.split(' ').map((w) => w[0]).slice(0, 2).join('')}
                </span>
                <div className="flex-1">
                  <div className="text-[0.92rem] font-medium text-ink">{t.name}</div>
                  <div className="text-[0.82rem] text-ink-soft">{t.role}</div>
                  <div className="font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-faint">{t.region}</div>
                </div>
                <span className="hidden shrink-0 rounded-full border border-hairline px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] sm:inline-flex" style={{ color: 'var(--color-clay)' }}>
                  {t.stat}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
