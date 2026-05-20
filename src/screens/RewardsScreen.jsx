import usePatientStore from '../stores/usePatientStore'
import BalanceHero from '../components/rewards/BalanceHero'
import EarningRules from '../components/rewards/EarningRules'
import RedemptionModule from '../components/rewards/RedemptionModule'
import HistoryList from '../components/rewards/HistoryList'
import ReferralModule from '../components/rewards/ReferralModule'

export default function RewardsScreen() {
  const { patient, rewardHistory } = usePatientStore()

  return (
    <div>
      {/* Hero — full bleed */}
      <BalanceHero
        balance={patient.rewardBalance}
        tier={patient.membership?.tier}
      />

      {/* Content sections */}
      <div className="px-4 pt-6 flex flex-col gap-6 pb-4">
        <RedemptionModule balance={patient.rewardBalance} />
        <EarningRules />
        <HistoryList history={rewardHistory} />
        <ReferralModule referralCode={patient.referralCode} />
      </div>
    </div>
  )
}
