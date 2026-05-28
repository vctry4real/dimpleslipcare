import type { Metadata } from 'next'
import type { ApiProduct } from '../lib/api'
import SiteHeader from './components/SiteHeader'
import SiteHero from './components/SiteHero'
import TrustStrip from './components/TrustStrip'
import ProductsSection from './components/ProductsSection'
import RitualSection from './components/RitualSection'
import TrainingsSection from './components/TrainingsSection'
import Testimonial from './components/Testimonial'
import ContactSection from './components/ContactSection'
import SiteFooter from './components/SiteFooter'
import JsonLd from './components/JsonLd'

export const metadata: Metadata = {
  title: 'Dimples Lipcare — Hand-poured lipcare from Lagos',
  description: 'A hand-poured lipcare ritual — scrubs, balms, glosses, oils, and a pink-lips treatment that actually works. From one tiny pink studio in Lagos.',
  openGraph: {
    title: 'Dimples Lipcare — Hand-poured lipcare from Lagos',
    description: 'A hand-poured lipcare ritual. Scrubs, balms, glosses, oils, and a pink-lips treatment that actually works.',
    url: 'https://dimpleslipcare.com',
    siteName: 'Dimples Lipcare',
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimples Lipcare — Hand-poured lipcare from Lagos',
    description: 'A hand-poured lipcare ritual. Scrubs, balms, glosses, oils, and a pink-lips treatment that actually works.',
  },
}

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dimples Lipcare',
  url: 'https://dimpleslipcare.com',
  description: 'Hand-poured lipcare from Lagos. Scrubs, balms, glosses, oils, and a pink-lips treatment.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos Island',
    addressRegion: 'Lagos',
    addressCountry: 'NG',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+234-903-879-6354',
    contactType: 'customer service',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.instagram.com/Dimples_lipcare',
    'https://www.tiktok.com/@Dimples_lipcare',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Dimples Lipcare',
  url: 'https://dimpleslipcare.com',
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

export default async function Home() {
  const products = await fetchProducts()

  return (
    <div className="site">
      <JsonLd data={orgSchema} />
      <JsonLd data={websiteSchema} />
      <SiteHeader />
      <SiteHero />
      <TrustStrip />
      <ProductsSection products={products} />
      <RitualSection />
      <TrainingsSection />
      <Testimonial />
      <ContactSection />
      <SiteFooter />
    </div>
  )
}
