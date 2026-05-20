import TreasuryWordmark from '../components/shared/TreasuryWordmark'

export default function DiscoverScreen() {
  return (
    <div className="px-4 pt-4">
      <header className="mb-6">
        <TreasuryWordmark size="md" />
        <h1 className="font-display text-2xl font-light text-charcoal mt-2">Discover</h1>
      </header>
      <div className="flex flex-col items-center justify-center py-16 gap-3">
        <p className="font-display text-lg font-light italic text-charcoal-light">Coming soon</p>
        <p className="font-ui text-sm font-light text-charcoal/40 text-center">
          Browse treatments, skincare, and bundles — launching with Phase 1.
        </p>
      </div>
    </div>
  )
}
