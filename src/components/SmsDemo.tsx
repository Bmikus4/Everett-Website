import { useEffect, useRef, useState } from 'react'
import { hero } from '../lib/content'
import { motionAllowed, useInViewOnce } from '../lib/motion'

/* The product, shown: an AI reactivation conversation that ends in a booking.
   Bubbles reveal one at a time (with a brief typing indicator) when scrolled into
   view. Reduced motion shows the full thread immediately. */
export function SmsDemo() {
  const { demo } = hero
  const { ref, seen } = useInViewOnce<HTMLDivElement>(0.4)
  const animate = motionAllowed()
  const [shown, setShown] = useState(animate ? 0 : demo.messages.length)
  const [typing, setTyping] = useState(false)
  const timers = useRef<number[]>([])

  useEffect(() => {
    if (!seen || !animate) return
    let delay = 400
    demo.messages.forEach((m, i) => {
      timers.current.push(
        window.setTimeout(() => setTyping(true), delay),
        window.setTimeout(() => {
          setTyping(false)
          setShown(i + 1)
        }, delay + (m.from === 'ai' ? 900 : 650)),
      )
      delay += (m.from === 'ai' ? 900 : 650) + 500
    })
    const t = timers.current
    return () => t.forEach(clearTimeout)
  }, [seen, animate, demo.messages])

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[380px]">
      <div className="overflow-hidden rounded-[26px] border border-hairline bg-raised shadow-[var(--shadow-soft)]">
        <div className="flex items-center gap-3 border-b border-hairline px-5 py-4">
          <span className="grid h-9 w-9 place-items-center rounded-full text-[0.8rem] font-semibold text-paper" style={{ background: 'var(--color-plum)' }}>
            {demo.business.slice(0, 1)}
          </span>
          <div className="leading-tight">
            <div className="text-[0.9rem] font-medium text-ink">{demo.business}</div>
            <div className="font-mono text-[0.68rem] uppercase tracking-[0.12em] text-ink-faint">AI · SMS</div>
          </div>
        </div>

        <div className="flex min-h-[360px] flex-col gap-2.5 px-5 py-6">
          {demo.messages.slice(0, shown).map((m, i) => (
            <Bubble key={i} from={m.from} text={m.text} animate={animate} />
          ))}
          {typing && shown < demo.messages.length && (
            <div className="flex" style={{ justifyContent: demo.messages[shown].from === 'ai' ? 'flex-start' : 'flex-end' }}>
              <div className="flex gap-1 rounded-2xl px-4 py-3" style={{ background: 'var(--color-sunken)' }}>
                {[0, 1, 2].map((d) => (
                  <span key={d} className="dot h-1.5 w-1.5 rounded-full" style={{ background: 'var(--color-ink-faint)', animationDelay: `${d * 0.18}s` }} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <p className="mt-4 text-center font-mono text-[0.7rem] uppercase tracking-[0.12em] text-ink-faint">{demo.caption}</p>
    </div>
  )
}

function Bubble({ from, text, animate }: { from: string; text: string; animate: boolean }) {
  const ai = from === 'ai'
  return (
    <div className={`flex ${ai ? 'justify-start' : 'justify-end'}`}>
      <div
        className={animate ? 'bubble-in' : ''}
        style={{
          maxWidth: '82%',
          borderRadius: ai ? '18px 18px 18px 5px' : '18px 18px 5px 18px',
          padding: '10px 14px',
          fontSize: '0.9rem',
          lineHeight: 1.4,
          background: ai ? 'var(--color-sunken)' : 'var(--color-plum)',
          color: ai ? 'var(--color-ink)' : 'var(--color-paper)',
        }}
      >
        {text}
      </div>
    </div>
  )
}
