/* global React, GlossBottle, ScrubJar, Heart */

const CO_ITEMS = [
  { id: 1, nm: "Glass Lip Gloss",  variant: "Vanilla kiss",  price: 8500, qty: 2, art: () => <GlossBottle scale={0.45} label=""/> },
  { id: 2, nm: "Velvet Lip Balm",  variant: "Cocoa kiss",    price: 5000, qty: 1, art: () => <GlossBottle scale={0.45} label="" capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"/> },
  { id: 3, nm: "Sugar Lip Scrub",  variant: "Strawberry",    price: 6500, qty: 1, art: () => <ScrubJar scale={0.45} label=""/> },
];

const DELIVERY_OPTS = [
  { id: "standard", nm: "Standard nationwide", eta: "2–4 working days", carrier: "GIG · Kwik", price: 0 },
  { id: "express",  nm: "Express Lagos",       eta: "Next working day", carrier: "Dispatch rider", price: 2500 },
  { id: "pickup",   nm: "Studio pickup",       eta: "Same day, by appointment", carrier: "Allen Avenue, Ikeja", price: 0 },
];

function CheckoutFlow() {
  const [step, setStep] = React.useState("contact"); // contact | delivery | payment
  const [completed, setCompleted] = React.useState({ contact: false, delivery: false });
  const [contact, setContact] = React.useState({ email: "", first: "", last: "", phone: "", line1: "", city: "Lagos", state: "Lagos", postal: "100001" });
  const [delivery, setDelivery] = React.useState("standard");
  const [payTab, setPayTab] = React.useState("card");
  const [placing, setPlacing] = React.useState(false);

  const sub = CO_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);
  const ship = DELIVERY_OPTS.find(d => d.id === delivery).price;
  const tax = Math.round(sub * 0.075);
  const total = sub + ship + tax;

  const submitContact = (e) => { e.preventDefault(); setCompleted(c => ({...c, contact: true})); setStep("delivery"); };
  const submitDelivery = (e) => { e.preventDefault(); setCompleted(c => ({...c, delivery: true})); setStep("payment"); };
  const placeOrder = (e) => {
    e.preventDefault();
    setPlacing(true);
    setTimeout(() => { window.location.href = "thank-you.html"; }, 1200);
  };

  const stepIs = (k) => step === k;

  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="cart.html">Bag</a>
            <span className="sep">/</span>
            <span>Checkout</span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>
            Almost <span className="script">there.</span>
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)" }}>
        <div className="wrap checkout-grid">

          <div>
            {/* Step indicator */}
            <div className="steps">
              <div className={`step ${completed.contact ? "done" : stepIs("contact") ? "active" : ""}`}>
                <span className="pip">{completed.contact ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg> : "i"}</span>
                Contact &amp; shipping
              </div>
              <div className={`step-rule ${completed.contact ? "done" : ""}`}></div>
              <div className={`step ${completed.delivery ? "done" : stepIs("delivery") ? "active" : ""}`}>
                <span className="pip">{completed.delivery ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg> : "ii"}</span>
                Delivery
              </div>
              <div className={`step-rule ${completed.delivery ? "done" : ""}`}></div>
              <div className={`step ${stepIs("payment") ? "active" : ""}`}>
                <span className="pip">iii</span>
                Payment
              </div>
            </div>

            {/* ===== Contact & Shipping ===== */}
            {stepIs("contact") ? (
              <div className="co-card">
                <h3><span className="ix">i</span> Contact &amp; shipping</h3>
                <p className="sub">We'll send tracking and updates to your email. Phone is for your courier.</p>
                <form className="co-form-grid" onSubmit={submitContact}>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" required placeholder="you@dimples.co" value={contact.email} onChange={e=>setContact({...contact, email: e.target.value})}/>
                  </div>
                  <div className="grid-2">
                    <div className="field"><label>First name</label><input type="text" required value={contact.first} onChange={e=>setContact({...contact, first: e.target.value})}/></div>
                    <div className="field"><label>Last name</label><input type="text" required value={contact.last} onChange={e=>setContact({...contact, last: e.target.value})}/></div>
                  </div>
                  <div className="field"><label>Phone</label><input type="tel" required placeholder="0903 879 6354" value={contact.phone} onChange={e=>setContact({...contact, phone: e.target.value})}/></div>
                  <div className="field"><label>Address</label><input type="text" required placeholder="42 Allen Avenue, off…" value={contact.line1} onChange={e=>setContact({...contact, line1: e.target.value})}/></div>
                  <div className="grid-3">
                    <div className="field"><label>City</label><input type="text" required value={contact.city} onChange={e=>setContact({...contact, city: e.target.value})}/></div>
                    <div className="field">
                      <label>State</label>
                      <select value={contact.state} onChange={e=>setContact({...contact, state: e.target.value})}>
                        <option>Lagos</option><option>Abuja</option><option>Rivers</option><option>Kano</option><option>Other</option>
                      </select>
                    </div>
                    <div className="field"><label>Postal</label><input type="text" value={contact.postal} onChange={e=>setContact({...contact, postal: e.target.value})}/></div>
                  </div>
                  <button type="submit" className="btn-primary" style={{ marginTop: 12, justifyContent: "center" }}>
                    Continue to delivery
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </button>
                </form>
              </div>
            ) : (
              <div className="co-card complete">
                <h3>
                  <span className="ix" style={{ background: "rgba(111,142,106,.14)", color: "var(--ok)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg>
                  </span>
                  Contact &amp; shipping
                  <a className="edit" onClick={(e)=>{e.preventDefault(); setStep("contact");}} href="#">Edit</a>
                </h3>
                <div className="summary-line">
                  <strong>{contact.first} {contact.last}</strong>
                  {contact.email} · {contact.phone}<br/>
                  {contact.line1}, {contact.city}, {contact.state} {contact.postal}
                </div>
              </div>
            )}

            {/* ===== Delivery ===== */}
            {stepIs("delivery") ? (
              <div className="co-card">
                <h3><span className="ix">ii</span> Delivery</h3>
                <p className="sub">Where should your bag go? Add a note for the courier later if needed.</p>
                <form className="delivery-options" onSubmit={submitDelivery}>
                  {DELIVERY_OPTS.map(d => (
                    <label className={`delivery-option ${delivery === d.id ? "active" : ""}`} key={d.id} onClick={() => setDelivery(d.id)}>
                      <span className="radio"></span>
                      <span>
                        <div className="nm">{d.nm}</div>
                        <div className="meta">{d.carrier}</div>
                      </span>
                      <span className="eta">{d.eta}</span>
                      <span className={`price ${d.price === 0 ? "free" : ""}`}>{d.price === 0 ? "Free" : `₦${d.price.toLocaleString()}`}</span>
                    </label>
                  ))}
                  <div className="place-order">
                    <a className="back-link" href="#" onClick={(e)=>{e.preventDefault(); setStep("contact");}}>← Back</a>
                    <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                      Continue to payment
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </button>
                  </div>
                </form>
              </div>
            ) : completed.delivery && (
              <div className="co-card complete">
                <h3>
                  <span className="ix" style={{ background: "rgba(111,142,106,.14)", color: "var(--ok)" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M5 12l5 5L20 7"/></svg>
                  </span>
                  Delivery
                  <a className="edit" onClick={(e)=>{e.preventDefault(); setStep("delivery");}} href="#">Edit</a>
                </h3>
                <div className="summary-line">
                  <strong>{DELIVERY_OPTS.find(d=>d.id===delivery).nm}</strong>
                  {DELIVERY_OPTS.find(d=>d.id===delivery).carrier} · {DELIVERY_OPTS.find(d=>d.id===delivery).eta}
                </div>
              </div>
            )}

            {/* ===== Payment ===== */}
            {stepIs("payment") && (
              <div className="co-card">
                <h3><span className="ix">iii</span> Payment</h3>
                <p className="sub">Secure checkout via Paystack. Cards, bank transfer, and USSD all supported.</p>

                <div className="pay-tabs">
                  <button className={`pay-tab ${payTab === "card" ? "active" : ""}`} onClick={() => setPayTab("card")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20"/></svg>
                    Card
                  </button>
                  <button className={`pay-tab ${payTab === "transfer" ? "active" : ""}`} onClick={() => setPayTab("transfer")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 7h18M7 11h10M5 15h14M9 19h6"/></svg>
                    Bank transfer
                  </button>
                  <button className={`pay-tab ${payTab === "ussd" ? "active" : ""}`} onClick={() => setPayTab("ussd")}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M11 18h2"/></svg>
                    USSD
                  </button>
                </div>

                <form onSubmit={placeOrder} className="co-form-grid">
                  {payTab === "card" && (
                    <>
                      <div className="field"><label>Card number</label><input type="text" placeholder="1234 5678 9012 3456" required/></div>
                      <div className="card-row">
                        <div className="field"><label>Name on card</label><input type="text" placeholder="Dimples Founder" required/></div>
                        <div className="field"><label>Expiry</label><input type="text" placeholder="MM/YY" required/></div>
                        <div className="field"><label>CVC</label><input type="text" placeholder="123" required/></div>
                      </div>
                    </>
                  )}
                  {payTab === "transfer" && (
                    <div style={{ padding: 20, background: "var(--bg-1)", borderRadius: "var(--r-md)", border: "1px solid var(--line)" }}>
                      <div className="summary-line">
                        <strong>Wema Bank · Dimples Lipcare Ltd</strong>
                        Account number: 0123456789<br/>
                        Use your order number as the reference.
                      </div>
                    </div>
                  )}
                  {payTab === "ussd" && (
                    <div style={{ padding: 20, background: "var(--bg-1)", borderRadius: "var(--r-md)", border: "1px solid var(--line)" }}>
                      <div className="summary-line">
                        <strong>*123*456*₦{total.toLocaleString()}#</strong>
                        Dial from the phone number you used at checkout. Works with most Nigerian banks.
                      </div>
                    </div>
                  )}

                  <label style={{ display: "flex", gap: 10, alignItems: "center", marginTop: 12, fontSize: 13, color: "var(--ink-soft)" }}>
                    <input type="checkbox" defaultChecked style={{ width: 18, height: 18, accentColor: "var(--blush-700)" }}/>
                    Email me when this batch is restocked.
                  </label>

                  <div className="place-order">
                    <a className="back-link" href="#" onClick={(e)=>{e.preventDefault(); setStep("delivery");}}>← Back</a>
                    <button type="submit" className="btn-primary" disabled={placing} style={{ justifyContent: "center" }}>
                      {placing ? "Placing order…" : <>Place order · ₦{total.toLocaleString()}</>}
                      {!placing && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* ===== Summary rail ===== */}
          <aside className="co-summary">
            <h3>Order summary</h3>
            <div className="co-line-items">
              {CO_ITEMS.map(it => (
                <div className="co-line" key={it.id}>
                  <div className="photo">
                    <span className="qty-tag">{it.qty}</span>
                    {it.art()}
                  </div>
                  <div>
                    <div className="nm">{it.nm}</div>
                    <div className="vr">{it.variant}</div>
                  </div>
                  <div className="price">₦{(it.price * it.qty).toLocaleString()}</div>
                </div>
              ))}
            </div>

            <div className="cart-line"><span>Subtotal</span><span>₦{sub.toLocaleString()}</span></div>
            <div className="cart-line">
              <span>Shipping</span>
              <span>{ship === 0 ? <em style={{ color: "var(--ok)", fontStyle: "normal" }}>Free</em> : `₦${ship.toLocaleString()}`}</span>
            </div>
            <div className="cart-line"><span>VAT (7.5%)</span><span>₦{tax.toLocaleString()}</span></div>
            <div className="cart-line total"><span>Total</span><span className="v">₦{total.toLocaleString()}</span></div>

            <div className="cart-trust" style={{ marginTop: 18 }}>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Secure checkout · Paystack
              </span>
              <span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
                Ships within 24 hours
              </span>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

window.CheckoutFlow = CheckoutFlow;
