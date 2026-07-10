import { why } from '../lib/content'

export function Why() {
  return (
    <section className="relative mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
      <h2 className="reveal max-w-[20ch] font-display font-light text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}>
        {why.headline}
      </h2>

      <div className="reveal mt-12 flex flex-wrap gap-x-14 gap-y-8 border-y border-hairline py-10">
        {why.stats.map((s) => (
          <div key={s.label} className="flex flex-col gap-1">
            <span className="tnum font-display text-[2.75rem] font-light leading-none text-ink">{s.value}</span>
            <span className="text-[0.9rem] text-ink-soft">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-12">
        {why.points.map((p) => (
          <div key={p.title} className="reveal">
            <h3 className="font-display text-[1.4rem] font-normal text-ink">{p.title}</h3>
            <p className="mt-3 text-[1rem] text-ink-soft">{p.body}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
