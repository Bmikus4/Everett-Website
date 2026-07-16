import { ShieldCheck } from '@phosphor-icons/react'
import { offer, CTA_LABEL } from '../lib/content'

// The offer. Four points; the guarantee is pulled out as the emphasized card.
export function Offer() {
  return (
    <section id="offer" className="scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
        <div className="max-w-[46rem]">
          <h2 className="reveal text-[clamp(2rem,4.4vw,3.3rem)]">{offer.headline}</h2>
        </div>

        <div className="reveal mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {offer.points.map((p) => {
            const isGuarantee = p.title === 'The guarantee'
            return (
              <div
                key={p.title}
                className="flex flex-col rounded-[var(--radius-card)] border p-8"
                style={
                  isGuarantee
                    ? { background: 'var(--color-gold-tint)', borderColor: 'color-mix(in srgb, var(--color-gold) 45%, var(--color-hairline))' }
                    : { background: 'var(--color-raised)', borderColor: 'var(--color-hairline)' }
                }
              >
                {isGuarantee && <ShieldCheck size={26} weight="duotone" className="mb-3 text-gold" />}
                <h3 className="text-[1.2rem] font-semibold tracking-tight text-ink">{p.title}</h3>
                <p className="mt-3 text-[0.98rem] leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            )
          })}
        </div>

        <div className="reveal mt-10">
          <a href="/demo" className="btn-gold inline-flex items-center rounded-full px-8 py-4 text-[1rem] font-medium">{CTA_LABEL}</a>
        </div>
      </div>
    </section>
  )
}
