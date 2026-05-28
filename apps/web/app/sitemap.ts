import type { MetadataRoute } from 'next'
import { POSTS } from './data/posts'
import type { ApiProduct } from '../lib/api'

const BASE = 'https://dimpleslipcare.com'

async function fetchProductSlugs(): Promise<string[]> {
  try {
    const url = `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1'}/products`
    const res = await fetch(url, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    const products: ApiProduct[] = await res.json()
    return products.map(p => p.slug)
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/shop`,      lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/ritual`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/trainings`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/about`,     lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/journal`,   lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.8 },
    { url: `${BASE}/faq`,       lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/contact`,    lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
    { url: `${BASE}/gift-cards`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wholesale`,  lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/rewards`,    lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/privacy`,    lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
    { url: `${BASE}/terms`,      lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.3 },
  ]

  const slugs = await fetchProductSlugs()
  const productRoutes: MetadataRoute.Sitemap = slugs.map(slug => ({
    url: `${BASE}/products/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  const postRoutes: MetadataRoute.Sitemap = POSTS.map(p => ({
    url: `${BASE}/journal/${p.slug}`,
    lastModified: new Date(p.isoDate),
    changeFrequency: 'yearly' as const,
    priority: 0.75,
  }))

  return [...staticRoutes, ...productRoutes, ...postRoutes]
}
