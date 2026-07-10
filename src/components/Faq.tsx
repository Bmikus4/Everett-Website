import { faq } from '../lib/content'

export function Faq() {
  return (
    <section id="faq" className="relative border-t border-hairline">
      <div className="mx-auto max-w-[820px] px-6 py-[clamp(5rem,11vw,9rem)]">
        <h2 className="reveal font-display font-light text-ink" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.75rem)', lineHeight: 1.05 }}>
          {faq.headline}
        </h2>
        <div className="mt-12 flex flex-col">
          {faq.items.map((item) => (
            <details key={item.q} className="group border-t border-hairline py-6 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="font-display text-[1.2rem] font-normal text-ink">{item.q}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-hairline text-ink-soft transition-transform duration-300 group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="measure mt-4 text-[1rem] text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
