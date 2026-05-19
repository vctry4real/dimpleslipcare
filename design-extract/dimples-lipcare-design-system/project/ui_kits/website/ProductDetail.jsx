/* global React, Sparkle, Heart, GlossBottle, ScrubJar, OilDropper, LipIcon */

/**
 * Product detail page — Glass Lip Gloss as the showcase product.
 * In a real build this would be data-driven; here it's a high-fidelity static demo.
 */
function ProductDetail({ onAdd }) {
  const [variant, setVariant] = React.useState("Vanilla");
  const [qty, setQty] = React.useState(1);
  const [fav, setFav] = React.useState(false);
  const [thumb, setThumb] = React.useState(0);
  const [openAcc, setOpenAcc] = React.useState(0);

  const variants = ["Vanilla", "Strawberry", "Mint plump", "Bare gloss"];
  const thumbs = [
    () => <GlossBottle scale={1.7} label="Glass" />,
    () => <GlossBottle scale={1.4} label="Glass" capColor="linear-gradient(180deg,#b88566,#5a1a2e)" />,
    () => <ScrubJar scale={1.2} label="Sugar"/>,
    () => <OilDropper scale={1.4} label="Petal"/>,
  ];

  const accordion = [
    {
      q: "How it feels",
      a: "Cushioned, glassy, never tacky. Layers cleanly over our Velvet Balm; sits beautifully on bare lips too. Reapply through the day without that sticky-build-up other glosses leave behind."
    },
    {
      q: "Full ingredients (INCI)",
      a: (
        <div className="ingredient-list">
          <span>Caprylic/Capric Triglyceride <em>Plant emollient</em></span>
          <span>Ricinus Communis (Castor) Oil <em>Shine</em></span>
          <span>Hydrogenated Polyisobutene <em>Cushion</em></span>
          <span>Butyrospermum Parkii (Shea) <em>Hydration</em></span>
          <span>Cera Alba (Beeswax) <em>Structure</em></span>
          <span>Tocopherol <em>Vitamin E</em></span>
          <span>Mica · Iron Oxides <em>Sheer pearl</em></span>
          <span>Aroma (Vanilla absolute) <em>Scent</em></span>
        </div>
      ),
    },
    {
      q: "How to use",
      a: "Glide the wand across clean or balmed lips. Press together once. For the longest-wearing finish, layer over our Velvet Balm. Reapply as desired — the formula is gentle enough for all-day wear."
    },
    {
      q: "Shipping & returns",
      a: "Ships within 24 hours from our Lagos studio. Nationwide delivery in 2–4 working days via GIG & Kwik. Unopened products can be returned within 14 days for a full refund."
    },
  ];

  const reviews = [
    { stars: 5, quote: "Truest mirror-shine I've ever found in a Nigerian-made gloss. The vanilla is so subtle and grown-up.", by: "Adaeze · Lagos · Verified" },
    { stars: 5, quote: "I keep one in every bag. Never tacky, never gummy in my hair on a windy day. Holy grail.", by: "Tomi A. · Abuja · Verified" },
    { stars: 4, quote: "Wanted slightly more pigment but the formula itself is faultless. Will repurchase.", by: "Funke O. · Lagos · Verified" },
  ];

  return (
    <section className="pdp">
      <div className="wrap pdp-grid">

        {/* Gallery */}
        <div className="pdp-gallery">
          <div className="pdp-main">
            <span className="corner-tag">Hand-poured · Batch 24</span>
            <Sparkle size={32} style={{ position: "absolute", top: 60, right: 60 }} delay={0.2}/>
            <Sparkle size={24} style={{ position: "absolute", bottom: 100, left: 50 }} delay={1.4}/>
            <Heart size={26} style={{ position: "absolute", top: 110, left: 60 }} delay={0.7}/>
            <div>{thumbs[thumb]()}</div>
          </div>
          <div className="pdp-thumbs">
            {thumbs.map((render, i) => (
              <div key={i} className={`pdp-thumb ${thumb === i ? "active" : ""}`} onClick={() => setThumb(i)}>
                <div style={{ transform: "scale(0.45)" }}>{render()}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="pdp-info">
          <div className="crumbs">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="shop.html">Shop</a>
            <span className="sep">/</span>
            <span>Glass Lip Gloss</span>
          </div>

          <h1>Glass Lip Gloss</h1>
          <p className="tagline">Mirror-shine, zero tack.</p>

          <div className="pdp-meta-row">
            <span className="stars">★ ★ ★ ★ ★</span>
            <span>312 reviews</span>
            <span style={{ marginLeft: "auto", color: "var(--ink-mute)", fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase" }}>8ml · 0.27 fl oz</span>
          </div>

          <div className="pdp-price-row">
            <span className="pdp-price">₦8,500</span>
            <span className="pdp-price-was">₦10,000</span>
          </div>
          <span className="pdp-stock">In stock · ships within 24 hours</span>

          <div className="pdp-variants">
            <span className="label">Scent</span>
            <div className="swatches">
              {variants.map(v => (
                <button key={v} className={`pdp-swatch ${variant === v ? "active" : ""}`} onClick={() => setVariant(v)}>{v}</button>
              ))}
            </div>
          </div>

          <div className="pdp-qty-add">
            <div className="pdp-qty">
              <button onClick={() => setQty(Math.max(1, qty - 1))} aria-label="decrease">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14"/></svg>
              </button>
              <span className="v">{qty}</span>
              <button onClick={() => setQty(qty + 1)} aria-label="increase">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
              </button>
            </div>
            <button className="pdp-add" onClick={() => onAdd?.(`Glass Lip Gloss · ${variant}`)}>
              Add to bag · ₦{(8500 * qty).toLocaleString()}
            </button>
            <button className={`pdp-fav ${fav ? "active" : ""}`} onClick={() => setFav(!fav)} aria-label="Save">
              <svg width="18" height="18" viewBox="0 0 24 24" fill={fav ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.2 4.5 4.5 8-2.5 4.5-9.5 9-9.5 9z"/>
              </svg>
            </button>
          </div>

          <div className="pdp-perks">
            <div className="pdp-perk">
              <span className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18l-2 11H5L3 9z"/><path d="M16 9V5a4 4 0 0 0-8 0v4"/></svg>
              </span>
              <div><div className="ttl">Free shipping</div><div className="sub">Orders over ₦25,000</div></div>
            </div>
            <div className="pdp-perk">
              <span className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              </span>
              <div><div className="ttl">Ships in 24h</div><div className="sub">From our Lagos studio</div></div>
            </div>
            <div className="pdp-perk">
              <span className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2.5 0 4.7 1 6.3 2.6"/><path d="M21 4v6h-6"/></svg>
              </span>
              <div><div className="ttl">14-day returns</div><div className="sub">Unopened, no questions</div></div>
            </div>
            <div className="pdp-perk">
              <span className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.2 4.5 4.5 8-2.5 4.5-9.5 9-9.5 9z"/></svg>
              </span>
              <div><div className="ttl">Cruelty-free</div><div className="sub">Never tested on animals</div></div>
            </div>
          </div>

          <div className="pdp-accordion">
            {accordion.map((item, i) => (
              <div key={i} className={`pdp-acc-item ${openAcc === i ? "open" : ""}`}>
                <div className="pdp-acc-q" onClick={() => setOpenAcc(openAcc === i ? -1 : i)}>
                  <span>{item.q}</span>
                  <span className="toggle">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                  </span>
                </div>
                <div className="pdp-acc-a"><div>{item.a}</div></div>
              </div>
            ))}
          </div>

          <div className="review-preview">
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 22, color: "var(--ink)", marginTop: 32, marginBottom: 12 }}>What people are saying</h3>
            {reviews.map((r, i) => (
              <div className="review-row" key={i}>
                <div className="stars">{"★ ".repeat(r.stars).trim()}</div>
                <div className="quote">{r.quote}</div>
                <div className="by">{r.by}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/** Related products strip — re-uses product-card styling */
function ProductRelated({ onAdd }) {
  const items = [
    { nm: "Velvet Lip Balm", blurb: "Daily comfort, never sticky.", price: "₦5,000", art: () => <GlossBottle scale={0.85} label="Velvet" capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"/> },
    { nm: "Petal Lip Oil", blurb: "Dewy nourishment in a drop.", price: "₦12,000", art: () => <OilDropper scale={0.95} label="Petal"/> },
    { nm: "Sugar Lip Scrub", blurb: "Sweet polish in a pot.", price: "₦6,500", art: () => <ScrubJar scale={0.95} label="Sugar"/> },
  ];
  return (
    <section className="surface products" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Pairs well with</div>
            <h2>Make it a<br/>ritual.</h2>
          </div>
          <p className="right">Each piece in the ritual is designed to work alongside the others. Layer balm under gloss, finish with a single drop of oil — the cushion will surprise you.</p>
        </div>
        <div className="products-grid">
          {items.map((p, i) => (
            <a className="product-card" key={i} href="product.html" style={{ textDecoration: "none", color: "inherit" }}>
              <div className="photo">
                <div className="sheen"></div>
                <span className="price-pill">{p.price}</span>
                {p.art()}
              </div>
              <h3>{p.nm}</h3>
              <p className="blurb">{p.blurb}</p>
              <div className="row">
                <span className="stars">★ ★ ★ ★ ★</span>
                <span className="add">View →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ProductDetail = ProductDetail;
window.ProductRelated = ProductRelated;
