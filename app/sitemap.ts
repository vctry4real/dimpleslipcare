import type { MetadataRoute } from 'next'
import { PRODUCTS } from './data/products'

const BASE = 'https://dimpleslipcare.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,               lastModified: new Date(), changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${BASE}/shop`,     lastModified: new Date(), changeFrequency: 'weekly',  priority: 0.9 },
    { url: `${BASE}/ritual`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/trainings`,lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact`,  lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.6 },
  ]

  const productRoutes: MetadataRoute.Sitemap = PRODUCTS.map(p => ({
    url: `${BASE}/products/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  return [...staticRoutes, ...productRoutes]
}
