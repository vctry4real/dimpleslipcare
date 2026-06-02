import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'
import AddToBagButton from '../../components/AddToBagButton'
import ProductTabs from '../../components/ProductTabs'
import JsonLd from '../../components/JsonLd'
import { PRODUCT_ART, formatPrice, formatRating } from '../../data/products'
import type { ApiProduct } from '../../../lib/api'

export const dynamic = 'force-dynamic'

const API = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api/v1'

async function getProduct(slug: string): Promise<ApiProduct | null> {
  try {
    const res = await fetch(`${API}/products/${encodeURIComponent(slug)}`, {
      cache: 'no-store',
    })
    if (res.status === 404) return null
    if (!res.ok) return null
    return res.json()
  } catch {
    return null
  }
}

async function getRelated(categorySlug: string, currentSlug: string): Promise<ApiProduct[]> {
  try {
    const res = await fetch(`${API}/products?category=${encodeURIComponent(categorySlug)}`, {
      cache: 'no-store',
    })
    if (!res.ok) return []
    const all: ApiProduct[] = await res.json()
    const same = all.filter(p => p.slug !== currentSlug).slice(0, 3)
    if (same.length >= 3) return same

    // pad with products from other categories
    const allRes = await fetch(`${API}/products`, { cache: 'no-store' })
    if (!allRes.ok) return same
    const allProducts: ApiProduct[] = await allRes.json()
    const extra = allProducts.filter(p => p.slug !== currentSlug && p.category.slug !== categorySlug)
    return [...same, ...extra].slice(0, 3)
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = await getProduct(slug)
  if (!p) return {}
  const priceStr = formatPrice(p.price)
  return {
    title: `${p.name} — Dimples Lipcare`,
    description: p.description.slice(0, 160),
    openGraph: {
      title: `${p.name} — ${priceStr}`,
      description: p.description.slice(0, 160),
      url: `https://dimplesbeauty.vctry4real.dev/products/${p.slug}`,
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProduct(slug)

  if (!product) notFound()

  const relatedProducts = await getRelated(product.category.slug, slug)
  const art = PRODUCT_ART[product.slug]
  const priceStr = formatPrice(product.price)
  const priceNum = Math.round(product.price / 100)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: { '@type': 'Brand', name: 'Dimples Lipcare' },
    offers: {
      '@type': 'Offer',
      price: priceNum,
      priceCurrency: 'NGN',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Dimples Lipcare' },
    },
  }

  return (
    <div className="site">
      <JsonLd data={productSchema} />
      <SiteHeader />

      {/* ── Breadcrumb ───────────────────────────── */}
      <div className="wrap" style={{ paddingTop: 'var(--s-5)', paddingBottom: 0 }}>
        <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', display: 'flex', gap: 6, alignItems: 'center' }}>
          <Link href="/" style={{ color: 'var(--fg-3)', textDecoration: 'none' }}>Home</Link>
          <span>›</span>
          <Link href="/shop" style={{ color: 'var(--fg-3)', textDecoration: 'none' }}>Shop</Link>
          <span>›</span>
          <span style={{ color: 'var(--fg-1)' }}>{product.name}</span>
        </nav>
      </div>

      {/* ── Hero: art + details ───────────────────── */}
      <section className="surface" style={{ background: 'var(--pearl)', paddingBottom: 'var(--s-16)' }}>
        <div className="wrap pdp-hero">

          {/* Art column */}
          <div className="pdp-art-wrap">
            <div style={{ transform: 'scale(1.25)', transformOrigin: 'center' }}>
              {art ? art() : null}
            </div>
          </div>

          {/* Details column */}
          <div className="pdp-details">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', marginBottom: 'var(--s-2)' }}>
              {product.badge && (
                <span className="pdp-badge">{product.badge}</span>
              )}
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-3)' }}>
                {formatRating(product.reviewCount)}
              </span>
            </div>

            <h1 className="pdp-name">{product.name}</h1>
            <p className="pdp-price">{priceStr}</p>
            <p className="pdp-blurb">{product.blurb}</p>

            <hr className="pdp-divider" />

            <AddToBagButton
              name={product.name}
              price={priceStr}
              priceNum={priceNum}
              productId={product.id}
            />

            <hr className="pdp-divider" />

            <div className="pdp-meta">
              <span className="pdp-meta-pill">{product.category.name}</span>
              <span className="pdp-meta-pill">Cruelty-free</span>
              <span className="pdp-meta-pill">Made in Lagos</span>
              <span className="pdp-meta-pill">Free shipping over ₦15k</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs ─────────────────────────────────── */}
      <ProductTabs
        description={product.description}
        ingredients={product.ingredients ?? ''}
        howToUse={product.howToUse}
      />

      {/* ── Related products ─────────────────────── */}
      {relatedProducts.length > 0 && (
        <section className="surface" style={{ background: 'var(--blush-50)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-16)' }}>
          <div className="wrap">
            <div className="eyebrow" style={{ marginBottom: 'var(--s-3)' }}>You might also like</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h2)', fontWeight: 400, marginBottom: 'var(--s-10)', letterSpacing: 'var(--tracking-tight)' }}>
              Complete your ritual.
            </h2>
            <div className="products-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {relatedProducts.map((p) => {
                const relArt = PRODUCT_ART[p.slug]
                return (
                  <Link className="product-card" key={p.id} href={`/products/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="photo">
                      <div className="sheen" />
                      {p.badge && <span className="badge">{p.badge}</span>}
                      <span className="price-pill">{formatPrice(p.price)}</span>
                      {relArt ? relArt() : null}
                    </div>
                    <h3>{p.name}</h3>
                    <p className="blurb">{p.blurb}</p>
                    <div className="row">
                      <span className="stars">{formatRating(p.reviewCount)}</span>
                      <span className="add">View →</span>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  )
}
