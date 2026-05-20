import { TrendingUp, TrendingDown } from 'lucide-react'

const REASON_COLORS = {
  treatment:        'bg-gold/10 text-gold',
  retail:           'bg-gold/10 text-gold',
  referral:         'bg-success/10 text-success',
  birthday:         'bg-gold/10 text-gold',
  checkin:          'bg-charcoal/8 text-charcoal-light',
  profile_complete: 'bg-charcoal/8 text-charcoal-light',
  google_review:    'bg-charcoal/8 text-charcoal-light',
  redeem:           'bg-error/10 text-error',
}

export default function HistoryList({ history }) {
  return (
    <div>
      <h3 className="font-display text-lg font-medium text-charcoal mb-3">
        History
      </h3>
      <div className="bg-white rounded-card shadow-card overflow-hidden">
        {history.map((event, i) => (
          <div
            key={event.id}
            className={`flex items-center gap-3 px-4 py-3.5 ${
              i < history.length - 1 ? 'border-b border-ivory-dark' : ''
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                REASON_COLORS[event.reason] ?? 'bg-charcoal/8 text-charcoal-light'
              }`}
            >
              {event.delta > 0
                ? <TrendingUp size={13} strokeWidth={2} />
                : <TrendingDown size={13} strokeWidth={2} />
              }
            </div>

            <div className="flex-1 min-w-0">
              <p className="font-ui text-sm font-medium text-charcoal truncate">
                {event.action}
              </p>
              <p className="font-ui text-xs font-light text-charcoal/40">{event.date}</p>
            </div>

            <div className="text-right flex-shrink-0">
              <p
                className={`font-display text-base font-medium ${
                  event.delta > 0 ? 'text-gold' : 'text-error'
                }`}
              >
                {event.delta > 0 ? '+' : ''}{event.delta.toLocaleString()}
              </p>
              <p className="font-ui text-[10px] font-light text-charcoal/30">
                {event.balance.toLocaleString()} pts
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
