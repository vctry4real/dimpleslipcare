import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import PrivacyContent from './PrivacyContent'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How Dimples Lipcare collects, uses, and protects your data. In plain English: we hold the minimum we need to run the shop. We never sell it, rarely share it.',
  openGraph: {
    title: 'Privacy Policy — Dimples Lipcare',
    url: 'https://dimplesbeauty.vctry4real.dev/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <div className="site">
      <SiteHeader />
      <PrivacyContent />
      <SiteFooter />
    </div>
  )
}
