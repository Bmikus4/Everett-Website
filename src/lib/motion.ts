import { useEffect, useState, useRef, useCallback } from 'react'

const STORAGE_KEY = 'ouro-motion'

// True when rich motion is allowed. Gated by prefers-reduced-motion, an explicit
// user toggle (localStorage), and save-data. The single authority for every rAF loop.
export function motionAllowed(): boolean {
  if (typeof window === 'undefined') return false
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'off') return false
  if (stored === 'on') return true
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } }
  const saveData = !!nav.connection?.saveData
  return !reduce && !saveData
}

// Heavy per-frame canvas work is also skipped on coarse pointers (phones/tablets).
export function heavyMotionAllowed(): boolean {
  if (typeof window === 'undefined') return false
  const coarse = window.matchMedia('(pointer: coarse)').matches
  return motionAllowed() && !coarse
}

export function useMotionPref() {
  const [on, setOn] = useState(motionAllowed)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setOn(motionAllowed())
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])
  const toggle = useCallback(() => {
    const next = !motionAllowed()
    localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off')
    setOn(next)
    window.dispatchEvent(new Event('ouro-motion-change'))
  }, [])
  return { on, toggle }
}

// Fire a callback once when an element scrolls into view.
export function useInViewOnce<T extends HTMLElement>(threshold = 0.4) {
  const ref = useRef<T | null>(null)
  const [seen, setSeen] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || seen) return
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setSeen(true)
          io.disconnect()
        }
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [seen, threshold])
  return { ref, seen }
}

// Ease-out cubic count-up. Renders final value instantly when motion is off.
export function useCountUp(target: number, active: boolean, duration = 1200) {
  const [value, setValue] = useState(active && motionAllowed() ? 0 : target)
  useEffect(() => {
    if (!active) return
    if (!motionAllowed()) {
      setValue(target)
      return
    }
    let raf = 0
    let start = 0
    const tick = (t: number) => {
      if (!start) start = t
      const p = Math.min((t - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
      else setValue(target)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, active, duration])
  return value
}
