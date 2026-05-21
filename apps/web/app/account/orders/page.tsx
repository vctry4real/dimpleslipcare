import type { Metadata } from 'next'
import Link from 'next/link'
import { MOCK_ORDERS, STATUS_LABEL, STATUS_COLOR } from '../../data/account'

export const metadata: Metadata = {
  title: 'My Orders',
}

const fmt = (n: number) => '₦' + n.toLocaleString('en-NG')

export default function OrdersPage() {
  return (
    <div>
      <div className="acct-welcome">
        <h1 className="acct-page-title">Orders</h1>
        <p className="acct-page-sub">{MOCK_ORDERS.length} orders placed · all time</p>
      </div>

      <div className="acct-orders-list">
        {MOCK_ORDERS.map(order => (
          <Link key={order.id} href={`/account/orders/${order.id}`} className="acct-order-row">
            <div>
              <div className="acct-order-id">{order.id}</div>
              <div className="acct-order-date" style={{ marginTop: 4 }}>{order.date}</div>
            </div>

            <div className="acct-order-info">
              <div className="acct-order-items">
                {order.items.map((i, idx) => (
                  <span key={idx}>
                    {i.nm}{i.qty > 1 ? ` ×${i.qty}` : ''}
                    {idx < order.items.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              <div className="acct-order-payment" style={{ marginTop: 4 }}>{order.payment}</div>
            </div>

            <div className="acct-order-right">
              <div className="acct-order-total">{fmt(order.total)}</div>
              <span
                className="acct-status-pill"
                style={{ background: STATUS_COLOR[order.status] + '18', color: STATUS_COLOR[order.status] }}
              >
                {STATUS_LABEL[order.status]}
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div style={{ marginTop: 'var(--s-10)', textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-3)' }}>
          Need help with an order?{' '}
          <Link href="/contact" style={{ color: 'var(--accent)' }}>Contact us →</Link>
        </p>
      </div>
    </div>
  )
}
