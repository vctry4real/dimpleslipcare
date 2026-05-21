'use client'
import { MOCK_ADDRESSES } from '../../data/account'

export default function AddressesPage() {
  return (
    <div>
      <div className="acct-welcome">
        <h1 className="acct-page-title">Addresses</h1>
        <p className="acct-page-sub">Your saved delivery locations.</p>
      </div>

      <div className="acct-addr-grid">
        {MOCK_ADDRESSES.map(addr => (
          <div key={addr.id} className={`acct-addr-card${addr.isDefault ? ' acct-addr-card--default' : ''}`}>
            <div className="acct-addr-head">
              <span className="acct-addr-label">{addr.label}</span>
              {addr.isDefault && (
                <span className="acct-addr-default-badge">Default</span>
              )}
            </div>
            <div className="acct-addr-body">
              <div className="acct-addr-name">{addr.recipientName}</div>
              <div className="acct-addr-line">{addr.line1}</div>
              {addr.line2 && <div className="acct-addr-line">{addr.line2}</div>}
              <div className="acct-addr-line">{addr.city}, {addr.state}</div>
              <div className="acct-addr-phone">{addr.phone}</div>
            </div>
            <div className="acct-addr-actions">
              <button
                className="acct-addr-btn"
                onClick={() => alert('Address editing coming soon.')}
              >
                Edit
              </button>
              {!addr.isDefault && (
                <button
                  className="acct-addr-btn acct-addr-btn--ghost"
                  onClick={() => alert('To delete an address, please contact support.')}
                >
                  Remove
                </button>
              )}
            </div>
          </div>
        ))}

        {/* Add new card */}
        <button className="acct-addr-card acct-addr-card--add" onClick={() => alert('Address management coming soon.')}>
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2"/>
            <path d="M14 8v12M8 14h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="acct-addr-add-label">Add new address</span>
        </button>
      </div>
    </div>
  )
}
