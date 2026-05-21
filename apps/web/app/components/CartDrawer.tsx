'use client'

import { useRouter } from 'next/navigation'
import { useCart } from '../context/CartContext'

function fmt(n: number) {
  return '₦' + n.toLocaleString('en-NG')
}

export default function CartDrawer() {
  const router = useRouter()
  const { items, total, isOpen, closeCart, removeItem, updateQty } = useCart()

  function goToCheckout() {
    closeCart()
    router.push('/checkout')
  }

  return (
    <>
      <div className={`cart-backdrop${isOpen ? ' open' : ''}`} onClick={closeCart} />
      <div className={`cart-drawer${isOpen ? ' open' : ''}`} role="dialog" aria-label="Shopping bag">
        <div className="cart-header">
          <h3>Your bag {items.length > 0 && <span style={{ fontSize: 14, fontFamily: 'var(--font-sans)', color: 'var(--fg-3)', fontWeight: 400 }}>({items.reduce((s, i) => s + i.qty, 0)})</span>}</h3>
          <button className="cart-close" onClick={closeCart} aria-label="Close bag">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <span style={{ fontSize: 32 }}>♡</span>
            <p>Your bag is empty.</p>
            <p style={{ fontSize: 12 }}>Add something from the shop.</p>
          </div>
        ) : (
          <div className="cart-items">
            {items.map(item => (
              <div className="cart-item" key={item.name}>
                <div className="cart-item-info">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">{item.price}</p>
                </div>
                <div className="cart-qty">
                  <button onClick={() => updateQty(item.name, item.qty - 1)} aria-label="Decrease">−</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.name, item.qty + 1)} aria-label="Increase">+</button>
                </div>
                <button
                  className="cart-close"
                  style={{ marginLeft: 8 }}
                  onClick={() => removeItem(item.name)}
                  aria-label="Remove"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span className="cart-subtotal-label">Subtotal</span>
              <span className="cart-subtotal-value">{fmt(total)}</span>
            </div>
            <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }} onClick={goToCheckout}>
              Checkout →
            </button>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--fg-3)', textAlign: 'center', marginTop: 'var(--s-3)' }}>
              Shipping calculated at checkout · Lagos delivery 2–3 days
            </p>
          </div>
        )}
      </div>
    </>
  )
}
