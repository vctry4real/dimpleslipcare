/* global React, LegalShell */

function TermsPage() {
  const sections = [
    {
      id: "agreement",
      h2: "1. About these terms",
      body: <>
        <p>By using <a href="index.html">dimples.co</a> or buying from us, you agree to these terms. They cover everything we do — selling product, running trainings, sending you emails. If you don't agree with any part, please don't use the site.</p>
        <p>"You" means you. "We", "us", "Dimples" means Dimples Lipcare Ltd, a Nigerian limited company at 42 Allen Avenue, Ikeja, Lagos.</p>
      </>,
    },
    {
      id: "account",
      h2: "2. Your account",
      body: <>
        <p>You can browse and buy without an account, but creating one stores your bag, addresses, and order history. You're responsible for keeping your password to yourself. If someone uses your account, you're responsible for what they buy — so don't share it.</p>
        <p>We can suspend or delete an account if it's being used to abuse the site or our staff. We'll always email you first to explain why.</p>
      </>,
    },
    {
      id: "buying",
      h2: "3. Buying from us",
      body: <>
        <p>When you place an order, you're making us an offer to buy. We accept the moment we charge your payment method. Until then, we may decline an order for any reasonable reason — stock-out, suspected fraud, an obviously wrong price.</p>
        <ul>
          <li>All prices on the site are in Nigerian naira (₦), including VAT.</li>
          <li>Shipping is added at checkout. The total you see is the total you pay.</li>
          <li>We hand-pour in small batches, so occasionally we sell through faster than the site catches up. If that happens, we'll email you within four hours and refund immediately.</li>
        </ul>
        <div className="note">
          <strong>Pricing mistakes</strong>
          If a price on the site is obviously wrong (a ₦5,000 product shown for ₦50), we reserve the right to cancel and refund. We'll always tell you what happened.
        </div>
      </>,
    },
    {
      id: "shipping",
      h2: "4. Shipping & delivery",
      body: <>
        <p>We ship across Nigeria via GIG and Kwik. Standard shipping is free over ₦25,000, otherwise ₦2,500. Lagos express (next-day) is ₦2,500. Studio pickup is free with an appointment.</p>
        <p>Orders placed before 1pm Lagos time ship the same day; everything after goes the next morning. Most orders arrive within 2–4 working days.</p>
        <p>Risk of loss transfers to you when the courier collects the parcel. If a parcel doesn't arrive, contact us within 14 days and we'll chase it with the carrier. If it's lost in transit (not just delayed), we'll replace or refund.</p>
      </>,
    },
    {
      id: "returns",
      h2: "5. Returns & refunds",
      body: <>
        <p>Unopened products can be returned within 14 days of delivery for a full refund. Opened products can't be returned — they touch your lips, we can't resell them. That's not stinginess, it's hygiene.</p>
        <p>If a product arrives damaged or faulty, photograph the issue within 48 hours and email us. We'll replace or refund without needing the original back.</p>
        <p>Refunds are processed within three working days of us receiving the parcel (or the photo, for damaged items) and reach your card within 7–10 working days, depending on your bank.</p>
        <p>Gift cards, sale items, and personalised wedding-favour orders are non-refundable.</p>
      </>,
    },
    {
      id: "trainings",
      h2: "6. Trainings programme",
      body: <>
        <p>Our trainings programme has its own specific terms in addition to these.</p>
        <ul>
          <li>Tuition is non-refundable once your cohort has started. Before the cohort starts, you can transfer your seat to the next one or refund less a 10% admin fee.</li>
          <li>Recipes you create during the programme are yours to use, modify, sell, or rebrand — we make no claim on them.</li>
          <li>The supplier directory and circle are for personal/business use only. Don't share it publicly.</li>
          <li>Certificates are issued by Dimples Studio Lagos. They're not state-accredited — they're a record that you completed our programme.</li>
        </ul>
      </>,
    },
    {
      id: "rewards",
      h2: "7. Rewards programme",
      body: <>
        <p>Members earn points on orders and milestones (see the <a href="rewards.html">Rewards page</a> for current rates). Points have no monetary value until redeemed. We can change earn rates and redemption costs with 30 days' notice.</p>
        <p>Points expire if your account is inactive for 24 months. We'll email two warnings before that happens.</p>
        <p>Points and tier status can't be transferred, sold, or used by anyone else.</p>
      </>,
    },
    {
      id: "ip",
      h2: "8. Intellectual property",
      body: <>
        <p>The Dimples name, logo, photography, copy, and product designs are ours. Don't use them on your own products or website without written permission.</p>
        <p>The exception is journalism, reviews, and unboxing content — please share away. Tag us if you like.</p>
        <p>If you submit a review, photo, or testimonial, you give us a worldwide licence to use it on our site and marketing channels. You keep the copyright; we just get to share it.</p>
      </>,
    },
    {
      id: "liability",
      h2: "9. Liability",
      body: <>
        <p>Our products are cosmetics, not medical treatments. Patch-test before use, follow the instructions, and stop if you have a reaction. We can't be held liable for allergic reactions to listed ingredients — they're on every label for a reason.</p>
        <p>Beyond that, our maximum liability for any order is the amount you paid for it. We're not liable for indirect or consequential losses (lost business, missed events) caused by delayed delivery.</p>
        <p>Nothing in these terms limits liability for things the law says can't be limited — death, personal injury caused by negligence, fraud.</p>
      </>,
    },
    {
      id: "changes",
      h2: "10. Changes & disputes",
      body: <>
        <p>We can update these terms — but if we change something that affects existing customers (returns window, training terms), we'll email everyone with an account 30 days before it takes effect.</p>
        <p>These terms are governed by the laws of the Federal Republic of Nigeria. Any dispute we can't sort out with a phone call goes to the courts of Lagos State.</p>
        <p>Questions? <a href="mailto:hello@dimples.co">hello@dimples.co</a> — we read every email.</p>
      </>,
    },
  ];

  return (
    <LegalShell
      title="Terms of service"
      breadcrumb="Terms"
      updated="February 14, 2026"
      intro="The legal version of what we already say in plain English on the rest of the site. If anything below contradicts what we tell you on a product page or in an email, the friendlier version wins."
      sections={sections}
    />
  );
}

window.TermsPage = TermsPage;
