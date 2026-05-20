import { useState } from 'react'
import { Gem } from 'lucide-react'

export default function RedemptionModule({ balance }) {
  const [redeemAmount, setRedeemAmount] = useState(500)
  const maxRedeemable = Math.floor(balance / 100) * 100
  const dollarValue = (redeemAmount / 100).toFixed(2)
  const canRedeem = balance >= 500

  return (
    <div>
      <h3 className="font-display text-lg font-medium text-charcoal mb-3">
        Redeem Points
      </h3>
      <div className="bg-white rounded-card shadow-card px-4 py-4">
        <div className="flex items-center justify-between mb-4">
          <p className="font-ui text-sm font-light text-charcoal-light">
            100 pts = $1.00 CAD
          </p>
          <span className="font-ui text-xs font-light text-charcoal/40">
            Min. 500 pts
          </span>
        </div>

        {canRedeem ? (
          <>
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => setRedeemAmount(Math.max(500, redeemAmount - 500))}
                className="w-9 h-9 rounded-full border border-gold/40 text-gold font-display text-xl flex items-center justify-center active:bg-gold/10 transition-colors"
              >
                −
              </button>
              <div className="flex-1 text-center">
                <p className="font-display text-3xl font-light italic text-charcoal">
                  {redeemAmount.toLocaleString()}
                </p>
                <p className="font-ui text-xs font-light text-charcoal-light opacity-60">
                  pts = ${dollarValue} CAD
                </p>
              </div>
              <button
                onClick={() => setRedeemAmount(Math.min(maxRedeemable, redeemAmount + 500))}
                className="w-9 h-9 rounded-full border border-gold/40 text-gold font-display text-xl flex items-center justify-center active:bg-gold/10 transition-colors"
              >
                +
              </button>
            </div>

            <button className="w-full py-3 bg-gold text-white font-ui text-sm font-medium tracking-wide rounded-btn flex items-center justify-center gap-2 active:brightness-90 transition-all duration-[220ms]">
              <Gem size={15} strokeWidth={1.5} />
              Apply at Checkout
            </button>
          </>
        ) : (
          <p className="font-ui text-sm font-light text-charcoal-light opacity-60 text-center py-2">
            Earn {(500 - balance).toLocaleString()} more points to redeem
          </p>
        )}

        <p className="font-ui text-[10px] font-light text-charcoal/30 text-center mt-3">
          Points expire after 12 months of inactivity
        </p>
      </div>
    </div>
  )
}
