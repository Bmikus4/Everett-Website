import { bridge } from '../lib/content'

// Full-width centered statement band. Distinct family (single-message moment).
export function Bridge() {
  return (
    <section className="bg-sunken">
      <div className="mx-auto max-w-[900px] px-6 py-[clamp(4.5rem,10vw,8rem)] text-center">
        <h2 className="reveal text-[clamp(2rem,4.4vw,3.2rem)]">{bridge.headline}</h2>
        <p className="reveal mx-auto mt-6 max-w-[62ch] text-[1.1rem] text-ink-soft">{bridge.body}</p>
      </div>
    </section>
  )
}
