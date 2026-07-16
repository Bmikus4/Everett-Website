import { ArrowUpRight } from '@phosphor-icons/react'
import { demoPage, DEMO_URL, DEMO_EMBED_URL } from '../lib/content'

/* The "Get a free demo" destination. Keeps the visitor inside the Ouro Praxis
   experience by embedding the SalesWingman lead-machine funnel in a framed,
   on-brand surface. The external URL stays available as an open-in-new-tab
   fallback in case the embed is blocked or slow. */
export function Demo() {
  const d = demoPage
  return (
    <section className="mx-auto max-w-[1240px] px-6 pt-32 pb-[clamp(3rem,7vw,5rem)] lg:pt-40">
      <header className="text-center">
        <span className="eyebrow">{d.kicker}</span>
        <h1 className="reveal mx-auto mt-4 max-w-[18ch] text-[clamp(2.2rem,4.6vw,3.4rem)]" style={{ lineHeight: 1.05, letterSpacing: '-0.03em' }}>
          {d.headline}
        </h1>
        <p className="reveal mx-auto mt-5 max-w-[52ch] text-[1.08rem] text-ink-soft">{d.sub}</p>
      </header>

      <div
        className="reveal relative mx-auto mt-10 overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-raised shadow-[var(--shadow-soft)]"
        style={{ height: 'min(86vh, 980px)' }}
      >
        <iframe
          src={DEMO_EMBED_URL}
          title="Ouro Praxis live demo"
          className="h-full w-full"
          style={{ border: 0, display: 'block', overflow: 'hidden' }}
          allow="clipboard-write; autoplay; microphone; camera"
        />
      </div>

      <p className="mt-6 text-center text-[0.85rem] text-ink-faint">
        {d.fallback}{' '}
        <a href={DEMO_URL} target="_blank" rel="noopener noreferrer" className="text-gold-link inline-flex items-center gap-0.5 underline underline-offset-2">
          {d.fallbackCta}
          <ArrowUpRight size={13} weight="bold" />
        </a>
      </p>
    </section>
  )
}
