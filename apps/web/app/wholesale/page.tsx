import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import WholesaleContent from './WholesaleContent'

export const metadata: Metadata = {
  title: 'Wholesale',
  description: 'Stock Dimples Lipcare in your salon, spa, boutique, or gift shop. Apply for a wholesale account today.',
  openGraph: {
    title: 'Wholesale — Dimples Lipcare',
    description: 'Stock Dimples in your salon, spa, or boutique. Apply for a wholesale account.',
    url: 'https://dimpleslipcare.com/wholesale',
  },
}

export default function WholesalePage() {
  return (
    <div className="site">
      <SiteHeader />
      <WholesaleContent />
      <SiteFooter />
    </div>
  )
}
