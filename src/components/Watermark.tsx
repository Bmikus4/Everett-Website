import { OURO } from '../lib/ouroboros-paths'

/* Giant, faint ouroboros bleeding off an edge. Vector, so crisp at any DPR.
   Feathered into the paper with a radial mask, ultra-slow rotation. Decorative. */
export function Watermark() {
  return (
    <div
      aria-hidden
      className="watermark-spin"
      style={{
        position: 'fixed',
        right: '-24vmin',
        bottom: '-30vmin',
        width: '150vmin',
        height: '150vmin',
        zIndex: -1,
        pointerEvents: 'none',
        opacity: 0.05,
        color: 'var(--color-plum)',
        filter: 'blur(0.4px)',
        WebkitMaskImage: 'radial-gradient(closest-side, #000 52%, transparent 100%)',
        maskImage: 'radial-gradient(closest-side, #000 52%, transparent 100%)',
      }}
    >
      <svg viewBox={OURO.viewBox} width="100%" height="100%">
        <path d={OURO.body} fill="currentColor" />
        <path d={OURO.head} fill="currentColor" />
      </svg>
    </div>
  )
}
