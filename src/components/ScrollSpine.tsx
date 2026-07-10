import { OURO } from '../lib/ouroboros-paths'

/* A faint ouroboros ring fixed in the viewport whose stroke draws itself as the
   page scrolls, closing at the bottom (the loop completes = the cycle pays).
   Pure CSS scroll-driven animation, no scroll listeners. Hidden on small screens
   where it would collide with content. */
export function ScrollSpine() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 hidden items-center justify-center lg:flex"
      style={{ zIndex: 0 }}
    >
      <svg
        viewBox={OURO.viewBox}
        style={{ width: '86vmin', height: '86vmin', overflow: 'visible' }}
      >
        {/* faint guide */}
        <path
          d={OURO.ring}
          fill="none"
          stroke="var(--color-hairline)"
          strokeWidth={0.5}
        />
        {/* progress stroke */}
        <path
          className="spine-path"
          d={OURO.ring}
          fill="none"
          stroke="var(--color-lavender)"
          strokeWidth={0.9}
          strokeLinecap="round"
          pathLength={1}
          style={{ opacity: 0.55 }}
        />
        {/* gold glint riding the ring */}
        <circle
          className="spine-glint"
          r={1.6}
          fill="var(--color-gold)"
          style={{ offsetPath: `path('${OURO.ring}')`, offsetDistance: '0%' } as React.CSSProperties}
        />
      </svg>
    </div>
  )
}
