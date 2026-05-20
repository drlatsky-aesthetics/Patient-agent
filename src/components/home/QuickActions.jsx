import { CalendarPlus, ShoppingBag, Users } from 'lucide-react'

const ACTIONS = [
  {
    icon: CalendarPlus,
    label: 'Book',
    href: 'https://jane.app',
    variant: 'primary',
  },
  {
    icon: ShoppingBag,
    label: 'Shop',
    to: '/discover',
    variant: 'secondary',
  },
  {
    icon: Users,
    label: 'Refer',
    to: '/rewards',
    variant: 'secondary',
  },
]

export default function QuickActions({ navigate }) {
  return (
    <div className="flex gap-3">
      {ACTIONS.map(({ icon: Icon, label, href, to, variant }) => {
        const isPrimary = variant === 'primary'
        const classes = `flex-1 flex flex-col items-center gap-1.5 py-3.5 rounded-btn font-ui text-xs font-medium tracking-wide transition-all duration-[220ms] active:scale-95 ${
          isPrimary
            ? 'bg-gold text-white shadow-card'
            : 'bg-white border border-gold/40 text-gold'
        }`

        const handleClick = () => {
          if (href) {
            window.open(href, '_blank')
          } else if (to && navigate) {
            navigate(to)
          }
        }

        return (
          <button key={label} onClick={handleClick} className={classes}>
            <Icon size={18} strokeWidth={1.5} />
            {label}
          </button>
        )
      })}
    </div>
  )
}
