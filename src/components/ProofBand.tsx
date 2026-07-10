import { useCountUp, useInViewOnce } from '../lib/motion'
import { proof } from '../lib/content'

function Metric({
  value, prefix = '', suffix = '', label, active, big = false,
}: {
  value: number; prefix?: string; suffix?: string; label: string; active: boolean; big?: boolean
}) {
  const v = useCountUp(value, active)
  const shown = Math.round(v)
  return (
    <div className="flex flex-col gap-1">
      <div
        className="tnum font-display font-light text-ink"
        style={{ fontSize: big ? 'clamp(3rem, 6vw, 5rem)' : 'clamp(2.25rem, 4.5vw, 3.5rem)', lineHeight: 1 }}
      >
        {prefix}
        {shown}
        {suffix}
      </div>
      <div className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-faint">{label}</div>
    </div>
  )
}

export function ProofBand() {
  const { ref, seen } = useInViewOnce<HTMLDivElement>(0.35)
  const replyBar = useCountUp(41, seen)
  const industryBar = useCountUp(8, seen)

  return (
    <section id="proof" className="relative border-y border-hairline bg-sunken">
      <div ref={ref} className="mx-auto max-w-[1240px] px-6 py-[clamp(4rem,9vw,7rem)]">
        <p className="eyebrow reveal">{proof.eyebrow}</p>
        <h2
          className="reveal mt-4 max-w-[18ch] font-display font-light"
          style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
        >
          {proof.headline}
        </h2>

        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-12 md:grid-cols-4 lg:grid-cols-5">
          <Metric value={536} suffix="%" label="increase in conversions" active={seen} big />
          <Metric value={500} prefix="£" suffix="K+" label="recovered for clients" active={seen} />
          <Metric value={200} suffix="K+" label="leads reactivated" active={seen} />
          <Metric value={10} suffix="+" label="businesses reawakened" active={seen} />

          {/* reply-rate racing bars: 41 us vs a ghosted 8 industry */}
          <div className="col-span-2 flex flex-col gap-3 md:col-span-4 lg:col-span-1">
            <div className="flex items-baseline gap-2">
              <span className="tnum font-display text-[2.5rem] font-light leading-none text-ink" style={{ color: 'var(--color-clay)' }}>
                {Math.round(replyBar)}%
              </span>
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.14em] text-ink-faint">avg reply rate</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="h-1.5 overflow-hidden rounded-full bg-hairline">
                <div className="h-full rounded-full transition-none" style={{ width: `${(replyBar / 41) * 100}%`, background: 'var(--color-clay)' }} />
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-hairline">
                <div className="h-full rounded-full" style={{ width: `${(industryBar / 41) * 100}%`, background: 'var(--color-ink-faint)' }} />
              </div>
              <span className="font-mono text-[0.68rem] text-ink-faint">vs 8% industry average</span>
            </div>
          </div>
        </div>

        <p className="mt-12 font-mono text-[0.8rem] text-ink-faint">{proof.micro}</p>
      </div>
    </section>
  )
}
