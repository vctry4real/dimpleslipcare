import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import CheckoutContent from './CheckoutContent'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Complete your Dimples Lipcare order — contact, delivery, and payment. Secure checkout via Paystack.',
  robots: { index: false, follow: false },
}

export default function CheckoutPage() {
  return (
    <div className="site">
      <SiteHeader />
      <CheckoutContent />
      <SiteFooter />
    </div>
  )
}
