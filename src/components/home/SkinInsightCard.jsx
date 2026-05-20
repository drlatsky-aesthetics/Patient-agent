import { Sparkles } from 'lucide-react'

export default function SkinInsightCard({ insight, treatmentHistory }) {
  const lastTreatment = treatmentHistory?.[0]
  const text = lastTreatment?.nextRec || insight || "Looking great — keep up your current routine."

  return (
    <div
      className="rounded-card bg-white border-l-2 shadow-card px-5 py-4"
      style={{ borderLeftColor: 'var(--gold)' }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Sparkles size={14} className="text-gold flex-shrink-0" />
        <p className="font-ui text-[11px] font-medium tracking-[0.15em] uppercase text-charcoal-light opacity-60">
          Skin Insight
        </p>
      </div>

      <p className="font-display text-base font-light italic text-charcoal leading-relaxed">
        {text}
      </p>

      {lastTreatment && (
        <p className="font-ui text-xs font-light text-charcoal-light opacity-50 mt-2">
          Based on your {lastTreatment.device} on {lastTreatment.date}
        </p>
      )}
    </div>
  )
}
