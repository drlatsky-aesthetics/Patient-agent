import { useState } from 'react'
import { Link2, Check, Instagram, MessageCircle } from 'lucide-react'

export default function ReferralModule({ referralCode }) {
  const [copied, setCopied] = useState(false)
  const referralUrl = `https://treasury.ca/join?ref=${referralCode}`
  const shareText = `Join me at Treasury Aesthetics — Toronto's premier medical aesthetics clinic. Use my link for 500 bonus points on your first visit:`

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for browsers without clipboard API
      const el = document.createElement('textarea')
      el.value = referralUrl
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handleInstagram = () => {
    // Copy link then open Instagram
    navigator.clipboard.writeText(referralUrl).catch(() => {})
    window.open('https://www.instagram.com/', '_blank')
  }

  const handleSMS = () => {
    window.open(`sms:?body=${encodeURIComponent(`${shareText}\n${referralUrl}`)}`)
  }

  return (
    <div>
      <h3 className="font-display text-lg font-medium text-charcoal mb-1">
        Refer a Friend
      </h3>
      <p className="font-ui text-sm font-light text-charcoal-light opacity-60 mb-3">
        You and your friend both earn 500 Treasury Gold points.
      </p>

      <div className="bg-white rounded-card shadow-card px-4 py-4">
        {/* Referral link display */}
        <div className="flex items-center gap-2 bg-ivory rounded-btn px-3 py-2.5 mb-4">
          <Link2 size={13} className="text-gold flex-shrink-0" />
          <p className="font-ui text-xs font-light text-charcoal-light flex-1 truncate">
            treasury.ca/join?ref=<span className="text-charcoal font-medium">{referralCode}</span>
          </p>
        </div>

        {/* Share buttons */}
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-btn font-ui text-xs font-medium tracking-wide transition-all duration-[220ms] active:scale-95 ${
              copied
                ? 'bg-success text-white'
                : 'bg-gold text-white'
            }`}
          >
            {copied ? <Check size={14} /> : <Link2 size={14} />}
            {copied ? 'Copied!' : 'Copy link'}
          </button>

          <button
            onClick={handleInstagram}
            className="w-11 h-[38px] flex items-center justify-center rounded-btn border border-charcoal/15 active:bg-ivory-dark transition-colors"
            aria-label="Share on Instagram"
          >
            <Instagram size={16} className="text-charcoal-light" strokeWidth={1.5} />
          </button>

          <button
            onClick={handleSMS}
            className="w-11 h-[38px] flex items-center justify-center rounded-btn border border-charcoal/15 active:bg-ivory-dark transition-colors"
            aria-label="Share via SMS"
          >
            <MessageCircle size={16} className="text-charcoal-light" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}
