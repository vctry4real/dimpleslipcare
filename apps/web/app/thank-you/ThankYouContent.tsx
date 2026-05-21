'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Sparkle, Heart } from '../components/SiteOrnaments'

interface OrderItem {
  name: string
  price: string
  priceNum: number
  qty: number
}

interface DeliveryOpt {
  id: string
  nm: string
  eta: string
  carrier: string
  price: number
}

interface OrderData {
  orderNum: string
  items: OrderItem[]
  contact: {
    first: string
    last: string
    email: string
    line1: string
    city: string
    state: string
    postal: string
  }
  delivery: DeliveryOpt
  subtotal: number
  ship: number
  tax: number
  grandTotal: number
}

function fmt(n: number) { return '₦' + n.toLocaleString('en-NG') }

export default function ThankYouContent() {
  const [order, setOrder] = useState<OrderData | null>(null)

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('dimples_order')
      if (raw) setOrder(JSON.parse(raw))
    } catch {
      // ignore
    }
  }, [])

  const orderNum = order?.orderNum ?? ('DMP-2026-' + Math.floor(Math.random() * 9000 + 1000))

  return (
    <>
      {/* Hero */}
      <section className="ty-hero">
        <Sparkle size={40} style={{ position: 'absolute', top: 80, left: '10%' }} delay={0.4} />
        <Sparkle size={28} style={{ position: 'absolute', bottom: 60, right: '12%' }} delay={1.2} />
        <Heart size={32} style={{ position: 'absolute', top: 180, right: '18%' }} delay={0.7} />
        <div className="wrap" style={{ textAlign: 'center', position: 'relative' }}>
          <div className="ty-tick">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12l5 5L20 7" />
            </svg>
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4.5vw, 60px)', fontWeight: 400, color: 'var(--cream)', letterSpacing: 'var(--tracking-tight)', margin: '0 0 var(--s-4)', lineHeight: 1.1 }}>
            Thank you — your order is in.
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', color: 'var(--blush-300)', maxWidth: 520, margin: '0 auto var(--s-8)', lineHeight: 'var(--lh-base)' }}>
            We just emailed your receipt and we&apos;ll send tracking the moment your bag leaves the studio. Usually within 24 hours, sometimes faster.
          </p>
          <div className="ty-order-pill">
            <span>Order number</span>
            <span className="ty-order-num">{orderNum}</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="surface" style={{ background: 'var(--bg)', paddingTop: 0, paddingBottom: 'var(--s-20)' }}>
        <div className="wrap">

          {/* Order summary card */}
          <div className="ty-order-card">
            <div className="ty-order-head">
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h3)', fontWeight: 400, margin: '0 0 var(--s-1)' }}>Your bag</h2>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-3)', margin: 0 }}>
                  Placed just now · Paid via Paystack
                </p>
              </div>
              <span className="ty-status-pill">Processing</span>
            </div>

            {/* Items */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
              {(order?.items ?? []).map((it, i) => (
                <div className="ty-item" key={i}>
                  <div className="ty-item-swatch" />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 400, margin: '0 0 2px', color: 'var(--fg-1)' }}>{it.name}</p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', margin: 0 }}>× {it.qty}</p>
                  </div>
                  <p style={{ fontFamily: 'var(--font-serif)', fontSize: 17, fontWeight: 500, color: 'var(--fg-1)', margin: 0 }}>
                    {fmt(it.priceNum * it.qty)}
                  </p>
                </div>
              ))}
            </div>

            {/* Totals */}
            <div className="ty-totals">
              <div className="ty-total-row">
                <span>Subtotal</span><span>{order ? fmt(order.subtotal) : '—'}</span>
              </div>
              <div className="ty-total-row">
                <span>Shipping · {order?.delivery.nm ?? 'Standard nationwide'}</span>
                <span>{order?.ship === 0 ? <em style={{ color: 'var(--ok)', fontStyle: 'normal' }}>Free</em> : order ? fmt(order.ship) : '—'}</span>
              </div>
              <div className="ty-total-row">
                <span>VAT (7.5%)</span><span>{order ? fmt(order.tax) : '—'}</span>
              </div>
              <div className="ty-total-row ty-total-row--grand">
                <span>Total paid</span><span>{order ? fmt(order.grandTotal) : '—'}</span>
              </div>
            </div>

            {/* Address + delivery info */}
            {order && (
              <div className="ty-addr-grid">
                <div className="ty-addr-card">
                  <p className="ty-addr-label">Shipping to</p>
                  <p className="ty-addr-val">
                    {order.contact.first} {order.contact.last}<br />
                    {order.contact.line1}<br />
                    {order.contact.city} · {order.contact.postal}
                  </p>
                </div>
                <div className="ty-addr-card">
                  <p className="ty-addr-label">Estimated delivery</p>
                  <p className="ty-addr-val">
                    {order.delivery.eta}<br />
                    via {order.delivery.carrier}<br />
                    Tracking sent by email
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* What happens next */}
          <div className="ty-next-grid">
            <div className="ty-next-card">
              <span className="ty-next-num">i</span>
              <h4>Check your inbox</h4>
              <p>Receipt is already on its way. If it doesn&apos;t land in five minutes, check your spam folder.</p>
            </div>
            <div className="ty-next-card">
              <span className="ty-next-num">ii</span>
              <h4>We pour, label, ship</h4>
              <p>Your bag will leave the studio within 24 hours. We&apos;ll send a tracking link as soon as it&apos;s collected.</p>
            </div>
            <div className="ty-next-card">
              <span className="ty-next-num">iii</span>
              <h4>Open the ritual</h4>
              <p>While you wait, peek at <Link href="/ritual" style={{ color: 'var(--accent)' }}>the three-step ritual</Link> — your products arrive ready to use.</p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--s-14)' }}>
            <Link className="btn-primary" href="/shop">Keep shopping →</Link>
            <Link className="btn-ghost" href="/" style={{ marginLeft: 'var(--s-4)' }}>Back to home</Link>
          </div>

        </div>
      </section>
    </>
  )
}
