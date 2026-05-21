import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ShopContent from './ShopContent'

export const metadata: Metadata = {
  title: 'Shop — Hand-poured lip products | Dimples Lipcare',
  description: 'Scrubs, balms, glosses, oils, and the Pink Lips Treatment. All plant-derived, cruelty-free, and made in small batches from our Lagos studio.',
  openGraph: {
    title: 'Shop Dimples Lipcare',
    description: 'Six hand-poured lip products. Plant-derived, cruelty-free, made in Lagos.',
    url: 'https://dimpleslipcare.com/shop',
  },
}

export default function ShopPage() {
  return (
    <div className="site">
      <SiteHeader />

      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Our products</div>
          <h1>Every lip, every day.</h1>
          <p>Six hand-poured products. All plant-derived, cruelty-free, and made in small batches from our Lagos studio.</p>
        </div>
      </section>

      <ShopContent />

      <SiteFooter />
    </div>
  )
}
