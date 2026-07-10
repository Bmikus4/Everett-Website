import { Ouroboros } from './Ouroboros'
import { founder } from '../lib/content'

export function Founder() {
  return (
    <section id="founder" className="relative border-t border-hairline">
      <div className="mx-auto flex max-w-[760px] flex-col items-center px-6 py-[clamp(5rem,11vw,9rem)] text-center">
        <Ouroboros variant="line" size={52} draw className="reveal" title="Ouro Praxis" />
        <p className="eyebrow reveal mt-8">{founder.eyebrow}</p>
        <p
          className="reveal measure mt-6 font-display text-[1.4rem] font-light leading-relaxed text-ink"
          style={{ maxWidth: '40ch' }}
        >
          {founder.paragraph}
        </p>
        <p className="reveal mt-10 font-display text-[1.15rem] italic text-ink-soft">{founder.motto}</p>
        <p className="reveal mt-6 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-ink-faint">
          {founder.name} / {founder.title}
        </p>
      </div>
    </section>
  )
}
