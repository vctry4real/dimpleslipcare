/* global React, AccountSide, GlossBottle, ScrubJar */

function OrderDetailPage() {
  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="account.html">Account</a>
            <span className="sep">/</span>
            <a href="orders.html">Orders</a>
            <span className="sep">/</span>
            <span>DMP-2026-1432</span>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)" }}>
        <div className="wrap orders-grid">
          <AccountSide active="orders" />

          <div>
            <div className="order-detail">
              <div className="head">
                <div>
                  <h2>Order DMP-2026-1432</h2>
                  <div className="placed">Placed March 14, 2026 · Paid via Paystack · Card ending 4242</div>
                </div>
                <span className="status-pill shipped">Out for delivery</span>
              </div>

              <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11, letterSpacing: ".32em", textTransform: "uppercase", color: "var(--ink-mute)", margin: "8px 0 4px" }}>Tracking</h4>
              <div className="tracking">
                <div className="track-step done">
                  <div className="ttl">Confirmed</div>
                  <div className="when">Mar 14 · 14:22</div>
                </div>
                <div className="track-step done">
                  <div className="ttl">Poured & packed</div>
                  <div className="when">Mar 15 · 10:08</div>
                </div>
                <div className="track-step active">
                  <div className="ttl">Out for delivery</div>
                  <div className="when">Today · 09:32</div>
                </div>
                <div className="track-step">
                  <div className="ttl">Delivered</div>
                  <div className="when">By 6pm today</div>
                </div>
              </div>

              <div style={{
                padding: "16px 20px",
                background: "var(--bg-1)",
                borderRadius: "var(--r-md)",
                border: "1px solid var(--line)",
                marginBottom: 28,
                display: "flex", alignItems: "center", gap: 14,
                fontSize: 13, color: "var(--ink-soft)",
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--blush-700)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7h13v10H3z"/><path d="M16 10h4l3 4v3h-7"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>
                <span>
                  <strong style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400, fontSize: 17, color: "var(--ink)", display: "block" }}>GIG Express · Waybill GIGL-99231</strong>
                  Rider Ade · 0810 200 1234 · expected by 6pm today
                </span>
                <a href="#" style={{ marginLeft: "auto", fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--blush-700)", textDecoration: "none" }}>Track on GIG →</a>
              </div>

              <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11, letterSpacing: ".32em", textTransform: "uppercase", color: "var(--ink-mute)", margin: "8px 0 12px" }}>Items</h4>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  { nm: "Glass Lip Gloss", vr: "Vanilla kiss · 8ml", qty: 2, total: 17000, art: () => <GlossBottle scale={0.45} label=""/> },
                  { nm: "Velvet Lip Balm", vr: "Cocoa kiss · 10g",  qty: 1, total: 5000,  art: () => <GlossBottle scale={0.45} label="" capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"/> },
                  { nm: "Sugar Lip Scrub", vr: "Strawberry · 15g",  qty: 1, total: 6500,  art: () => <ScrubJar scale={0.45} label=""/> },
                ].map((it, i) => (
                  <div className="cart-row" key={i} style={{ boxShadow: "none", borderRadius: "var(--r-md)", padding: 12, background: "var(--bg-1)", border: "1px solid var(--line)" }}>
                    <div className="photo" style={{ width: 72, height: 72 }}>{it.art()}</div>
                    <div>
                      <h3 className="nm" style={{ fontSize: 17 }}>{it.nm}</h3>
                      <div className="meta">{it.vr} · ×{it.qty}</div>
                    </div>
                    <a href="product.html" style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--blush-700)", textDecoration: "none" }}>Reorder →</a>
                    <div className="price" style={{ fontSize: 18 }}>₦{it.total.toLocaleString()}</div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid var(--line)" }}>
                <div className="cart-line"><span>Subtotal</span><span>₦28,500</span></div>
                <div className="cart-line"><span>Shipping</span><span><em style={{ color: "var(--ok)", fontStyle: "normal" }}>Free</em></span></div>
                <div className="cart-line"><span>VAT (7.5%)</span><span>₦2,138</span></div>
                <div className="cart-line total"><span>Paid</span><span className="v">₦30,638</span></div>
              </div>

              <div className="addr-grid">
                <div className="addr-card">
                  <div className="l">Shipping to</div>
                  <div className="v">Dimples Founder<br/>42 Allen Avenue, Ikeja<br/>Lagos · 100001<br/>0903 879 6354</div>
                </div>
                <div className="addr-card">
                  <div className="l">Payment</div>
                  <div className="v">Paystack · Card<br/>Visa ending 4242<br/>Charged Mar 14, 2026</div>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a className="btn-primary" href="#" style={{ background: "var(--ink)" }}>Download receipt</a>
              <a className="btn-ghost" href="contact.html">Report an issue</a>
              <a className="btn-ghost" href="shop.html" style={{ marginLeft: "auto" }}>Reorder this bag →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

window.OrderDetailPage = OrderDetailPage;
