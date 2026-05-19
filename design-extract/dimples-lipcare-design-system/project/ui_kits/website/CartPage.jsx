/* global React, GlossBottle, ScrubJar, OilDropper, Heart */

const INITIAL_CART = [
  { id: 1, nm: "Glass Lip Gloss",  variant: "Vanilla kiss",  price: 8500,  qty: 2, art: () => <GlossBottle scale={0.7} label="Glass"/> },
  { id: 2, nm: "Velvet Lip Balm",  variant: "Cocoa kiss",    price: 5000,  qty: 1, art: () => <GlossBottle scale={0.7} label="Velvet" capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"/> },
  { id: 3, nm: "Sugar Lip Scrub",  variant: "Strawberry",    price: 6500,  qty: 1, art: () => <ScrubJar scale={0.7} label="Sugar"/> },
];

function CartPage() {
  const [items, setItems] = React.useState(INITIAL_CART);
  const [promo, setPromo] = React.useState("");
  const [promoApplied, setPromoApplied] = React.useState(false);

  const sub = items.reduce((s, i) => s + i.price * i.qty, 0);
  const discount = promoApplied ? Math.round(sub * 0.10) : 0;
  const shipping = sub > 25000 ? 0 : 2500;
  const total = sub - discount + shipping;

  const updateQty = (id, delta) => {
    setItems(items.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  };
  const removeItem = (id) => setItems(items.filter(i => i.id !== id));
  const applyPromo = (e) => { e.preventDefault(); if (promo.trim()) setPromoApplied(true); };

  return (
    <>
      <section className="page-hero" style={{ padding: "72px 0 32px" }}>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span>Bag</span>
          </div>
          <h1 style={{ maxWidth: "22ch" }}>
            Your <span className="script">bag</span><span> · {items.length} item{items.length !== 1 ? "s" : ""}</span>
          </h1>
        </div>
      </section>

      <section className="surface" style={{ padding: "32px 0 96px", background: "var(--bg-1)" }}>
        <div className="wrap">
          {items.length === 0 ? (
            <div className="cart-empty">
              <Heart size={72} style={{ margin: "0 auto" }}/>
              <h2>Your bag is empty.</h2>
              <p>Nothing in here yet — pick up a balm, a gloss, or the ritual set to get started.</p>
              <a className="btn-primary" href="shop.html">Browse the shop</a>
            </div>
          ) : (
            <div className="cart-grid">
              <div className="cart-list">
                {items.map(item => (
                  <div className="cart-row" key={item.id}>
                    <div className="photo">{item.art()}</div>
                    <div>
                      <h3 className="nm">{item.nm}</h3>
                      <div className="meta">{item.variant} · ₦{item.price.toLocaleString()}</div>
                      <button className="remove" onClick={() => removeItem(item.id)}>Remove →</button>
                    </div>
                    <div className="qty">
                      <button onClick={() => updateQty(item.id, -1)}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M5 12h14"/></svg>
                      </button>
                      <span className="v">{item.qty}</span>
                      <button onClick={() => updateQty(item.id, 1)}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                      </button>
                    </div>
                    <div className="price">₦{(item.price * item.qty).toLocaleString()}</div>
                  </div>
                ))}

                <a href="shop.html" style={{ marginTop: 12, color: "var(--blush-700)", fontFamily: "var(--font-sans)", fontSize: 13, letterSpacing: ".18em", textTransform: "uppercase", textDecoration: "none" }}>
                  ← Keep shopping
                </a>
              </div>

              <aside className="cart-summary">
                <h3>Summary</h3>
                <div className="cart-line"><span>Subtotal</span><span>₦{sub.toLocaleString()}</span></div>
                {promoApplied && <div className="cart-line" style={{ color: "var(--blush-700)" }}><span>Promo · WELCOME10</span><span>−₦{discount.toLocaleString()}</span></div>}
                <div className="cart-line">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? <em style={{ color: "var(--ok)", fontStyle: "normal" }}>Free</em> : `₦${shipping.toLocaleString()}`}</span>
                </div>
                {shipping > 0 && (
                  <div style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--ink-mute)", padding: "6px 0 0", textTransform: "uppercase" }}>
                    Add ₦{(25000 - sub).toLocaleString()} for free shipping
                  </div>
                )}

                <form className="cart-promo" onSubmit={applyPromo}>
                  <input
                    type="text"
                    placeholder="Promo code"
                    value={promo}
                    onChange={e => { setPromo(e.target.value); setPromoApplied(false); }}
                  />
                  <button type="submit">Apply</button>
                </form>
                {promoApplied && <div style={{ fontSize: 11, color: "var(--blush-700)", letterSpacing: ".18em", textTransform: "uppercase", padding: "8px 0 0" }}>Applied · 10% off</div>}

                <div className="cart-line total">
                  <span>Total</span>
                  <span className="v">₦{total.toLocaleString()}</span>
                </div>

                <a className="cart-checkout" href="checkout.html">Checkout securely</a>

                <div className="cart-trust">
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    Secure checkout · Paystack
                  </span>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                    Ships within 24 hours
                  </span>
                  <span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9c2.5 0 4.7 1 6.3 2.6"/><path d="M21 4v6h-6"/></svg>
                    14-day returns, unopened
                  </span>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

window.CartPage = CartPage;
