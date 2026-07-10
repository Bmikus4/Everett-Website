import { OURO } from '../lib/ouroboros-paths'

/* A subtle ouroboros ring accent. Pure SVG + one CSS rotation. Lightweight and
   decorative. Reads as a clean tapered serpent loop, not a heavy particle field. */
export function OuroRing({
  size = 480,
  opacity = 0.08,
  color = 'var(--color-plum)',
  spin = true,
  variant = 'filled',
  className = '',
}: {
  size?: number | string
  opacity?: number
  color?: string
  spin?: boolean
  variant?: 'filled' | 'line'
  className?: string
}) {
  return (
    <div
      aria-hidden
      className={`${spin ? 'watermark-spin' : ''} ${className}`}
      style={{ width: size, height: size, opacity, color, pointerEvents: 'none' }}
    >
      <svg viewBox={OURO.viewBox} width="100%" height="100%" style={{ overflow: 'visible' }}>
        {variant === 'filled' ? (
          <>
            <path d={OURO.body} fill="currentColor" />
            <path d={OURO.head} fill="currentColor" />
          </>
        ) : (
          <>
            <path d={OURO.line} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
            <path d={OURO.lineHead} fill="currentColor" />
          </>
        )}
      </svg>
    </div>
  )
}
