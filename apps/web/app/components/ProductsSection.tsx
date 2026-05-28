'use client'

import Link from 'next/link'
import { PRODUCT_ART, formatPrice, formatRating } from '../data/products'
import { useCart } from '../context/CartContext'
import type { ApiProduct } from '../../lib/api'

interface Props {
  products: ApiProduct[]
}

export default function ProductsSection({ products }: Props) {
  const { addItem } = useCart()

  return (
    <section className="surface products" id="shop">
      <div className="wrap">
        <div className="section-heading">
          <div data-reveal>
            <div className="eyebrow">Our Products</div>
            <h2>A daily lip ritual,<br />hand-poured for you.</h2>
          </div>
          <p className="right" data-reveal data-reveal-delay="120">
            Each batch is mixed by hand in our Lagos studio. We make small, sell small, restock fast — so what reaches your lips is always fresh.
          </p>
        </div>
        <div className="products-grid">
          {products.map((p, i) => {
            const art = PRODUCT_ART[p.slug]
            const priceStr = formatPrice(p.price)
            const priceNum = p.price / 100

            return (
              <Link
                key={p.id}
                className="product-card"
                href={`/products/${p.slug}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
                data-reveal
                data-reveal-delay={String(i * 80)}
              >
                <div className="photo">
                  <div className="sheen" />
                  {p.badge && <span className="badge">{p.badge}</span>}
                  <span className="price-pill">{priceStr}</span>
                  {art ? art() : null}
                </div>
                <h3>{p.name}</h3>
                <p className="blurb">{p.blurb}</p>
                <div className="row">
                  <span className="stars">{formatRating(p.reviewCount)}</span>
                  <button
                    className="add"
                    onClick={e => {
                      e.preventDefault()
                      e.stopPropagation()
                      addItem(p.name, priceStr, priceNum, p.id)
                    }}
                  >
                    Add to bag →
                  </button>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
