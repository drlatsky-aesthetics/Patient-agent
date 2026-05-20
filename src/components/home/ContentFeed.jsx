import { ArrowRight } from 'lucide-react'

const TAG_COLORS = {
  'For You': 'bg-gold/10 text-gold',
  'Upcoming': 'bg-charcoal/8 text-charcoal-light',
  'Shop': 'bg-success/10 text-success',
}

function ContentCard({ card }) {
  const isLight = card.tag === 'Shop'

  return (
    <div
      className="flex-shrink-0 w-52 rounded-card overflow-hidden shadow-card active:scale-[0.97] transition-all duration-[220ms] cursor-pointer"
    >
      {/* Card visual header */}
      <div
        className="h-28 relative flex items-end p-3"
        style={{
          background: isLight
            ? 'linear-gradient(135deg, #C9A84C, #E8D5A3)'
            : 'linear-gradient(135deg, #2C2C2C, #4A4A4A)',
        }}
      >
        <span
          className={`font-ui text-[10px] font-medium tracking-[0.12em] uppercase px-2 py-0.5 rounded-full ${
            isLight ? 'bg-white/30 text-charcoal' : 'bg-gold/20 text-gold-light'
          }`}
        >
          {card.tag}
        </span>
      </div>

      {/* Card body */}
      <div className="bg-white px-3.5 py-3">
        <p className="font-display text-sm font-medium text-charcoal leading-tight">
          {card.title}
        </p>
        <p className="font-ui text-[11px] font-light text-charcoal-light opacity-60 mt-0.5">
          {card.subtitle}
        </p>
        <p className="font-ui text-[11px] font-light text-charcoal opacity-70 mt-1.5 leading-relaxed">
          {card.body}
        </p>
        <div className="flex items-center gap-1 mt-2.5 text-gold font-ui text-[11px] font-medium">
          Read more <ArrowRight size={10} />
        </div>
      </div>
    </div>
  )
}

export default function ContentFeed({ cards }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="font-display text-lg font-medium text-charcoal">Today for You</h2>
        <button className="font-ui text-xs font-light text-charcoal-light opacity-50">
          See all
        </button>
      </div>

      <div className="flex gap-3 overflow-x-auto -mx-4 px-4 pb-1">
        {cards.map((card) => (
          <ContentCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}
