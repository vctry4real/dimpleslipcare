'use client'
import Link from 'next/link'
import { Sparkle } from '../components/SiteOrnaments'
import { MOCK_USER } from '../data/account'

const MOCK_POINTS = 820
const MOCK_HISTORY = [
  { date: 'May 14, 2026', action: 'Order DMP-2026-0042', points: +435, balance: 820 },
  { date: 'Apr 29, 2026', action: 'Order DMP-2026-0031', points: +235, balance: 385 },
  { date: 'Apr 1, 2026',  action: 'Referral — Temi A.',  points: +100, balance: 150 },
  { date: 'Dec 11, 2025', action: 'Order DMP-2025-0189', points: +50,  balance: 50  },
]

const TIERS = [
  { name: 'Pink',    min: 0,    max: 999,   perks: ['1 pt per ₦100 spent', 'Birthday bonus 50 pts', 'Early access to new drops'] },
  { name: 'Rose',    min: 1000, max: 4999,  perks: ['1.5 pts per ₦100 spent', 'All Pink perks', 'Free standard shipping on every order', '10% off gift cards'] },
  { name: 'Crimson', min: 5000, max: Infinity, perks: ['2 pts per ₦100 spent', 'All Rose perks', 'Free priority shipping', 'Quarterly product surprise', 'Founder Q&A access'] },
]

const EARN_WAYS = [
  {
    pts: '+1 pt / ₦100',
    label: 'Every purchase',
    body: 'Earn one point for every ₦100 you spend, automatically. Rose and Crimson members earn more.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="7" width="22" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 12h22" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="8" cy="17" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    pts: '+100 pts',
    label: 'Refer a friend',
    body: 'Share your unique link. When your friend places their first order, you both earn 100 points.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="11" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 22c0-3.31 2.69-6 6-6s6 2.69 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 8l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 12h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    pts: '+50 pts',
    label: 'Leave a review',
    body: 'Write a verified review on any product you\'ve purchased. Points credited within 24 hours of approval.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4l2.5 7H24l-6 4.5 2.5 7.5L14 19l-6.5 4L10 15.5 4 11h7.5L14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    pts: '+50 pts',
    label: 'Birthday bonus',
    body: 'We drop 50 bonus points into your account during your birthday month — just for being you.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 13v9h14v-9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M4 13h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 13V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 9c0-2 1.5-3 4-3s4 1 4 3" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
]

const REDEEM_WAYS = [
  { pts: '500 pts', value: '₦500 off',  label: 'Order discount' },
  { pts: '1,000 pts', value: '₦1,200 off', label: 'Bonus value' },
  { pts: '2,500 pts', value: '₦3,500 off', label: 'Big save' },
  { pts: '5,000 pts', value: 'Free Ritual Set', label: 'Top reward' },
]

function tierForPoints(pts: number) {
  return TIERS.slice().reverse().find(t => pts >= t.min) ?? TIERS[0]
}

function progressToNext(pts: number) {
  const currentTierIdx = TIERS.findIndex(t => pts >= t.min && pts <= t.max)
  if (currentTierIdx === TIERS.length - 1) return { pct: 100, next: null, needed: 0 }
  const next = TIERS[currentTierIdx + 1]
  const range = next.min - TIERS[currentTierIdx].min
  const earned = pts - TIERS[currentTierIdx].min
  return { pct: Math.min(100, Math.round((earned / range) * 100)), next, needed: next.min - pts }
}

export default function RewardsContent() {
  const tier     = tierForPoints(MOCK_POINTS)
  const progress = progressToNext(MOCK_POINTS)

  return (
    <>
      {/* ── Hero ── */}
      <section className="rw-hero">
        <div className="wrap" style={{ position: 'relative' }}>
          <Sparkle size={40} style={{ position: 'absolute', top: 'var(--s-5)', right: '6%' }} delay={0.4} />
          <Sparkle size={24} style={{ position: 'absolute', bottom: 'var(--s-8)', left: '4%' }} delay={1.2} />

          <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'rgba(255,255,255,.6)', display: 'flex', gap: 6, alignItems: 'center', marginBottom: 'var(--s-8)', paddingTop: 'var(--s-5)' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
            <span>›</span>
            <span style={{ color: 'rgba(255,255,255,.9)' }}>Rewards</span>
          </nav>

          <div className="rw-hero-grid">
            <div>
              <p className="eyebrow" style={{ color: 'rgba(255,255,255,.7)' }}>Dimples Points</p>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', lineHeight: 1.05, color: 'white', margin: '0 0 var(--s-6)' }}>
                Every order earns.<br />
                <em style={{ fontFamily: 'var(--font-script)', fontStyle: 'normal' }}>Every point saves.</em>
              </h1>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', color: 'rgba(255,255,255,.8)', lineHeight: 'var(--lh-base)', maxWidth: 440, margin: 0 }}>
                Earn Dimples Points on every purchase, referral, and review. Redeem them for real money off your next order — no catches.
              </p>
            </div>

            {/* Current points card */}
            <div className="rw-points-card">
              <div className="rw-points-top">
                <div>
                  <div className="rw-points-label">Your balance</div>
                  <div className="rw-points-value">{MOCK_POINTS.toLocaleString()}</div>
                  <div className="rw-points-unit">Dimples Points</div>
                </div>
                <div className={`rw-tier-badge rw-tier-badge--${tier.name.toLowerCase()}`}>
                  {tier.name} tier
                </div>
              </div>

              {progress.next && (
                <div className="rw-progress">
                  <div className="rw-progress-bar">
                    <div className="rw-progress-fill" style={{ width: `${progress.pct}%` }} />
                  </div>
                  <p className="rw-progress-label">
                    {progress.needed.toLocaleString()} pts to {progress.next.name} tier
                  </p>
                </div>
              )}

              <div className="rw-points-cta">
                <Link href="/shop" className="btn-primary" style={{ fontSize: 13 }}>Shop to earn more →</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How to earn ── */}
      <section className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-16)' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: 'var(--s-12)' }}>
            <div>
              <div className="eyebrow">Earning</div>
              <h2>Four ways to<br />earn points.</h2>
            </div>
          </div>
          <div className="rw-earn-grid">
            {EARN_WAYS.map(w => (
              <div key={w.label} className="rw-earn-card" data-reveal>
                <div className="rw-earn-icon">{w.icon}</div>
                <div className="rw-earn-pts">{w.pts}</div>
                <div className="rw-earn-label">{w.label}</div>
                <div className="rw-earn-body">{w.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Redeem ── */}
      <section className="surface" style={{ background: 'var(--blush-100)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-16)' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: 'var(--s-12)' }}>
            <div>
              <div className="eyebrow">Redeeming</div>
              <h2>Turn points into<br />real savings.</h2>
            </div>
          </div>
          <div className="rw-redeem-grid">
            {REDEEM_WAYS.map(r => (
              <div key={r.pts} className="rw-redeem-card">
                <div className="rw-redeem-pts">{r.pts}</div>
                <div className="rw-redeem-arrow">→</div>
                <div className="rw-redeem-value">{r.value}</div>
                <div className="rw-redeem-label">{r.label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--fg-3)', marginTop: 'var(--s-6)', textAlign: 'center' }}>
            Redeem at checkout — just apply your points and the discount is instant. Points never expire.
          </p>
        </div>
      </section>

      {/* ── Tiers ── */}
      <section className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-16)' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: 'var(--s-12)' }}>
            <div>
              <div className="eyebrow">Membership tiers</div>
              <h2>The more you earn,<br />the more you get.</h2>
            </div>
          </div>
          <div className="rw-tiers-grid">
            {TIERS.map(t => {
              const isCurrent = tier.name === t.name
              return (
                <div key={t.name} className={`rw-tier-card${isCurrent ? ' current' : ''}`}>
                  {isCurrent && <div className="rw-tier-current-badge">Your tier</div>}
                  <div className={`rw-tier-name rw-tier-name--${t.name.toLowerCase()}`}>{t.name}</div>
                  <div className="rw-tier-range">
                    {t.max === Infinity ? `${t.min.toLocaleString()}+ pts` : `${t.min.toLocaleString()} – ${t.max.toLocaleString()} pts`}
                  </div>
                  <ul className="rw-tier-perks">
                    {t.perks.map(p => (
                      <li key={p} className="rw-tier-perk">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 7l3 3 5-5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Points history ── */}
      <section className="surface" style={{ background: 'var(--blush-50)', paddingTop: 'var(--s-16)', paddingBottom: 'var(--s-20)' }}>
        <div className="wrap">
          <div className="section-heading" style={{ marginBottom: 'var(--s-10)' }}>
            <div>
              <div className="eyebrow">Activity</div>
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)' }}>Points history</h2>
            </div>
            <Link href="/account" className="btn-ghost" style={{ fontSize: 13 }}>My account →</Link>
          </div>

          <div className="rw-history">
            <div className="rw-history-header">
              <span>Date</span>
              <span>Activity</span>
              <span style={{ textAlign: 'right' }}>Points</span>
              <span style={{ textAlign: 'right' }}>Balance</span>
            </div>
            {MOCK_HISTORY.map((row, i) => (
              <div key={i} className="rw-history-row">
                <span className="rw-hist-date">{row.date}</span>
                <span className="rw-hist-action">{row.action}</span>
                <span className="rw-hist-pts" style={{ textAlign: 'right', color: row.points > 0 ? 'var(--ok)' : '#c07a20' }}>
                  {row.points > 0 ? '+' : ''}{row.points}
                </span>
                <span className="rw-hist-bal" style={{ textAlign: 'right' }}>{row.balance.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
