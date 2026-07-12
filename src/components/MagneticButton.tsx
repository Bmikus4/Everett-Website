import { useRef, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { heavyMotionAllowed } from '../lib/motion'

interface Props {
  children: ReactNode
  href: string
  variant?: 'primary' | 'ghost'
  className?: string
}

/* The single magnetic CTA. Pulls toward the cursor via motion values (never state).
   Always a real anchor (focusable, keyboard-operable). Static on coarse / reduced motion.
   Primary = solid gold (ink-on-champagne dark, white-on-brass light). */
export function MagneticButton({ children, href, variant = 'primary', className = '' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const enabled = heavyMotionAllowed()

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 180, damping: 15, mass: 0.4 })
  const sy = useSpring(my, { stiffness: 180, damping: 15, mass: 0.4 })
  const lx = useTransform(sx, (v) => v * 0.4)
  const ly = useTransform(sy, (v) => v * 0.4)

  const onMove = (e: React.PointerEvent) => {
    if (!enabled || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - (r.left + r.width / 2)) * 0.3)
    my.set((e.clientY - (r.top + r.height / 2)) * 0.3)
  }
  const reset = () => { mx.set(0); my.set(0) }

  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[0.95rem] font-medium tracking-tight will-change-transform whitespace-nowrap'
  const styles =
    variant === 'primary'
      ? 'btn-gold'
      : 'border border-hairline text-ink transition-colors duration-300 hover:border-gold hover:text-gold'

  return (
    <motion.a
      ref={ref}
      href={href}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: enabled ? sx : 0, y: enabled ? sy : 0 }}
      className={`${base} ${styles} ${className}`}
    >
      <motion.span style={{ x: enabled ? lx : 0, y: enabled ? ly : 0 }} className="inline-flex items-center gap-2">
        {children}
      </motion.span>
    </motion.a>
  )
}
