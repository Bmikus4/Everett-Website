import { faq } from '../lib/content'

// Objection block as an accordion. Distinct family.
export function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 bg-sunken">
      <div className="mx-auto max-w-[860px] px-6 py-[clamp(5rem,11vw,9rem)]">
        <h2 className="reveal text-[clamp(1.9rem,3.8vw,2.8rem)]">{faq.headline}</h2>

        <div className="mt-12 flex flex-col">
          {faq.items.map((item) => (
            <details key={item.q} className="group border-t border-hairline py-6 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6">
                <span className="text-[1.15rem] font-semibold tracking-tight text-ink">{item.q}</span>
                <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-hairline text-ink-soft transition-transform duration-300 group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="measure mt-4 text-[1rem] leading-relaxed text-ink-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
