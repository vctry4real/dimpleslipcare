import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import GiftCardContent from './GiftCardContent'

export const metadata: Metadata = {
  title: 'Gift Cards',
  description: 'Give the gift of soft, healthy lips. Dimples Lipcare gift cards are delivered by email and never expire.',
  openGraph: {
    title: 'Gift Cards — Dimples Lipcare',
    description: 'Give the gift of soft, healthy lips. Email delivery, never expires.',
    url: 'https://dimpleslipcare.com/gift-cards',
  },
}

export default function GiftCardsPage() {
  return (
    <div className="site">
      <SiteHeader />
      <GiftCardContent />
      <SiteFooter />
    </div>
  )
}
