import { Ouroboros } from './Ouroboros'
import { MotionToggle } from './MotionToggle'
import { footer } from '../lib/content'

export function Footer() {
  return (
    <footer className="relative border-t border-hairline bg-paper">
      <div className="mx-auto max-w-[1240px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <Ouroboros variant="line" size={28} title="Ouro Praxis" />
              <span className="font-display text-[1.2rem] tracking-tight text-ink">{footer.brand}</span>
            </div>
            <p className="mt-5 max-w-[34ch] text-[0.95rem] text-ink-soft">{footer.descriptor}</p>
            <p className="mt-5 font-display text-[1.05rem] italic text-ink">{footer.tagline}</p>
          </div>

          {Object.entries(footer.columns).map(([title, items]) => (
            <nav key={title}>
              <h3 className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-faint">{title}</h3>
              <ul className="mt-5 flex flex-col gap-3">
                {items.map((it) => (
                  <li key={it}>
                    <a href="#calculator" className="text-[0.9rem] text-ink-soft transition-colors hover:text-ink">
                      {it}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-[52ch] text-[0.8rem] text-ink-faint">{footer.legal}</p>
          <MotionToggle />
        </div>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.72rem] text-ink-faint">{footer.copyright}</p>
          <p className="font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-faint">{footer.motto}</p>
        </div>
      </div>
    </footer>
  )
}
