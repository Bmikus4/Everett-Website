interface Props {
  size?: number
  title?: string
  className?: string
  spin?: boolean
}

/* The Ouro Praxis mark: the ouroboros ring, vectorized from the brand logo and
   recolored to a clean pastel-gold champagne. One file, used everywhere. The
   gradient reads on both light and dark, so no per-theme variant is needed. */
export function Mark({ size = 30, title, className, spin = false }: Props) {
  return (
    <img
      src={`${import.meta.env.BASE_URL}ouro-mark.svg`}
      width={size}
      height={size}
      alt={title ?? ''}
      aria-hidden={title ? undefined : true}
      className={`${spin ? 'watermark-spin' : ''} ${className ?? ''}`}
      style={{ display: 'block' }}
    />
  )
}
