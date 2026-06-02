import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'

export const metadata: Metadata = {
  title: 'The Ritual — Three steps, five minutes | Dimples Lipcare',
  description: 'A complete lipcare loop designed to fit on your nightstand. Scrub twice a week, treat morning and night, glaze to finish.',
  openGraph: {
    title: 'The Dimples Lipcare Ritual',
    description: 'Three steps, five minutes. A complete lipcare loop — scrub, treat, glaze.',
    url: 'https://dimplesbeauty.vctry4real.dev/ritual',
  },
}
import SiteFooter from '../components/SiteFooter'
import { Sparkle } from '../components/SiteOrnaments'
import { ScrubJar, GlossBottle, LipIcon } from '../components/ProductBottle'

const STEPS = [
  {
    n: 'i',
    t: 'Scrub',
    sub: 'Twice a week',
    product: 'Sugar Lip Scrub · ₦6,500',
    body: [
      'Start with dry or slightly damp lips. Scoop a small amount of the Sugar Lip Scrub and massage gently in circular motions for 30 seconds.',
      'The cane sugar crystals buff away dead skin and flakiness while coconut oil and shea butter begin conditioning. Rinse with warm water or wipe off with a damp cloth.',
      'Do this twice a week — not more. Over-exfoliating thins the delicate lip skin. Two sessions keeps the texture smooth without stripping the barrier.',
    ],
    art: () => <ScrubJar scale={1.4} label="Sugar" />,
  },
  {
    n: 'ii',
    t: 'Treat',
    sub: 'Morning and night',
    product: 'Pink Lips Treatment · ₦15,000',
    body: [
      'After scrubbing (or anytime your lips feel dry), pat a thin layer of the Pink Lips Treatment onto clean lips.',
      'The formula combines kojic acid, bearberry extract, and vitamin C to gently even lip tone over 4 weeks. No bleaching, no harsh chemicals — just a steady, visible shift toward your natural pink.',
      'Apply morning and night. You can layer a balm or gloss on top. Most customers notice a visible difference by week two.',
    ],
    art: () => <LipIcon scale={3.2} />,
  },
  {
    n: 'iii',
    t: 'Glaze',
    sub: 'Finish and seal',
    product: 'Velvet Lip Balm · ₦5,000 or Glass Lip Gloss · ₦8,500',
    body: [
      'The final step seals in moisture and gives your lips their finish for the day — or night.',
      'Reach for the Velvet Lip Balm when you want plush, comfortable coverage that never feels sticky. The shea-cocoa formula melts into the lip surface and stays put for hours.',
      'Choose the Glass Lip Gloss when you want a high-shine mirror finish. It layers cleanly over the balm for maximum gloss without tack. Or do both — balm first, gloss on top. Most of our customers do.',
    ],
    art: () => <GlossBottle scale={1.3} label="Glass" />,
  },
]

export default function RitualPage() {
  return (
    <div className="site">
      <SiteHeader />

      <section className="page-hero page-hero--white">
        <div className="wrap">
          <Sparkle size={32} style={{ position: 'absolute', top: 40, right: '12%' }} delay={0} />
          <div className="eyebrow">The Ritual</div>
          <h1>Three steps,<br />five minutes.</h1>
          <p>A complete lipcare loop designed to fit on your nightstand. No filler products — each one earns its place in the routine.</p>
        </div>
      </section>

      <section className="surface ritual" style={{ paddingTop: 0 }}>
        <div className="wrap">
          {STEPS.map((s, i) => (
            <div className="ritual-step-full" key={i}>
              <div className="ritual-step-art">
                <div className="ritual-art-inner">
                  {s.art()}
                </div>
                <div className="ritual-step-num">{s.n}</div>
              </div>
              <div className="ritual-step-body">
                <div className="eyebrow" style={{ marginBottom: 4 }}>{s.sub}</div>
                <h2 className="ritual-step-title">{s.t}</h2>
                <p className="ritual-step-product">{s.product}</p>
                {s.body.map((para, j) => (
                  <p key={j} className="ritual-step-para">{para}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="surface" style={{ background: 'var(--blush-100)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-16)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div className="eyebrow" style={{ marginBottom: 'var(--s-3)' }}>Start today</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h2)', fontWeight: 500, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--s-6)' }}>
            Ready to begin your ritual?
          </h2>
          <div style={{ display: 'flex', gap: 'var(--s-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link className="btn-primary" href="/shop">Shop all products →</Link>
            <Link className="btn-ghost" href="/shop">Get the Ritual Set</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
