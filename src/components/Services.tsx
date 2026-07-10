import { services } from '../lib/content'

const WASH: Record<string, { bg: string; ink: string }> = {
  lavender: { bg: 'var(--color-lavender)', ink: 'var(--color-lavender-ink)' },
  mint: { bg: 'var(--color-mint)', ink: 'var(--color-mint-ink)' },
  sky: { bg: 'var(--color-sky)', ink: 'var(--color-sky-ink)' },
  blush: { bg: 'var(--color-blush)', ink: 'var(--color-blush-ink)' },
}

export function Services() {
  const [flagship, ...rest] = services.items
  const f = WASH[flagship.wash]
  return (
    <section id="services" className="relative mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
      <div className="reveal flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-[20ch] font-display font-light text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}>
          {services.headline}
        </h2>
        <p className="max-w-[34ch] text-ink-soft">{services.sub}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
        {/* flagship spans two columns */}
        <article
          className="reveal flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-hairline p-9 md:col-span-2"
          style={{ background: `linear-gradient(150deg, color-mix(in srgb, ${f.bg} 55%, var(--color-raised)), var(--color-raised) 65%)`, minHeight: '17rem' }}
        >
          <div>
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em]" style={{ color: f.ink }}>{flagship.tag}</span>
            <h3 className="mt-4 font-display text-[2.1rem] font-normal text-ink">{flagship.name}</h3>
            <p className="mt-4 max-w-[46ch] text-[1.05rem] text-ink-soft">{flagship.body}</p>
          </div>
        </article>
        {/* first supporting card sits beside flagship */}
        <Card {...rest[0]} />
        {/* remaining two span the row */}
        <Card {...rest[1]} />
        <Card {...rest[2]} className="md:col-span-2" />
      </div>
    </section>
  )
}

function Card({ name, body, tag, wash, className = '' }: { name: string; body: string; tag: string; wash: string; className?: string }) {
  const w = WASH[wash]
  return (
    <article
      className={`reveal flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-hairline p-8 transition-transform duration-500 hover:-translate-y-1 ${className}`}
      style={{ background: `linear-gradient(155deg, color-mix(in srgb, ${w.bg} 45%, var(--color-raised)), var(--color-raised) 68%)`, minHeight: '14rem' }}
    >
      <div>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em]" style={{ color: w.ink }}>{tag}</span>
        <h3 className="mt-4 font-display text-[1.55rem] font-normal text-ink">{name}</h3>
        <p className="mt-3 max-w-[38ch] text-[0.98rem] text-ink-soft">{body}</p>
      </div>
    </article>
  )
}
