import type { Metadata } from 'next'
import { Suspense } from 'react'
import SiteHeader from '../../components/SiteHeader'
import SiteFooter from '../../components/SiteFooter'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: 'Sign in',
  description: 'Sign in to your Dimples Lipcare account.',
  robots: { index: false, follow: false },
}

export default function LoginPage() {
  return (
    <div className="site">
      <SiteHeader />
      <Suspense fallback={<div style={{ minHeight: '70vh' }} />}>
        <LoginForm />
      </Suspense>
      <SiteFooter />
    </div>
  )
}
