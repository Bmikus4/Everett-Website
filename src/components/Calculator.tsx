import { useEffect, useRef, useState } from 'react'
import { calculator, CTA_LABEL } from '../lib/content'
import { motionAllowed } from '../lib/motion'

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })

// Smooth a value toward its target with a single top-level rAF loop (updater stays pure).
function useSmoothed(target: number) {
  const [display, setDisplay] = useState(target)
  const cur = useRef(target)
  const raf = useRef(0)
  useEffect(() => {
    if (!motionAllowed()) { cur.current = target; setDisplay(target); return }
    const tick = () => {
      const next = cur.current + (target - cur.current) * 0.18
      if (Math.abs(target - next) < 1) { cur.current = target; setDisplay(target); return }
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
      {note && <span className="mt-2 block text-[0.75rem] text-ink-faint">{note}</span>}
    </label>
  )
}

export function Calculator() {
  const c = calculator.inputs
  const [contacts, setContacts] = useState(c.contacts.default)
  const [ticket, setTicket] = useState(c.ticket.default)
  const [rate, setRate] = useState(c.rate.default)

  const jobs = contacts * (rate / 100)
  const revenue = Math.round(jobs * ticket)
  const sits = Math.round(jobs / calculator.closeRateForSits)
  const shownRevenue = Math.round(useSmoothed(revenue))
  const fill = (rate - c.rate.min) / (c.rate.max - c.rate.min)

  return (
    <section id="calculator" className="scroll-mt-24 bg-sunken">
      <div className="mx-auto max-w-[1240px] px-6 py-[clamp(5rem,11vw,9rem)]">
        <div className="reveal grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* instrument */}
          <div className="rounded-[var(--radius-card)] border border-hairline bg-raised p-8 shadow-[var(--shadow-soft)] sm:p-10">
            <h2 className="text-[clamp(1.6rem,2.6vw,2.1rem)]">{calculator.title}</h2>
            <p className="mt-3 text-[0.95rem] text-ink-soft">{calculator.sub}</p>
            <div className="mt-9 flex flex-col gap-7">
              <Slider label={c.contacts.label} min={c.contacts.min} max={c.contacts.max} step={c.contacts.step} value={contacts} onChange={setContacts} format={(v) => v.toLocaleString('en-US')} />
              <Slider label={c.ticket.label} min={c.ticket.min} max={c.ticket.max} step={c.ticket.step} value={ticket} onChange={setTicket} format={(v) => usd.format(v)} />
              <Slider label={c.rate.label} min={c.rate.min} max={c.rate.max} step={c.rate.step} value={rate} onChange={setRate} format={(v) => `${v.toFixed(1)}%`} note={c.rate.note} />
            </div>
          </div>

          {/* readout */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative" style={{ width: 'min(82vw, 400px)', height: 'min(82vw, 400px)' }}>
              <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90">
                <circle cx="100" cy="100" r="90" fill="none" stroke="var(--color-hairline)" strokeWidth="2" />
                <circle cx="100" cy="100" r="90" fill="none" stroke="var(--color-gold)" strokeWidth="4" strokeLinecap="round"
                  pathLength={1}
                  style={{ strokeDasharray: 1, strokeDashoffset: 1 - Math.max(0.04, fill), transition: motionAllowed() ? 'stroke-dashoffset 0.5s var(--ease-out-quint)' : 'none' }} />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center px-[18%]">
                <span className="font-mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-faint">recovered revenue</span>
                <span className="tnum mt-2.5 font-display font-semibold text-ink" style={{ fontSize: 'clamp(1.9rem, 4.4vw, 2.9rem)', lineHeight: 1, letterSpacing: '-0.03em' }}>
                  {usd.format(shownRevenue)}
                </span>
              </div>
            </div>
            <p className="mt-7 text-[0.98rem] text-ink-soft">
              about <span className="tnum font-semibold text-ink">{sits.toLocaleString('en-US')}</span> sits from a list you already paid for
            </p>
            <p className="mt-3 max-w-[42ch] text-[0.88rem] text-ink-faint">{calculator.anchor}</p>
            <a href="/contact" className="btn-gold mt-8 inline-flex items-center rounded-full px-7 py-3.5 text-[0.95rem] font-medium">
              {CTA_LABEL}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
