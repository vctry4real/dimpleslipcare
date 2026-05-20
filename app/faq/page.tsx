import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import FaqContent from './FaqContent'

export const metadata: Metadata = {
  title: 'Help & FAQ',
  description: 'Answers to the questions we hear most — shipping, returns, ingredients, orders, and the trainings programme. Not seeing yours? We answer everything personally.',
  openGraph: {
    title: 'Help & FAQ — Dimples Lipcare',
    description: 'Shipping, returns, ingredients, orders, trainings — all answered.',
    url: 'https://dimpleslipcare.com/faq',
  },
}

export default function FaqPage() {
  return (
    <div className="site">
      <SiteHeader />
      <FaqContent />
      <SiteFooter />
    </div>
  )
}
