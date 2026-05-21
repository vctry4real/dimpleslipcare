'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Sparkle, Heart } from '../components/SiteOrnaments'

export default function ThankYouContent() {
  const params = useSearchParams()
  const reference  = params.get('ref')
  const orderNumber = params.get('order') ?? ('DMP-' + new Date().getFullYear() + '-' + Math.floor(Math.random() * 9000 + 1000))

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
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              fontWeight: 400,
              color: 'var(--cream)',
              letterSpacing: 'var(--tracking-tight)',
              margin: '0 0 var(--s-4)',
              lineHeight: 1.1,
            }}
          >
            Thank you — your order is in.
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'var(--size-body)',
              color: 'var(--blush-300)',
              maxWidth: 520,
              margin: '0 auto var(--s-8)',
              lineHeight: 'var(--lh-base)',
            }}
          >
            We just emailed your receipt and we&apos;ll send tracking the moment your bag
            leaves the studio. Usually within 24 hours, sometimes faster.
          </p>

          <div className="ty-order-pill">
            <span>Order number</span>
            <span className="ty-order-num">{orderNumber}</span>
          </div>

          {reference && (
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 12,
                color: 'var(--blush-400)',
                marginTop: 'var(--s-3)',
              }}
            >
              Payment reference: {reference}
            </p>
          )}
        </div>
      </section>

      {/* Body */}
      <section
        className="surface"
        style={{ background: 'var(--bg)', paddingTop: 0, paddingBottom: 'var(--s-20)' }}
      >
        <div className="wrap">

          {/* What happens next */}
          <div className="ty-next-grid" style={{ marginTop: 'var(--s-12)' }}>
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
              <p>
                While you wait, peek at{' '}
                <Link href="/ritual" style={{ color: 'var(--accent)' }}>
                  the three-step ritual
                </Link>{' '}
                — your products arrive ready to use.
              </p>
            </div>
          </div>

          {/* Account CTA */}
          <div
            style={{
              background: 'var(--blush-50)',
              borderRadius: 16,
              padding: 'var(--s-8)',
              textAlign: 'center',
              marginTop: 'var(--s-12)',
              maxWidth: 540,
              marginInline: 'auto',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 20,
                fontWeight: 400,
                margin: '0 0 var(--s-2)',
              }}
            >
              Track your order any time
            </p>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: 14,
                color: 'var(--fg-2)',
                margin: '0 0 var(--s-5)',
                lineHeight: 1.6,
              }}
            >
              Sign into your account to see live status, download your receipt, and reorder in one tap.
            </p>
            <Link className="btn-primary" href="/account/orders">
              View my orders →
            </Link>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--s-10)' }}>
            <Link className="btn-primary" href="/shop">Keep shopping →</Link>
            <Link className="btn-ghost" href="/" style={{ marginLeft: 'var(--s-4)' }}>Back to home</Link>
          </div>

        </div>
      </section>
    </>
  )
}
