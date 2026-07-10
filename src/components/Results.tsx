import { useCountUp, useInViewOnce } from '../lib/motion'
import { results } from '../lib/content'

function Metric({ value, prefix = '', suffix = '', label, active }: { value: number; prefix?: string; suffix?: string; label: string; active: boolean }) {
  const v = useCountUp(value, active)
  return (
    <div className="flex flex-col gap-2">
      <div className="tnum font-display font-light text-ink" style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)', lineHeight: 1 }}>
        {prefix}{Math.round(v)}{suffix}
      </div>
      <div className="text-[0.95rem] text-ink-soft">{label}</div>
    </div>
  )
}

export function Results() {
  const { ref, seen } = useInViewOnce<HTMLDivElement>(0.3)
  const us = useCountUp(results.reply.us, seen)

  return (
    <section id="results" className="relative mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
      <h2 ref={ref} className="reveal max-w-[16ch] font-display font-light text-ink" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)', lineHeight: 1.05 }}>
        {results.headline}
      </h2>

      <div className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-3">
        {results.metrics.map((m) => (
          <Metric key={m.label} {...m} active={seen} />
        ))}
      </div>

      {/* reply-rate contrast: 41% us vs 8% industry */}
      <div className="mt-16 rounded-[var(--radius-card)] border border-hairline bg-sunken p-8 sm:p-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-baseline gap-4">
            <span className="tnum font-display text-[3.5rem] font-light leading-none" style={{ color: 'var(--color-clay)' }}>{Math.round(us)}%</span>
            <span className="max-w-[22ch] text-[0.95rem] text-ink-soft">{results.replyLabel}</span>
          </div>
          <div className="flex flex-col gap-3 sm:w-[46%]">
            <div className="flex items-center gap-3">
              <span className="w-16 shrink-0 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-soft">Us</span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-hairline">
                <div className="h-full rounded-full" style={{ width: `${(us / results.reply.us) * 100}%`, background: 'var(--color-clay)' }} />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-16 shrink-0 font-mono text-[0.72rem] uppercase tracking-[0.1em] text-ink-soft">Industry</span>
              <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-hairline">
                <div className="h-full rounded-full" style={{ width: `${(results.reply.industry / results.reply.us) * 100}%`, background: 'var(--color-ink-faint)' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
