import { Mark } from './Mark'
import { MotionToggle } from './MotionToggle'
import { footer } from '../lib/content'

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <a href="/" className="flex items-center gap-2.5">
              <Mark size={32} title="Ouro Praxis" />
              <span className="font-display text-[1.18rem] font-semibold tracking-tight text-ink">{footer.brand}</span>
            </a>
            <p className="mt-5 max-w-[36ch] text-[0.95rem] text-ink-soft">{footer.descriptor}</p>
            <a href={`mailto:${footer.email}`} className="mt-5 inline-block text-[0.95rem] text-gold-link underline decoration-hairline underline-offset-4 transition-colors hover:decoration-current">
              {footer.email}
            </a>
          </div>

          {Object.entries(footer.columns).map(([title, items]) => (
            <nav key={title}>
              <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">{title}</h3>
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
          <p className="max-w-[54ch] text-[0.8rem] text-ink-faint">{footer.legal}</p>
          <MotionToggle />
        </div>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.72rem] text-ink-faint">{footer.copyright}</p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {footer.legalLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[0.78rem] text-ink-faint transition-colors hover:text-ink">{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
