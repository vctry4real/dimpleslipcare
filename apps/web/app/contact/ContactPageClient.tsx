'use client'

import { useState } from 'react'

const cards = [
  {
    l: 'WhatsApp', v: '0903 879 6354', deep: false,
    ico: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />,
  },
  {
    l: 'Call', v: '0902 533 3560', deep: false,
    ico: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />,
  },
  {
    l: 'Instagram', v: '@Dimples_lipcare', deep: false,
    ico: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1" fill="currentColor"/></>,
  },
  {
    l: 'TikTok', v: '@Dimples_lipcare', deep: true,
    ico: <path fill="currentColor" stroke="none" d="M19 7.5a6.5 6.5 0 0 1-4-1.4v8.7a6 6 0 1 1-6-6c.3 0 .6 0 1 .1V12a3 3 0 1 0 2 2.8V2h3a4.5 4.5 0 0 0 4 4.5v1z" />,
  },
]

const SUBJECTS = ['Product question', 'Order & shipping', 'Training enquiry', 'Wholesale & gifting', 'Press & collab', 'Other']

export default function ContactPageClient() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !message) return
    setSent(true)
  }

  return (
    <section className="surface contact" style={{ paddingTop: 'var(--s-16)' }}>
      <div className="wrap contact-grid">
        <div>
          {sent ? (
            <div className="contact-success">
              <div style={{ fontSize: 40, marginBottom: 'var(--s-4)' }}>♡</div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'var(--size-h3)', fontWeight: 400, marginBottom: 'var(--s-3)' }}>
                Message received.
              </h3>
              <p style={{ fontFamily: 'var(--font-sans)', color: 'var(--fg-2)', lineHeight: 1.6 }}>
                We&apos;ll get back to you within one business day. In a hurry? WhatsApp is faster.
              </p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={submit}>
              <div className="form-field">
                <label>Your name</label>
                <input type="text" placeholder="Tomi Adeyemi" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="form-field">
                <label>Email address</label>
                <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="form-field">
                <label>Subject</label>
                <select value={subject} onChange={e => setSubject(e.target.value)} className="form-select">
                  <option value="">Select a topic…</option>
                  {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div className="form-field">
                <label>Message</label>
                <textarea placeholder="Tell us what&apos;s on your mind…" value={message} onChange={e => setMessage(e.target.value)} required />
              </div>
              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', padding: 'var(--s-3) var(--s-8)' }}>
                Send message →
              </button>
            </form>
          )}
        </div>

        <div>
          <div className="eyebrow" style={{ marginBottom: 16 }}>Reach us directly</div>
          <div className="contact-cards">
            {cards.map((c, i) => (
              <div className={`contact-card ${c.deep ? 'deep' : ''}`} key={i}>
                <div className="ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    {c.ico}
                  </svg>
                </div>
                <div>
                  <div className="l">{c.l}</div>
                  <div className="v">{c.v}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'var(--s-8)', padding: 'var(--s-6)', background: 'var(--blush-100)', borderRadius: 'var(--r-lg)', border: '1px solid var(--line)' }}>
            <div className="eyebrow" style={{ marginBottom: 'var(--s-2)' }}>Studio location</div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-small)', color: 'var(--fg-2)', lineHeight: 1.6 }}>
              Dimples Lipcare Studio<br />
              Lagos Island, Lagos<br />
              Nigeria<br /><br />
              Studio visits by appointment only.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
