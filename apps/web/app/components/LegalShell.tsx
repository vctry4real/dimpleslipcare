'use client'

import { useState, useEffect, type ReactNode } from 'react'
import Link from 'next/link'

export interface LegalSection {
  id: string
  h2: string
  body: ReactNode
}

interface LegalShellProps {
  title: string
  breadcrumb: string
  updated: string
  intro?: string
  sections: LegalSection[]
}

export default function LegalShell({ title, breadcrumb, updated, intro, sections }: LegalShellProps) {
  const [active, setActive] = useState(sections[0]?.id)

  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + 130
      let current = sections[0]?.id
      for (const s of sections) {
        const el = document.getElementById(s.id)
        if (el && el.offsetTop <= fromTop) current = s.id
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  function scrollTo(id: string) {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' })
  }

  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--white" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ paddingBottom: 'var(--s-10)', paddingTop: 'var(--s-5)' }}>
          <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', display: 'flex', gap: 6, alignItems: 'center', marginBottom: 'var(--s-8)' }}>
            <Link href="/" style={{ color: 'var(--fg-3)' }}>Home</Link>
            <span>›</span>
            <span style={{ color: 'var(--fg-1)' }}>{breadcrumb}</span>
          </nav>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 4.5vw, 64px)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', margin: 0, color: 'var(--fg-1)' }}>
            {title}
          </h1>
        </div>
      </section>

      {/* Body */}
      <section className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-10)' }}>
        <div className="wrap legal-grid">

          {/* TOC sidebar */}
          <aside className="legal-toc">
            <h4 className="legal-toc-heading">On this page</h4>
            {sections.map(s => (
              <button
                key={s.id}
                className={`legal-toc-link${active === s.id ? ' active' : ''}`}
                onClick={() => scrollTo(s.id)}
              >
                {s.h2}
              </button>
            ))}
          </aside>

          {/* Content */}
          <div className="legal-body">
            <div className="legal-updated">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" />
              </svg>
              Last updated · {updated}
            </div>
            {intro && (
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-loose)', color: 'var(--fg-2)', borderLeft: '3px solid var(--blush-300)', paddingLeft: 'var(--s-5)', marginBottom: 'var(--s-10)' }}>
                {intro}
              </p>
            )}
            {sections.map(s => (
              <div key={s.id} className="legal-section">
                <h2 id={s.id}>{s.h2}</h2>
                {s.body}
              </div>
            ))}

            {/* Footer CTA */}
            <div className="legal-cta">
              <div>
                <p className="legal-cta-title">Questions about this?</p>
                <p className="legal-cta-sub">We answer everything personally. Email or call us, no robots.</p>
              </div>
              <Link className="btn-ghost" href="/contact">Contact us →</Link>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
