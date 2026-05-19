'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PRODUCTS, type Category } from '../data/products'
import { useCart } from '../context/CartContext'

const FILTERS: { label: string; value: Category | 'all' }[] = [
  { label: 'All products', value: 'all' },
  { label: 'Scrubs & balms', value: 'scrubs' },
  { label: 'Glosses & oils', value: 'glosses' },
  { label: 'Treatments', value: 'treatments' },
  { label: 'Bundles', value: 'bundles' },
]

export default function ShopContent() {
  const [filter, setFilter] = useState<Category | 'all'>('all')
  const { addItem } = useCart()
  const visible = filter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === filter)

  return (
    <section className="surface products" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="filter-bar">
          {FILTERS.map(f => (
            <button
              key={f.value}
              className={`filter-tab${filter === f.value ? ' active' : ''}`}
              onClick={() => setFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p style={{ padding: '48px 0', color: 'var(--fg-3)', fontFamily: 'var(--font-sans)' }}>
            No products in this category yet.
          </p>
        ) : (
          <div className="products-grid">
            {visible.map((p, i) => (
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
                <p className="blurb" style={{ color: 'var(--fg-3)', fontSize: '12px', marginTop: 2 }}>{p.meta}</p>
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
        )}
      </div>
    </section>
  )
}
