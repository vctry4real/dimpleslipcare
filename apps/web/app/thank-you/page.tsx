import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ThankYouContent from './ThankYouContent'

export const metadata: Metadata = {
  title: 'Order confirmed — thank you',
  description: 'Your Dimples Lipcare order is in. We\'ll send tracking as soon as your bag leaves the studio.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="site">
      <SiteHeader />
      <ThankYouContent />
      <SiteFooter />
    </div>
  )
}
