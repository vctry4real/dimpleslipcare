'use client'
import Link from 'next/link'
import { useCart } from '../../context/CartContext'
import { MOCK_SAVED } from '../../data/account'

export default function SavedPage() {
  const { addItem, openCart } = useCart()

  const handleAddToBag = (item: typeof MOCK_SAVED[number]) => {
    addItem(item.nm, item.price, item.priceNum)
    openCart()
  }

  return (
    <div>
      <div className="acct-welcome">
        <h1 className="acct-page-title">Saved items</h1>
        <p className="acct-page-sub">{MOCK_SAVED.length} items on your wishlist.</p>
      </div>

      {MOCK_SAVED.length === 0 ? (
        <div className="acct-empty">
          <div className="acct-empty-icon">♡</div>
          <p className="acct-empty-text">Nothing saved yet.</p>
          <Link href="/shop" className="btn-primary" style={{ marginTop: 'var(--s-6)' }}>
            Browse the shop
          </Link>
        </div>
      ) : (
        <div className="acct-saved-grid">
          {MOCK_SAVED.map(item => (
            <div key={item.slug} className="acct-saved-card">
              <Link href={`/products/${item.slug}`} className="acct-saved-art">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" opacity={0.3}>
                  <path d="M16 27s-11-7-11-14a7 7 0 0 1 11-5.74A7 7 0 0 1 27 13c0 7-11 14-11 14Z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </Link>
              <div className="acct-saved-body">
                <Link href={`/products/${item.slug}`} className="acct-saved-name">{item.nm}</Link>
                <p className="acct-saved-blurb">{item.blurb}</p>
                <div className="acct-saved-foot">
                  <span className="acct-saved-price">{item.price}</span>
                  <button
                    className="btn-primary"
                    style={{ padding: '8px 18px', fontSize: 12 }}
                    onClick={() => handleAddToBag(item)}
                  >
                    Add to bag
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ marginTop: 'var(--s-10)', textAlign: 'center' }}>
        <Link href="/shop" className="btn-ghost">← Keep shopping</Link>
      </div>
    </div>
  )
}
