import type { Metadata } from 'next'
import { Suspense } from 'react'
import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'
import RegisterForm from './RegisterForm'

export const metadata: Metadata = {
  title: 'Create account',
  description: 'Create a Dimples Lipcare account to track orders, save addresses and earn rewards.',
  robots: { index: false, follow: false },
}

export default function RegisterPage() {
  return (
    <div className="site">
      <SiteHeader />
      <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
        <RegisterForm />
      </Suspense>
      <SiteFooter />
    </div>
  )
}
