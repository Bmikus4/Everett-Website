import { useEffect, useState } from 'react'
import { List, X } from '@phosphor-icons/react'
import { Mark } from './Mark'
import { ThemeToggle } from './ThemeToggle'
import { nav } from '../lib/content'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => { setScrolled(window.scrollY > 24); ticking = false })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-500"
      style={{
        background: scrolled || open ? 'color-mix(in srgb, var(--color-paper) 82%, transparent)' : 'transparent',
        backdropFilter: scrolled || open ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--color-hairline)' : '1px solid transparent',
      }}
    >
      <nav className="mx-auto flex h-[68px] max-w-[1240px] items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Mark size={30} title="Ouro Praxis" />
          <span className="font-display text-[1.12rem] font-semibold tracking-tight text-ink">Ouro Praxis</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-[0.9rem] text-ink-soft transition-colors hover:text-ink">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a href="/demo" className="btn-gold hidden rounded-full px-5 py-2 text-[0.85rem] font-medium sm:inline-flex">
            {nav.cta}
          </a>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-hairline text-ink md:hidden"
          >
            {open ? <X size={18} /> : <List size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-hairline bg-paper px-6 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col">
            {nav.links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-hairline py-4 font-display text-[1.3rem] font-semibold text-ink">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="/demo" onClick={() => setOpen(false)} className="btn-gold mt-6 inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-[0.95rem] font-medium">
            {nav.cta}
          </a>
        </div>
      )}
    </header>
  )
}
