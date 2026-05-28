'use client'

import { useState } from 'react'
import Link from 'next/link'
import { PRODUCT_ART, formatPrice, formatRating } from '../data/products'
import { useCart } from '../context/CartContext'
import type { ApiProduct } from '../../lib/api'

const FILTERS = [
  { label: 'All products', value: 'all' },
  { label: 'Scrubs & balms', value: 'scrubs' },
  { label: 'Glosses & oils', value: 'glosses' },
  { label: 'Treatments', value: 'treatments' },
  { label: 'Bundles', value: 'bundles' },
] as const

type FilterValue = typeof FILTERS[number]['value']

interface Props {
  products: ApiProduct[]
}

export default function ShopContent({ products }: Props) {
  const [filter, setFilter] = useState<FilterValue>('all')
  const { addItem } = useCart()

  const visible =
    filter === 'all' ? products : products.filter(p => p.category.slug === filter)

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
            {visible.map((p, i) => {
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
        )}
      </div>
    </section>
  )
}
