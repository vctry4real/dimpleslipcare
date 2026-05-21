'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Sparkle } from '../components/SiteOrnaments'

const DENOMINATIONS = [5000, 10000, 15000, 25000]
const fmt = (n: number) => '₦' + n.toLocaleString('en-NG')

const HOW_IT_WORKS = [
  { n: '01', title: 'Choose an amount', body: 'Pick one of our preset values or enter any amount between ₦2,500 and ₦100,000.' },
  { n: '02', title: 'Personalise it',   body: 'Add the recipient\'s name, their email, and an optional message from you.' },
  { n: '03', title: 'We email it',      body: 'The gift card lands in their inbox instantly — or schedule it for their birthday.' },
  { n: '04', title: 'They shop',        body: 'The code applies at checkout. Any unused balance stays on the card. No expiry.' },
]

export default function GiftCardContent() {
  const [amount, setAmount]       = useState<number>(10000)
  const [custom, setCustom]       = useState('')
  const [useCustom, setUseCustom] = useState(false)
  const [recipientName,  setRecipientName]  = useState('')
  const [recipientEmail, setRecipientEmail] = useState('')
  const [senderName,     setSenderName]     = useState('')
  const [message,        setMessage]        = useState('')
  const [sent,           setSent]           = useState(false)

  const effectiveAmount = useCustom
    ? Math.max(2500, Math.min(100000, parseInt(custom || '0', 10)))
    : amount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className="gc-hero">
        <div className="wrap">
          <div className="gc-hero-grid">
            <div className="gc-hero-text">
              <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,255,255,.6)', display: 'flex', gap: 6, alignItems: 'center', marginBottom: 'var(--s-8)', paddingTop: 'var(--s-5)' }}>
                <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
                <span>›</span>
                <span style={{ color: 'rgba(255,255,255,.9)' }}>Gift cards</span>
              </nav>
              <p className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>The perfect gift</p>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', lineHeight: 1.05, color: 'white', margin: '0 0 var(--s-6)' }}>
                Give the gift of<br />
                <em style={{ fontFamily: 'var(--font-script)', fontStyle: 'normal' }}>soft, healthy lips.</em>
              </h1>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', color: 'rgba(255,255,255,.8)', lineHeight: 'var(--lh-base)', maxWidth: 420, margin: 0 }}>
                Dimples gift cards are delivered by email in seconds. They never expire, and any unused balance rolls over automatically.
              </p>
            </div>

            {/* Card visual */}
            <div className="gc-card-visual" style={{ position: 'relative' }}>
              <Sparkle size={36} style={{ position: 'absolute', top: '10%', right: '10%' }} delay={0.3} />
              <Sparkle size={24} style={{ position: 'absolute', bottom: '20%', left: '8%' }} delay={1.1} />
              <div className="gc-preview-card">
                <div className="gc-preview-logo">Dimples</div>
                <div className="gc-preview-label">Gift Card</div>
                <div className="gc-preview-amount">{fmt(effectiveAmount)}</div>
                <div className="gc-preview-code">DMPL-XXXX-XXXX-XXXX</div>
                <div className="gc-preview-note">Never expires · Valid on all orders</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Purchase form ── */}
      <section className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-20)' }}>
        <div className="wrap">
          <div className="gc-form-grid">

            {/* Left: form */}
            <div>
              {sent ? (
                <div className="gc-success">
                  <div className="gc-success-tick">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <circle cx="16" cy="16" r="15" stroke="var(--ok)" strokeWidth="1.5"/>
                      <path d="M10 16l4 4 8-8" stroke="var(--ok)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 28, fontWeight: 400, color: 'var(--fg-1)', margin: 'var(--s-5) 0 var(--s-3)' }}>
                    Gift card sent!
                  </h2>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg-2)', lineHeight: 1.6, marginBottom: 'var(--s-8)' }}>
                    A {fmt(effectiveAmount)} gift card has been sent to <strong>{recipientEmail}</strong>.<br />
                    Your order confirmation will arrive shortly.
                  </p>
                  <button className="btn-ghost" onClick={() => setSent(false)}>Send another →</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h2 className="gc-form-title">Customise your gift card</h2>

                  {/* Amount */}
                  <div className="gc-section-label">Amount</div>
                  <div className="gc-denom-grid">
                    {DENOMINATIONS.map(d => (
                      <button
                        key={d}
                        type="button"
                        className={`gc-denom-btn${!useCustom && amount === d ? ' active' : ''}`}
                        onClick={() => { setAmount(d); setUseCustom(false) }}
                      >
                        {fmt(d)}
                      </button>
                    ))}
                    <button
                      type="button"
                      className={`gc-denom-btn${useCustom ? ' active' : ''}`}
                      onClick={() => setUseCustom(true)}
                    >
                      Custom
                    </button>
                  </div>

                  {useCustom && (
                    <div className="co-field" style={{ marginTop: 'var(--s-4)' }}>
                      <label className="co-label">Custom amount (₦2,500 – ₦100,000)</label>
                      <div style={{ position: 'relative' }}>
                        <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--fg-3)' }}>₦</span>
                        <input
                          className="co-input"
                          style={{ paddingLeft: 28 }}
                          type="number"
                          min={2500}
                          max={100000}
                          value={custom}
                          onChange={e => setCustom(e.target.value)}
                          placeholder="10000"
                        />
                      </div>
                    </div>
                  )}

                  {/* Recipient */}
                  <div className="gc-section-label" style={{ marginTop: 'var(--s-8)' }}>Recipient</div>
                  <div className="gc-fields-2">
                    <div className="co-field">
                      <label className="co-label">Their name *</label>
                      <input className="co-input" required value={recipientName} onChange={e => setRecipientName(e.target.value)} placeholder="Temi Adeyemi" />
                    </div>
                    <div className="co-field">
                      <label className="co-label">Their email *</label>
                      <input className="co-input" required type="email" value={recipientEmail} onChange={e => setRecipientEmail(e.target.value)} placeholder="temi@email.com" />
                    </div>
                  </div>

                  {/* Sender */}
                  <div className="gc-section-label" style={{ marginTop: 'var(--s-8)' }}>From</div>
                  <div className="co-field">
                    <label className="co-label">Your name *</label>
                    <input className="co-input" required value={senderName} onChange={e => setSenderName(e.target.value)} placeholder="Your name" />
                  </div>

                  <div className="co-field" style={{ marginTop: 'var(--s-4)' }}>
                    <label className="co-label">Personal message (optional)</label>
                    <textarea
                      className="co-input"
                      rows={3}
                      style={{ resize: 'vertical' }}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder="Wishing you the softest lips…"
                    />
                  </div>

                  <div style={{ marginTop: 'var(--s-8)', display: 'flex', alignItems: 'center', gap: 'var(--s-5)' }}>
                    <button type="submit" className="btn-primary" style={{ minWidth: 200 }}>
                      Send gift card — {fmt(effectiveAmount)}
                    </button>
                  </div>

                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', marginTop: 'var(--s-4)', lineHeight: 1.5 }}>
                    Delivered instantly. Secure checkout. 100% satisfaction guaranteed.
                  </p>
                </form>
              )}
            </div>

            {/* Right: how it works */}
            <div className="gc-how">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 22, fontWeight: 400, color: 'var(--fg-1)', margin: '0 0 var(--s-8)' }}>How it works</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-7)' }}>
                {HOW_IT_WORKS.map(step => (
                  <div key={step.n} className="gc-step">
                    <div className="gc-step-n">{step.n}</div>
                    <div>
                      <div className="gc-step-title">{step.title}</div>
                      <div className="gc-step-body">{step.body}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="gc-trust-box" style={{ marginTop: 'var(--s-10)' }}>
                <div className="gc-trust-row">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="var(--ok)" strokeWidth="1.3"/><path d="M5 8l2 2 4-4" stroke="var(--ok)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Delivered by email in seconds
                </div>
                <div className="gc-trust-row">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="var(--ok)" strokeWidth="1.3"/><path d="M5 8l2 2 4-4" stroke="var(--ok)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Never expires
                </div>
                <div className="gc-trust-row">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="var(--ok)" strokeWidth="1.3"/><path d="M5 8l2 2 4-4" stroke="var(--ok)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Redeemable on all products
                </div>
                <div className="gc-trust-row">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke="var(--ok)" strokeWidth="1.3"/><path d="M5 8l2 2 4-4" stroke="var(--ok)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Unused balance rolls over
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
