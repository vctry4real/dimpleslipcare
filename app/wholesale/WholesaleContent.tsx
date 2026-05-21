'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Sparkle } from '../components/SiteOrnaments'

const BENEFITS = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14h20M14 4l10 10-10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '30–40% trade margin',
    body: 'Competitive pricing that gives you room to retail at full RRP while maintaining strong margins.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 11h22" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 16h4M16 16h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'No minimum reorder',
    body: 'After your opening order (minimum 12 units), reorder any quantity. We flex around your sell-through.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M5 24c0-4.42 4.03-8 9-8s9 3.58 9 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Dedicated stockist support',
    body: 'A direct line to our team for restocks, staff training on the ritual, and co-branded point-of-sale materials.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 3l2.5 8H24l-6.5 4.5 2.5 8L14 19 7.5 23.5l2.5-8L4 11h7.5L14 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Brand partnership',
    body: 'We list approved stockists on our website and tag partners in our social content. Your customers find us; our community finds you.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="4" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 9h8M10 13h8M10 17h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Product knowledge guide',
    body: 'Every wholesale account gets our full formulation guide and a staff training deck — so your team can sell with confidence.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4v5M14 19v5M4 14h5M19 14h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Nationwide delivery',
    body: 'We ship to stockists across Nigeria with tracked GIG Express delivery. Lagos restocks typically arrive in 24 hours.',
  },
]

const STOCKIST_TYPES = ['Beauty salon / spa', 'Boutique / lifestyle store', 'Gift shop', 'Hotel / hospitality', 'Online retailer', 'Pharmacy / wellness', 'Other']
const VOLUME_OPTS    = ['12–24 units/month', '25–50 units/month', '51–100 units/month', '100+ units/month']

export default function WholesaleContent() {
  const [form, setForm] = useState({
    businessName: '', contactName: '', email: '', phone: '',
    type: '', city: '', volume: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (k: keyof typeof form, v: string) => setForm(f => ({ ...f, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="page-hero ws-hero" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ position: 'relative' }}>
          <Sparkle size={40} style={{ position: 'absolute', top: 0, right: '8%' }} delay={0.3} />

          <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', display: 'flex', gap: 6, alignItems: 'center', marginBottom: 'var(--s-8)', paddingTop: 'var(--s-5)' }}>
            <Link href="/" style={{ color: 'var(--fg-3)' }}>Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--fg-1)' }}>Wholesale</span>
          </nav>

          <div className="ws-hero-grid">
            <div>
              <p className="eyebrow">For stockists</p>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', lineHeight: 1.05, margin: '0 0 var(--s-6)', color: 'var(--fg-1)' }}>
                Stock Dimples<br />
                <em className="script" style={{ fontFamily: 'var(--font-script)', fontStyle: 'normal' }}>in your store.</em>
              </h1>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-base)', color: 'var(--fg-2)', maxWidth: 480, margin: '0 0 var(--s-8)' }}>
                Nigeria's fastest-growing lip care brand is looking for the right retail partners. If your customers value quality, story, and results — let's talk.
              </p>
              <a href="#apply" className="btn-primary">Apply for wholesale →</a>
            </div>
            <div className="ws-hero-stats">
              {[
                { v: '15k+', l: 'Happy customers' },
                { v: '40+', l: 'Active stockists' },
                { v: '★ 4.9', l: 'Average rating' },
              ].map(s => (
                <div key={s.l} className="ws-stat">
                  <div className="ws-stat-v">{s.v}</div>
                  <div className="ws-stat-l">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefits ── */}
      <section className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-16)' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: 'var(--s-12)' }}>
            <div>
              <div className="eyebrow">Why stockists choose Dimples</div>
              <h2>Built for serious<br />retail partners.</h2>
            </div>
          </div>
          <div className="ws-benefits-grid">
            {BENEFITS.map(b => (
              <div key={b.title} className="ws-benefit-card" data-reveal>
                <div className="ws-benefit-icon">{b.icon}</div>
                <div className="ws-benefit-title">{b.title}</div>
                <div className="ws-benefit-body">{b.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product range ── */}
      <section className="surface" style={{ background: 'var(--blush-100)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-16)' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: 'var(--s-12)' }}>
            <div>
              <div className="eyebrow">The catalogue</div>
              <h2>Six products.<br />One complete ritual.</h2>
            </div>
            <Link href="/shop" className="btn-ghost">View all products →</Link>
          </div>

          <div className="ws-products-grid">
            {[
              { nm: 'Sugar Lip Scrub',    rrp: '₦6,500',  trade: '₦4,225',  badge: null },
              { nm: 'Velvet Lip Balm',    rrp: '₦5,000',  trade: '₦3,250',  badge: 'Best-seller' },
              { nm: 'Glass Lip Gloss',    rrp: '₦8,500',  trade: '₦5,525',  badge: null },
              { nm: 'Petal Lip Oil',      rrp: '₦12,000', trade: '₦7,800',  badge: null },
              { nm: 'Pink Lips Treatment',rrp: '₦15,000', trade: '₦9,750',  badge: 'High demand' },
              { nm: 'The Ritual Set',     rrp: '₦26,000', trade: '₦16,900', badge: 'Bundle' },
            ].map(p => (
              <div key={p.nm} className="ws-product-row">
                <div className="ws-product-name">
                  {p.nm}
                  {p.badge && <span className="ws-product-badge">{p.badge}</span>}
                </div>
                <div className="ws-product-rrp">RRP {p.rrp}</div>
                <div className="ws-product-trade">Trade {p.trade}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', marginTop: 'var(--s-6)' }}>
            * Trade prices shown are indicative at 35% margin. Final pricing confirmed in your wholesale agreement.
          </p>
        </div>
      </section>

      {/* ── Application form ── */}
      <section id="apply" className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-20)' }}>
        <div className="wrap">
          <div className="ws-form-grid">
            <div>
              <div className="eyebrow">Get started</div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', margin: '0 0 var(--s-4)' }}>
                Apply for a<br />wholesale account.
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.7, marginBottom: 'var(--s-8)', maxWidth: 360 }}>
                Fill in the form and we'll review your application within 2 business days. Most accounts are approved within the week.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)' }}>
                {['Opening order from 12 units', '30-day net payment terms for approved accounts', 'Dedicated account manager assigned on approval'].map(p => (
                  <div key={p} style={{ display: 'flex', gap: 'var(--s-3)', alignItems: 'center', fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-2)' }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="var(--ok)" strokeWidth="1.3"/><path d="M5 8l2 2 4-4" stroke="var(--ok)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {p}
                  </div>
                ))}
              </div>
            </div>

            {submitted ? (
              <div className="ws-submitted">
                <div style={{ fontSize: 48, marginBottom: 'var(--s-5)' }}>🌸</div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 26, fontWeight: 400, color: 'var(--fg-1)', margin: '0 0 var(--s-4)' }}>Application received!</h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.7 }}>
                  Thank you, <strong>{form.contactName || form.businessName}</strong>. We'll review your application and get back to you at <strong>{form.email}</strong> within 2 business days.
                </p>
              </div>
            ) : (
              <form className="ws-form" onSubmit={handleSubmit}>
                <div className="ws-form-2">
                  <div className="co-field">
                    <label className="co-label">Business name *</label>
                    <input className="co-input" required value={form.businessName} onChange={e => update('businessName', e.target.value)} placeholder="Glow Beauty Bar" />
                  </div>
                  <div className="co-field">
                    <label className="co-label">Contact name *</label>
                    <input className="co-input" required value={form.contactName} onChange={e => update('contactName', e.target.value)} placeholder="Your name" />
                  </div>
                  <div className="co-field">
                    <label className="co-label">Email *</label>
                    <input className="co-input" required type="email" value={form.email} onChange={e => update('email', e.target.value)} placeholder="hello@yourbusiness.com" />
                  </div>
                  <div className="co-field">
                    <label className="co-label">Phone</label>
                    <input className="co-input" value={form.phone} onChange={e => update('phone', e.target.value)} placeholder="0800 000 0000" />
                  </div>
                </div>

                <div className="ws-form-2" style={{ marginTop: 'var(--s-4)' }}>
                  <div className="co-field">
                    <label className="co-label">Business type *</label>
                    <select className="co-input" required value={form.type} onChange={e => update('type', e.target.value)}>
                      <option value="">Select…</option>
                      {STOCKIST_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="co-field">
                    <label className="co-label">City / state</label>
                    <input className="co-input" value={form.city} onChange={e => update('city', e.target.value)} placeholder="Lagos" />
                  </div>
                </div>

                <div className="co-field" style={{ marginTop: 'var(--s-4)' }}>
                  <label className="co-label">Expected monthly volume</label>
                  <div className="gc-denom-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
                    {VOLUME_OPTS.map(v => (
                      <button
                        key={v}
                        type="button"
                        className={`gc-denom-btn${form.volume === v ? ' active' : ''}`}
                        onClick={() => update('volume', v)}
                      >
                        {v}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="co-field" style={{ marginTop: 'var(--s-4)' }}>
                  <label className="co-label">Tell us about your business</label>
                  <textarea
                    className="co-input"
                    rows={4}
                    style={{ resize: 'vertical' }}
                    value={form.message}
                    onChange={e => update('message', e.target.value)}
                    placeholder="A little about your store, your customers, and why Dimples is a good fit…"
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ marginTop: 'var(--s-6)', width: '100%' }}>
                  Submit application →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
