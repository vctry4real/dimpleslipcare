/* global React, GlossBottle, ScrubJar, Heart, Sparkle */

function ThankYouPage() {
  const orderNum = "DMP-2026-" + Math.floor(Math.random() * 9000 + 1000);

  return (
    <>
      <section className="thank-hero">
        <Sparkle size={40} style={{ position: "absolute", top: 80, left: "10%" }} delay={0.4}/>
        <Sparkle size={28} style={{ position: "absolute", bottom: 100, right: "12%" }} delay={1.2}/>
        <Heart size={32} style={{ position: "absolute", top: 200, right: "18%" }} delay={0.7}/>
        <div className="wrap">
          <div className="thank-tick">
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
          </div>
          <h1>Thank you — your order is in.</h1>
          <p className="lead">
            We just emailed your receipt and we'll send tracking the moment your bag leaves the studio. Usually within 24 hours, sometimes faster.
          </p>
          <div className="thank-order-pill">
            <span>Order number</span>
            <span className="num">{orderNum}</span>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)", padding: "0 0 64px" }}>
        <div className="wrap">
          {/* Order summary card */}
          <div className="order-detail" style={{ maxWidth: 880, margin: "0 auto" }}>
            <div className="head">
              <div>
                <h2>Your bag</h2>
                <div className="placed">Placed just now · Paid via Paystack</div>
              </div>
              <span className="status-pill processing">Processing</span>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
              {[
                { nm: "Glass Lip Gloss", vr: "Vanilla kiss · 8ml", qty: 2, total: 17000, art: () => <GlossBottle scale={0.5} label=""/> },
                { nm: "Velvet Lip Balm", vr: "Cocoa kiss · 10g",  qty: 1, total: 5000,  art: () => <GlossBottle scale={0.5} label="" capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"/> },
                { nm: "Sugar Lip Scrub", vr: "Strawberry · 15g",  qty: 1, total: 6500,  art: () => <ScrubJar scale={0.5} label=""/> },
              ].map((it, i) => (
                <div className="cart-row" key={i} style={{ boxShadow: "none", borderRadius: "var(--r-md)", padding: 12, background: "var(--bg-1)", border: "1px solid var(--line)" }}>
                  <div className="photo" style={{ width: 80, height: 80 }}>{it.art()}</div>
                  <div>
                    <h3 className="nm" style={{ fontSize: 18 }}>{it.nm}</h3>
                    <div className="meta">{it.vr} · ×{it.qty}</div>
                  </div>
                  <div></div>
                  <div className="price" style={{ fontSize: 20 }}>₦{it.total.toLocaleString()}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 24, paddingTop: 18, borderTop: "1px solid var(--line)" }}>
              <div className="cart-line"><span>Subtotal</span><span>₦28,500</span></div>
              <div className="cart-line"><span>Shipping · Standard nationwide</span><span><em style={{ color: "var(--ok)", fontStyle: "normal" }}>Free</em></span></div>
              <div className="cart-line"><span>VAT (7.5%)</span><span>₦2,138</span></div>
              <div className="cart-line total"><span>Total paid</span><span className="v">₦30,638</span></div>
            </div>

            <div className="addr-grid" style={{ marginTop: 24 }}>
              <div className="addr-card">
                <div className="l">Shipping to</div>
                <div className="v">Dimples Founder<br/>42 Allen Avenue, Ikeja<br/>Lagos · 100001</div>
              </div>
              <div className="addr-card">
                <div className="l">Estimated delivery</div>
                <div className="v">2–4 working days<br/>via GIG · Kwik<br/>Tracking sent by email</div>
              </div>
            </div>
          </div>

          <div className="next-grid">
            <div className="next-card">
              <div className="num">i</div>
              <h4>Check your inbox</h4>
              <p>Receipt is already on its way. If it doesn't land in five minutes, check your spam folder.</p>
            </div>
            <div className="next-card">
              <div className="num">ii</div>
              <h4>We pour, label, ship</h4>
              <p>Your bag will leave the studio within 24 hours. We'll send a tracking link as soon as it's collected.</p>
            </div>
            <div className="next-card">
              <div className="num">iii</div>
              <h4>Open the ritual</h4>
              <p>While you wait, peek at <a href="ritual.html" style={{ color: "var(--blush-700)" }}>the three-step ritual</a> — your products will arrive ready to use.</p>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a className="btn-primary" href="orders.html">View order status</a>
            <a className="btn-ghost" href="shop.html" style={{ marginLeft: 14 }}>Keep shopping</a>
          </div>
        </div>
      </section>
    </>
  );
}

window.ThankYouPage = ThankYouPage;
