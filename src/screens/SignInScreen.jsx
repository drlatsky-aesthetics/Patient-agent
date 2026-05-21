import { SignIn } from '@clerk/clerk-react'
import TreasuryWordmark from '../components/shared/TreasuryWordmark'

export default function SignInScreen() {
  return (
    <div className="min-h-screen bg-ivory flex flex-col items-center justify-center px-6 gap-8">
      <TreasuryWordmark className="text-charcoal" />
      <p className="font-ui text-charcoal-light text-sm text-center">
        Sign in to your patient portal
      </p>
      <SignIn
        routing="hash"
        appearance={{
          variables: {
            colorPrimary: '#C9A84C',
            colorBackground: '#F7F4EE',
            colorText: '#2C2C2C',
            fontFamily: 'Jost, sans-serif',
            borderRadius: '6px',
          },
          elements: {
            card: 'shadow-card',
            formButtonPrimary: 'bg-gold hover:bg-gold-light font-ui',
          },
        }}
      />
    </div>
  )
}
