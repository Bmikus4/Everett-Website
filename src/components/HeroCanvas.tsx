import { useEffect, useRef } from 'react'
import { startHeroField } from '../lib/hero-field'
import { motionAllowed } from '../lib/motion'

/* Mounts the generative ouroboros field. Boots after idle so it is never the LCP.
   Re-inits on the reduce-motion toggle. */
export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    let ctrl: { destroy: () => void } | null = null

    const boot = () => {
      ctrl?.destroy()
      ctrl = startHeroField(canvas, { reducedMotion: !motionAllowed() })
    }

    const idle =
      (window as unknown as { requestIdleCallback?: (cb: () => void) => number }).requestIdleCallback ??
      ((cb: () => void) => window.setTimeout(cb, 200))
    const id = idle(boot)

    const onToggle = () => boot()
    window.addEventListener('ouro-motion-change', onToggle)

    return () => {
      window.removeEventListener('ouro-motion-change', onToggle)
      if (typeof id === 'number') clearTimeout(id)
      ctrl?.destroy()
    }
  }, [])

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="absolute inset-0 h-full w-full"
      style={{ display: 'block' }}
    />
  )
}
