import type { ReactNode } from 'react'

// Inner-page header. Top padding clears the fixed nav.
export function PageHeader({ kicker, sub, children }: { kicker: string; sub?: string; children: ReactNode }) {
  return (
    <header className="mx-auto max-w-[1240px] px-6 pt-32 pb-12 lg:pt-40 lg:pb-16">
      <span className="eyebrow">{kicker}</span>
      <h1 className="reveal mt-4 text-[clamp(2.4rem,5.2vw,4rem)]" style={{ lineHeight: 1.04, letterSpacing: '-0.03em' }}>
        {children}
      </h1>
      {sub && <p className="reveal mt-6 max-w-[64ch] text-[1.12rem] text-ink-soft">{sub}</p>}
    </header>
  )
}
