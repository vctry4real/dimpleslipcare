'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '../context/CartContext'
import { Sparkle } from '../components/SiteOrnaments'

type Step = 'contact' | 'delivery' | 'payment'

interface ContactInfo {
  email: string
  first: string
  last: string
  phone: string
  line1: string
  city: string
  state: string
  postal: string
}

const DELIVERY_OPTS = [
  { id: 'standard', nm: 'Standard nationwide',  eta: '2–4 working days',          carrier: 'GIG · Kwik',        price: 0 },
  { id: 'express',  nm: 'Express Lagos',         eta: 'Next working day',           carrier: 'Dispatch rider',    price: 2500 },
  { id: 'pickup',   nm: 'Studio pickup',         eta: 'Same day, by appointment',   carrier: 'Allen Avenue, Ikeja', price: 0 },
]

function fmt(n: number) { return '₦' + n.toLocaleString('en-NG') }

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
      <path d="M5 12l5 5L20 7" />
    </svg>
  )
}

function ArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function CheckoutContent() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()

  const [step, setStep] = useState<Step>('contact')
  const [doneContact, setDoneContact] = useState(false)
  const [doneDelivery, setDoneDelivery] = useState(false)
  const [contact, setContact] = useState<ContactInfo>({
    email: '', first: '', last: '', phone: '',
    line1: '', city: 'Lagos', state: 'Lagos', postal: '100001',
  })
  const [delivery, setDelivery] = useState('standard')
  const [payTab, setPayTab] = useState<'card' | 'transfer' | 'ussd'>('card')
  const [placing, setPlacing] = useState(false)

  const ship = DELIVERY_OPTS.find(d => d.id === delivery)!.price
  const tax  = Math.round(total * 0.075)
  const grandTotal = total + ship + tax

  // Empty cart state
  if (items.length === 0 && !placing) {
    return (
      <section className="surface" style={{ background: 'var(--pearl)', paddingTop: 'var(--s-20)', paddingBottom: 'var(--s-20)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: 48, marginBottom: 'var(--s-4)' }}>♡</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h2)', fontWeight: 400, marginBottom: 'var(--s-4)' }}>
            Your bag is empty.
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', color: 'var(--fg-2)', marginBottom: 'var(--s-8)' }}>
            Add something from the shop before checking out.
          </p>
          <Link className="btn-primary" href="/shop">Browse the shop →</Link>
        </div>
      </section>
    )
  }

  function submitContact(e: React.FormEvent) {
    e.preventDefault()
    setDoneContact(true)
    setStep('delivery')
  }

  function submitDelivery(e: React.FormEvent) {
    e.preventDefault()
    setDoneDelivery(true)
    setStep('payment')
  }

  function placeOrder(e: React.FormEvent) {
    e.preventDefault()
    setPlacing(true)
    const orderNum = 'DMP-2026-' + Math.floor(Math.random() * 9000 + 1000)
    const orderData = {
      orderNum,
      items,
      contact,
      delivery: DELIVERY_OPTS.find(d => d.id === delivery)!,
      subtotal: total,
      ship,
      tax,
      grandTotal,
    }
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('dimples_order', JSON.stringify(orderData))
    }
    clearCart()
    setTimeout(() => router.push('/thank-you'), 800)
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--white" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ position: 'relative' }}>
          <Sparkle size={28} style={{ position: 'absolute', top: 8, right: '8%' }} delay={0.3} />
          <div style={{ paddingTop: 'var(--s-5)', paddingBottom: 'var(--s-8)' }}>
            <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', display: 'flex', gap: 6, alignItems: 'center', marginBottom: 'var(--s-5)' }}>
              <Link href="/" style={{ color: 'var(--fg-3)', textDecoration: 'none' }}>Home</Link>
              <span>›</span>
              <span style={{ color: 'var(--fg-1)' }}>Checkout</span>
            </nav>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4.5vw, 60px)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', margin: 0, lineHeight: 1.1 }}>
              Almost{' '}
              <em className="script" style={{ fontFamily: 'var(--font-script)', fontStyle: 'normal' }}>there.</em>
            </h1>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-10)', paddingBottom: 'var(--s-20)' }}>
        <div className="wrap checkout-grid">

          {/* ── Left: form column ── */}
          <div className="co-form-col">

            {/* Step indicator */}
            <div className="co-steps">
              <div className={`co-step${doneContact ? ' done' : step === 'contact' ? ' active' : ''}`}>
                <span className="co-pip">{doneContact ? <CheckIcon /> : 'i'}</span>
                Contact &amp; shipping
              </div>
              <div className={`co-step-rule${doneContact ? ' done' : ''}`} />
              <div className={`co-step${doneDelivery ? ' done' : step === 'delivery' ? ' active' : ''}`}>
                <span className="co-pip">{doneDelivery ? <CheckIcon /> : 'ii'}</span>
                Delivery
              </div>
              <div className={`co-step-rule${doneDelivery ? ' done' : ''}`} />
              <div className={`co-step${step === 'payment' ? ' active' : ''}`}>
                <span className="co-pip">iii</span>
                Payment
              </div>
            </div>

            {/* ── Step 1: Contact & Shipping ── */}
            {step === 'contact' ? (
              <div className="co-card">
                <h3 className="co-card-title">
                  <span className="co-ix">i</span>
                  Contact &amp; shipping
                </h3>
                <p className="co-sub">We&apos;ll send tracking and updates to your email. Phone is for your courier.</p>
                <form className="co-fields" onSubmit={submitContact}>
                  <div className="co-field">
                    <label>Email</label>
                    <input type="email" required placeholder="you@example.com" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} />
                  </div>
                  <div className="co-grid-2">
                    <div className="co-field">
                      <label>First name</label>
                      <input type="text" required value={contact.first} onChange={e => setContact({ ...contact, first: e.target.value })} />
                    </div>
                    <div className="co-field">
                      <label>Last name</label>
                      <input type="text" required value={contact.last} onChange={e => setContact({ ...contact, last: e.target.value })} />
                    </div>
                  </div>
                  <div className="co-field">
                    <label>Phone</label>
                    <input type="tel" required placeholder="0803 000 0000" value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} />
                  </div>
                  <div className="co-field">
                    <label>Address</label>
                    <input type="text" required placeholder="42 Allen Avenue, off Toyin Street…" value={contact.line1} onChange={e => setContact({ ...contact, line1: e.target.value })} />
                  </div>
                  <div className="co-grid-3">
                    <div className="co-field">
                      <label>City</label>
                      <input type="text" required value={contact.city} onChange={e => setContact({ ...contact, city: e.target.value })} />
                    </div>
                    <div className="co-field">
                      <label>State</label>
                      <select value={contact.state} onChange={e => setContact({ ...contact, state: e.target.value })}>
                        <option>Lagos</option>
                        <option>Abuja</option>
                        <option>Rivers</option>
                        <option>Kano</option>
                        <option>Ogun</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="co-field">
                      <label>Postal</label>
                      <input type="text" value={contact.postal} onChange={e => setContact({ ...contact, postal: e.target.value })} />
                    </div>
                  </div>
                  <button type="submit" className="btn-primary co-submit">
                    Continue to delivery <ArrowRight />
                  </button>
                </form>
              </div>
            ) : (
              <div className="co-card co-card--done">
                <h3 className="co-card-title">
                  <span className="co-ix co-ix--done"><CheckIcon /></span>
                  Contact &amp; shipping
                  <button className="co-edit" onClick={() => setStep('contact')}>Edit</button>
                </h3>
                <p className="co-summary-line">
                  <strong>{contact.first} {contact.last}</strong><br />
                  {contact.email} · {contact.phone}<br />
                  {contact.line1}, {contact.city}, {contact.state} {contact.postal}
                </p>
              </div>
            )}

            {/* ── Step 2: Delivery ── */}
            {step === 'delivery' ? (
              <div className="co-card">
                <h3 className="co-card-title">
                  <span className="co-ix">ii</span>
                  Delivery
                </h3>
                <p className="co-sub">Choose how your bag should travel to you.</p>
                <form onSubmit={submitDelivery}>
                  <div className="co-delivery-opts">
                    {DELIVERY_OPTS.map(d => (
                      <label
                        key={d.id}
                        className={`co-delivery-opt${delivery === d.id ? ' active' : ''}`}
                        onClick={() => setDelivery(d.id)}
                      >
                        <span className="co-radio" />
                        <span className="co-delivery-info">
                          <span className="co-delivery-nm">{d.nm}</span>
                          <span className="co-delivery-carrier">{d.carrier}</span>
                        </span>
                        <span className="co-delivery-eta">{d.eta}</span>
                        <span className={`co-delivery-price${d.price === 0 ? ' free' : ''}`}>
                          {d.price === 0 ? 'Free' : fmt(d.price)}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="co-actions">
                    <button type="button" className="co-back" onClick={() => setStep('contact')}>← Back</button>
                    <button type="submit" className="btn-primary co-submit">
                      Continue to payment <ArrowRight />
                    </button>
                  </div>
                </form>
              </div>
            ) : doneDelivery && (
              <div className="co-card co-card--done">
                <h3 className="co-card-title">
                  <span className="co-ix co-ix--done"><CheckIcon /></span>
                  Delivery
                  <button className="co-edit" onClick={() => setStep('delivery')}>Edit</button>
                </h3>
                <p className="co-summary-line">
                  <strong>{DELIVERY_OPTS.find(d => d.id === delivery)!.nm}</strong><br />
                  {DELIVERY_OPTS.find(d => d.id === delivery)!.carrier} · {DELIVERY_OPTS.find(d => d.id === delivery)!.eta}
                </p>
              </div>
            )}

            {/* ── Step 3: Payment ── */}
            {step === 'payment' && (
              <div className="co-card">
                <h3 className="co-card-title">
                  <span className="co-ix">iii</span>
                  Payment
                </h3>
                <p className="co-sub">Secure checkout via Paystack. Cards, bank transfer, and USSD all supported.</p>

                <div className="co-pay-tabs">
                  <button type="button" className={`co-pay-tab${payTab === 'card' ? ' active' : ''}`} onClick={() => setPayTab('card')}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
                    </svg>
                    Card
                  </button>
                  <button type="button" className={`co-pay-tab${payTab === 'transfer' ? ' active' : ''}`} onClick={() => setPayTab('transfer')}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <path d="M3 7h18M7 11h10M5 15h14M9 19h6" />
                    </svg>
                    Bank transfer
                  </button>
                  <button type="button" className={`co-pay-tab${payTab === 'ussd' ? ' active' : ''}`} onClick={() => setPayTab('ussd')}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                      <rect x="6" y="2" width="12" height="20" rx="2" /><path d="M11 18h2" />
                    </svg>
                    USSD
                  </button>
                </div>

                <form className="co-fields" onSubmit={placeOrder}>
                  {payTab === 'card' && (
                    <>
                      <div className="co-field">
                        <label>Card number</label>
                        <input type="text" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="co-grid-card">
                        <div className="co-field">
                          <label>Name on card</label>
                          <input type="text" placeholder="Dimples Founder" required />
                        </div>
                        <div className="co-field">
                          <label>Expiry</label>
                          <input type="text" placeholder="MM / YY" required />
                        </div>
                        <div className="co-field">
                          <label>CVC</label>
                          <input type="text" placeholder="123" required />
                        </div>
                      </div>
                    </>
                  )}
                  {payTab === 'transfer' && (
                    <div className="co-bank-info">
                      <strong>Wema Bank · Dimples Lipcare Ltd</strong>
                      <span>Account number: 0123 456 789</span>
                      <span style={{ color: 'var(--fg-3)', fontSize: 13 }}>Use your order number as the reference after payment.</span>
                    </div>
                  )}
                  {payTab === 'ussd' && (
                    <div className="co-bank-info">
                      <strong>*123*456*{grandTotal}#</strong>
                      <span>Dial from the phone number you used at checkout.</span>
                      <span style={{ color: 'var(--fg-3)', fontSize: 13 }}>Works with GTB, First Bank, Access, Zenith, and most Nigerian banks.</span>
                    </div>
                  )}

                  <label className="co-restock-opt">
                    <input type="checkbox" defaultChecked />
                    Email me when any product in my bag is restocked.
                  </label>

                  <div className="co-actions">
                    <button type="button" className="co-back" onClick={() => setStep('delivery')}>← Back</button>
                    <button type="submit" className="btn-primary co-submit" disabled={placing}>
                      {placing ? 'Placing order…' : <>Place order · {fmt(grandTotal)} <ArrowRight /></>}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* ── Right: order summary rail ── */}
          <aside className="co-summary">
            <h3 className="co-summary-heading">Order summary</h3>
            <div className="co-summary-items">
              {items.map((it, i) => (
                <div className="co-summary-row" key={i}>
                  <div className="co-summary-art">
                    <span className="co-qty-tag">{it.qty}</span>
                    <div className="co-summary-swatch" />
                  </div>
                  <div className="co-summary-detail">
                    <span className="co-summary-nm">{it.name}</span>
                  </div>
                  <span className="co-summary-price">{fmt(it.priceNum * it.qty)}</span>
                </div>
              ))}
            </div>

            <div className="co-totals">
              <div className="co-total-row">
                <span>Subtotal</span><span>{fmt(total)}</span>
              </div>
              <div className="co-total-row">
                <span>Shipping</span>
                <span>{ship === 0 ? <em className="co-free">Free</em> : fmt(ship)}</span>
              </div>
              <div className="co-total-row">
                <span>VAT (7.5%)</span><span>{fmt(tax)}</span>
              </div>
              <div className="co-total-row co-total-row--grand">
                <span>Total</span><span>{fmt(grandTotal)}</span>
              </div>
            </div>

            <div className="co-trust">
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Secure checkout · Paystack
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
                </svg>
                Ships within 24 hours
              </span>
            </div>
          </aside>

        </div>
      </section>
    </>
  )
}
