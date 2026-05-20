import { Syringe, ShoppingBag, Users, Cake, UserCheck, Star, CalendarCheck } from 'lucide-react'

const RULES = [
  { icon: Syringe,      label: 'Treatment',        detail: '10 pts per $1 spent' },
  { icon: ShoppingBag,  label: 'Skincare retail',  detail: '10 pts per $1 spent' },
  { icon: Users,        label: 'Refer a friend',   detail: '500 pts per new patient' },
  { icon: Cake,         label: 'Birthday month',   detail: '2× points all month' },
  { icon: CalendarCheck,label: 'Visit check-in',   detail: '50 pts per visit' },
  { icon: Star,         label: 'Google review',    detail: '300 pts one-time' },
  { icon: UserCheck,    label: 'Complete profile', detail: '200 pts one-time' },
]

export default function EarningRules() {
  return (
    <div>
      <h3 className="font-display text-lg font-medium text-charcoal mb-3">
        How to Earn
      </h3>
      <div className="bg-white rounded-card shadow-card overflow-hidden">
        {RULES.map(({ icon: Icon, label, detail }, i) => (
          <div
            key={label}
            className={`flex items-center gap-3.5 px-4 py-3.5 ${
              i < RULES.length - 1 ? 'border-b border-ivory-dark' : ''
            }`}
          >
            <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
              <Icon size={14} className="text-gold" strokeWidth={1.5} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-ui text-sm font-medium text-charcoal">{label}</p>
              <p className="font-ui text-xs font-light text-charcoal-light opacity-60">{detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
