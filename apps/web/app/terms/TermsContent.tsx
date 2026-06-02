'use client'

import LegalShell, { type LegalSection } from '../components/LegalShell'

const sections: LegalSection[] = [
  {
    id: 'agreement',
    h2: '1. About these terms',
    body: (
      <>
        <p>By using dimplesbeauty.vctry4real.dev or buying from us, you agree to these terms. They cover everything we do — selling product, running trainings, sending you emails. If you don&apos;t agree with any part, please don&apos;t use the site.</p>
        <p>&ldquo;You&rdquo; means you. &ldquo;We&rdquo;, &ldquo;us&rdquo;, &ldquo;Dimples&rdquo; means Dimples Lipcare Ltd, a Nigerian limited company at 42 Allen Avenue, Ikeja, Lagos.</p>
      </>
    ),
  },
  {
    id: 'account',
    h2: '2. Your account',
    body: (
      <>
        <p>You can browse and buy without an account, but creating one stores your bag, addresses, and order history. You&apos;re responsible for keeping your password to yourself. If someone uses your account, you&apos;re responsible for what they buy — so don&apos;t share it.</p>
        <p>We can suspend or delete an account if it&apos;s being used to abuse the site or our staff. We&apos;ll always email you first to explain why.</p>
      </>
    ),
  },
  {
    id: 'buying',
    h2: '3. Buying from us',
    body: (
      <>
        <p>When you place an order, you&apos;re making us an offer to buy. We accept the moment we charge your payment method. Until then, we may decline an order for any reasonable reason — stock-out, suspected fraud, an obviously wrong price.</p>
        <ul>
          <li>All prices on the site are in Nigerian naira (₦), including VAT.</li>
          <li>Shipping is added at checkout. The total you see is the total you pay.</li>
          <li>We hand-pour in small batches, so occasionally we sell through faster than the site catches up. If that happens, we&apos;ll email you within four hours and refund immediately.</li>
        </ul>
        <div className="legal-note">
          <strong>Pricing mistakes</strong>
          <p>If a price on the site is obviously wrong, we reserve the right to cancel and refund. We&apos;ll always tell you what happened.</p>
        </div>
      </>
    ),
  },
  {
    id: 'shipping',
    h2: '4. Shipping &amp; delivery',
    body: (
      <>
        <p>We ship across Nigeria via GIG and Kwik. Standard shipping is free over ₦25,000, otherwise ₦2,500. Lagos express (next-day) is ₦2,500. Studio pickup is free with an appointment.</p>
        <p>Orders placed before 1pm Lagos time ship the same day; everything after goes the next morning. Most orders arrive within 2–4 working days.</p>
        <p>Risk of loss transfers to you when the courier collects the parcel. If a parcel doesn&apos;t arrive, contact us within 14 days and we&apos;ll chase it with the carrier. If it&apos;s lost in transit (not just delayed), we&apos;ll replace or refund.</p>
      </>
    ),
  },
  {
    id: 'returns',
    h2: '5. Returns &amp; refunds',
    body: (
      <>
        <p>Unopened products can be returned within 14 days of delivery for a full refund. Opened products can&apos;t be returned — they touch your lips, we can&apos;t resell them. That&apos;s not stinginess, it&apos;s hygiene.</p>
        <p>If a product arrives damaged or faulty, photograph the issue within 48 hours and email us. We&apos;ll replace or refund without needing the original back.</p>
        <p>Refunds are processed within three working days of us receiving the parcel and reach your card within 7–10 working days, depending on your bank.</p>
        <p>Gift cards, sale items, and personalised orders are non-refundable.</p>
      </>
    ),
  },
  {
    id: 'trainings',
    h2: '6. Trainings programme',
    body: (
      <>
        <p>Our trainings programme has its own specific terms in addition to these.</p>
        <ul>
          <li>Tuition is non-refundable once your cohort has started. Before it starts, you can transfer your seat to the next cohort or refund less a 10% admin fee.</li>
          <li>Recipes you create during the programme are yours to use, modify, sell, or rebrand — we make no claim on them.</li>
          <li>The supplier directory and circle are for personal/business use only. Don&apos;t share it publicly.</li>
          <li>Certificates are issued by Dimples Studio Lagos. They&apos;re not state-accredited — they&apos;re a record that you completed our programme.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'ip',
    h2: '7. Intellectual property',
    body: (
      <>
        <p>The Dimples name, logo, photography, copy, and product designs are ours. Don&apos;t use them on your own products or website without written permission.</p>
        <p>The exception is journalism, reviews, and unboxing content — please share away. Tag us if you like.</p>
        <p>If you submit a review, photo, or testimonial, you give us a worldwide licence to use it on our site and marketing channels. You keep the copyright; we just get to share it.</p>
      </>
    ),
  },
  {
    id: 'liability',
    h2: '8. Liability',
    body: (
      <>
        <p>Our products are cosmetics, not medical treatments. Patch-test before use, follow the instructions, and stop if you have a reaction. We can&apos;t be held liable for allergic reactions to listed ingredients — they&apos;re on every label for a reason.</p>
        <p>Beyond that, our maximum liability for any order is the amount you paid for it. We&apos;re not liable for indirect or consequential losses caused by delayed delivery.</p>
        <p>Nothing in these terms limits liability for things the law says can&apos;t be limited — death, personal injury caused by negligence, fraud.</p>
      </>
    ),
  },
  {
    id: 'changes',
    h2: '9. Changes &amp; disputes',
    body: (
      <>
        <p>We can update these terms — but if we change something that affects existing customers, we&apos;ll email everyone with an account 30 days before it takes effect.</p>
        <p>These terms are governed by the laws of the Federal Republic of Nigeria. Any dispute we can&apos;t sort out with a phone call goes to the courts of Lagos State.</p>
        <p>Questions? <a href="mailto:hello@dimples.co">hello@dimples.co</a> — we read every email.</p>
      </>
    ),
  },
]

export default function TermsContent() {
  return (
    <LegalShell
      title="Terms of service"
      breadcrumb="Terms"
      updated="February 14, 2026"
      intro="The legal version of what we already say in plain English on the rest of the site. If anything below contradicts what we tell you on a product page or in an email, the friendlier version wins."
      sections={sections}
    />
  )
}
