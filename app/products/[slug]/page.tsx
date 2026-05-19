import { notFound } from 'next/navigation'
import Link from 'next/link'
import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'
import AddToBagButton from '../../components/AddToBagButton'
import ProductTabs from '../../components/ProductTabs'
import JsonLd from '../../components/JsonLd'
import { PRODUCTS } from '../../data/products'

export async function generateStaticParams() {
  return PRODUCTS.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = PRODUCTS.find(p => p.slug === slug)
  if (!p) return {}
  return {
    title: p.nm,
    description: p.longDesc.slice(0, 160),
    openGraph: {
      title: `${p.nm} — ${p.price}`,
      description: p.longDesc.slice(0, 160),
      url: `https://dimpleslipcare.com/products/${p.slug}`,
    },
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = PRODUCTS.find(p => p.slug === slug)
  if (!product) notFound()

  const related = PRODUCTS
    .filter(p => p.slug !== slug && p.cat === product.cat)
    .slice(0, 3)
    .concat(
      PRODUCTS.filter(p => p.slug !== slug && p.cat !== product.cat)
    )
    .slice(0, 3)

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.nm,
    description: product.longDesc,
    brand: { '@type': 'Brand', name: 'Dimples Lipcare' },
    offers: {
      '@type': 'Offer',
      price: product.priceNum,
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
          <span style={{ color: 'var(--fg-1)' }}>{product.nm}</span>
        </nav>
      </div>

      {/* ── Hero: art + details ───────────────────── */}
      <section className="surface" style={{ background: 'var(--pearl)', paddingBottom: 'var(--s-16)' }}>
        <div className="wrap pdp-hero">

          {/* Art column */}
          <div className="pdp-art-wrap">
            <div style={{ transform: 'scale(1.25)', transformOrigin: 'center' }}>
              {product.art()}
            </div>
          </div>

          {/* Details column */}
          <div className="pdp-details">
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-3)', marginBottom: 'var(--s-2)' }}>
              {product.badge && (
                <span className="pdp-badge">{product.badge}</span>
              )}
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-3)' }}>{product.rating}</span>
            </div>

            <h1 className="pdp-name">{product.nm}</h1>
            <p className="pdp-price">{product.price}</p>
            <p className="pdp-blurb">{product.blurb}</p>

            <hr className="pdp-divider" />

            <AddToBagButton
              name={product.nm}
              price={product.price}
              priceNum={product.priceNum}
            />

            <hr className="pdp-divider" />

            <div className="pdp-meta">
              <span className="pdp-meta-pill">{product.meta}</span>
              <span className="pdp-meta-pill">Cruelty-free</span>
              <span className="pdp-meta-pill">Made in Lagos</span>
              <span className="pdp-meta-pill">Free shipping over ₦15k</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tabs ─────────────────────────────────── */}
      <ProductTabs
        description={product.longDesc}
        ingredients={product.ingredients}
        howToUse={product.howToUse}
      />

      {/* ── Related products ─────────────────────── */}
      {related.length > 0 && (
        <section className="surface" style={{ background: 'var(--blush-50)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-16)' }}>
          <div className="wrap">
            <div className="eyebrow" style={{ marginBottom: 'var(--s-3)' }}>You might also like</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h2)', fontWeight: 400, marginBottom: 'var(--s-10)', letterSpacing: 'var(--tracking-tight)' }}>
              Complete your ritual.
            </h2>
            <div className="products-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
              {related.map((p, i) => (
                <Link className="product-card" key={i} href={`/products/${p.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="photo">
                    <div className="sheen" />
                    {p.badge && <span className="badge">{p.badge}</span>}
                    <span className="price-pill">{p.price}</span>
                    {p.art()}
                  </div>
                  <h3>{p.nm}</h3>
                  <p className="blurb">{p.blurb}</p>
                  <div className="row">
                    <span className="stars">{p.rating}</span>
                    <span className="add">View →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  )
}
