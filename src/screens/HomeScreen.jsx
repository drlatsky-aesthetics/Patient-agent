import { useNavigate } from 'react-router-dom'
import usePatientStore from '../stores/usePatientStore'
import TreasuryWordmark from '../components/shared/TreasuryWordmark'
import RewardBalanceCard from '../components/home/RewardBalanceCard'
import NextAppointmentBanner from '../components/home/NextAppointmentBanner'
import SkinInsightCard from '../components/home/SkinInsightCard'
import QuickActions from '../components/home/QuickActions'
import ContentFeed from '../components/home/ContentFeed'

function getGreeting() {
  const h = new Date().getHours()
  if (h < 12) return 'Good morning'
  if (h < 17) return 'Good afternoon'
  return 'Good evening'
}

export default function HomeScreen() {
  const navigate = useNavigate()
  const { patient, nextAppointment, contentFeed } = usePatientStore()

  return (
    <div className="px-4 pt-4 pb-2">
      {/* Header */}
      <header className="flex items-center justify-between mb-5">
        <TreasuryWordmark size="md" />
        <p className="font-display text-base font-light italic text-charcoal-light">
          {getGreeting()}, {patient.firstName}
        </p>
      </header>

      {/* Reward Balance Card */}
      <section className="mb-3">
        <RewardBalanceCard balance={patient.rewardBalance} />
      </section>

      {/* Membership badge */}
      <div className="flex justify-end mb-4">
        <span className="font-ui text-[10px] font-medium tracking-[0.15em] uppercase bg-charcoal text-gold-light px-2.5 py-1 rounded-full">
          {patient.membership.tier} member
        </span>
      </div>

      {/* Next Appointment */}
      <section className="mb-3">
        <NextAppointmentBanner appointment={nextAppointment} />
      </section>

      {/* Skin Insight */}
      <section className="mb-5">
        <SkinInsightCard treatmentHistory={patient.treatmentHistory} />
      </section>

      {/* Quick Actions */}
      <section className="mb-6">
        <QuickActions navigate={navigate} />
      </section>

      {/* Content Feed */}
      <section className="mb-2">
        <ContentFeed cards={contentFeed} />
      </section>
    </div>
  )
}
