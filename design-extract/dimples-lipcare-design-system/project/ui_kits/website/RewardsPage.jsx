/* global React, AccountSide */

function RewardsPage() {
  const points = 1240;
  const nextTierAt = 2000;
  const pct = Math.min(100, (points / nextTierAt) * 100);

  const earn = [
    { ttl: "Every order", pts: "1 point per ₦100 spent", sub: "Earned automatically once your order ships.", i: <><path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/></> },
    { ttl: "Write a review", pts: "+50 points", sub: "After your order is delivered. One per product.", i: <><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9 8.5 8.5 0 0 1 8.5 8.5z"/></> },
    { ttl: "Refer a friend", pts: "+200 points each", sub: "When they place their first order. Both of you get points.", i: <><circle cx="9" cy="8" r="4"/><circle cx="17" cy="11" r="3"/><path d="M2 21c0-3 3-6 7-6s7 3 7 6"/></> },
    { ttl: "Tag us on Instagram", pts: "+100 points", sub: "@Dimples_lipcare with a clear photo of the product.", i: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1" fill="currentColor"/></> },
    { ttl: "Birthday month", pts: "+250 points", sub: "Annual treat. Just keep your birthday in Settings up to date.", i: <><path d="M6 11h12v8H6z"/><path d="M4 13h16M9 11V6a3 3 0 0 1 6 0v5"/></> },
    { ttl: "Take a training", pts: "+1,000 points", sub: "Founders programme alumni get a bonus on completion.", i: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></> },
  ];

  const redeem = [
    { cost: 500,   nm: "Free shipping",      sub: "On any order, no minimum." },
    { cost: 1000,  nm: "₦2,000 off",         sub: "Apply at checkout." },
    { cost: 1500,  nm: "Free Velvet Balm",   sub: "Cocoa kiss, added to your next bag." },
    { cost: 2500,  nm: "₦5,000 off",         sub: "Apply at checkout. Stacks with sale items." },
    { cost: 4000,  nm: "Free Ritual Set",    sub: "All four staples, gift-ready box." },
    { cost: 8000,  nm: "Studio session",     sub: "An hour with the founder, in our Lagos studio." },
  ];

  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="account.html">Account</a>
            <span className="sep">/</span>
            <span>Rewards</span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>
            Your <span className="script">rewards.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 540 }}>
            Every order earns points. Every milestone earns more. Cash them in for product, shipping, or an hour in the studio.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)" }}>
        <div className="wrap orders-grid">
          <AccountSide active="rewards" />

          <div className="account-page" style={{ padding: 0 }}>
            {/* Hero balance */}
            <div className="rewards-hero">
              <div>
                <div className="e">Pink studio member</div>
                <h2>{points.toLocaleString()} points<br/>in your jar.</h2>
                <p className="lead">You're {(nextTierAt - points).toLocaleString()} points away from <em style={{ color: "var(--blush-200)", fontStyle: "italic" }}>Boutique</em> tier — and a permanent 10% off everything.</p>
              </div>
              <div className="balance">
                <div className="pts">{points.toLocaleString()}</div>
                <div className="l">Available</div>
                <div className="tier">Studio tier · since Feb 2026</div>
              </div>
            </div>

            <div className="tier-progress">
              <div className="head">
                <span className="ttl">Studio → Boutique</span>
                <span className="meta">{points.toLocaleString()} / {nextTierAt.toLocaleString()} pts</span>
              </div>
              <div className="tier-bar"><div className="fill" style={{ width: `${pct}%` }}></div></div>
              <div className="tier-stops">
                <span>0 · Studio</span>
                <span className="here">You · {points}</span>
                <span>2,000 · Boutique</span>
                <span>5,000 · Atelier</span>
              </div>
            </div>

            <div className="toolbar" style={{ marginTop: 28 }}>
              <h2 className="section-title">Ways to earn</h2>
              <span className="count">6 ways · earned automatically</span>
            </div>
            <div className="earn-grid">
              {earn.map((e, i) => (
                <div className="earn-tile" key={i}>
                  <span className="ic">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{e.i}</svg>
                  </span>
                  <div>
                    <div className="ttl">{e.ttl}</div>
                    <div className="pts">{e.pts}</div>
                    <div className="sub">{e.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="toolbar" style={{ marginTop: 36 }}>
              <h2 className="section-title">Redeem your points</h2>
              <span className="count">Tap any reward to claim</span>
            </div>
            <div className="redeem-grid">
              {redeem.map((r, i) => {
                const afford = points >= r.cost;
                return (
                  <div key={i} className={`redeem-tile ${afford ? "affordable" : ""}`}>
                    <div className="cost">{r.cost.toLocaleString()}<span className="u">pts</span></div>
                    <div className="nm">{r.nm}</div>
                    <div className="sub">{r.sub}</div>
                    <button className="cta" disabled={!afford}>
                      {afford ? "Redeem" : `${(r.cost - points).toLocaleString()} more`}
                    </button>
                  </div>
                );
              })}
            </div>

            <div style={{
              marginTop: 32, padding: 24,
              background: "var(--pearl)", borderRadius: "var(--r-lg)",
              border: "1px solid var(--line-soft)",
              display: "flex", justifyContent: "space-between", alignItems: "center", gap: 18,
              flexWrap: "wrap",
            }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink)" }}>Refer a friend, get ₦2,000 back.</div>
                <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 6 }}>Your code: <strong style={{ fontFamily: "ui-monospace, Menlo, monospace", color: "var(--ink)" }}>DIMPLES-FOUNDER</strong> — they save 10%, you earn 200 points per signup.</div>
              </div>
              <button className="btn-primary" style={{ background: "var(--ink)" }}>Copy code</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

window.RewardsPage = RewardsPage;
