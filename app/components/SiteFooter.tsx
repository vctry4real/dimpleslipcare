import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="brand">
          <div className="name">Dimples</div>
          <p>Hand-poured lipcare from one tiny pink studio in Lagos. Scrubs, balms, glosses, oils, and a treatment that actually works.</p>
        </div>
        <div>
          <h5>Shop</h5>
          <Link href="/shop">All products</Link>
          <Link href="/shop">Scrubs &amp; balms</Link>
          <Link href="/shop">Glosses &amp; oils</Link>
          <Link href="/shop">Treatments</Link>
          <Link href="/gift-cards">Gift cards</Link>
          <Link href="/wholesale">Wholesale &amp; gifting</Link>
        </div>
        <div>
          <h5>Learn</h5>
          <Link href="/trainings">Trainings</Link>
          <Link href="/ritual">The Ritual</Link>
          <Link href="/journal">Journal</Link>
          <Link href="/about">Our Story</Link>
        </div>
        <div>
          <h5>Care</h5>
          <Link href="/contact">Contact us</Link>
          <Link href="/account">Account</Link>
          <Link href="/orders">My orders</Link>
          <Link href="/cart">Bag</Link>
          <Link href="/faq">Help &amp; FAQ</Link>
        </div>
      </div>
      <div className="wrap smallprint">
        <div>© 2026 Dimples Lipcare · Lagos, Nigeria</div>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <a href="https://instagram.com/Dimples_lipcare" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://tiktok.com/@Dimples_lipcare" target="_blank" rel="noopener noreferrer">TikTok</a>
        </div>
      </div>
    </footer>
  )
}
