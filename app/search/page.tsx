import type { Metadata } from 'next'
import { Suspense } from 'react'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SearchResults from './SearchResults'

export const metadata: Metadata = {
  title: 'Search',
  robots: { index: false, follow: true },
}

export default function SearchPage() {
  return (
    <div className="site">
      <SiteHeader />
      <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
        <SearchResults />
      </Suspense>
      <SiteFooter />
    </div>
  )
}
