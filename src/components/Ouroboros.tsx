import { OURO } from '../lib/ouroboros-paths'

interface Props {
  variant?: 'filled' | 'line'
  size?: number | string
  color?: string
  className?: string
  draw?: boolean
  glint?: boolean
  title?: string
}

/* The single ouroboros mark. Filled taper (premium seal) or hairline line-mark (logo/favicon). */
export function Ouroboros({
  variant = 'filled',
  size = 40,
  color = 'var(--color-plum)',
  className,
  draw = false,
  glint = false,
  title,
}: Props) {
  return (
    <svg
      viewBox={OURO.viewBox}
      width={size}
      height={size}
      className={className}
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      aria-label={title}
    >
      {title && <title>{title}</title>}
      {variant === 'filled' ? (
        <g fill={color}>
          <path d={OURO.body} className={draw ? 'ouro-draw-fill' : undefined} />
          <path d={OURO.head} />
          <circle cx={OURO.eye.cx} cy={OURO.eye.cy} r={OURO.eye.r} fill="var(--color-paper)" />
        </g>
      ) : (
        <g>
          <path
            d={OURO.line}
            fill="none"
            stroke={color}
            strokeWidth={3.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            pathLength={1}
            className={draw ? 'ouro-draw' : undefined}
          />
          <path d={OURO.lineHead} fill={color} />
          {glint && (
            <path
              d={OURO.line}
              fill="none"
              stroke="var(--color-gold)"
              strokeWidth={3.6}
              strokeLinecap="round"
              pathLength={1}
              className="ouro-glint"
            />
          )}
        </g>
      )}
    </svg>
  )
}
