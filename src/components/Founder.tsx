import { Mark } from './Mark'
import { founder } from '../lib/content'

// Founder pull-quote. The one place a Newsreader italic accent is used on the site.
// (A real founder photo could replace the mark motif on the left when available.)
export function Founder() {
  return (
    <section id="founder" className="bg-paper">
      <div className="mx-auto grid max-w-[1080px] grid-cols-1 items-center gap-12 px-6 py-[clamp(5rem,11vw,9rem)] md:grid-cols-[auto_1fr] md:gap-16">
        <div className="flex justify-center md:justify-start">
          <div className="grid h-32 w-32 place-items-center rounded-full border border-hairline bg-sunken">
            <Mark size={72} title="Ouro Praxis" />
          </div>
        </div>
        <div>
          <blockquote className="serif-quote reveal text-[clamp(1.5rem,3vw,2.15rem)] text-ink">
            {'“'}{founder.quote}{'”'}
          </blockquote>
          <p className="reveal mt-7 max-w-[58ch] text-[1.02rem] leading-relaxed text-ink-soft">{founder.body}</p>
          <p className="reveal mt-6 font-mono text-[0.75rem] uppercase tracking-[0.14em] text-ink-faint">
            {founder.name}, {founder.title}
          </p>
        </div>
      </div>
    </section>
  )
}
