'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useCart } from '../context/CartContext'
import { useAuth } from '../context/AuthContext'
import { Sparkle } from '../components/SiteOrnaments'
import { usePaystackScript } from '../../hooks/usePaystackScript'
import * as api from '../../lib/api'

// ─── Types ─────────────────────────────────────────────────────────────────

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

// ─── Constants ─────────────────────────────────────────────────────────────

const DELIVERY_OPTS = [
  {
    id: 'standard',
    nm: 'Standard nationwide',
    eta: '2–4 working days',
    carrier: 'GIG · Kwik',
    price: 0,
  },
  {
    id: 'express',
    nm: 'Express Lagos',
    eta: 'Next working day',
    carrier: 'Dispatch rider',
    price: 2500,
  },
  {
    id: 'pickup',
    nm: 'Studio pickup',
    eta: 'Same day, by appointment',
    carrier: 'Allen Avenue, Ikeja',
    price: 0,
  },
]

function fmt(n: number) {
  return '₦' + n.toLocaleString('en-NG')
}

// ─── Mini icons ─────────────────────────────────────────────────────────────

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

// ─── Inline auth gate ───────────────────────────────────────────────────────

function AuthGate({ returnTo }: { returnTo: string }) {
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '', password: '', confirm: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { login, register } = useAuth()

  function set(k: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement>) =>
      setForm(prev => ({ ...prev, [k]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')

    if (mode === 'register') {
      if (form.password.length < 8) { setError('Password must be at least 8 characters.'); return }
      if (form.password !== form.confirm) { setError('Passwords do not match.'); return }
    }

    setLoading(true)
    try {
      if (mode === 'login') {
        await login(form.email, form.password)
      } else {
        await register({
          firstName: form.firstName, lastName: form.lastName,
          email: form.email, password: form.password,
          phone: form.phone || undefined,
        })
      }
      // AuthContext update triggers re-render — no redirect needed
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong.'
      setError(
        msg.includes('invalid') || msg === 'UNAUTHORIZED'
          ? 'Incorrect email or password.'
          : msg.includes('already registered')
          ? 'An account with that email already exists.'
          : msg,
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="co-card">
      <h3 className="co-card-title">
        <span className="co-ix">iii</span>
        Sign in to pay
      </h3>
      <p className="co-sub">
        We need an account to save your order and send tracking.{' '}
        {mode === 'login' ? (
          <>
            No account?{' '}
            <button type="button" className="co-text-link" onClick={() => { setMode('register'); setError('') }}>
              Create one
            </button>
          </>
        ) : (
          <>
            Already have one?{' '}
            <button type="button" className="co-text-link" onClick={() => { setMode('login'); setError('') }}>
              Sign in
            </button>
          </>
        )}
      </p>

      <form className="co-fields" onSubmit={handleSubmit}>
        {mode === 'register' && (
          <div className="co-grid-2">
            <div className="co-field">
              <label>First name</label>
              <input type="text" required value={form.firstName} onChange={set('firstName')} />
            </div>
            <div className="co-field">
              <label>Last name</label>
              <input type="text" required value={form.lastName} onChange={set('lastName')} />
            </div>
          </div>
        )}

        <div className="co-field">
          <label>Email</label>
          <input type="email" required autoComplete="email" value={form.email} onChange={set('email')} placeholder="you@example.com" />
        </div>

        {mode === 'register' && (
          <div className="co-field">
            <label>Phone <span style={{ color: 'var(--fg-3)', fontWeight: 400 }}>(optional)</span></label>
            <input type="tel" value={form.phone} onChange={set('phone')} placeholder="0803 000 0000" />
          </div>
        )}

        <div className="co-field">
          <label>Password</label>
          <input type="password" required autoComplete={mode === 'login' ? 'current-password' : 'new-password'} value={form.password} onChange={set('password')} placeholder={mode === 'register' ? 'At least 8 characters' : '••••••••'} />
        </div>

        {mode === 'register' && (
          <div className="co-field">
            <label>Confirm password</label>
            <input type="password" required autoComplete="new-password" value={form.confirm} onChange={set('confirm')} placeholder="Repeat password" />
          </div>
        )}

        {error && (
          <p
            role="alert"
            style={{
              fontFamily: 'var(--font-sans)', fontSize: 13,
              color: 'var(--err)', background: 'var(--err-bg)',
              border: '1px solid var(--err)', borderRadius: 8,
              padding: '10px 14px', margin: 0,
            }}
          >
            {error}
          </p>
        )}

        <button type="submit" className="btn-primary co-submit" disabled={loading}>
          {loading ? (mode === 'login' ? 'Signing in…' : 'Creating account…') : (mode === 'login' ? 'Sign in & continue' : 'Create account & continue')}
        </button>

        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', margin: 0, textAlign: 'center' }}>
          Or{' '}
          <Link href={`/auth/${mode}?returnTo=${encodeURIComponent(returnTo)}`} style={{ color: 'var(--accent)' }}>
            open on a full page
          </Link>
        </p>
      </form>
    </div>
  )
}

// ─── Main component ─────────────────────────────────────────────────────────

export default function CheckoutContent() {
  const router = useRouter()
  const { items, total, clearCart } = useCart()
  const { user } = useAuth()
  const paystackReady = usePaystackScript()

  const [step, setStep] = useState<Step>('contact')
  const [doneContact, setDoneContact] = useState(false)
  const [doneDelivery, setDoneDelivery] = useState(false)
  const [contact, setContact] = useState<ContactInfo>({
    email: '', first: '', last: '', phone: '',
    line1: '', city: 'Lagos', state: 'Lagos', postal: '100001',
  })
  const [delivery, setDelivery] = useState('standard')
  const [placing, setPlacing] = useState(false)
  const [payError, setPayError] = useState('')
  const [saveAddress, setSaveAddress] = useState(true)

  const ship = DELIVERY_OPTS.find(d => d.id === delivery)!.price
  const tax  = Math.round(total * 0.075)
  const grandTotal = total + ship + tax

  // ── Empty cart guard ─────────────────────────────────────────────────────
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

  // ── Step handlers ────────────────────────────────────────────────────────

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

  /**
   * Full Paystack checkout:
   * 1. Create/save the shipping address in the DB
   * 2. Sync frontend cart items that have productIds to the API cart
   * 3. Create the order
   * 4. Initialize the Paystack transaction → get accessCode
   * 5. Open the Paystack inline popup
   */
  async function handlePayment(e: React.FormEvent) {
    e.preventDefault()
    if (!user || !paystackReady) return
    setPlacing(true)
    setPayError('')

    try {
      // ── 1. Create shipping address ────────────────────────────────────
      const addr = await api.users.createAddress({
        label: saveAddress ? 'Home' : 'Checkout',
        recipientName: `${contact.first} ${contact.last}`,
        line1: contact.line1,
        city: contact.city,
        state: contact.state,
        phone: contact.phone,
        isDefault: saveAddress,
      })

      // ── 2. Sync cart items that carry a DB productId ──────────────────
      const syncableItems = items.filter(i => !!i.productId)
      if (syncableItems.length > 0) {
        await api.cart.clear()
        for (const item of syncableItems) {
          await api.cart.addItem(item.productId!, item.qty)
        }
      }
      // Note: if no items have productIds (mock-data mode), the API cart
      // will be used as-is. Once products are wired to the real API the
      // productId will always be present.

      // ── 3. Create order ───────────────────────────────────────────────
      const order = await api.orders.create({
        addressId: addr.id,
        shippingMethod: delivery as 'standard' | 'express' | 'pickup',
      })

      // ── 4. Initialize Paystack payment ────────────────────────────────
      const { accessCode } = await api.payments.initialize(order.id)

      // ── 5. Open inline popup ──────────────────────────────────────────
      const PaystackPop = (window as Window & {
        PaystackPop?: {
          newTransaction: (opts: {
            key: string
            accessCode: string
            onSuccess: (tx: { reference: string }) => void
            onCancel: () => void
          }) => void
        }
      }).PaystackPop

      if (!PaystackPop) throw new Error('Paystack script not loaded.')

      PaystackPop.newTransaction({
        key: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY ?? '',
        accessCode,
        onSuccess: (tx) => {
          clearCart()
          router.push(
            `/thank-you?ref=${encodeURIComponent(tx.reference)}&order=${encodeURIComponent(order.orderNumber)}`,
          )
        },
        onCancel: () => {
          // User closed the popup — let them try again
          setPlacing(false)
          setPayError('Payment cancelled. You can try again whenever you\'re ready.')
        },
      })
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      setPayError(msg)
      setPlacing(false)
    }
  }

  // ── Render ───────────────────────────────────────────────────────────────

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
                    <input type="email" required placeholder="you@example.com" autoComplete="email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} />
                  </div>
                  <div className="co-grid-2">
                    <div className="co-field">
                      <label>First name</label>
                      <input type="text" required autoComplete="given-name" value={contact.first} onChange={e => setContact({ ...contact, first: e.target.value })} />
                    </div>
                    <div className="co-field">
                      <label>Last name</label>
                      <input type="text" required autoComplete="family-name" value={contact.last} onChange={e => setContact({ ...contact, last: e.target.value })} />
                    </div>
                  </div>
                  <div className="co-field">
                    <label>Phone</label>
                    <input type="tel" required placeholder="0803 000 0000" autoComplete="tel" value={contact.phone} onChange={e => setContact({ ...contact, phone: e.target.value })} />
                  </div>
                  <div className="co-field">
                    <label>Address</label>
                    <input type="text" required placeholder="42 Allen Avenue, off Toyin Street…" autoComplete="street-address" value={contact.line1} onChange={e => setContact({ ...contact, line1: e.target.value })} />
                  </div>
                  <div className="co-grid-3">
                    <div className="co-field">
                      <label>City</label>
                      <input type="text" required autoComplete="address-level2" value={contact.city} onChange={e => setContact({ ...contact, city: e.target.value })} />
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
                      <input type="text" autoComplete="postal-code" value={contact.postal} onChange={e => setContact({ ...contact, postal: e.target.value })} />
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
              <>
                {/* Auth gate — shown only when not signed in */}
                {!user ? (
                  <AuthGate returnTo="/checkout" />
                ) : (
                  <div className="co-card">
                    <h3 className="co-card-title">
                      <span className="co-ix">iii</span>
                      Payment
                    </h3>
                    <p className="co-sub">
                      Signed in as <strong>{user.firstName}</strong> · Secure checkout via Paystack.
                      All cards, bank transfers and USSD are handled inside the popup.
                    </p>

                    {/* Paystack trust badges */}
                    <div className="co-pay-trust">
                      <span className="co-pay-badge">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                        SSL secured
                      </span>
                      <span className="co-pay-badge">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
                        </svg>
                        Paystack verified
                      </span>
                      <span className="co-pay-badge">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        Nigerian merchant
                      </span>
                    </div>

                    <form className="co-fields" onSubmit={handlePayment}>
                      <label className="co-restock-opt">
                        <input
                          type="checkbox"
                          checked={saveAddress}
                          onChange={e => setSaveAddress(e.target.checked)}
                        />
                        Save this address to my account for future orders.
                      </label>

                      {payError && (
                        <p
                          role="alert"
                          style={{
                            fontFamily: 'var(--font-sans)', fontSize: 13,
                            color: 'var(--err)', background: 'var(--err-bg)',
                            border: '1px solid var(--err)', borderRadius: 8,
                            padding: '10px 14px', margin: 0,
                          }}
                        >
                          {payError}
                        </p>
                      )}

                      <div className="co-actions">
                        <button type="button" className="co-back" onClick={() => setStep('delivery')}>← Back</button>
                        <button
                          type="submit"
                          className="btn-primary co-submit co-submit--pay"
                          disabled={placing || !paystackReady}
                        >
                          {placing ? (
                            'Opening Paystack…'
                          ) : (
                            <>
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" />
                              </svg>
                              Pay {fmt(grandTotal)}
                            </>
                          )}
                        </button>
                      </div>

                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: 11, color: 'var(--fg-3)', margin: 0, textAlign: 'center', lineHeight: 1.5 }}>
                        Clicking &quot;Pay&quot; opens the Paystack popup. Your card details are entered directly in Paystack&apos;s secure environment — we never see them.
                      </p>
                    </form>
                  </div>
                )}
              </>
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
