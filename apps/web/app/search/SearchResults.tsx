'use client'
import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { PRODUCT_ART, formatPrice } from '../data/products'
import { POSTS } from '../data/posts'
import type { ApiProduct } from '../../lib/api'

type ResultTab = 'all' | 'products' | 'journal'

function score(text: string, q: string): boolean {
  return text.toLowerCase().includes(q.toLowerCase())
}

interface Props {
  products: ApiProduct[]
}

export default function SearchResults({ products }: Props) {
  const searchParams = useSearchParams()
  const router       = useRouter()
  const initialQ     = searchParams.get('q') ?? ''

  const [inputVal, setInputVal] = useState(initialQ)
  const [query,    setQuery]    = useState(initialQ)
  const [tab,      setTab]      = useState<ResultTab>('all')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => { inputRef.current?.focus() }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = inputVal.trim()
    setQuery(trimmed)
    if (trimmed) router.replace(`/search?q=${encodeURIComponent(trimmed)}`, { scroll: false })
  }

  const matchedProducts = query
    ? products.filter(p =>
        score(p.name, query) ||
        score(p.blurb, query) ||
        score(p.category.slug, query) ||
        score(p.description, query)
      )
    : []

  const matchedPosts = query
    ? POSTS.filter(p => score(p.title, query) || score(p.excerpt, query) || score(p.tag, query))
    : []

  const totalResults = matchedProducts.length + matchedPosts.length

  const showProducts = tab === 'all' || tab === 'products'
  const showPosts    = tab === 'all' || tab === 'journal'

  return (
    <section className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-10)', paddingBottom: 'var(--s-20)', minHeight: '70vh' }}>
      <div className="wrap">

        {/* Search bar */}
        <form onSubmit={handleSearch} className="sr-bar-form">
          <div className="sr-bar">
            <svg className="sr-bar-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M14 14l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              ref={inputRef}
              className="sr-bar-input"
              value={inputVal}
              onChange={e => setInputVal(e.target.value)}
              placeholder="Search products, articles, and more…"
              autoComplete="off"
            />
            {inputVal && (
              <button type="button" className="sr-bar-clear" onClick={() => { setInputVal(''); setQuery(''); }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
            )}
          </div>
          <button type="submit" className="btn-primary" style={{ flexShrink: 0 }}>Search</button>
        </form>

        {/* No query yet */}
        {!query && (
          <div className="sr-empty">
            <div className="sr-empty-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <circle cx="22" cy="22" r="15" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M33 33l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <p className="sr-empty-text">Search our products and journal.</p>
            <div className="sr-suggestions">
              <p className="sr-sug-label">Try searching for:</p>
              <div className="sr-sug-chips">
                {['lip scrub', 'balm', 'gloss', 'treatment', 'ritual', 'formulation'].map(s => (
                  <button
                    key={s}
                    className="sr-sug-chip"
                    onClick={() => { setInputVal(s); setQuery(s); }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Results */}
        {query && (
          <>
            {/* Meta + tabs */}
            <div className="sr-meta">
              <p className="sr-count">
                {totalResults === 0
                  ? `No results for "${query}"`
                  : `${totalResults} result${totalResults !== 1 ? 's' : ''} for "${query}"`
                }
              </p>
              {totalResults > 0 && (
                <div className="sr-tabs">
                  {([
                    { id: 'all',      label: `All (${totalResults})` },
                    { id: 'products', label: `Products (${matchedProducts.length})` },
                    { id: 'journal',  label: `Journal (${matchedPosts.length})` },
                  ] as { id: ResultTab; label: string }[]).map(t => (
                    <button
                      key={t.id}
                      className={`sr-tab${tab === t.id ? ' active' : ''}`}
                      onClick={() => setTab(t.id)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* No results state */}
            {totalResults === 0 && (
              <div className="sr-no-results">
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg-3)', lineHeight: 1.6 }}>
                  We couldn't find anything matching "{query}". Try a different search, or browse below.
                </p>
                <div style={{ display: 'flex', gap: 'var(--s-4)', marginTop: 'var(--s-6)', flexWrap: 'wrap' }}>
                  <Link href="/shop" className="btn-primary">Browse all products</Link>
                  <Link href="/journal" className="btn-ghost">Read the journal</Link>
                </div>
              </div>
            )}

            {/* Product results */}
            {showProducts && matchedProducts.length > 0 && (
              <div className="sr-section">
                <h2 className="sr-section-title">Products</h2>
                <div className="sr-products-grid">
                  {matchedProducts.map(p => {
                    const art = PRODUCT_ART[p.slug]
                    return (
                      <Link key={p.slug} href={`/products/${p.slug}`} className="sr-product-card">
                        <div className="sr-product-art">
                          {art ? art() : null}
                        </div>
                        <div className="sr-product-body">
                          <div className="sr-product-name">{p.name}</div>
                          <div className="sr-product-blurb">{p.blurb}</div>
                          <div className="sr-product-price">{formatPrice(p.price)}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Journal results */}
            {showPosts && matchedPosts.length > 0 && (
              <div className="sr-section">
                <h2 className="sr-section-title">Journal</h2>
                <div className="sr-posts-list">
                  {matchedPosts.map(p => (
                    <Link key={p.slug} href={`/journal/${p.slug}`} className={`sr-post-card sr-post-card--${p.variant}`}>
                      <div className="sr-post-art" />
                      <div className="sr-post-body">
                        <span className="journal-tag">{p.tag}</span>
                        <h3 className="sr-post-title">{p.title}</h3>
                        <p className="sr-post-excerpt">{p.excerpt}</p>
                        <p className="journal-meta">{p.readTime} · {p.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </>
        )}

      </div>
    </section>
  )
}
