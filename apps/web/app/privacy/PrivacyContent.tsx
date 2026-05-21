'use client'

import LegalShell, { type LegalSection } from '../components/LegalShell'

const sections: LegalSection[] = [
  {
    id: 'who-we-are',
    h2: 'Who we are',
    body: (
      <>
        <p>Dimples Lipcare Ltd (&ldquo;Dimples&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is a Nigerian limited company hand-pouring lipcare products from a small studio in Lagos. We&apos;re the data controller for everything you give us through this website, our Instagram and TikTok DMs, and the WhatsApp number printed on our packaging.</p>
        <p>Our registered address is 42 Allen Avenue, Ikeja, Lagos. You can reach us at <a href="mailto:hello@dimples.co">hello@dimples.co</a> or on the phone numbers listed under <a href="/contact">Contact</a>.</p>
      </>
    ),
  },
  {
    id: 'what-we-collect',
    h2: 'What we collect',
    body: (
      <>
        <p>We collect the smallest amount of data we can to actually run the shop. Specifically:</p>
        <ul>
          <li><strong>Account &amp; order information</strong> — name, email, phone, shipping addresses, payment confirmation (we never see your card number — that lives with Paystack).</li>
          <li><strong>Things you tell us</strong> — replies to our emails, DMs, reviews, training applications, returns enquiries.</li>
          <li><strong>How you use the site</strong> — pages visited, products viewed, items added to bag. Used to improve the experience, not sold to anyone.</li>
          <li><strong>Marketing preferences</strong> — what you&apos;ve opted in to (drops, journal, restocks), so we don&apos;t send things you didn&apos;t ask for.</li>
        </ul>
        <div className="legal-note">
          <strong>What we don&apos;t collect</strong>
          <p>We don&apos;t ask for your date of birth. We don&apos;t track you across other websites. We don&apos;t sell, rent, or share your contact info with third parties.</p>
        </div>
      </>
    ),
  },
  {
    id: 'why-we-use-it',
    h2: 'Why we use it',
    body: (
      <>
        <p>Every piece of data we hold has a job. We use your information to:</p>
        <ul>
          <li>Process your orders and send them to you.</li>
          <li>Reply to your messages, returns, and training applications.</li>
          <li>Send you emails you&apos;ve actively opted in to (and nothing else).</li>
          <li>Improve the website and the products themselves.</li>
          <li>Comply with Nigerian accounting and consumer-protection law.</li>
        </ul>
        <p>We don&apos;t make automated decisions that affect you legally. There&apos;s no scoring, no profiling, no advert-targeting beyond what you&apos;ve explicitly opted into.</p>
      </>
    ),
  },
  {
    id: 'your-rights',
    h2: 'Your rights',
    body: (
      <>
        <p>Under the Nigerian Data Protection Act (NDPA) 2023, you have the right to:</p>
        <ul>
          <li><strong>Access</strong> — ask for a copy of everything we hold about you.</li>
          <li><strong>Correct</strong> — fix anything that&apos;s wrong.</li>
          <li><strong>Delete</strong> — ask us to remove your data (we keep order receipts for accounting; everything else goes).</li>
          <li><strong>Object</strong> — withdraw marketing consent at any time. There&apos;s a one-click unsubscribe in every email.</li>
          <li><strong>Port</strong> — receive your data in a usable format to take elsewhere.</li>
        </ul>
        <p>To exercise any of these, email <a href="mailto:hello@dimples.co">hello@dimples.co</a>. We reply within seven working days.</p>
      </>
    ),
  },
  {
    id: 'third-parties',
    h2: 'Who else sees your data',
    body: (
      <>
        <p>A short list — every service we use, and why.</p>
        <ul>
          <li><strong>Paystack</strong> — processes your payment. We never see your card number.</li>
          <li><strong>GIG Logistics, Kwik</strong> — deliver your bag. They see only the address &amp; phone.</li>
          <li><strong>Mailchimp</strong> — sends the journal &amp; restock alerts. We export only your email.</li>
          <li><strong>Google Analytics</strong> — anonymous traffic stats. No personally-identifying data.</li>
        </ul>
        <p>That&apos;s it. We don&apos;t share your data with anyone else, ever.</p>
      </>
    ),
  },
  {
    id: 'cookies',
    h2: 'Cookies',
    body: (
      <>
        <p>We use a small number of cookies — none that track you between sites. Specifically:</p>
        <ul>
          <li><strong>Session</strong> — keeps you signed in.</li>
          <li><strong>Bag</strong> — remembers what&apos;s in your bag if you close the tab.</li>
          <li><strong>Preferences</strong> — your saved-for-later list, last-viewed products.</li>
          <li><strong>Analytics (anonymous)</strong> — Google Analytics, no personal identifier.</li>
        </ul>
        <p>You can clear or block cookies in your browser at any time. Some features (sign in, bag persistence) won&apos;t work without them.</p>
      </>
    ),
  },
  {
    id: 'retention',
    h2: 'How long we keep things',
    body: (
      <>
        <p>We keep your data only as long as we need it.</p>
        <ul>
          <li><strong>Account &amp; contact info</strong> — as long as your account is open. Deleted on request.</li>
          <li><strong>Order receipts</strong> — six years, as required for Nigerian tax accounting.</li>
          <li><strong>Marketing subscribers</strong> — until you unsubscribe.</li>
          <li><strong>Web analytics</strong> — 26 months, then aggregated.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'security',
    h2: 'How we keep it safe',
    body: (
      <>
        <p>We store data on servers managed by Vercel and Supabase, encrypted at rest and in transit. Only two people in the company have access to the customer database, and both use two-factor authentication. Payment data never touches our servers — Paystack handles every transaction.</p>
        <p>If there&apos;s ever a breach, we&apos;ll email everyone affected within 72 hours and tell you exactly what happened.</p>
      </>
    ),
  },
  {
    id: 'changes',
    h2: 'Changes to this policy',
    body: (
      <>
        <p>If we make a meaningful change to how we handle your data, we&apos;ll email everyone with an account at least 30 days before it takes effect. Small typo fixes won&apos;t trigger a notification.</p>
        <p>The version date at the top of this page is the source of truth.</p>
      </>
    ),
  },
]

export default function PrivacyContent() {
  return (
    <LegalShell
      title="Privacy policy"
      breadcrumb="Privacy"
      updated="February 14, 2026"
      intro="In plain English: we hold the minimum data we need to run the shop. We never sell it, rarely share it, and we'll tell you the moment anything changes."
      sections={sections}
    />
  )
}
