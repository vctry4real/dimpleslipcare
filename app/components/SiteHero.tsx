import Link from 'next/link'
import { Sparkle, Heart } from './SiteOrnaments'
import { GlossBottle, ScrubJar, OilDropper } from './ProductBottle'

export default function SiteHero() {
  return (
    <section className="hero" id="top">
      <Sparkle size={48} style={{ position: 'absolute', top: 64, left: '8%' }} delay={0} />
      <Sparkle size={28} style={{ position: 'absolute', top: 220, left: '4%' }} delay={1.2} />
      <Heart size={36} style={{ position: 'absolute', bottom: 96, left: '44%' }} delay={0.4} />

      <div className="wrap hero-grid">
        <div className="hero-copy">
          <div className="eyebrow hero-anim" style={{ '--hero-i': 0 } as React.CSSProperties}>All in one lipcare brand</div>
          <h1 className="hero-anim" style={{ '--hero-i': 1 } as React.CSSProperties}>
            Soft, glossy<br />
            &amp; <span className="accent">moisturized</span><br />
            <span className="script">lips.</span>
          </h1>
          <p className="lead hero-anim" style={{ '--hero-i': 2 } as React.CSSProperties}>
            A hand-poured lipcare ritual — scrubs, balms, glosses, oils, and a pink-lips treatment that actually works. From one tiny pink studio in Lagos.
          </p>
          <div className="hero-ctas hero-anim" style={{ '--hero-i': 3 } as React.CSSProperties}>
            <Link className="btn-primary" href="/shop">
              Shop the collection
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link className="btn-ghost" href="/trainings">Book a training</Link>
          </div>
          <div className="hero-stats hero-anim" style={{ '--hero-i': 4 } as React.CSSProperties}>
            <div className="stat"><div className="v">15k+</div><div className="l">Happy lips</div></div>
            <div className="stat"><div className="v">5</div><div className="l">Signature products</div></div>
            <div className="stat"><div className="v">100%</div><div className="l">Hand-poured</div></div>
          </div>
        </div>

        <div className="hero-stage">
          <div className="floor" />
          <span className="hero-tag">New batch · January</span>
          <Sparkle size={40} style={{ position: 'absolute', top: 60, right: 60 }} delay={0.2} />
          <Sparkle size={24} style={{ position: 'absolute', bottom: 120, left: 40 }} delay={1.6} />
          <Heart size={28} style={{ position: 'absolute', top: 110, left: 50 }} delay={0.9} />
          <div className="product-cluster">
            <div style={{ transform: 'translate(28px, -10px) rotate(-6deg)' }}>
              <OilDropper scale={1.0} label="Petal Oil" />
            </div>
            <div style={{ transform: 'translateY(-10px)', marginLeft: -16, marginRight: -10, zIndex: 2 }}>
              <GlossBottle scale={1.5} label="Glass" />
            </div>
            <div style={{ transform: 'translate(0, 0) rotate(8deg)' }}>
              <ScrubJar scale={1.1} label="Sugar" />
            </div>
          </div>
          <span className="hero-price">From ₦5,000</span>
        </div>
      </div>
    </section>
  )
}
