import { cycle } from '../lib/content'

export function Cycle() {
  return (
    <section id="cycle" className="relative mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
      <div className="mx-auto max-w-[680px]">
        <p className="eyebrow reveal">{cycle.eyebrow}</p>
        <h2
          className="reveal mt-4 font-display font-light"
          style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', lineHeight: 1.03 }}
        >
          {cycle.headline}
        </h2>
        <p className="reveal measure mt-6 text-[1.15rem] text-ink-soft">{cycle.sub}</p>
      </div>

      <ol className="mx-auto mt-16 flex max-w-[720px] flex-col gap-14">
        {cycle.phases.map((p) => (
          <li key={p.no} className="reveal grid grid-cols-[auto_1fr] gap-6 sm:gap-10">
            <span
              className="font-display font-light leading-none text-ink-faint"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              aria-hidden
            >
              {p.no}
            </span>
            <div className="border-l border-hairline pl-6 sm:pl-8">
              <h3 className="font-display text-[1.75rem] font-normal text-ink">{p.name}</h3>
              <span className="mt-1 block font-mono text-[0.72rem] uppercase tracking-[0.16em]" style={{ color: 'var(--color-clay)' }}>
                {p.stage}
              </span>
              <p className="mt-4 text-[1.02rem] text-ink-soft">{p.body}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
