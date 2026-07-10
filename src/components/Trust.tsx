import { trust } from '../lib/content'

export function Trust() {
  return (
    <section className="border-y border-hairline bg-sunken">
      <div className="mx-auto max-w-[1240px] px-6 py-8">
        <p className="text-center font-mono text-[0.72rem] uppercase tracking-[0.16em] text-ink-faint">{trust.line}</p>
        <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-3">
          {trust.industries.map((it) => (
            <li
              key={it}
              className="rounded-full border border-hairline bg-raised px-4 py-1.5 text-[0.85rem] text-ink-soft"
            >
              {it}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
