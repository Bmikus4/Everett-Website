import { useEffect, useState } from 'react'
import { Ouroboros } from './Ouroboros'
import { nav } from '../lib/content'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    // one passive rAF-throttled read, not per-frame state churn
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24)
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--color-paper) 82%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-hairline)' : '1px solid transparent',
      }}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <Ouroboros variant="line" size={26} title="Ouro Praxis" />
          <span className="font-display text-[1.15rem] tracking-tight text-ink">Ouro Praxis</span>
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.9rem] text-ink-soft transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#calculator"
          className="rounded-full border border-hairline px-5 py-2 text-[0.85rem] font-medium text-ink transition-colors hover:border-clay hover:text-clay"
        >
          {nav.cta}
        </a>
      </nav>
    </header>
  )
}
