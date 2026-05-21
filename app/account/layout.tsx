import type { Metadata } from 'next'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import AccountSide from './AccountSide'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="site">
      <SiteHeader />

      <section className="surface" style={{ background: 'var(--blush-50)', paddingTop: 'var(--s-5)', paddingBottom: 'var(--s-20)', minHeight: '70vh' }}>
        <div className="wrap">
          <div className="acct-shell">
            <AccountSide />
            <main className="acct-content">
              {children}
            </main>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}
