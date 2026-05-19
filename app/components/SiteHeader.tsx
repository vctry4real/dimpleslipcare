'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useCart } from '../context/CartContext'

const navItems = [
  { id: 'shop',      label: 'Shop',      href: '/shop' },
  { id: 'ritual',    label: 'Ritual',    href: '/ritual' },
  { id: 'trainings', label: 'Trainings', href: '/trainings' },
  { id: 'contact',   label: 'Contact',   href: '/contact' },
]

interface SiteHeaderProps {
  active?: string | null
}

export default function SiteHeader({ active = null }: SiteHeaderProps) {
  const { count, openCart } = useCart()

  return (
    <header className="header">
      <div className="wrap header-inner">
        <Link className="logo" href="/">
          <Image src="/assets/logo-monogram.svg" alt="Dimples monogram" width={40} height={40} />
          <div>
            <div className="name">Dimples</div>
            <div className="sub">Lipcare</div>
          </div>
        </Link>

        <nav>
          {navItems.map(n => (
            <Link key={n.id} href={n.href} className={active === n.id ? 'is-active' : ''}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="header-right">
          <Link className="icon-btn" aria-label="Search" href="/search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>
            </svg>
          </Link>
          <Link className="icon-btn" aria-label="Account" href="/account">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>
            </svg>
          </Link>
          <button
            className="icon-btn bag-btn"
            aria-label="Bag"
            onClick={openCart}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/>
            </svg>
            {count > 0 && <span className="count">{count}</span>}
          </button>
          <Link className="book-btn" href="/trainings">Book a training</Link>
        </div>
      </div>
    </header>
  )
}
