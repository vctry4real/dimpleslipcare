import Link from 'next/link'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import { Heart } from './components/SiteOrnaments'

export default function NotFound() {
  return (
    <div className="site">
      <SiteHeader />

      <section style={{
        background: 'var(--grad-deep)',
        padding: 'var(--s-20) 0',
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div className="wrap" style={{ textAlign: 'center', position: 'relative' }}>
          <Heart size={32} style={{ display: 'inline-block', marginBottom: 'var(--s-6)' }} delay={0} />
          <div style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(80px, 18vw, 160px)',
            fontWeight: 400,
            color: 'rgba(255,255,255,.12)',
            lineHeight: 1,
            letterSpacing: '-4px',
            marginBottom: '-20px',
          }}>
            404
          </div>
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(28px, 5vw, 52px)',
            fontWeight: 400,
            color: 'var(--cream)',
            letterSpacing: 'var(--tracking-tight)',
            marginBottom: 'var(--s-3)',
          }}>
            This page has left the building.
          </h1>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--size-body)',
            color: 'var(--blush-300)',
            marginBottom: 'var(--s-10)',
          }}>
            But your lips still can look amazing. Head back to the shop.
          </p>
          <div style={{ display: 'flex', gap: 'var(--s-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn-primary" href="/shop" style={{ background: 'var(--cream)', color: 'var(--accent)' }}>
              Shop all products →
            </Link>
            <Link className="btn-ghost" href="/" style={{ borderColor: 'rgba(255,255,255,.35)', color: 'var(--cream)' }}>
              Back to home
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
