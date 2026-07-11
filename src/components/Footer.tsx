import { Mark } from './Mark'
import { MotionToggle } from './MotionToggle'
import { footer } from '../lib/content'

export function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Mark size={32} title="Ouro Praxis" />
              <span className="font-display text-[1.2rem] tracking-tight text-ink">{footer.brand}</span>
            </div>
            <p className="mt-5 max-w-[34ch] text-[0.95rem] text-ink-soft">{footer.descriptor}</p>
            <a href={`mailto:${footer.email}`} className="mt-5 inline-block text-[0.95rem] text-ink underline decoration-hairline underline-offset-4 transition-colors hover:decoration-clay">
              {footer.email}
            </a>
            <p className="mt-5 font-display text-[1.05rem] italic text-ink">{footer.tagline}</p>
          </div>

          {Object.entries(footer.columns).map(([title, items]) => (
            <nav key={title}>
              <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft">{title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href} className="text-[0.9rem] text-ink-soft transition-colors hover:text-ink">{it.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <ul className="mt-14 flex flex-wrap gap-x-3 gap-y-2 border-t border-hairline pt-8">
          {footer.trust.map((t) => (
            <li key={t} className="rounded-full border border-hairline px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.08em] text-ink-soft">{t}</li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[52ch] text-[0.8rem] text-ink-soft">{footer.legal}</p>
          <MotionToggle />
        </div>
        <p className="mt-6 font-mono text-[0.72rem] text-ink-faint">{footer.copyright}</p>
      </div>
    </footer>
  )
}
