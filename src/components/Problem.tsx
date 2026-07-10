import { problem } from '../lib/content'

export function Problem() {
  return (
    <section className="relative mx-auto max-w-[1240px] px-6 py-[clamp(5rem,10vw,8rem)]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-20">
        <div>
          <h2
            className="reveal font-display font-light text-ink"
            style={{ fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)', lineHeight: 1.05 }}
          >
            {problem.headline}
          </h2>
        </div>
        <div className="reveal flex flex-col justify-center gap-5">
          {problem.body.map((p, i) => (
            <p key={i} className="text-[1.08rem] text-ink-soft">{p}</p>
          ))}
        </div>
      </div>

      <div className="reveal mt-16 flex flex-col items-baseline gap-4 border-t border-hairline pt-10 sm:flex-row sm:gap-8">
        <span className="tnum font-display font-light text-ink" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', lineHeight: 1 }}>
          {problem.stat.value}
        </span>
        <span className="max-w-[36ch] text-[1.05rem] text-ink-soft">{problem.stat.label}</span>
      </div>
    </section>
  )
}
