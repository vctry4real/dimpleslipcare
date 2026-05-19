/* global React, Sparkle, Heart, GlossBottle, ScrubJar */

function WholesalePage() {
  const [sent, setSent] = React.useState(false);

  return (
    <>
      <section className="ws-hero">
        <Sparkle size={48} style={{ position: "absolute", top: 80, left: "8%" }} delay={0.2}/>
        <Sparkle size={28} style={{ position: "absolute", bottom: 80, right: "12%" }} delay={1.4}/>
        <Heart size={36} style={{ position: "absolute", top: 180, right: "10%" }} delay={0.4}/>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span>Wholesale & gifting</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "end" }}>
            <h1 style={{ margin: 0, fontSize: "clamp(48px, 5.6vw, 88px)" }}>
              Buy by the<br/>
              <span className="script">boxful.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 460 }}>
              Stockists, weddings, hampers, corporate gifting, brand collaborations. Small minimums, fast turnarounds, the same hand-poured quality at scale.
            </p>
          </div>

          <div className="ws-types">
            {[
              { ic: <><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></>, ttl: "Retail wholesale", p: "Stock our line in your salon, spa, boutique, or pharmacy. Discounted by tier.", moq: "MOQ · 30 units" },
              { ic: <><path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.2 4.5 4.5 8-2.5 4.5-9.5 9-9.5 9z"/></>, ttl: "Wedding favours", p: "Personalised labels, gift-ready boxes, the works. Six-week lead time for events.", moq: "MOQ · 50 units" },
              { ic: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 3v18"/></>, ttl: "Corporate gifting", p: "End-of-year hampers, employee welcome packs, client thank-yous. Co-branded packaging available.", moq: "MOQ · 25 units" },
              { ic: <><circle cx="12" cy="12" r="3"/><circle cx="6" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="12" cy="20" r="2"/></>, ttl: "Brand collaborations", p: "Private-label batches under your own brand, or custom co-branded drops with us.", moq: "Talk to us" },
            ].map(t => (
              <div className="ws-type" key={t.ttl}>
                <span className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{t.ic}</svg>
                </span>
                <h4>{t.ttl}</h4>
                <p>{t.p}</p>
                <div className="moq">{t.moq}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Pricing tiers</div>
              <h2>Volume discount,<br/>built in.</h2>
            </div>
            <p className="right">Tiers apply automatically once your invoice clears the minimum. Pricing examples shown are for the Velvet Lip Balm — full price list shared after your enquiry.</p>
          </div>

          <div className="ws-tiers">
            <div className="ws-tier">
              <div className="moq">From 30 units</div>
              <h3>Studio</h3>
              <div className="disc">25%<span className="u">off retail</span></div>
              <p>Entry tier for small boutiques and salons just starting to stock Dimples.</p>
              <ul>
                {["Standard SKUs only", "Free shipping over ₦100k", "Net-30 payment after first order", "Replacement guarantee"].map(x => (
                  <li key={x}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ws-tier featured">
              <div className="moq">From 80 units · Most popular</div>
              <h3>Boutique</h3>
              <div className="disc">35%<span className="u">off retail</span></div>
              <p>Sweet spot for mid-size beauty boutiques and spas with steady demand.</p>
              <ul>
                {["Standard SKUs + limited drops", "Free shipping over ₦60k", "Net-45 payment", "Custom display rack (one-time)", "Marketing co-op", "Priority on new launches"].map(x => (
                  <li key={x}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ws-tier">
              <div className="moq">From 200 units</div>
              <h3>Atelier</h3>
              <div className="disc">45%<span className="u">off retail</span></div>
              <p>Top tier for chain pharmacies, hotel groups, and large gifting accounts.</p>
              <ul>
                {["All SKUs + private label option", "Free shipping always", "Net-60 payment", "Custom display & training for staff", "Dedicated account manager"].map(x => (
                  <li key={x}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                    <span>{x}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="apply-band">
        <Sparkle size={40} style={{ position: "absolute", top: 80, right: "10%" }} delay={0.4}/>
        <Heart size={32} style={{ position: "absolute", bottom: 96, left: "10%" }} delay={0.8}/>
        <div className="wrap apply-grid">
          <div>
            <div style={{
              fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11,
              letterSpacing: ".32em", textTransform: "uppercase", color: "var(--blush-700)"
            }}>Ask for a wholesale pack</div>
            <h2>Tell us what<br/>you're stocking.</h2>
            <p className="lead">
              Send the form and we'll reply within two working days with the full price list, our standard terms, and a sample box if you'd like one.
            </p>
            <div style={{
              background: "rgba(255,255,255,.6)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,.7)", borderRadius: 20,
              padding: 24, marginTop: 24, maxWidth: 460,
            }}>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink)", lineHeight: 1.3 }}>
                Wedding or event next month?
              </div>
              <div style={{ fontSize: 13, color: "var(--ink-soft)", marginTop: 8 }}>
                Pick up the phone instead — <a href="tel:09038796354" style={{ color: "var(--blush-700)" }}>0903 879 6354</a>. Express turnaround for tight dates, no judgement.
              </div>
            </div>
          </div>

          <form className="apply-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "24px 8px" }}>
                <Heart size={56} style={{ margin: "0 auto 16px" }}/>
                <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 28, color: "var(--ink)" }}>Got it — wholesale pack on the way.</div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--ink-soft)", marginTop: 8 }}>
                  Expect a reply within two working days. We'll include sample-box details if you asked for one.
                </div>
              </div>
            ) : (
              <>
                <div className="grid-2">
                  <div className="field"><label>Your name</label><input type="text" required/></div>
                  <div className="field"><label>Business name</label><input type="text" required/></div>
                </div>
                <div className="grid-2">
                  <div className="field"><label>Email</label><input type="email" required/></div>
                  <div className="field"><label>Phone</label><input type="tel"/></div>
                </div>
                <div className="field">
                  <label>What are you stocking for?</label>
                  <select defaultValue="">
                    <option value="" disabled>Pick one…</option>
                    <option>Retail boutique / salon / spa</option>
                    <option>Wedding or private event</option>
                    <option>Corporate gifting</option>
                    <option>Brand collaboration / private label</option>
                    <option>Hotel / hospitality</option>
                    <option>Something else</option>
                  </select>
                </div>
                <div className="field">
                  <label>Estimated quantity</label>
                  <select defaultValue="">
                    <option value="" disabled>Pick one…</option>
                    <option>30–80 units</option>
                    <option>80–200 units</option>
                    <option>200–500 units</option>
                    <option>500+ units</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="field">
                  <label>Anything else?</label>
                  <textarea rows={3} placeholder="Custom labels? Specific products? Event date?"/>
                </div>
                <label style={{ display: "flex", gap: 10, alignItems: "center", fontSize: 13, color: "var(--ink-soft)" }}>
                  <input type="checkbox" style={{ width: 18, height: 18, accentColor: "var(--blush-700)" }}/>
                  Send me a sample box (₦15,000, credited to your first order)
                </label>
                <button type="submit" className="submit">Send enquiry →</button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

window.WholesalePage = WholesalePage;
