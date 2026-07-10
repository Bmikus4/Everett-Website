import { useEffect, useRef, useState } from 'react'
import { OURO } from '../lib/ouroboros-paths'
import { calculator } from '../lib/content'
import { motionAllowed } from '../lib/motion'

const gbp = new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP', maximumFractionDigits: 0 })

// Smooth a value toward its target with a single top-level rAF loop (updater stays pure).
function useSmoothed(target: number) {
  const [display, setDisplay] = useState(target)
  const cur = useRef(target)
  const raf = useRef(0)
  useEffect(() => {
    if (!motionAllowed()) {
      cur.current = target
      setDisplay(target)
      return
    }
    const tick = () => {
      const next = cur.current + (target - cur.current) * 0.18
      if (Math.abs(target - next) < 1) {
        cur.current = target
        setDisplay(target)
        return
      }
      cur.current = next
      setDisplay(next)
      raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [target])
  return display
}

function Slider({ label, min, max, step, value, onChange, format, note }: {
  label: string; min: number; max: number; step: number; value: number
  onChange: (v: number) => void; format: (v: number) => string; note?: string
}) {
  const pct = ((value - min) / (max - min)) * 100
  return (
    <label className="block">
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[0.92rem] text-ink-soft">{label}</span>
        <span className="tnum font-mono text-[0.95rem] font-medium text-ink">{format(value)}</span>
      </div>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        aria-label={label} aria-valuetext={format(value)}
        className="ouro-range mt-3 w-full"
        style={{ '--pct': `${pct}%` } as React.CSSProperties}
      />
      {note && <span className="mt-2 block text-[0.75rem] text-ink-soft">{note}</span>}
    </label>
  )
}

export function Calculator() {
  const c = calculator.inputs
  const [leads, setLeads] = useState(c.leads.default)
  const [aov, setAov] = useState(c.aov.default)
  const [reply, setReply] = useState(c.replyRate.default)
  const [close, setClose] = useState(c.closeRate.default)

  const recoverable = Math.round(leads * (reply / 100) * (close / 100) * aov)
  const shown = Math.round(useSmoothed(recoverable))
  const fill = Math.min(recoverable / 500000, 1)

  return (
    <section id="calculator" className="relative mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-20">
        <div className="rounded-[var(--radius-card)] border border-hairline bg-raised p-8 shadow-[var(--shadow-soft)] sm:p-10">
          <h2 className="font-display text-[1.7rem] font-normal leading-tight text-ink">{calculator.title}</h2>
          <p className="mt-3 text-[0.95rem] text-ink-soft">{calculator.sub}</p>
          <div className="mt-9 flex flex-col gap-7">
            <Slider label={c.leads.label} min={c.leads.min} max={c.leads.max} step={c.leads.step} value={leads} onChange={setLeads} format={(v) => v.toLocaleString('en-GB')} />
            <Slider label={c.aov.label} min={c.aov.min} max={c.aov.max} step={c.aov.step} value={aov} onChange={setAov} format={(v) => gbp.format(v)} />
            <Slider label={c.replyRate.label} min={c.replyRate.min} max={c.replyRate.max} step={c.replyRate.step} value={reply} onChange={setReply} format={(v) => `${v}%`} note={c.replyRate.note} />
            <Slider label={c.closeRate.label} min={c.closeRate.min} max={c.closeRate.max} step={c.closeRate.step} value={close} onChange={setClose} format={(v) => `${v}%`} />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <div className="relative flex items-center justify-center">
            <svg viewBox={OURO.viewBox} className="h-[min(62vw,400px)] w-[min(62vw,400px)]" style={{ overflow: 'visible' }}>
              <path d={OURO.ring} fill="none" stroke="var(--color-hairline)" strokeWidth={1.4} />
              <path d={OURO.ring} fill="none" stroke={fill > 0.85 ? 'var(--color-gold)' : 'var(--color-clay)'} strokeWidth={2.4} strokeLinecap="round" pathLength={1}
                style={{ strokeDasharray: 1, strokeDashoffset: 1 - fill, transition: motionAllowed() ? 'stroke-dashoffset 0.5s var(--ease-out-quint), stroke 0.4s linear' : 'none' }} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-8">
              <span className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-soft">recoverable</span>
              <span className="tnum mt-2 font-display font-light text-ink" style={{ fontSize: 'clamp(2.1rem, 5vw, 3.5rem)', lineHeight: 1 }}>
                {gbp.format(shown)}
              </span>
            </div>
          </div>
          <p className="mt-8 max-w-[38ch] font-display text-[1.05rem] italic text-ink-soft">{calculator.framing}</p>
          <p className="mt-4 max-w-[42ch] text-[0.9rem] text-ink-soft">{calculator.anchor}</p>
          <a href="#book" className="mt-8 inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-[0.95rem] font-medium text-paper transition-colors hover:bg-plum">
            {calculator.cta}
          </a>
        </div>
      </div>
    </section>
  )
}
