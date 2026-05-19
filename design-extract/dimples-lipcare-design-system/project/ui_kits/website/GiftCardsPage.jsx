/* global React, Sparkle, Heart */

const GC_AMOUNTS = [5000, 10000, 25000, 50000, 100000];
const GC_THEMES = [
  { id: "deep",     bg: "var(--grad-deep)",     ink: "var(--cream)" },
  { id: "petal",    bg: "var(--grad-petal)",    ink: "var(--blush-900)" },
  { id: "gloss",    bg: "var(--grad-gloss)",    ink: "var(--blush-900)" },
  { id: "rosegold", bg: "var(--grad-rosegold)", ink: "var(--blush-900)" },
  { id: "ink",      bg: "var(--ink)",           ink: "var(--cream)" },
];

function GiftCardsPage({ onAdd }) {
  const [amount, setAmount] = React.useState(10000);
  const [customMode, setCustomMode] = React.useState(false);
  const [theme, setTheme] = React.useState("deep");
  const [form, setForm] = React.useState({ to: "", from: "Dimples Founder", message: "A little gift from the pink studio." });

  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <Sparkle size={36} style={{ position: "absolute", top: 80, right: "8%" }} delay={0.4}/>
        <Heart size={32} style={{ position: "absolute", bottom: 40, left: "12%" }} delay={1.2}/>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span>Gift cards</span>
          </div>
        </div>

        <div className="wrap gc-hero">
          {/* Live preview */}
          <div>
            <div className={`gc-card-preview theme-${theme}`}>
              <Sparkle size={36} className="corner-sparkle" style={{ position: "absolute", top: 24, right: 24 }} delay={0.4}/>
              <div>
                <div className="name">Dimples</div>
                <div className="sub">Gift card</div>
              </div>
              <div className="amount-side">
                <div className="am">₦{amount.toLocaleString()}</div>
                <div className="lbl">{form.to || "For someone soft & glossy"}</div>
              </div>
            </div>

            <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 6 }}>
              <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--ink-mute)" }}>Cover</span>
              <div className="gc-themes">
                {GC_THEMES.map(t => (
                  <button key={t.id} className={`gc-theme ${theme === t.id ? "active" : ""}`} style={{ background: t.bg }} onClick={() => setTheme(t.id)} aria-label={t.id}/>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h1 style={{ marginBottom: 16 }}>
              The <span className="script">gift</span> of glossy lips.
            </h1>
            <p className="lead" style={{ marginBottom: 32, maxWidth: 460 }}>
              A digital gift card they redeem at checkout — never expires, no fees, applies to anything in the shop. Perfect for friends who keep stealing yours.
            </p>

            <div style={{ marginBottom: 20 }}>
              <span style={{ fontSize: 11, letterSpacing: ".28em", textTransform: "uppercase", color: "var(--ink-mute)", display: "block", marginBottom: 10 }}>Amount</span>
              <div className="gc-options">
                {GC_AMOUNTS.map(a => (
                  <button key={a} className={`gc-amount ${!customMode && amount === a ? "active" : ""}`} onClick={() => { setAmount(a); setCustomMode(false); }}>
                    ₦{a.toLocaleString()}
                  </button>
                ))}
                <button className={`gc-amount custom ${customMode ? "active" : ""}`} onClick={() => setCustomMode(true)}>
                  <span style={{ fontFamily: "var(--font-sans)", fontStyle: "normal", fontSize: 14, opacity: .6 }}>Custom ₦</span>
                  <input
                    type="number"
                    value={customMode ? amount : ""}
                    onClick={(e) => { e.stopPropagation(); setCustomMode(true); }}
                    onChange={(e) => { setCustomMode(true); setAmount(Math.max(1000, parseInt(e.target.value) || 1000)); }}
                    placeholder="…"
                  />
                </button>
              </div>
              <p style={{ fontSize: 11, color: "var(--ink-mute)", marginTop: 10, letterSpacing: ".12em", textTransform: "uppercase" }}>Min ₦1,000 · Max ₦500,000</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}>
              <div className="field"><label style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ink-mute)", display: "block", marginBottom: 6 }}>For (their email)</label>
                <input type="email" className="" placeholder="them@friend.co" value={form.to} onChange={e=>setForm({...form, to: e.target.value})} style={{
                  width: "100%", boxSizing: "border-box",
                  fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--ink)",
                  background: "var(--pearl)", border: "1px solid var(--line)",
                  borderRadius: "var(--r-md)", padding: "14px 16px", outline: "none",
                }}/>
              </div>
              <div className="field"><label style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ink-mute)", display: "block", marginBottom: 6 }}>From</label>
                <input type="text" value={form.from} onChange={e=>setForm({...form, from: e.target.value})} style={{
                  width: "100%", boxSizing: "border-box",
                  fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--ink)",
                  background: "var(--pearl)", border: "1px solid var(--line)",
                  borderRadius: "var(--r-md)", padding: "14px 16px", outline: "none",
                }}/>
              </div>
            </div>

            <div className="field" style={{ marginBottom: 18 }}>
              <label style={{ fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ink-mute)", display: "block", marginBottom: 6 }}>Your note (optional)</label>
              <textarea rows={3} value={form.message} onChange={e=>setForm({...form, message: e.target.value})} style={{
                width: "100%", boxSizing: "border-box",
                fontFamily: "var(--font-sans)", fontSize: 15, color: "var(--ink)",
                background: "var(--pearl)", border: "1px solid var(--line)",
                borderRadius: "var(--r-md)", padding: "14px 16px", outline: "none", resize: "vertical",
              }}/>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", background: "var(--bg-2)", borderRadius: 999, marginBottom: 18 }}>
              <input type="checkbox" id="schedule" style={{ width: 18, height: 18, accentColor: "var(--blush-700)" }}/>
              <label htmlFor="schedule" style={{ fontSize: 13, color: "var(--ink-soft)" }}>Schedule delivery for a specific date</label>
            </div>

            <button className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "20px" }} onClick={() => onAdd?.(`Gift card · ₦${amount.toLocaleString()}`)}>
              Add to bag · ₦{amount.toLocaleString()}
            </button>
            <p style={{ fontSize: 12, color: "var(--ink-mute)", marginTop: 14, textAlign: "center" }}>
              Sent to {form.to || "their email"} as soon as your payment clears. No fees, no expiry.
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-2)", padding: "80px 0 96px" }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Why a Dimples card</div>
              <h2>The good kind<br/>of gift.</h2>
            </div>
            <p className="right">No more guessing scents or shades. They pick the products they want, when they want, with the shipping address they're at this week.</p>
          </div>
          <div className="gc-perks">
            {[
              { ic: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>, ttl: "Never expires", sub: "Use it next week or next year. We don't claw back balances." },
              { ic: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></>, ttl: "Delivered by email", sub: "Sent within minutes of your payment clearing. Includes a printable PDF option." },
              { ic: <><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></>, ic2: true, ttl: "Stacks with everything", sub: "Applies to sale items, training, and the ritual set. No exclusions." },
            ].map((p, i) => (
              <div className="gc-perk" key={i}>
                <span className="ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{p.ic}</svg>
                </span>
                <div>
                  <div className="ttl">{p.ttl}</div>
                  <div className="sub">{p.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 56, padding: "28px 32px", display: "flex", alignItems: "center", justifyContent: "space-between",
            background: "var(--pearl)", borderRadius: "var(--r-lg)", border: "1px solid var(--line-soft)",
            flexWrap: "wrap", gap: 14,
          }}>
            <div>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink)" }}>Have a card to redeem?</div>
              <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 4 }}>Apply your 16-digit code at checkout under "Promo code".</div>
            </div>
            <a href="cart.html" className="btn-ghost">Go to checkout →</a>
          </div>
        </div>
      </section>
    </>
  );
}

window.GiftCardsPage = GiftCardsPage;
