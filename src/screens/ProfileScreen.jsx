import TreasuryWordmark from '../components/shared/TreasuryWordmark'
import usePatientStore from '../stores/usePatientStore'

export default function ProfileScreen() {
  const { patient } = usePatientStore()

  return (
    <div className="px-4 pt-4">
      <header className="mb-6">
        <TreasuryWordmark size="md" />
        <h1 className="font-display text-2xl font-light text-charcoal mt-2">Profile</h1>
      </header>

      {/* Patient summary */}
      <div className="bg-white rounded-card shadow-card px-4 py-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center">
            <span className="font-display text-lg italic text-gold">
              {patient.firstName[0]}{patient.lastName[0]}
            </span>
          </div>
          <div>
            <p className="font-display text-lg font-medium text-charcoal">
              {patient.firstName} {patient.lastName}
            </p>
            <p className="font-ui text-xs font-light text-charcoal/50">{patient.email}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-10 gap-3">
        <p className="font-display text-lg font-light italic text-charcoal-light">Full profile coming soon</p>
        <p className="font-ui text-sm font-light text-charcoal/40 text-center">
          Skin profile, settings, consent management, and data export — launching with Phase 1.
        </p>
      </div>
    </div>
  )
}
