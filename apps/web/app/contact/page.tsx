import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import ContactPageClient from './ContactPageClient'

export const metadata: Metadata = {
  title: 'Contact Us | Dimples Lipcare',
  description: "We're a tiny team and we actually read everything. Reach us on WhatsApp, call us, or drop a message. Lagos hours: 9am–6pm WAT, Monday to Saturday.",
  openGraph: {
    title: 'Contact Dimples Lipcare',
    description: "We're a tiny team. We actually read everything.",
    url: 'https://dimpleslipcare.com/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="site">
      <SiteHeader />

      <section className="page-hero">
        <div className="wrap">
          <div className="eyebrow">Get in touch</div>
          <h1>We&apos;re a tiny team.<br />We actually read everything.</h1>
          <p>Drop us a message below or reach us directly on WhatsApp. Lagos hours: 9am–6pm WAT, Monday to Saturday.</p>
        </div>
      </section>

      <ContactPageClient />

      <SiteFooter />
    </div>
  )
}
