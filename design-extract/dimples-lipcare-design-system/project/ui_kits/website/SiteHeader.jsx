/* global React */

/**
 * SiteHeader — used across all pages. Nav items link to real pages.
 * Pass `active` prop with the current page id to highlight that nav item.
 * Pass `onBag` to handle bag click; otherwise navigates to shop.
 */
function SiteHeader({ bagCount = 0, active = null, onBag }) {
  const navItems = [
    { id: "shop",      label: "Shop",      href: "shop.html" },
    { id: "ritual",    label: "Ritual",    href: "ritual.html" },
    { id: "trainings", label: "Trainings", href: "trainings.html" },
    { id: "contact",   label: "Contact",   href: "contact.html" },
  ];
  return (
    <header className="header">
      <div className="wrap header-inner">
        <a className="logo" href="index.html">
          <img src="../../assets/logo-monogram.svg" alt="Dimples monogram"/>
          <div>
            <div className="name">Dimples</div>
            <div className="sub">Lipcare</div>
          </div>
        </a>
        <nav>
          {navItems.map(n => (
            <a key={n.id} href={n.href} className={active === n.id ? "is-active" : ""}>{n.label}</a>
          ))}
        </nav>
        <div className="header-right">
          <a className="icon-btn" aria-label="Search" href="search.html">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          </a>
          <a className="icon-btn" aria-label="Account" href="account.html">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></svg>
          </a>
          <a className="icon-btn bag-btn" aria-label="Bag" href="cart.html" onClick={onBag ? (e)=>{e.preventDefault(); onBag();} : undefined}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></svg>
            {bagCount > 0 && <span className="count">{bagCount}</span>}
          </a>
          <a className="book-btn" href="trainings.html">Book a training</a>
        </div>
      </div>
    </header>
  );
}

window.SiteHeader = SiteHeader;
