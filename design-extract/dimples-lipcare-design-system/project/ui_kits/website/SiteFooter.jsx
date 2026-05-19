/* global React */

function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div className="brand">
          <div className="name">Dimples</div>
          <p>Hand-poured lipcare from one tiny pink studio in Lagos. Scrubs, balms, glosses, oils, and a treatment that actually works.</p>
        </div>
        <div>
          <h5>Shop</h5>
          <a href="shop.html">All products</a>
          <a href="shop.html">Scrubs &amp; balms</a>
          <a href="shop.html">Glosses &amp; oils</a>
          <a href="shop.html">Treatments</a>
          <a href="gift-cards.html">Gift cards</a>
          <a href="wholesale.html">Wholesale &amp; gifting</a>
        </div>
        <div>
          <h5>Learn</h5>
          <a href="trainings.html">Trainings</a>
          <a href="ritual.html">The Ritual</a>
          <a href="journal.html">Journal</a>
          <a href="about.html">Our Story</a>
        </div>
        <div>
          <h5>Care</h5>
          <a href="contact.html">Contact us</a>
          <a href="account.html">Account</a>
          <a href="orders.html">My orders</a>
          <a href="cart.html">Bag</a>
          <a href="faq.html">Help &amp; FAQ</a>
        </div>
      </div>
      <div className="wrap smallprint">
        <div>© 2026 Dimples Lipcare · Lagos, Nigeria</div>
        <div>
          <a href="privacy.html">Privacy</a>
          <a href="terms.html">Terms</a>
          <a href="https://instagram.com/Dimples_lipcare">Instagram</a>
          <a href="https://tiktok.com/@Dimples_lipcare">TikTok</a>
        </div>
      </div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
