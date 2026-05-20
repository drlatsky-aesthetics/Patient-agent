import { create } from 'zustand'

const MOCK_PATIENT = {
  id: 'pat_001',
  firstName: 'Sarah',
  lastName: 'Chen',
  email: 'sarah.chen@example.com',
  phone: '+1 416-555-0123',
  rewardBalance: 2450,
  referralCode: 'SARAH-TA24',
  membership: {
    tier: 'radiance',
    status: 'active',
    renewalDate: '2026-06-15',
    usageThisMonth: { treatments_used: 1, treatments_total: 1, value_used: 299 },
  },
  skinProfile: {
    skinType: 'combination',
    concerns: ['hyperpigmentation', 'texture'],
    goals: ['glow', 'anti-aging'],
    fitzpatrick: 3,
  },
  treatmentHistory: [
    {
      id: 'tr_001',
      device: 'thulium',
      date: '2026-04-28',
      notes: 'Full face resurfacing — excellent response, minimal downtime',
      nextRec: "3 weeks post-thulium — your barrier is nearly fully restored. Ideal window to introduce NOON Brightening Booster into your morning routine.",
    },
  ],
}

const MOCK_APPOINTMENT = {
  treatment: 'VirtueRF',
  date: 'May 28, 2026',
  time: '2:00 PM',
}

// Internally consistent: 200 + 50 + 1490 + 500 + 210 = 2,450
const MOCK_REWARD_HISTORY = [
  { id: 'r_005', date: 'Apr 1, 2026',  action: 'NOON HA Complex purchase',       delta: +210,  balance: 2450, reason: 'retail' },
  { id: 'r_004', date: 'Mar 12, 2026', action: 'Referral bonus — Emma W.',        delta: +500,  balance: 2240, reason: 'referral' },
  { id: 'r_003', date: 'Feb 3, 2026',  action: 'OxyGeneo Facial treatment',       delta: +1490, balance: 1740, reason: 'treatment' },
  { id: 'r_002', date: 'Feb 3, 2026',  action: 'First visit check-in',            delta: +50,   balance: 250,  reason: 'checkin' },
  { id: 'r_001', date: 'Jan 20, 2026', action: 'Skin profile completed',          delta: +200,  balance: 200,  reason: 'profile_complete' },
]

const MOCK_CONTENT_FEED = [
  {
    id: 'c_001',
    type: 'SkincareProtocol',
    title: 'Post-Thulium Recovery',
    subtitle: 'Week 3 of 4',
    body: 'Barrier is rebuilding — time to reintroduce actives carefully.',
    tag: 'For You',
    gradient: 'from-charcoal to-charcoal-light',
  },
  {
    id: 'c_002',
    type: 'TreatmentEducation',
    title: 'VirtueRF Explained',
    subtitle: 'Your next treatment',
    body: 'Microneedling RF that remodels collagen with virtually no downtime.',
    tag: 'Upcoming',
    gradient: 'from-[#2C2C2C] to-[#4A4A4A]',
  },
  {
    id: 'c_003',
    type: 'TreatmentEducation',
    title: 'NOON Brightening Booster',
    subtitle: 'Skincare spotlight',
    body: 'Vitamin C + niacinamide formula — ideal post-laser brightening.',
    tag: 'Shop',
    gradient: 'from-[#C9A84C] to-[#E8D5A3]',
  },
]

const usePatientStore = create((set) => ({
  patient: MOCK_PATIENT,
  nextAppointment: MOCK_APPOINTMENT,
  rewardHistory: MOCK_REWARD_HISTORY,
  contentFeed: MOCK_CONTENT_FEED,

  updateRewardBalance: (delta) =>
    set((state) => ({
      patient: { ...state.patient, rewardBalance: state.patient.rewardBalance + delta },
    })),
}))

export default usePatientStore
