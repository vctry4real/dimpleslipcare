/* global React, ScrubJar, GlossBottle, OilDropper, LipIcon */

const SITE_PRODUCTS = [
  {
    nm: "Sugar Lip Scrub",
    blurb: "Sweet polish in a pot.",
    price: "₦6,500",
    meta: "15g · Strawberry & cane",
    badge: null,
    rating: "★ ★ ★ ★ ★ · 412",
    art: () => <ScrubJar scale={0.95} label="Sugar"/>,
  },
  {
    nm: "Velvet Lip Balm",
    blurb: "Daily comfort, never sticky.",
    price: "₦5,000",
    meta: "10g · Shea + cocoa kiss",
    badge: "Best-seller",
    rating: "★ ★ ★ ★ ★ · 1.2k",
    art: () => <GlossBottle scale={0.85} label="Velvet" capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"/>,
  },
  {
    nm: "Glass Lip Gloss",
    blurb: "Mirror-shine, zero tack.",
    price: "₦8,500",
    meta: "8ml · Vanilla kiss",
    badge: null,
    rating: "★ ★ ★ ★ ★ · 312",
    art: () => <GlossBottle scale={0.9} label="Glass"/>,
  },
  {
    nm: "Petal Lip Oil",
    blurb: "Dewy nourishment in a drop.",
    price: "₦12,000",
    meta: "6ml · Jojoba + rosehip",
    badge: "New",
    rating: "★ ★ ★ ★ ★ · 184",
    art: () => <OilDropper scale={0.95} label="Petal"/>,
  },
  {
    nm: "Pink Lips Treatment",
    blurb: "Softer, even-toned lips.",
    price: "₦15,000",
    meta: "30ml · 4-week regimen",
    badge: null,
    rating: "★ ★ ★ ★ ★ · 87",
    art: () => <LipIcon scale={2.4}/>,
  },
  {
    nm: "The Ritual Set",
    blurb: "All four staples, saved 15%.",
    price: "₦26,000",
    meta: "Limited · Gift-ready box",
    badge: "Bundle",
    rating: "★ ★ ★ ★ ★ · 209",
    art: () => (
      <div style={{ display: "flex", alignItems: "flex-end", gap: -4 }}>
        <div style={{ transform: "rotate(-6deg)" }}><GlossBottle scale={0.55} label=""/></div>
        <div style={{ marginLeft: -8, marginRight: -8, zIndex: 1 }}><ScrubJar scale={0.55} label=""/></div>
        <div style={{ transform: "rotate(8deg)" }}><OilDropper scale={0.55} label=""/></div>
      </div>
    ),
  },
];

function ProductsSection({ onAdd }) {
  return (
    <section className="surface products" id="shop">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Our Products</div>
            <h2>A daily lip ritual,<br/>hand-poured for you.</h2>
          </div>
          <p className="right">Each batch is mixed by hand in our Lagos studio. We make small, sell small, restock fast — so what reaches your lips is always fresh.</p>
        </div>
        <div className="products-grid">
          {SITE_PRODUCTS.map((p, i) => (
            <a className="product-card" key={i} href="product.html" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="photo">
                <div className="sheen"></div>
                {p.badge && <span className="badge">{p.badge}</span>}
                <span className="price-pill">{p.price}</span>
                {p.art()}
              </div>
              <h3>{p.nm}</h3>
              <p className="blurb">{p.blurb}</p>
              <div className="row">
                <span className="stars">{p.rating}</span>
                <button className="add" onClick={(e)=>{ e.preventDefault(); e.stopPropagation(); onAdd?.(p.nm); }}>Add to bag →</button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ProductsSection = ProductsSection;
