import { NavLink } from 'react-router-dom'
import { Sparkles, LayoutGrid, Gem, Star, User } from 'lucide-react'

const TABS = [
  { to: '/',           icon: Sparkles,   label: 'Home',       end: true },
  { to: '/discover',   icon: LayoutGrid, label: 'Discover' },
  { to: '/membership', icon: Gem,        label: 'Membership' },
  { to: '/rewards',    icon: Star,       label: 'Rewards' },
  { to: '/profile',    icon: User,       label: 'Profile' },
]

export default function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] bg-white border-t border-ivory-dark z-50"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <ul className="flex items-center justify-around h-16">
        {TABS.map(({ to, icon: Icon, label, end }) => (
          <li key={to} className="flex-1">
            <NavLink
              to={to}
              end={end}
              className={({ isActive }) =>
                `flex flex-col items-center gap-0.5 py-2 transition-colors duration-[220ms] ${
                  isActive ? 'text-gold' : 'text-charcoal-light'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    size={20}
                    strokeWidth={isActive ? 2 : 1.5}
                    className={`transition-all duration-[220ms] ${isActive ? 'scale-110' : 'scale-100'}`}
                  />
                  <span
                    className={`text-[10px] font-ui font-medium tracking-wide transition-all duration-[220ms] ${
                      isActive ? 'opacity-100' : 'opacity-60'
                    }`}
                  >
                    {label}
                  </span>
                </>
              )}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
