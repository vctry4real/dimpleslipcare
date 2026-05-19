'use client'

import Link from 'next/link'
import { PRODUCTS } from '../data/products'
import { useCart } from '../context/CartContext'

export default function ProductsSection() {
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
          {PRODUCTS.map((p, i) => (
            <Link
              key={i}
              className="product-card"
              href={`/products/${p.slug}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
              data-reveal
              data-reveal-delay={String(i * 80)}
            >
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
                <button
                  className="add"
                  onClick={e => { e.preventDefault(); e.stopPropagation(); addItem(p.nm, p.price, p.priceNum) }}
                >
                  Add to bag →
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
