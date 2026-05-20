import { Calendar, ChevronRight } from 'lucide-react'

export default function NextAppointmentBanner({ appointment }) {
  if (!appointment) return null

  const handleAddToCalendar = () => {
    // Deep link to calendar — placeholder for calendar integration
    const title = encodeURIComponent(`Treasury Aesthetics — ${appointment.treatment}`)
    window.open(`https://calendar.google.com/calendar/r/eventedit?text=${title}`, '_blank')
  }

  return (
    <div className="rounded-card bg-charcoal/[0.04] border border-charcoal/[0.08] px-4 py-3.5 flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
        <Calendar size={16} className="text-gold" />
      </div>

      <div className="flex-1 min-w-0">
        <p className="font-ui text-[11px] font-medium tracking-[0.15em] uppercase text-charcoal-light opacity-60">
          Next Appointment
        </p>
        <p className="font-display text-base font-medium text-charcoal leading-tight mt-0.5">
          {appointment.treatment}
          <span className="font-ui text-xs font-light text-charcoal-light ml-2">
            {appointment.date} · {appointment.time}
          </span>
        </p>
      </div>

      <button
        onClick={handleAddToCalendar}
        className="flex items-center gap-1 text-gold font-ui text-xs font-medium flex-shrink-0"
      >
        Add <ChevronRight size={12} />
      </button>
    </div>
  )
}
