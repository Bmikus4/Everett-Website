import { Ouroboros } from './Ouroboros'
import { founder } from '../lib/content'

export function Founder() {
  return (
    <section id="founder" className="relative border-t border-hairline bg-sunken">
      <div className="mx-auto grid max-w-[1040px] grid-cols-1 items-center gap-12 px-6 py-[clamp(5rem,11vw,9rem)] md:grid-cols-[auto_1fr] md:gap-16">
        <div className="flex flex-col items-center gap-5">
          <div className="grid h-28 w-28 place-items-center rounded-full border border-hairline bg-raised">
            <span className="font-display text-[2.5rem] font-light text-plum">E</span>
          </div>
          <Ouroboros variant="filled" size={40} draw title="Ouro Praxis" />
        </div>
        <div>
          <p className="reveal font-display text-[1.35rem] font-light leading-relaxed text-ink">{founder.paragraph}</p>
          <p className="reveal mt-8 font-display text-[1.1rem] italic text-ink-soft">{founder.motto}</p>
          <p className="reveal mt-5 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-ink-soft">{founder.name} · {founder.title}</p>
        </div>
      </div>
    </section>
  )
}
