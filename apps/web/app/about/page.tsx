import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import { Sparkle, Heart } from '../components/SiteOrnaments'

export const metadata: Metadata = {
  title: 'Our Story — Hand-poured from Lagos',
  description: 'Dimples started in 2022 with a single batch of lip balm mixed on a kitchen table. Three years and 15,000 happy lips later, we still pour everything ourselves from a small studio off Allen Avenue.',
  openGraph: {
    title: 'Our Story — Dimples Lipcare',
    description: 'One tiny pink studio in Lagos. Hand-poured since 2022.',
    url: 'https://dimpleslipcare.com/about',
  },
}

const STATS = [
  { v: '2022',  l: 'Founded' },
  { v: '15k+',  l: 'Happy lips' },
  { v: '40+',   l: 'Founders trained' },
  { v: '100%',  l: 'Hand-poured' },
]

const VALUES = [
  {
    n: 'i',
    t: 'Hand-poured, every batch',
    d: 'No contract manufacturer, no faceless factory floor. The hands that mixed your gloss are the same hands that mixed every gloss before it.',
  },
  {
    n: 'ii',
    t: 'Real ingredients, full INCI',
    d: 'Every ingredient is listed on every product. We use plant emollients, beeswax, shea, and naturally-derived pigments — never synthetic fragrance or mineral oil.',
  },
  {
    n: 'iii',
    t: 'Fresh, never frozen',
    d: 'Small batches, weekly restocks. Nothing sits in a warehouse waiting to oxidise. What reaches your lips is almost always less than three weeks old.',
  },
]

export default function AboutPage() {
  return (
    <div className="site">
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ position: 'relative' }}>
          <Sparkle size={48} style={{ position: 'absolute', top: -20, left: '6%' }} delay={0.2} />
          <Sparkle size={28} style={{ position: 'absolute', bottom: 60, left: '28%' }} delay={1.4} />
          <Heart size={36} style={{ position: 'absolute', top: 120, right: '10%' }} delay={0.4} />

          <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', display: 'flex', gap: 6, alignItems: 'center', marginBottom: 'var(--s-8)', paddingTop: 'var(--s-5)' }}>
            <Link href="/" style={{ color: 'var(--fg-3)' }}>Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--fg-1)' }}>Our Story</span>
          </nav>

          <div className="about-hero-grid">
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5.5vw, 72px)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', lineHeight: 1.05, margin: 0, color: 'var(--fg-1)' }}>
              One tiny{' '}
              <em className="script" style={{ fontFamily: 'var(--font-script)', fontStyle: 'normal' }}>pink</em>
              <br />studio in Lagos.
            </h1>
            <p className="about-hero-lead">
              Dimples started in 2022 with a single batch of lip balm mixed on a kitchen table. Three years later we hand-pour five products from a small studio off Allen Avenue — still the same hands, just better tools.
            </p>
          </div>

          <div className="about-stats">
            {STATS.map((s, i) => (
              <div className="about-stat" key={i}>
                <div className="about-stat-v">{s.v}</div>
                <div className="about-stat-l">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Story blocks ── */}
      <section className="surface" style={{ background: 'var(--pearl)' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-20)' }}>

          <div className="story-block">
            <div className="story-text">
              <div className="eyebrow" style={{ marginBottom: 'var(--s-4)' }}>The beginning</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h2)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--s-6)' }}>
                A batch of balm,<br />a borrowed scale.
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-base)', color: 'var(--fg-2)', marginBottom: 'var(--s-4)' }}>
                The first ten units of what would become Velvet Lip Balm were poured in a borrowed kitchen, with a borrowed scale, into containers I&apos;d ordered too many of. They sold out in a week to friends and friends-of-friends.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-base)', color: 'var(--fg-2)', marginBottom: 'var(--s-6)' }}>
                The second batch sold out faster. By batch four I had to learn what an emulsifier actually does. By batch nine I had a logo and a permit. That&apos;s how Dimples started — slowly, then all at once.
              </p>
              <p className="story-sig">— Dimples</p>
            </div>
            <div className="story-art">
              <div className="story-art-inner">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(185,74,104,.25)" strokeWidth="1" strokeLinecap="round">
                  <circle cx="12" cy="9" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
                </svg>
                <span className="story-art-label">Founder portrait</span>
              </div>
            </div>
          </div>

          <div className="story-block story-block--reverse">
            <div className="story-text">
              <div className="eyebrow" style={{ marginBottom: 'var(--s-4)' }}>The studio today</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h2)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--s-6)' }}>
                Small batches,<br />fresh on shelves.
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-base)', color: 'var(--fg-2)', marginBottom: 'var(--s-4)' }}>
                We pour every product ourselves, in batches of fifty to two hundred, in a small studio off Allen Avenue. Nothing sits in a warehouse for months. Restocks happen weekly, and what reaches your lips is rarely more than three weeks old.
              </p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-base)', color: 'var(--fg-2)' }}>
                We pick our raw materials by hand — beeswax from Plateau, shea from Sokoto, jojoba and rosehip from suppliers we&apos;ve used since the borrowed-kitchen days. Same vendors, just bigger orders now.
              </p>
            </div>
            <div className="story-art">
              <div className="story-art-inner">
                <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="rgba(185,74,104,.25)" strokeWidth="1" strokeLinecap="round">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 12h6M12 9v6" />
                </svg>
                <span className="story-art-label">Studio interior</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── Values ── */}
      <section className="surface" style={{ background: 'var(--blush-50)' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: 'var(--s-12)' }}>
            <div>
              <div className="eyebrow">What we hold to</div>
              <h2>Three things we<br />won&apos;t compromise on.</h2>
            </div>
            <p className="right">There are a lot of corners to cut in cosmetics — synthetic fragrance, cheap fillers, frozen stock that sits for years. These are the three lines we drew early and won&apos;t move.</p>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div className="value-card" key={i} data-reveal data-reveal-delay={i * 80}>
                <div className="value-num">{v.n}</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h4)', fontWeight: 500, color: 'var(--fg-1)', margin: '0 0 var(--s-4)' }}>{v.t}</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-base)', color: 'var(--fg-2)', margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="about-cta-band">
        <Heart size={40} style={{ position: 'absolute', top: 60, left: '10%' }} delay={0.4} />
        <Sparkle size={32} style={{ position: 'absolute', bottom: 60, right: '8%' }} delay={1.2} />
        <div className="wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <div className="eyebrow" style={{ color: 'var(--blush-400)', marginBottom: 'var(--s-4)' }}>What&apos;s next</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(36px, 5vw, 60px)', lineHeight: 1.05, color: 'var(--cream)', margin: '0 auto var(--s-6)', maxWidth: '20ch' }}>
            We want to train every lipcare founder in West Africa.
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', color: 'var(--blush-300)', lineHeight: 'var(--lh-base)', margin: '0 auto var(--s-10)', maxWidth: 520 }}>
            The thing that&apos;s taken us five years to learn shouldn&apos;t take you five years too. Our trainings programme is the cheat sheet — same formulas, same suppliers, ours to share.
          </p>
          <div style={{ display: 'flex', gap: 'var(--s-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn-primary" href="/trainings" style={{ background: 'var(--cream)', color: 'var(--accent)' }}>
              Explore trainings →
            </Link>
            <Link className="btn-ghost" href="/contact" style={{ borderColor: 'rgba(255,255,255,.4)', color: 'var(--cream)' }}>
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
