interface Props {
  size?: number
  variant?: 'plum' | 'gold'
  title?: string
  className?: string
}

/* The Ouro Praxis mark: one serpent, used everywhere. Plum on light surfaces,
   gold on the dark CTA. Rendered from a vendored CC0 ouroboros SVG. */
export function Mark({ size = 28, variant = 'plum', title, className }: Props) {
  const file = variant === 'gold' ? 'ouroboros-gold.svg' : 'ouroboros.svg'
  return (
    <img
      src={`${import.meta.env.BASE_URL}${file}`}
      width={size}
      height={size}
      alt={title ?? ''}
      aria-hidden={title ? undefined : true}
      className={className}
      style={{ display: 'block' }}
    />
  )
}
