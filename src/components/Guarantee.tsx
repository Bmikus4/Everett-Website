import { guarantee } from '../lib/content'

export function Guarantee() {
  return (
    <section id="guarantee" className="relative overflow-hidden border-y border-hairline bg-sunken">
      <img
        src={`${import.meta.env.BASE_URL}ouroboros.svg`}
        alt=""
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-1/2 hidden -translate-y-1/2 md:block"
        style={{ width: 460, opacity: 0.08 }}
      />
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
