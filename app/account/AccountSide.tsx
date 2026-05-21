'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { MOCK_USER } from '../data/account'

const NAV = [
  {
    href: '/account',
    label: 'Overview',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="2" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="2" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="2" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="10" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    href: '/account/orders',
    label: 'Orders',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 5h12M3 9h12M3 13h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    href: '/account/saved',
    label: 'Saved',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 15s-6-4.35-6-8a4 4 0 0 1 6-3.44A4 4 0 0 1 15 7c0 3.65-6 8-6 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    href: '/account/addresses',
    label: 'Addresses',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 2a5 5 0 0 1 5 5c0 3.5-5 9-5 9S4 10.5 4 7a5 5 0 0 1 5-5Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="9" cy="7" r="1.5" stroke="currentColor" strokeWidth="1.3"/>
      </svg>
    ),
  },
  {
    href: '/account/settings',
    label: 'Settings',
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 1.5v2M9 14.5v2M1.5 9h2M14.5 9h2M3.7 3.7l1.4 1.4M12.9 12.9l1.4 1.4M14.3 3.7l-1.4 1.4M5.1 12.9l-1.4 1.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function AccountSide() {
  const pathname = usePathname()

  const isActive = (href: string) =>
    href === '/account' ? pathname === '/account' : pathname.startsWith(href)

  const initials = `${MOCK_USER.firstName[0]}${MOCK_USER.lastName[0]}`

  return (
    <aside className="acct-side">
      <div className="acct-avatar">{initials}</div>
      <div className="acct-name">{MOCK_USER.firstName} {MOCK_USER.lastName}</div>
      <div className="acct-email">{MOCK_USER.email}</div>

      <nav>
        <ul className="acct-nav">
          {NAV.map(item => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`acct-nav-link${isActive(item.href) ? ' active' : ''}`}
              >
                <span className="acct-nav-icon">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button className="acct-signout" onClick={() => alert('Sign out coming soon.')}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M5 2H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3M9 10l3-3-3-3M12 7H5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Sign out
      </button>
    </aside>
  )
}
