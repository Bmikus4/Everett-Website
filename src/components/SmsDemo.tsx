import { useEffect, useRef, useState } from 'react'
import { hero } from '../lib/content'
import { motionAllowed, useInViewOnce } from '../lib/motion'

/* The product, shown as a real SMS thread on the homeowner's phone: the dealer's
   setter texts arrive as grey received bubbles; the homeowner's replies are green
   SMS bubbles. Messages reveal one at a time with a typing indicator when scrolled
   into view. Reduced motion shows the full thread immediately. The phone screen is
   always light (it is a device, not a page surface). */
export function SmsDemo() {
  const { demo } = hero
  const { ref, seen } = useInViewOnce<HTMLDivElement>(0.35)
  const animate = motionAllowed()
  const [shown, setShown] = useState(animate ? 0 : demo.messages.length)
  const [typing, setTyping] = useState(false)
  const [done, setDone] = useState(!animate)
  const timers = useRef<number[]>([])

  useEffect(() => {
    if (!seen || !animate) return
    let delay = 500
    demo.messages.forEach((m, i) => {
      const dur = m.from === 'setter' ? 950 : 700
      timers.current.push(
        window.setTimeout(() => setTyping(true), delay),
        window.setTimeout(() => { setTyping(false); setShown(i + 1) }, delay + dur),
      )
      delay += dur + 520
    })
    timers.current.push(window.setTimeout(() => setDone(true), delay))
    const t = timers.current
    return () => t.forEach(clearTimeout)
  }, [seen, animate, demo.messages])

  const nextFrom = shown < demo.messages.length ? demo.messages[shown].from : 'setter'

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[336px]">
      <div
        className="relative overflow-hidden"
        style={{
          borderRadius: 54,
          padding: 11,
          background: 'linear-gradient(150deg, #2a2823, #100f0c)',
          boxShadow: '0 44px 90px -32px rgba(60,48,20,0.5), 0 8px 24px rgba(0,0,0,0.2), inset 0 0 0 1.5px rgba(255,255,255,0.06)',
        }}
      >
        <div className="relative overflow-hidden" style={{ borderRadius: 44, background: '#fff' }}>
          {/* status bar */}
          <div className="relative flex items-center justify-between px-7 pt-3 pb-1" style={{ color: '#000' }}>
            <span className="text-[0.82rem] font-semibold tracking-tight">9:41</span>
            <div className="absolute left-1/2 top-2.5 h-[26px] w-[92px] -translate-x-1/2 rounded-full" style={{ background: '#000' }} />
            <div className="flex items-center gap-1.5"><SignalIcon /><WifiIcon /><BatteryIcon /></div>
          </div>

          {/* contact header */}
          <div className="flex flex-col items-center gap-1 border-b px-4 pb-3 pt-3" style={{ borderColor: 'rgba(0,0,0,0.08)', background: 'rgba(249,249,249,0.92)' }}>
            <div className="flex w-full items-center justify-between">
              <Chevron />
              <div className="flex flex-col items-center">
                <span className="grid h-11 w-11 place-items-center rounded-full text-[0.95rem] font-semibold text-white" style={{ background: 'linear-gradient(160deg, #c79a3f, #8a6a17)' }}>
                  {demo.business.slice(0, 1)}
                </span>
                <span className="mt-1 flex items-center gap-1 text-[0.78rem] font-medium" style={{ color: '#000' }}>
                  {demo.business}
                  <span style={{ color: '#8e8e93', fontSize: '0.7rem' }}>›</span>
                </span>
              </div>
              <div className="flex gap-3" style={{ color: '#0a7cff' }}><VideoIcon /></div>
            </div>
          </div>

          {/* messages: min-height reserved so the phone never grows as bubbles arrive */}
          <div className="flex min-h-[468px] flex-col gap-1.5 px-3.5 py-4" style={{ background: '#fff' }}>
            <div className="mb-1 text-center text-[0.66rem] font-medium" style={{ color: '#8e8e93' }}>Text Message · SMS</div>
            {demo.messages.slice(0, shown).map((m, i) => (
              <Bubble key={i} from={m.from} text={m.text} animate={animate} />
            ))}
            {typing && shown < demo.messages.length && nextFrom === 'setter' && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-[18px] px-3.5 py-3" style={{ background: '#e9e9eb' }}>
                  {[0, 1, 2].map((d) => (
                    <span key={d} className="dot h-1.5 w-1.5 rounded-full" style={{ background: '#8e8e93', animationDelay: `${d * 0.18}s` }} />
                  ))}
                </div>
              </div>
            )}
            {done && (
              <div className="bubble-in mt-2 flex items-center justify-center gap-1.5 self-center rounded-full px-3 py-1.5" style={{ background: 'rgba(52,199,89,0.12)' }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#28a745' }} />
                <span className="text-[0.66rem] font-semibold tracking-tight" style={{ color: '#1f8a3b' }}>{demo.status}</span>
              </div>
            )}
          </div>

          {/* input bar */}
          <div className="flex items-center gap-2 px-3 pb-5 pt-2" style={{ background: '#fff' }}>
            <div className="flex flex-1 items-center justify-between rounded-full border px-4 py-2" style={{ borderColor: 'rgba(0,0,0,0.16)' }}>
              <span className="text-[0.82rem]" style={{ color: '#b0b0b5' }}>Text Message</span>
              <span className="grid h-6 w-6 place-items-center rounded-full" style={{ background: '#34c759' }}><ArrowUp /></span>
            </div>
          </div>
          <div className="mx-auto mb-2 h-1 w-[38%] rounded-full" style={{ background: '#000', opacity: 0.28 }} />
        </div>
      </div>
    </div>
  )
}

function Bubble({ from, text, animate }: { from: string; text: string; animate: boolean }) {
  const received = from === 'setter'
  return (
    <div className={`flex ${received ? 'justify-start' : 'justify-end'}`}>
      <div
        className={animate ? 'bubble-in' : ''}
        style={{
          maxWidth: '80%',
          borderRadius: 20,
          padding: '8px 13px',
          fontSize: '0.9rem',
          lineHeight: 1.34,
          background: received ? '#e9e9eb' : 'linear-gradient(180deg, #38d05a, #2ec14e)',
          color: received ? '#000' : '#fff',
        }}
      >
        {text}
      </div>
    </div>
  )
}

const Chevron = () => (<svg width="11" height="18" viewBox="0 0 11 18" fill="none" style={{ color: '#0a7cff' }}><path d="M9 1L2 9l7 8" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>)
const VideoIcon = () => (<svg width="22" height="14" viewBox="0 0 22 14" fill="none"><rect x="1" y="1" width="14" height="12" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="M16 5l5-3v10l-5-3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>)
const ArrowUp = () => (<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 10V2M6 2L2.5 5.5M6 2l3.5 3.5" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>)
const SignalIcon = () => (<svg width="17" height="11" viewBox="0 0 17 11" fill="#000"><rect x="0" y="7" width="3" height="4" rx="1" /><rect x="4.5" y="5" width="3" height="6" rx="1" /><rect x="9" y="2.5" width="3" height="8.5" rx="1" /><rect x="13.5" y="0" width="3" height="11" rx="1" /></svg>)
const WifiIcon = () => (<svg width="16" height="11" viewBox="0 0 16 11" fill="#000"><path d="M8 2.2c2.7 0 5.1 1 6.9 2.7l-1.4 1.5A7.7 7.7 0 008 4.3 7.7 7.7 0 002.5 6.4L1.1 4.9A9.8 9.8 0 018 2.2z" /><path d="M8 6c1.4 0 2.7.5 3.6 1.5l-1.5 1.5A3 3 0 008 8.1a3 3 0 00-2.1.9L4.4 7.5A5.2 5.2 0 018 6z" /><circle cx="8" cy="10" r="1.2" /></svg>)
const BatteryIcon = () => (<svg width="26" height="12" viewBox="0 0 26 12" fill="none"><rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke="#000" strokeOpacity="0.35" /><rect x="2" y="2" width="16" height="8" rx="1.5" fill="#000" /><rect x="23" y="4" width="1.8" height="4" rx="0.9" fill="#000" fillOpacity="0.4" /></svg>)
