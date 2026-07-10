import { useMotionPref } from '../lib/motion'

export function MotionToggle() {
  const { on, toggle } = useMotionPref()
  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={on}
      className="inline-flex items-center gap-2 font-mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-faint transition-colors hover:text-ink"
    >
      <span
        aria-hidden
        className="grid h-4 w-7 place-items-center rounded-full border border-hairline"
        style={{ justifyItems: on ? 'end' : 'start', padding: '0 2px' }}
      >
        <span className="block h-2.5 w-2.5 rounded-full" style={{ background: on ? 'var(--color-clay)' : 'var(--color-ink-faint)' }} />
      </span>
      Motion {on ? 'on' : 'off'}
    </button>
  )
}
