import { ArrowRight, Star } from '@phosphor-icons/react'
import { PageHeader } from '../components/PageHeader'
import { SmsDemo } from '../components/SmsDemo'
import { FinalCta } from '../components/FinalCta'
import { servicesPage, services } from '../lib/content'

export function Services() {
  return (
    <>
      <PageHeader kicker={servicesPage.kicker} sub={servicesPage.sub}>
        We follow your funnel.<br />We plug every leak in it.
      </PageHeader>

      {/* funnel breadcrumb */}
      <div className="mx-auto max-w-[1240px] px-6">
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-2 border-y border-hairline py-5 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-faint">
          {servicesPage.funnel.map((f, i) => (
            <li key={f} className="flex items-center gap-3">
              <span className={i === 5 ? 'text-gold' : ''}>{f}</span>
              {i < servicesPage.funnel.length - 1 && <ArrowRight size={13} className="text-hairline" />}
            </li>
          ))}
        </ol>
      </div>

      {/* detailed service entries, flagship first */}
      <div className="mx-auto max-w-[1240px] px-6">
        {[...services.items].sort((a, b) => Number(b.flagship) - Number(a.flagship)).map((s) => (
          <article
            key={s.stage}
            className="grid grid-cols-1 gap-8 border-t border-hairline py-14 md:grid-cols-[7rem_1fr] md:gap-12 lg:py-20"
          >
            <div className="flex items-baseline gap-4 md:flex-col md:items-start md:gap-2">
              <span className="tnum font-display text-[3rem] font-semibold leading-none text-gold" style={{ letterSpacing: '-0.04em' }}>{s.stage}</span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-faint">{s.tag}</span>
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-[clamp(1.7rem,3vw,2.4rem)]">{s.name}</h2>
                {s.flagship && (
                  <span className="inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.1em] text-gold" style={{ background: 'var(--color-gold-tint)' }}>
                    <Star size={10} weight="fill" /> Start here
                  </span>
                )}
              </div>
              <p className="mt-4 max-w-[52ch] text-[1.15rem] text-ink">{s.hook}</p>
              <p className="mt-4 max-w-[60ch] text-[1.02rem] leading-relaxed text-ink-soft">{s.body}</p>

              <div className={s.flagship ? 'mt-8 grid gap-10 lg:grid-cols-[1fr_auto]' : 'mt-8'}>
                <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {s.wins.map((w) => (
                    <li key={w} className="flex gap-2.5 text-[0.92rem] text-ink-soft">
                      <ArrowRight size={15} weight="bold" className="mt-1 flex-none text-gold" />
                      {w}
                    </li>
                  ))}
                </ul>
                {s.flagship && (
                  <div className="lg:w-[300px]">
                    <SmsDemo />
                    <p className="mt-4 text-center font-mono text-[0.66rem] uppercase tracking-[0.12em] text-ink-faint">What the conversation looks like</p>
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <FinalCta />
    </>
  )
}
