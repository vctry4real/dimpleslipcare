/* global React, AccountSide, GlossBottle, ScrubJar, OilDropper, LipIcon, Heart */

const INITIAL_SAVED = [
  { id: 1, nm: "Glass Lip Gloss",    blurb: "Mirror-shine, zero tack.",        meta: "8ml · Vanilla kiss",  price: 8500,  art: () => <GlossBottle scale={0.85} label="Glass"/> },
  { id: 2, nm: "Petal Lip Oil",      blurb: "Dewy nourishment in a drop.",     meta: "6ml · Jojoba + rosehip", price: 12000, art: () => <OilDropper scale={0.9} label="Petal"/> },
  { id: 3, nm: "The Ritual Set",     blurb: "All four staples, saved 15%.",    meta: "Limited · Gift-ready",   price: 26000, art: () => <div style={{ display: "flex", gap: -4 }}><GlossBottle scale={0.5} label=""/><div style={{ marginLeft: -8 }}><ScrubJar scale={0.5} label=""/></div></div> },
  { id: 4, nm: "Pink Lips Treatment",blurb: "Softer, even-toned lips.",        meta: "30ml · 4-week regimen",  price: 15000, art: () => <LipIcon scale={2}/> },
  { id: 5, nm: "Brown-Sugar Scrub",  blurb: "Deeper buff, vanilla finish.",    meta: "15g · Vanilla & brown",  price: 6500,  art: () => <ScrubJar scale={0.85} label="Brown"/> },
];

function SavedPage({ onAdd }) {
  const [items, setItems] = React.useState(INITIAL_SAVED);
  const remove = (id) => setItems(items.filter(i => i.id !== id));

  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="account.html">Account</a>
            <span className="sep">/</span>
            <span>Saved for later</span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>
            Saved for <span className="script">later.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 540 }}>
            Everything you've hearted, in one place. We'll quietly tell you when something on this list goes on sale or comes back in stock.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)" }}>
        <div className="wrap orders-grid">
          <AccountSide active="saved" />

          <div className="account-page" style={{ padding: 0 }}>
            {items.length === 0 ? (
              <div className="cart-empty">
                <Heart size={72} style={{ margin: "0 auto" }}/>
                <h2>Nothing here yet.</h2>
                <p>Tap the heart on any product to save it here for later. We'll let you know if it goes on sale.</p>
                <a className="btn-primary" href="shop.html">Browse the shop</a>
              </div>
            ) : (
              <>
                <div className="toolbar">
                  <h2 className="section-title">Saved items</h2>
                  <span className="count">{items.length} item{items.length !== 1 ? "s" : ""} · ₦{items.reduce((s,i)=>s+i.price,0).toLocaleString()} total</span>
                </div>

                <div className="saved-grid">
                  {items.map(it => (
                    <div className="saved-card" key={it.id}>
                      <div className="photo">
                        <button className="un-heart" onClick={() => remove(it.id)} aria-label="Remove from saved">
                          <svg width="16" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.2 4.5 4.5 8-2.5 4.5-9.5 9-9.5 9z"/></svg>
                        </button>
                        {it.art()}
                      </div>
                      <div className="body">
                        <a href="product.html" style={{ textDecoration: "none", color: "inherit" }}>
                          <h3 className="nm">{it.nm}</h3>
                          <p className="blurb">{it.blurb}</p>
                        </a>
                        <div style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-mute)" }}>{it.meta}</div>
                        <div className="row">
                          <span className="price">₦{it.price.toLocaleString()}</span>
                          <button className="add" onClick={() => { onAdd?.(it.nm); }}>Add to bag</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{
                  marginTop: 32, padding: 24,
                  background: "var(--grad-petal)", borderRadius: "var(--r-lg)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  position: "relative", overflow: "hidden",
                }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink)" }}>Move everything to bag?</div>
                    <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 4 }}>One tap adds all {items.length} items below.</div>
                  </div>
                  <button className="btn-primary" onClick={() => items.forEach(it => onAdd?.(it.nm))}>
                    Add all · ₦{items.reduce((s,i)=>s+i.price,0).toLocaleString()}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

window.SavedPage = SavedPage;
