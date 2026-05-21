import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import RewardsContent from './RewardsContent'

export const metadata: Metadata = {
  title: 'Dimples Points — Rewards',
  description: 'Earn Dimples Points on every purchase, referral, and review. Redeem for discounts on future orders.',
  openGraph: {
    title: 'Dimples Points — Rewards',
    description: 'Earn on every purchase. Redeem for discounts.',
    url: 'https://dimpleslipcare.com/rewards',
  },
}

export default function RewardsPage() {
  return (
    <div className="site">
      <SiteHeader />
      <RewardsContent />
      <SiteFooter />
    </div>
  )
}
