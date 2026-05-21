'use client'

import { useState } from 'react'
import Link from 'next/link'

type CatId = 'shipping' | 'returns' | 'products' | 'ingredients' | 'orders' | 'trainings'

interface FaqEntry { q: string; a: string }
interface FaqCat { id: CatId; label: string; icon: React.ReactNode }

const CATS: FaqCat[] = [
  {
    id: 'shipping', label: 'Shipping',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="14" height="12" rx="1" /><path d="M16 10h4l3 4v4h-7" /><circle cx="6" cy="18" r="2" /><circle cx="18" cy="18" r="2" /></svg>,
  },
  {
    id: 'returns', label: 'Returns',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2.5 0 4.7 1 6.3 2.6" /><path d="M21 4v6h-6" /></svg>,
  },
  {
    id: 'products', label: 'Products',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14l-1 12H6L5 8z" /><path d="M9 8a3 3 0 0 1 6 0" /></svg>,
  },
  {
    id: 'ingredients', label: 'Ingredients',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><circle cx="6" cy="8" r="2" /><circle cx="18" cy="8" r="2" /></svg>,
  },
  {
    id: 'orders', label: 'Orders',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18" /></svg>,
  },
  {
    id: 'trainings', label: 'Trainings',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-7 8-7s8 3 8 7" /></svg>,
  },
]

const ENTRIES: Record<CatId, FaqEntry[]> = {
  shipping: [
    { q: 'Where do you ship?', a: 'Everywhere in Nigeria via GIG and Kwik. Lagos orders typically arrive next-day; the rest of the country in 2–4 working days. We don\'t currently ship internationally — drop us a note if you\'d like that to change.' },
    { q: 'How fast do you process orders?', a: 'Orders placed before 1pm leave the studio the same day. Anything later goes out the next morning. You\'ll get a tracking link by email as soon as the courier collects.' },
    { q: 'Is shipping free?', a: 'Free for nationwide standard shipping over ₦25,000. Below that it\'s ₦2,500. Lagos express (next-day rider) and studio pickup are always available.' },
    { q: 'Can I pick up at the studio?', a: 'Yes — pick "Studio pickup" at checkout. We\'re at 42 Allen Avenue, Ikeja, open Mon–Fri 10–5. We\'ll text you when your bag is ready.' },
  ],
  returns: [
    { q: 'What\'s your returns policy?', a: 'Unopened products can be returned within 14 days of delivery for a full refund. Opened products can\'t be returned for hygiene reasons, but if anything arrives faulty or feels wrong, contact us and we\'ll make it right.' },
    { q: 'How do I start a return?', a: 'Email hello@dimples.co with your order number. We\'ll send a prepaid waybill within 24 hours and refund within 3 working days of receiving the parcel.' },
    { q: 'What about damaged items?', a: 'Photograph the damage as soon as you open the box and email us within 48 hours. We\'ll replace or refund at no cost — no need to send the original back.' },
  ],
  products: [
    { q: 'How long do products last?', a: 'Once opened, six to nine months. Unopened, twelve months from the batch date printed on the base. We make small batches weekly so most products reach you within three weeks of being poured.' },
    { q: 'Do you make custom batches?', a: 'For events, weddings, and corporate gifting — yes. Minimum order is fifty units. Email hello@dimples.co with what you have in mind.' },
    { q: 'Are your products safe for pregnancy?', a: 'All our formulas are pregnancy-safe — no retinol, no salicylic acid, no essential oils in the cautionary list. As always, check with your doctor if you have specific concerns.' },
  ],
  ingredients: [
    { q: 'Are your products cruelty-free?', a: 'Yes. We never test on animals, and our raw material suppliers don\'t either — we\'ve vetted every one of them.' },
    { q: 'Are your products vegan?', a: 'Most are. Our balms contain beeswax, which is not vegan. The glosses, oils, scrubs, and pink-lips treatment are all vegan.' },
    { q: 'Do you use synthetic fragrance?', a: 'Never. We scent our products with absolutes — actual extracts of vanilla, rose, mint, or coconut — listed by name on the INCI label.' },
    { q: 'Where can I see full INCI lists?', a: 'Every product page lists every ingredient. Tap "Full ingredients" on any product to see the complete INCI breakdown with plain-English explanations.' },
  ],
  orders: [
    { q: 'Can I change or cancel my order?', a: 'Within four hours of placing, yes — email us immediately. After that we\'ve usually started pouring and packing, and changes get tricky.' },
    { q: 'Can I track my order?', a: 'Yes. As soon as the courier collects your bag, you\'ll receive an email with a tracking link. You can also see live status in your account under Orders.' },
    { q: 'I never got my order. What now?', a: 'Sometimes couriers leave parcels with neighbours or at security. If your tracking shows delivered but it isn\'t with you, give us a ring — we\'ll chase it up.' },
  ],
  trainings: [
    { q: 'Who can take the trainings?', a: 'Anyone serious about starting their own lipcare brand. You don\'t need a chemistry background, but you do need to be ready to commit twelve weeks.' },
    { q: 'What\'s the cohort size?', a: 'Eight seats per cohort. Small enough that we can do hands-on bench work together and review every founder\'s brand 1:1.' },
    { q: 'When\'s the next cohort?', a: 'April 2026. A few seats remain. See the full programme on the Trainings page.' },
  ],
}

export default function FaqContent() {
  const [cat, setCat] = useState<CatId>('shipping')
  const [openIdx, setOpenIdx] = useState<number>(0)

  function handleCat(id: CatId) {
    setCat(id)
    setOpenIdx(0)
  }

  const entries = ENTRIES[cat]
  const catLabel = CATS.find(c => c.id === cat)!.label

  return (
    <>
      {/* Hero */}
      <section className="page-hero page-hero--white" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ paddingBottom: 'var(--s-10)' }}>
          <nav style={{ fontFamily: 'var(--font-sans)', fontSize: 12, color: 'var(--fg-3)', display: 'flex', gap: 6, alignItems: 'center', marginBottom: 'var(--s-8)', paddingTop: 'var(--s-5)' }}>
            <a href="/" style={{ color: 'var(--fg-3)' }}>Home</a>
            <span>›</span>
            <span style={{ color: 'var(--fg-1)' }}>Help &amp; FAQ</span>
          </nav>
          <div className="faq-hero-grid">
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(40px, 5vw, 68px)', fontWeight: 400, letterSpacing: 'var(--tracking-tight)', lineHeight: 1.05, margin: 0, color: 'var(--fg-1)' }}>
              Help &amp;{' '}
              <em className="script" style={{ fontFamily: 'var(--font-script)', fontStyle: 'normal' }}>answers.</em>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--size-body)', lineHeight: 'var(--lh-base)', color: 'var(--fg-2)', maxWidth: 440, margin: 0 }}>
              The questions we hear the most, sorted by topic. If you don&apos;t see yours below, our line is always open — we answer everything personally.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="surface" style={{ background: 'var(--bg)', paddingTop: 'var(--s-10)' }}>
        <div className="wrap faq-side-grid">

          {/* Sidebar */}
          <aside className="faq-cats">
            <h4 className="faq-cats-heading">Topics</h4>
            {CATS.map(c => (
              <button
                key={c.id}
                className={`faq-cat${cat === c.id ? ' active' : ''}`}
                onClick={() => handleCat(c.id)}
              >
                <span className="faq-cat-ic">{c.icon}</span>
                <span className="faq-cat-label">{c.label}</span>
                <span className="faq-cat-count">{ENTRIES[c.id].length}</span>
              </button>
            ))}

            <div className="faq-still-stuck">
              <div className="faq-stuck-title">Still stuck?</div>
              <p>Pick up the phone or drop us a DM. We genuinely don&apos;t mind questions.</p>
              <Link href="/contact">Contact us →</Link>
            </div>
          </aside>

          {/* Accordion */}
          <div className="faq-body">
            <div className="faq-body-header">
              <h2 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, fontSize: 'clamp(28px, 3vw, 40px)', color: 'var(--fg-1)', margin: 0 }}>
                {catLabel}
              </h2>
              <span className="faq-count">{entries.length} questions</span>
            </div>

            <div className="faq-accordion">
              {entries.map((item, i) => {
                const isOpen = openIdx === i
                return (
                  <div className={`faq-acc-item${isOpen ? ' open' : ''}`} key={cat + i}>
                    <button
                      className="faq-acc-q"
                      onClick={() => setOpenIdx(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.q}</span>
                      <span className="faq-acc-toggle">
                        {isOpen
                          ? <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14" /></svg>
                          : <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
                        }
                      </span>
                    </button>
                    {isOpen && (
                      <div className="faq-acc-a">
                        <p>{item.a}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
