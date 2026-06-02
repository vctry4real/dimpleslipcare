import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import TermsContent from './TermsContent'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that govern buying from Dimples Lipcare — orders, shipping, returns, trainings, and your rights. Governed by Nigerian law.',
  openGraph: {
    title: 'Terms of Service — Dimples Lipcare',
    url: 'https://dimplesbeauty.vctry4real.dev/terms',
  },
}

export default function TermsPage() {
  return (
    <div className="site">
      <SiteHeader />
      <TermsContent />
      <SiteFooter />
    </div>
  )
}
