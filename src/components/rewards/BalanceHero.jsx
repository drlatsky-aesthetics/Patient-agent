export default function BalanceHero({ balance, tier }) {
  const dollarValue = (balance / 100).toFixed(2)
  const TIER_LABELS = { glow: 'Glow', radiance: 'Radiance', prestige: 'Prestige' }

  return (
    <div
      className="px-6 py-8 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #2C2C2C 0%, #3a3a3a 100%)' }}
    >
      {/* Decorative gold halo */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full opacity-[0.06]"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)' }}
      />

      {tier && (
        <div className="mb-3">
          <span className="font-ui text-[10px] font-medium tracking-[0.25em] uppercase text-gold border border-gold/40 px-3 py-1 rounded-full">
            {TIER_LABELS[tier] ?? tier} Member
          </span>
        </div>
      )}

      <p className="font-ui text-[11px] font-light tracking-[0.2em] uppercase text-ivory/40 mb-1">
        Treasury Gold Balance
      </p>
      <p
        className="font-display text-6xl font-light italic text-gold leading-none"
        style={{ textShadow: '0 0 30px rgba(201,168,76,0.4)' }}
      >
        {balance.toLocaleString()}
      </p>
      <p className="font-display text-lg font-light italic text-ivory/60 mt-2">
        ≡ ${dollarValue} <span className="text-sm">CAD</span>
      </p>

      <p className="font-ui text-[11px] font-light text-ivory/30 mt-4 tracking-wide">
        100 pts = $1.00 CAD · Min. redemption 500 pts
      </p>
    </div>
  )
}
