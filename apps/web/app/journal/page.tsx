import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { Sparkle, Heart } from '../components/SiteOrnaments'
import { POSTS } from '../data/posts'

export const metadata: Metadata = {
  title: 'Journal — Notes from the pink studio',
  description: 'Formulation deep-dives, founder essays, and small notes from the Dimples studio. New post every fortnight or so — whenever there\'s something worth saying.',
  openGraph: {
    title: 'Journal — Dimples Lipcare',
    description: 'Formulation deep-dives, founder essays, and notes from the studio.',
    url: 'https://dimplesbeauty.vctry4real.dev/journal',
  },
}

export default function JournalPage() {
  const featured = POSTS[0]
  const rest = POSTS.slice(1)

  return (
    <div className="site">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ position: 'relative' }}>
          <Sparkle size={36} style={{ position: 'absolute', top: 0, right: '10%' }} delay={0.2} />
          <Heart size={28} style={{ position: 'absolute', bottom: 40, right: '28%' }} delay={1.2} />

          <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', display: 'flex', gap: 6, alignItems: 'center', marginBottom: 'var(--s-8)', paddingTop: 'var(--s-5)' }}>
            <Link href="/" style={{ color: 'var(--fg-3)' }}>Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--fg-1)' }}>Journal</span>
          </nav>

          <div className="journal-hero-grid">
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', lineHeight: 1.05, margin: 0, color: 'var(--fg-1)' }}>
              Notes from the<br />
              <em className="script" style={{ fontFamily: 'var(--font-script)', fontStyle: 'normal' }}>pink studio.</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-base)', color: 'var(--fg-2)', maxWidth: 440, margin: 0 }}>
              Formulation deep-dives, founder essays, and small notes from the studio. New post every fortnight or so — whenever there&apos;s something worth saying.
            </p>
          </div>
        </div>
      </section>

      {/* ── Posts ── */}
      <section className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-10)' }}>
        <div className="wrap">

          {/* Featured post */}
          <Link className={`journal-feature journal-feature--${featured.variant}`} href={`/journal/${featured.slug}`}>
            <div className="journal-feature-art">
              <Sparkle size={48} style={{ position: 'absolute', top: 40, right: 60 }} delay={0.2} />
              <Sparkle size={32} style={{ position: 'absolute', bottom: 60, left: 60 }} delay={1.4} />
              <Heart size={36} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} delay={0.6} />
            </div>
            <div className="journal-feature-body">
              <span className="journal-tag">Featured · {featured.tag}</span>
              <h2 className="journal-feature-title">{featured.title}</h2>
              <p className="journal-feature-excerpt">{featured.excerpt}</p>
              <p className="journal-meta">{featured.readTime} · {featured.date}</p>
              <span className="journal-read">Read the piece →</span>
            </div>
          </Link>

          {/* Grid of remaining posts */}
          <div className="journal-grid" style={{ marginTop: 'var(--s-8)' }}>
            {rest.map((p, i) => (
              <Link
                key={p.slug}
                className={`journal-card journal-card--${p.variant}`}
                href={`/journal/${p.slug}`}
                data-reveal
                data-reveal-delay={i * 60}
              >
                <div className="journal-card-art">
                  <Sparkle size={26} style={{ position: 'absolute', top: 28, right: 32 }} delay={i * 0.4} />
                </div>
                <div className="journal-card-body">
                  <span className="journal-tag">{p.tag}</span>
                  <h3 className="journal-card-title">{p.title}</h3>
                  <p className="journal-meta">{p.readTime} · {p.date}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
