'use client'
import { useState } from 'react'
import { MOCK_USER } from '../../data/account'

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    firstName: MOCK_USER.firstName,
    lastName:  MOCK_USER.lastName,
    email:     MOCK_USER.email,
    phone:     MOCK_USER.phone,
  })
  const [newsletter, setNewsletter] = useState(MOCK_USER.newsletter)
  const [smsAlerts, setSmsAlerts] = useState(MOCK_USER.smsAlerts)
  const [saved, setSaved] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <div className="acct-welcome">
        <h1 className="acct-page-title">Settings</h1>
        <p className="acct-page-sub">Manage your profile and preferences.</p>
      </div>

      <form onSubmit={handleSave}>
        {/* Personal details */}
        <div className="acct-card" style={{ marginBottom: 'var(--s-6)' }}>
          <div className="acct-card-title">Personal details</div>
          <div className="acct-settings-grid">
            <div className="co-field">
              <label className="co-label">First name</label>
              <input
                className="co-input"
                value={profile.firstName}
                onChange={e => setProfile(p => ({ ...p, firstName: e.target.value }))}
              />
            </div>
            <div className="co-field">
              <label className="co-label">Last name</label>
              <input
                className="co-input"
                value={profile.lastName}
                onChange={e => setProfile(p => ({ ...p, lastName: e.target.value }))}
              />
            </div>
            <div className="co-field" style={{ gridColumn: '1 / -1' }}>
              <label className="co-label">Email address</label>
              <input
                className="co-input"
                type="email"
                value={profile.email}
                onChange={e => setProfile(p => ({ ...p, email: e.target.value }))}
              />
            </div>
            <div className="co-field" style={{ gridColumn: '1 / -1' }}>
              <label className="co-label">Phone number</label>
              <input
                className="co-input"
                value={profile.phone}
                onChange={e => setProfile(p => ({ ...p, phone: e.target.value }))}
              />
            </div>
          </div>
        </div>

        {/* Password */}
        <div className="acct-card" style={{ marginBottom: 'var(--s-6)' }}>
          <div className="acct-card-title">Password</div>
          <p className="acct-card-body" style={{ marginBottom: 'var(--s-4)' }}>
            Password changes are handled via a secure email link.
          </p>
          <button
            type="button"
            className="btn-ghost"
            style={{ fontSize: 13 }}
            onClick={() => alert('A password reset link will be sent to ' + profile.email)}
          >
            Send reset link →
          </button>
        </div>

        {/* Notifications */}
        <div className="acct-card" style={{ marginBottom: 'var(--s-8)' }}>
          <div className="acct-card-title">Notifications</div>
          <div className="acct-toggle-list">
            <label className="acct-toggle-row">
              <div>
                <div className="acct-toggle-label">Email newsletter</div>
                <div className="acct-toggle-sub">New products, restocks, journal posts, and occasional offers.</div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={newsletter}
                className={`acct-toggle${newsletter ? ' on' : ''}`}
                onClick={() => setNewsletter(v => !v)}
              />
            </label>
            <label className="acct-toggle-row">
              <div>
                <div className="acct-toggle-label">SMS order alerts</div>
                <div className="acct-toggle-sub">Shipping updates and delivery notifications via text.</div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={smsAlerts}
                className={`acct-toggle${smsAlerts ? ' on' : ''}`}
                onClick={() => setSmsAlerts(v => !v)}
              />
            </label>
          </div>
        </div>

        {/* Save button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-4)' }}>
          <button type="submit" className="btn-primary" style={{ minWidth: 140 }}>
            Save changes
          </button>
          {saved && (
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--ok)', display: 'flex', alignItems: 'center', gap: 6 }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.3"/>
                <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Saved
            </span>
          )}
        </div>
      </form>
    </div>
  )
}
