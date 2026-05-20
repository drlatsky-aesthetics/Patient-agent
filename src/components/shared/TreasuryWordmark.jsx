export default function TreasuryWordmark({ size = 'md' }) {
  const sizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
  }

  return (
    <span
      className={`font-display font-light italic tracking-widest text-gold ${sizes[size]}`}
      style={{ letterSpacing: '0.18em' }}
    >
      TREASURY
    </span>
  )
}
