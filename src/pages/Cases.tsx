import { Mark } from '../components/Mark'
import { PageHeader } from '../components/PageHeader'
import { FinalCta } from '../components/FinalCta'
import { casesPage } from '../lib/content'

// Honest placeholder: one dealer per metro means we do not publish a dealer's
// numbers where their competitors can read them. No fabricated results.
export function Cases() {
  const c = casesPage
  return (
    <>
      <PageHeader kicker={c.kicker}>{c.headline}</PageHeader>

      <section className="mx-auto max-w-[1240px] px-6 pb-[clamp(4rem,9vw,7rem)]">
        <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-hairline bg-sunken p-8 sm:p-12">
          <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 opacity-[0.06]">
            <Mark size={340} spin />
          </div>
          <p className="reveal max-w-[58ch] text-[1.15rem] text-ink">{c.body}</p>

          <div className="mt-12 grid grid-cols-1 gap-x-12 gap-y-8 md:grid-cols-3">
            {c.points.map((p, i) => (
              <div key={p.h} className="border-t-2 pt-5" style={{ borderColor: 'color-mix(in srgb, var(--color-gold) 55%, var(--color-hairline))' }}>
                <span className="tnum font-mono text-[0.78rem] font-medium text-gold">{String(i + 1).padStart(2, '0')}</span>
                <h2 className="mt-3 text-[1.2rem] font-semibold tracking-tight text-ink">{p.h}</h2>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{p.b}</p>
              </div>
            ))}
          </div>

          <a href="/contact" className="btn-gold relative mt-12 inline-flex items-center rounded-full px-7 py-3.5 text-[0.95rem] font-medium">
            {c.cta}
          </a>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
