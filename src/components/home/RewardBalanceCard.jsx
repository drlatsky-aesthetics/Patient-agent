import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function RewardBalanceCard({ balance }) {
  const navigate = useNavigate()
  const dollarValue = (balance / 100).toFixed(2)

  return (
    <button
      onClick={() => navigate('/rewards')}
      className="w-full text-left rounded-card overflow-hidden shadow-card active:scale-[0.98] transition-all duration-[220ms]"
      aria-label="View reward balance"
    >
      <div
        className="relative px-6 py-5"
        style={{
          background: 'linear-gradient(135deg, #2C2C2C 0%, #3d3d3d 60%, #2C2C2C 100%)',
        }}
      >
        {/* Subtle gold shimmer line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C55, transparent)' }}
        />

        <div className="flex items-start justify-between">
          <div>
            <p className="font-ui text-[11px] font-light tracking-[0.2em] uppercase text-gold-light opacity-70 mb-1">
              Treasury Gold
            </p>
            <p
              className="font-display text-5xl font-light italic text-gold leading-none"
              style={{ textShadow: '0 1px 20px rgba(201,168,76,0.3)' }}
            >
              {balance.toLocaleString()}
            </p>
            <p className="font-ui text-xs font-light tracking-wide text-ivory opacity-60 mt-1.5">
              points · ${dollarValue} CAD value
            </p>
          </div>

          <div className="flex flex-col items-end gap-3">
            <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center">
              <ChevronRight size={14} className="text-gold" />
            </div>
          </div>
        </div>

        {/* Bottom decorative bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C33, transparent)' }}
        />
      </div>
    </button>
  )
}
