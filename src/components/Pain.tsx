import { pain } from '../lib/content'

// The funnel leaks. Distinct family: numbered rail of leaks in two columns.
export function Pain() {
  return (
    <section id="pain" className="scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
        <div className="max-w-[52rem]">
          <span className="eyebrow">{pain.eyebrow}</span>
          <h2 className="reveal mt-4 text-[clamp(2rem,4.4vw,3.3rem)]">{pain.headline}</h2>
          <p className="reveal mt-5 max-w-[54ch] text-[1.05rem] text-ink-soft">{pain.sub}</p>
        </div>

        <ol className="reveal mt-14 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
          {pain.leaks.map((leak, i) => (
            <li key={leak.k} className="flex gap-5">
              <span className="tnum font-mono text-[0.85rem] font-medium text-gold">{String(i + 1).padStart(2, '0')}</span>
              <div className="border-t border-hairline pt-1">
                <h3 className="text-[1.1rem] font-semibold tracking-tight text-ink">{leak.k}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{leak.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="reveal mt-14 max-w-[60ch] border-l-2 pl-5 text-[1.15rem] text-ink" style={{ borderColor: 'var(--color-gold)' }}>
          {pain.close}
        </p>
      </div>
    </section>
  )
}
