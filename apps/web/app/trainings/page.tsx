import type { Metadata } from 'next'
import Link from 'next/link'
import SiteHeader from '../components/SiteHeader'

export const metadata: Metadata = {
  title: 'Lipcare Training Programme — Build your own brand | Dimples Lipcare',
  description: 'Five modules, 12 weeks, 8 seats. Same formulas, suppliers, and packaging contacts we use ourselves. Walk away with a launched lipcare line. Next cohort: April 2026.',
  openGraph: {
    title: 'Dimples Lipcare Training Programme',
    description: 'Build your own lipcare brand — start to shelf. Five modules, 12 weeks, next cohort April 2026.',
    url: 'https://dimplesbeauty.vctry4real.dev/trainings',
  },
}
import SiteFooter from '../components/SiteFooter'
import { Sparkle, Heart } from '../components/SiteOrnaments'

const MODULES = [
  {
    i: 'i',
    t: 'Formulation',
    d: 'Chemistry, ratios, INCI',
    desc: 'Learn how lip products are built from the ground up — emulsion theory, ingredient ratios, preservative systems, and how to read and write an INCI list that complies with NAFDAC requirements.',
    weeks: 'Weeks 1–2',
  },
  {
    i: 'ii',
    t: 'Product making',
    d: 'Two-day batch in our studio',
    desc: "Hands-on production sessions in our Lagos studio. You'll make a full batch of four products — scrub, balm, gloss, and treatment — using our exact formulas and equipment. You leave with stock.",
    weeks: 'Weeks 3–5',
  },
  {
    i: 'iii',
    t: 'Branding',
    d: 'Visual identity & packaging',
    desc: "We cover brand naming, visual identity, packaging sourcing (local and import), label printing, and photography on a phone. You'll finish with a launch-ready brand kit.",
    weeks: 'Weeks 6–8',
  },
  {
    i: 'iv',
    t: 'Support & cert',
    d: 'Six-month private circle',
    desc: "After the programme, you join a closed circle of Dimples founders. Monthly group calls, recipe troubleshooting, supplier contacts, and an official certificate of completion from our studio.",
    weeks: 'Weeks 9–11',
  },
  {
    i: 'v',
    t: 'Launch',
    d: 'Your first 100 customers',
    desc: 'A structured launch plan covering pre-orders, Instagram and TikTok content, pricing for the Nigerian market, and a tested DM script. Previous founders sold out their first batch within 72 hours.',
    weeks: 'Week 12',
  },
]

const FAQS = [
  {
    q: 'Do I need any prior experience?',
    a: 'None at all. We start from the very beginning — chemistry, equipment, and product safety — and build up from there. Most of our founders had never made a cosmetic before joining.',
  },
  {
    q: 'Is the training in-person or online?',
    a: 'Mostly online, with one mandatory two-day in-person session in our Lagos studio for the product-making module. Travel and accommodation are not included.',
  },
  {
    q: 'What do I get at the end?',
    a: "A certificate of completion, access to our supplier contacts, your first batch of finished products, and membership in our six-month founders' circle.",
  },
  {
    q: 'How many people are in each cohort?',
    a: 'We cap every cohort at 8 seats. Small groups mean you get real attention — we know every founder by name.',
  },
  {
    q: 'What is the fee?',
    a: 'The current cohort fee is ₦280,000. A ₦70,000 deposit secures your seat and the balance is due before week one begins. Payment plans are available — reach us on WhatsApp.',
  },
]

export default function TrainingsPage() {
  return (
    <div className="site">
      <SiteHeader />

      <section className="trainings-teaser" style={{ padding: 'var(--s-20) 0' }}>
        <div className="wrap" style={{ position: 'relative' }}>
          <Sparkle size={40} style={{ position: 'absolute', top: -24, right: 0 }} delay={0.2} />
          <div className="teaser-eyebrow" style={{ marginBottom: 'var(--s-4)' }}>
            <span className="dot" />
            Dimples Lipcare Trainings
          </div>
          <h1 className="teaser-heading" style={{ fontSize: 'clamp(36px, 5vw, 64px)', maxWidth: 640 }}>
            Build your own<br />lipcare brand &mdash;<br /><em>start to shelf.</em>
          </h1>
          <p className="teaser-lead" style={{ maxWidth: 540, marginBottom: 'var(--s-8)' }}>
            Five modules. Same formulas, suppliers, and packaging contacts we use ourselves. Walk away with a launched line and a private circle of founders. Next cohort: April 2026.
          </p>
          <div className="teaser-meta-row" style={{ maxWidth: 400, marginBottom: 'var(--s-8)' }}>
            <div className="meta-block">
              <div className="mv">5</div>
              <div className="ml">Modules</div>
            </div>
            <div className="meta-divide" />
            <div className="meta-block">
              <div className="mv">12<span className="mu">wk</span></div>
              <div className="ml">Programme</div>
            </div>
            <div className="meta-divide" />
            <div className="meta-block">
              <div className="mv">8<span className="mu">seats</span></div>
              <div className="ml">April cohort</div>
            </div>
          </div>
          <div className="teaser-ctas">
            <Link className="btn-primary" href="/contact" style={{ background: 'var(--cream)', color: 'var(--accent)' }}>
              Apply for a seat &rarr;
            </Link>
            <Link className="btn-ghost" href="/contact" style={{ borderColor: 'rgba(255,255,255,.4)', color: 'var(--cream)' }}>
              Talk to us first
            </Link>
          </div>
        </div>
      </section>

      <section className="surface" style={{ background: 'var(--pearl)' }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">The curriculum</div>
              <h2>Five modules,<br />one complete brand.</h2>
            </div>
            <p className="right">Everything we know about building a lipcare brand &mdash; distilled into 12 weeks. No filler, no fluff, no theory for the sake of theory.</p>
          </div>

          <div className="modules-full">
            {MODULES.map((m, i) => (
              <div className="module-full" key={i}>
                <div className="module-full-header">
                  <span className="m-num" style={{ fontSize: 'var(--size-body)' }}>{m.i}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <h3 className="module-full-title">{m.t}</h3>
                      <span className="module-full-week">{m.weeks}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-small)', color: 'var(--fg-3)', margin: '4px 0 0' }}>{m.d}</p>
                  </div>
                </div>
                <p className="module-full-desc">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="surface" style={{ background: 'var(--blush-50)' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: 'var(--s-10)' }}>
            <div>
              <div className="eyebrow">Common questions</div>
              <h2>What you<br />need to know.</h2>
            </div>
          </div>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <div className="faq-item" key={i}>
                <h4 className="faq-q">{f.q}</h4>
                <p className="faq-a">{f.a}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--s-16)', padding: 'var(--s-10)', background: 'var(--grad-deep)', borderRadius: 'var(--r-xl)', textAlign: 'center' }}>
            <Heart size={28} style={{ display: 'inline-block', marginBottom: 'var(--s-4)' }} delay={0} />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h3)', color: 'var(--cream)', fontWeight: 400, marginBottom: 'var(--s-3)' }}>
              Ready to build your brand?
            </h3>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', color: 'var(--blush-300)', marginBottom: 'var(--s-6)' }}>
              8 seats. April 2026. Applications close when they&apos;re gone.
            </p>
            <Link className="btn-primary" href="/contact" style={{ background: 'var(--cream)', color: 'var(--accent)' }}>
              Apply now &rarr;
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
