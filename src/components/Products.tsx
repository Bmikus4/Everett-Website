import { products } from '../lib/content'

const WASH: Record<string, { bg: string; ink: string }> = {
  lavender: { bg: 'var(--color-lavender)', ink: 'var(--color-lavender-ink)' },
  mint: { bg: 'var(--color-mint)', ink: 'var(--color-mint-ink)' },
  sky: { bg: 'var(--color-sky)', ink: 'var(--color-sky-ink)' },
  blush: { bg: 'var(--color-blush)', ink: 'var(--color-blush-ink)' },
}

function Card({
  name, role, body, tag, wash, feature = false,
}: {
  name: string; role: string; body: string; tag: string; wash: string; feature?: boolean
}) {
  const w = WASH[wash]
  return (
    <article
      className="reveal group relative flex flex-col justify-between overflow-hidden rounded-[22px] border border-hairline p-8 transition-transform duration-500 hover:-translate-y-1"
      style={{
        background: `linear-gradient(155deg, color-mix(in srgb, ${w.bg} 55%, var(--color-raised)) 0%, var(--color-raised) 62%)`,
        minHeight: feature ? '100%' : '15rem',
      }}
    >
      <div>
        <span className="font-mono text-[0.7rem] uppercase tracking-[0.14em]" style={{ color: w.ink }}>
          {role}
        </span>
        <h3
          className="mt-4 font-display font-light text-ink"
          style={{ fontSize: feature ? 'clamp(2rem, 3vw, 2.75rem)' : '1.6rem' }}
        >
          {name}
        </h3>
        <p className="mt-4 text-[0.98rem] text-ink-soft" style={{ maxWidth: '34ch' }}>
          {body}
        </p>
      </div>
      <span className="mt-8 inline-flex w-fit items-center rounded-full border border-hairline bg-raised/60 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-ink-faint">
        {tag}
      </span>
    </article>
  )
}

export function Products() {
  const [revival, first, night, chorus] = products.items
  return (
    <section id="products" className="relative mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
      <p className="eyebrow reveal">{products.eyebrow}</p>
      <div className="reveal mt-4 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <h2 className="max-w-[16ch] font-display font-light" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
          {products.headline}
        </h2>
        <p className="max-w-[38ch] text-ink-soft">{products.sub}</p>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        <div className="md:col-span-2 md:row-span-2">
          <Card {...revival} feature />
        </div>
        <Card {...first} />
        <Card {...night} />
        <div className="md:col-span-3">
          <Card {...chorus} />
        </div>
      </div>
    </section>
  )
}
