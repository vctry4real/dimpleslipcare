/* global React, Sparkle, Heart, GlossBottle, ScrubJar, OilDropper, LipIcon */

function ShopHero() {
  return (
    <section className="page-hero" style={{ padding: "72px 0 56px" }}>
      <Sparkle size={40} style={{ position: "absolute", top: 80, right: "8%" }} delay={0.4}/>
      <Heart size={32} style={{ position: "absolute", bottom: 64, right: "20%" }} delay={1.2}/>
      <div className="wrap">
        <div className="breadcrumb">
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <span>Shop</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "end" }}>
          <h1 style={{ marginBottom: 0 }}>
            All in one<br/>
            <span className="script">lipcare brand.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 440 }}>
            Five hand-poured staples and one bundle, each made in small batches in our Lagos studio. Restocks are fast, never frozen — so what reaches your lips is always fresh.
          </p>
        </div>
      </div>
    </section>
  );
}

const SHOP_CATEGORIES = [
  { id: "all", label: "All" },
  { id: "scrub", label: "Scrubs" },
  { id: "balm", label: "Balms" },
  { id: "gloss", label: "Glosses" },
  { id: "oil", label: "Oils" },
  { id: "treatment", label: "Treatments" },
  { id: "set", label: "Sets" },
];

const SHOP_CATALOG = [
  {
    cat: "scrub", nm: "Sugar Lip Scrub", blurb: "Sweet polish in a pot.", price: "₦6,500",
    meta: "15g · Strawberry & cane", badge: null, rating: "★ ★ ★ ★ ★ · 412",
    art: () => <ScrubJar scale={0.95} label="Sugar"/>,
  },
  {
    cat: "scrub", nm: "Brown-Sugar Scrub", blurb: "Deeper buff, vanilla finish.", price: "₦6,500",
    meta: "15g · Vanilla & brown sugar", badge: "New", rating: "★ ★ ★ ★ ★ · 91",
    art: () => <ScrubJar scale={0.95} label="Brown"/>,
  },
  {
    cat: "balm", nm: "Velvet Lip Balm", blurb: "Daily comfort, never sticky.", price: "₦5,000",
    meta: "10g · Shea + cocoa kiss", badge: "Best-seller", rating: "★ ★ ★ ★ ★ · 1.2k",
    art: () => <GlossBottle scale={0.85} label="Velvet" capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"/>,
  },
  {
    cat: "balm", nm: "Cocoa Tinted Balm", blurb: "A soft pink wash of color.", price: "₦5,500",
    meta: "10g · Sheer rose tint", badge: null, rating: "★ ★ ★ ★ ★ · 268",
    art: () => <GlossBottle scale={0.85} label="Cocoa" capColor="linear-gradient(180deg,#b88566,#5a1a2e)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #f0b8c2 50%, #d97189)"/>,
  },
  {
    cat: "gloss", nm: "Glass Lip Gloss", blurb: "Mirror-shine, zero tack.", price: "₦8,500",
    meta: "8ml · Vanilla kiss", badge: null, rating: "★ ★ ★ ★ ★ · 312",
    art: () => <GlossBottle scale={0.9} label="Glass"/>,
  },
  {
    cat: "gloss", nm: "Plump Lip Gloss", blurb: "A tingly, plumping pink.", price: "₦9,500",
    meta: "8ml · Mint plumper", badge: "New", rating: "★ ★ ★ ★ ★ · 142",
    art: () => <GlossBottle scale={0.9} label="Plump" capColor="linear-gradient(180deg,#d97189,#8c2d4a)"/>,
  },
  {
    cat: "oil", nm: "Petal Lip Oil", blurb: "Dewy nourishment in a drop.", price: "₦12,000",
    meta: "6ml · Jojoba + rosehip", badge: null, rating: "★ ★ ★ ★ ★ · 184",
    art: () => <OilDropper scale={0.95} label="Petal"/>,
  },
  {
    cat: "treatment", nm: "Pink Lips Treatment", blurb: "Softer, even-toned lips.", price: "₦15,000",
    meta: "30ml · 4-week regimen", badge: null, rating: "★ ★ ★ ★ ★ · 87",
    art: () => <LipIcon scale={2.4}/>,
  },
  {
    cat: "set", nm: "The Ritual Set", blurb: "All four staples, saved 15%.", price: "₦26,000",
    meta: "Limited · Gift-ready box", badge: "Bundle", rating: "★ ★ ★ ★ ★ · 209",
    art: () => (
      <div style={{ display: "flex", alignItems: "flex-end", gap: -4 }}>
        <div style={{ transform: "rotate(-6deg)" }}><GlossBottle scale={0.55} label=""/></div>
        <div style={{ marginLeft: -8, marginRight: -8, zIndex: 1 }}><ScrubJar scale={0.55} label=""/></div>
        <div style={{ transform: "rotate(8deg)" }}><OilDropper scale={0.55} label=""/></div>
      </div>
    ),
  },
];

function ShopCatalog({ onAdd }) {
  const [cat, setCat] = React.useState("all");
  const [sort, setSort] = React.useState("featured");

  let items = cat === "all" ? SHOP_CATALOG : SHOP_CATALOG.filter(p => p.cat === cat);
  if (sort === "low") items = [...items].sort((a,b) => parseInt(a.price.replace(/\D/g,"")) - parseInt(b.price.replace(/\D/g,"")));
  if (sort === "high") items = [...items].sort((a,b) => parseInt(b.price.replace(/\D/g,"")) - parseInt(a.price.replace(/\D/g,"")));

  return (
    <section className="surface products" style={{ background: "var(--bg-2)", paddingTop: 48 }}>
      <div className="wrap">
        <div className="shop-toolbar">
          <div className="shop-chips">
            {SHOP_CATEGORIES.map(c => (
              <button key={c.id} className={`shop-chip ${cat === c.id ? "active" : ""}`} onClick={() => setCat(c.id)}>
                {c.label}
              </button>
            ))}
          </div>
          <div className="shop-sort">
            <span>Sort</span>
            <select value={sort} onChange={(e) => setSort(e.target.value)}>
              <option value="featured">Featured</option>
              <option value="low">Price · low to high</option>
              <option value="high">Price · high to low</option>
            </select>
          </div>
        </div>

        <div className="products-grid">
          {items.map((p, i) => (
            <a className="product-card" key={p.nm + i} href="product.html" style={{ textDecoration: "none", color: "inherit" }}>
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

        {items.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 0", fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink-mute)" }}>
            Nothing in this category — yet. Check back at the next drop.
          </div>
        )}
      </div>
    </section>
  );
}

window.ShopHero = ShopHero;
window.ShopCatalog = ShopCatalog;
