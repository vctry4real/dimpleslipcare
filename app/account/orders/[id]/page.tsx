import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MOCK_ORDERS, getOrder, STATUS_LABEL, STATUS_COLOR } from '../../../data/account'

export async function generateStaticParams() {
  return MOCK_ORDERS.map(o => ({ id: o.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const order = getOrder(id)
  if (!order) return {}
  return { title: `Order ${order.id}` }
}

const fmt = (n: number) => '₦' + n.toLocaleString('en-NG')

const TIMELINE: Record<string, { steps: string[]; current: number }> = {
  processing: { steps: ['Order placed', 'Confirmed', 'Packed', 'In transit', 'Delivered'], current: 1 },
  transit:    { steps: ['Order placed', 'Confirmed', 'Packed', 'In transit', 'Delivered'], current: 3 },
  delivered:  { steps: ['Order placed', 'Confirmed', 'Packed', 'In transit', 'Delivered'], current: 4 },
  cancelled:  { steps: ['Order placed', 'Cancelled'], current: 1 },
}

export default async function OrderDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const order = getOrder(id)
  if (!order) notFound()

  const timeline = TIMELINE[order.status]

  return (
    <div>
      {/* Header */}
      <div className="acct-welcome">
        <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', display: 'flex', gap: 6, alignItems: 'center', marginBottom: 'var(--s-4)' }}>
          <Link href="/account/orders" style={{ color: 'var(--fg-3)' }}>Orders</Link>
          <span>›</span>
          <span style={{ color: 'var(--fg-1)' }}>{order.id}</span>
        </nav>
        <h1 className="acct-page-title">{order.id}</h1>
        <div style={{ display: 'flex', gap: 'var(--s-4)', alignItems: 'center', marginTop: 'var(--s-2)' }}>
          <p className="acct-page-sub" style={{ margin: 0 }}>Placed {order.date}</p>
          <span
            className="acct-status-pill"
            style={{ background: STATUS_COLOR[order.status] + '18', color: STATUS_COLOR[order.status] }}
          >
            {STATUS_LABEL[order.status]}
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="acct-timeline">
        {timeline.steps.map((step, i) => (
          <div key={step} className={`acct-tl-step${i <= timeline.current ? ' done' : ''}${i === timeline.current ? ' current' : ''}`}>
            <div className="acct-tl-dot" />
            {i < timeline.steps.length - 1 && <div className="acct-tl-line" />}
            <div className="acct-tl-label">{step}</div>
          </div>
        ))}
      </div>

      {order.tracking && (
        <div className="acct-tracking-pill">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
            <rect x="1" y="4" width="9" height="7" rx="1" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M10 6h1.5a1 1 0 0 1 .85.48l.65 1.08V11h-3V6Z" stroke="currentColor" strokeWidth="1.2"/>
            <circle cx="3.5" cy="11.5" r="1" stroke="currentColor" strokeWidth="1"/>
            <circle cx="10.5" cy="11.5" r="1" stroke="currentColor" strokeWidth="1"/>
          </svg>
          Tracking: <strong>{order.tracking}</strong>
        </div>
      )}

      <div className="acct-od-grid">
        {/* Items */}
        <div className="acct-card">
          <div className="acct-card-title">Items</div>
          <div className="acct-od-items">
            {order.items.map((item, i) => (
              <div key={i} className="acct-od-item">
                <div className="acct-od-item-dot" />
                <div className="acct-od-item-name">
                  {item.nm}
                  {item.qty > 1 && <span className="acct-od-qty">×{item.qty}</span>}
                </div>
                <div className="acct-od-item-price">{fmt(item.price * item.qty)}</div>
              </div>
            ))}
          </div>
          <div className="acct-od-totals">
            <div className="acct-od-total-row">
              <span>Subtotal</span>
              <span>{fmt(order.subtotal)}</span>
            </div>
            <div className="acct-od-total-row">
              <span>Shipping</span>
              <span style={{ color: order.ship === 0 ? 'var(--ok)' : undefined }}>
                {order.ship === 0 ? 'Free' : fmt(order.ship)}
              </span>
            </div>
            <div className="acct-od-total-row acct-od-total-row--grand">
              <span>Total</span>
              <span>{fmt(order.total)}</span>
            </div>
          </div>
        </div>

        {/* Delivery + payment */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)' }}>
          <div className="acct-card">
            <div className="acct-card-title">Delivery address</div>
            <p className="acct-card-body">{order.address}</p>
          </div>
          <div className="acct-card">
            <div className="acct-card-title">Payment</div>
            <p className="acct-card-body">{order.payment}</p>
          </div>
          <div className="acct-card" style={{ background: 'var(--blush-100)' }}>
            <div className="acct-card-title">Need help?</div>
            <p className="acct-card-body">If there's an issue with this order, our team will sort it out quickly.</p>
            <Link href="/contact" className="btn-ghost" style={{ marginTop: 'var(--s-4)', display: 'inline-block', fontSize: 13 }}>
              Contact support →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
