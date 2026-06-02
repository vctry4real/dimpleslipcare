import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ShopContent from './ShopContent'
import type { ApiProduct } from '../../lib/api'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Shop — Hand-poured lip products | Dimples Lipcare',
  description: 'Scrubs, balms, glosses, oils, and the Pink Lips Treatment. All plant-derived, cruelty-free, and made in small batches from our Lagos studio.',
  openGraph: {
    title: 'Shop Dimples Lipcare',
    description: 'Six hand-poured lip products. Plant-derived, cruelty-free, made in Lagos.',
    url: 'https://dimplesbeauty.vctry4real.dev/shop',
  },
}

async function fetchProducts(): Promise<ApiProduct[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1'}/products`
    const res = await fetch(url, { cache: 'no-store' })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export default async function ShopPage() {
  const products = await fetchProducts()

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

      <ShopContent products={products} />

      <SiteFooter />
    </div>
  )
}
