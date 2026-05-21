import type { Metadata } from 'next'
import Link from 'next/link'
import { MOCK_USER, MOCK_ORDERS, STATUS_LABEL, STATUS_COLOR } from '../data/account'

export const metadata: Metadata = {
  title: 'My Account',
}

const fmt = (n: number) => '₦' + n.toLocaleString('en-NG')

export default function AccountPage() {
  const recent = MOCK_ORDERS.slice(0, 3)
  const delivered = MOCK_ORDERS.filter(o => o.status === 'delivered').length

  return (
    <div>
      {/* Welcome */}
      <div className="acct-welcome">
        <h1 className="acct-page-title">
          Welcome back,{' '}
          <em style={{ fontFamily: 'var(--font-script)', fontStyle: 'normal', color: 'var(--accent)' }}>
            {MOCK_USER.firstName}.
          </em>
        </h1>
        <p className="acct-page-sub">Here's what's happening with your account.</p>
      </div>

      {/* Stats row */}
      <div className="acct-stats">
        <div className="acct-stat">
          <div className="acct-stat-v">{MOCK_ORDERS.length}</div>
          <div className="acct-stat-l">Total orders</div>
        </div>
        <div className="acct-stat">
          <div className="acct-stat-v">{delivered}</div>
          <div className="acct-stat-l">Delivered</div>
        </div>
        <div className="acct-stat">
          <div className="acct-stat-v">820</div>
          <div className="acct-stat-l">Dimples points</div>
        </div>
      </div>

      {/* Recent orders */}
      <div className="acct-section">
        <div className="acct-section-head">
          <h2 className="acct-section-title">Recent orders</h2>
          <Link href="/account/orders" className="acct-section-link">View all →</Link>
        </div>

        <div className="acct-orders-list">
          {recent.map(order => (
            <Link key={order.id} href={`/account/orders/${order.id}`} className="acct-order-row">
              <div className="acct-order-id">{order.id}</div>
              <div className="acct-order-info">
                <div className="acct-order-items">
                  {order.items.map(i => i.nm).join(', ')}
                </div>
                <div className="acct-order-date">{order.date}</div>
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
      </div>

      {/* Quick links */}
      <div className="acct-quick-grid">
        <Link href="/account/addresses" className="acct-quick-card">
          <div className="acct-quick-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 2a6 6 0 0 1 6 6c0 4.5-6 12-6 12S5 12.5 5 8a6 6 0 0 1 6-6Z" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="11" cy="8" r="2" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
          </div>
          <div>
            <div className="acct-quick-title">Addresses</div>
            <div className="acct-quick-sub">Manage delivery locations</div>
          </div>
        </Link>

        <Link href="/account/saved" className="acct-quick-card">
          <div className="acct-quick-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 18s-8-5.5-8-10a5 5 0 0 1 8-4 5 5 0 0 1 8 4c0 4.5-8 10-8 10Z" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <div>
            <div className="acct-quick-title">Saved items</div>
            <div className="acct-quick-sub">Your wishlist · 3 items</div>
          </div>
        </Link>

        <Link href="/account/settings" className="acct-quick-card">
          <div className="acct-quick-icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M11 2v2.5M11 17.5V20M2 11h2.5M17.5 11H20M4.9 4.9l1.77 1.77M15.33 15.33l1.77 1.77M19.1 4.9l-1.77 1.77M8.67 15.33l-1.77 1.77" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <div className="acct-quick-title">Settings</div>
            <div className="acct-quick-sub">Profile &amp; preferences</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
