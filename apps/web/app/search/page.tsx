import type { Metadata } from 'next'
import { Suspense } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SearchResults from './SearchResults'
import type { ApiProduct } from '../../lib/api'

export const metadata: Metadata = {
  title: 'Search',
  robots: { index: false, follow: true },
}

async function fetchProducts(): Promise<ApiProduct[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1'}/products`
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) return []
    return res.json()
  } catch {
    return []
  }
}

export default async function SearchPage() {
  const products = await fetchProducts()

  return (
    <div className="site">
      <SiteHeader />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <SearchResults products={products} />
      </Suspense>
      <SiteFooter />
    </div>
  )
}
