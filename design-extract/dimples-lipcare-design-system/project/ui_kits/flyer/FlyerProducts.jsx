/* global React, GlossBottle, ScrubJar, OilDropper, LipIcon, Sparkle */

const PRODUCTS = [
  {
    nm: "Sugar Lip Scrub",
    blurb: "Sweet polish in a pot — buff & soften.",
    price: "₦6,500",
    art: () => <ScrubJar scale={0.42} label=""/>,
  },
  {
    nm: "Velvet Lip Balm",
    blurb: "Daily comfort, never sticky.",
    price: "₦5,000",
    art: () => <GlossBottle scale={0.34} label="" capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"/>,
  },
  {
    nm: "Glass Lip Gloss",
    blurb: "Mirror-shine, zero tack.",
    price: "₦8,500",
    art: () => <GlossBottle scale={0.34} label=""/>,
  },
  {
    nm: "Petal Lip Oil",
    blurb: "Dewy nourishment in a drop.",
    price: "₦12,000",
    art: () => <OilDropper scale={0.4} label=""/>,
  },
  {
    nm: "Pink Lips Treatment",
    blurb: "Even-toned, softer lips · 4 weeks.",
    price: "₦15,000",
    art: () => <LipIcon scale={1.1}/>,
  },
];

function FlyerProducts() {
  return (
    <div>
      <div className="section-head">
        <div>
          <div className="eyebrow">Our Products</div>
          <div className="title">A daily lip ritual.</div>
        </div>
        <div className="meta">Five staples · one studio</div>
      </div>
      <div className="product-list">
        {PRODUCTS.map((p, i) => (
          <div className="product-row" key={i}>
            <div className="icon-wrap">{p.art()}</div>
            <div>
              <div className="nm">{p.nm}</div>
              <div className="blurb">{p.blurb}</div>
            </div>
            <div className="price">{p.price}</div>
          </div>
        ))}
        {/* Decorative tail card to fill the odd slot */}
        <div className="product-row" style={{ background: "var(--grad-rosegold)", boxShadow: "var(--shadow-inset-gloss)" }}>
          <div className="icon-wrap" style={{ background: "rgba(255,255,255,.4)" }}>
            <Sparkle size={36} />
          </div>
          <div>
            <div className="nm" style={{ color: "var(--blush-900)" }}>The Ritual Set</div>
            <div className="blurb" style={{ color: "var(--blush-900)" }}>Scrub + Balm + Gloss. Save 15%.</div>
          </div>
          <div className="price" style={{ color: "var(--blush-900)" }}>₦18,000</div>
        </div>
      </div>
    </div>
  );
}

window.FlyerProducts = FlyerProducts;
