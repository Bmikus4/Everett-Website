import { FinalCta } from '../components/FinalCta'
import { aboutPage } from '../lib/content'

export function About() {
  const a = aboutPage
  return (
    <>
      {/* header with serif-accented second line */}
      <header className="mx-auto max-w-[1240px] px-6 pt-32 pb-12 lg:pt-40 lg:pb-16">
        <span className="eyebrow">{a.kicker}</span>
        <h1 className="reveal mt-4 text-[clamp(2.4rem,5.6vw,4.2rem)]" style={{ lineHeight: 1.02, letterSpacing: '-0.03em' }}>
          {a.headlineTop}<br />
          <span className="serif-quote text-gold">{a.headlineEm}</span>
        </h1>
        <p className="reveal mt-6 max-w-[62ch] text-[1.12rem] text-ink-soft">{a.intro}</p>
      </header>

      {/* story */}
      <section className="mx-auto max-w-[760px] px-6 pb-[clamp(3rem,7vw,6rem)]">
        {a.story.map((p) => (
          <p key={p.slice(0, 24)} className="reveal mt-5 text-[1.08rem] leading-relaxed text-ink-soft">{p}</p>
        ))}
      </section>

      {/* timeline */}
      <section className="bg-sunken">
        <div className="mx-auto max-w-[1240px] px-6 py-[clamp(4rem,9vw,7rem)]">
          <ol className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2">
            {a.timeline.map((t) => (
              <li key={t.k} className="reveal border-t-2 pt-5" style={{ borderColor: 'color-mix(in srgb, var(--color-gold) 55%, var(--color-hairline))' }}>
                <span className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-gold">{t.k}</span>
                <h3 className="mt-3 text-[1.4rem] font-semibold tracking-tight text-ink">{t.h}</h3>
                <p className="mt-2 text-[0.98rem] leading-relaxed text-ink-soft">{t.b}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* values */}
      <section className="mx-auto max-w-[1240px] px-6 py-[clamp(4rem,9vw,7rem)]">
        <h2 className="reveal text-[clamp(1.8rem,3.4vw,2.6rem)]">What we stand for</h2>
        <div className="reveal mt-10 grid grid-cols-1 gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {a.values.map((v) => (
            <div key={v.h} className="border-t border-hairline pt-5">
              <h3 className="text-[1.1rem] font-semibold tracking-tight text-ink">{v.h}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{v.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* why now */}
      <section className="bg-sunken">
        <div className="mx-auto max-w-[1240px] px-6 py-[clamp(4rem,9vw,7rem)]">
          <h2 className="reveal max-w-[24ch] text-[clamp(1.8rem,3.4vw,2.6rem)]">{a.whyNow.headline}</h2>
          <ol className="reveal mt-10 grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2">
            {a.whyNow.items.map((it) => (
              <li key={it.n} className="flex gap-5">
                <span className="tnum font-mono text-[0.85rem] font-medium text-gold">{it.n}</span>
                <div>
                  <h3 className="text-[1.15rem] font-semibold tracking-tight text-ink">{it.h}</h3>
                  <p className="mt-2 text-[0.96rem] leading-relaxed text-ink-soft">{it.b}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
