/* global React, Sparkle, Heart */

function AccountPage() {
  const [tab, setTab] = React.useState("signin");
  const [signedIn, setSignedIn] = React.useState(false);

  if (signedIn) {
    return (
      <section className="page-hero" style={{ padding: "120px 0" }}>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 580, margin: "0 auto" }}>
          <Heart size={72} style={{ margin: "0 auto 16px" }}/>
          <h1 style={{ margin: "0 auto 16px", maxWidth: "16ch" }}>Welcome back, friend.</h1>
          <p className="lead" style={{ margin: "0 auto 32px" }}>
            You're signed in. Your orders, addresses, and saved-for-later list will appear here once we hook this up to the back end.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
            <a className="btn-primary" href="shop.html">Continue shopping</a>
            <button className="btn-ghost" onClick={() => setSignedIn(false)}>Sign out</button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <Sparkle size={36} style={{ position: "absolute", top: 80, left: "8%" }} delay={0.2}/>
        <Heart size={28} style={{ position: "absolute", bottom: 40, right: "12%" }} delay={1.2}/>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="breadcrumb" style={{ justifyContent: "center" }}>
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span>Account</span>
          </div>
          <h1 style={{ margin: "0 auto", maxWidth: "20ch", fontSize: "clamp(40px, 5vw, 64px)" }}>
            <span className="script">Sign in</span> or join the<br/>
            pink studio.
          </h1>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)" }}>
        <div className="wrap">
          <div className="account-grid">
            {/* Sign in */}
            <div className="account-card">
              <div className="e">Returning customer</div>
              <h2>Welcome back.</h2>
              <p>Sign in to see your orders, addresses, and the things you saved for later.</p>

              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="you@dimples.co" defaultValue=""/>
              </div>
              <div className="field">
                <label>Password</label>
                <input type="password" placeholder="••••••••"/>
              </div>
              <div className="actions">
                <a href="#">Forgot password?</a>
                <button className="submit" onClick={(e)=>{ e.preventDefault(); setSignedIn(true); }}>Sign in →</button>
              </div>

              <div className="account-divider">or continue with</div>
              <div style={{ display: "flex", gap: 10, position: "relative", zIndex: 1 }}>
                <button className="pdp-swatch" style={{ flex: 1, padding: "12px 16px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" d="M22.5 12.3c0-.8-.1-1.4-.2-2H12v3.8h5.9c-.1.9-.8 2.4-2.3 3.4l-.1.1 3.3 2.6h.2c2.1-1.9 3.5-4.8 3.5-7.9z"/><path fill="currentColor" d="M12 23c3.1 0 5.7-1 7.6-2.8l-3.6-2.8c-1 .7-2.3 1.2-4 1.2-3 0-5.6-2-6.5-4.8H1.7v3c1.9 3.8 5.8 6.2 10.3 6.2z"/></svg>
                    Google
                  </span>
                </button>
                <button className="pdp-swatch" style={{ flex: 1, padding: "12px 16px" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 12.7c0-2.9 2.3-4.3 2.4-4.3-1.3-1.9-3.4-2.2-4.1-2.2-1.7-.2-3.4 1-4.3 1-.9 0-2.3-1-3.7-.9-1.9 0-3.7 1.1-4.7 2.8-2 3.5-.5 8.6 1.5 11.4 1 1.4 2.1 2.9 3.6 2.9 1.5-.1 2-.9 3.8-.9s2.3.9 3.8.9c1.6 0 2.6-1.4 3.5-2.8 1.1-1.6 1.6-3.2 1.6-3.3-.1-.1-3.2-1.2-3.2-4.6zM14.7 4.6c.8-1 1.3-2.3 1.2-3.6-1.1.1-2.5.8-3.3 1.7-.7.8-1.4 2.1-1.2 3.4 1.2.1 2.4-.6 3.3-1.5z"/></svg>
                    Apple
                  </span>
                </button>
              </div>
            </div>

            {/* Join */}
            <div className="account-card deep">
              <div className="e">New to Dimples?</div>
              <h2>Join the studio.</h2>
              <p>Create an account for first dibs on restocks, a 10% welcome on your first order, and the founder's notes (sent fortnightly, never more).</p>

              <ul className="perks">
                {[
                  "10% off your first order",
                  "First dibs on new batches",
                  "Saved bag across devices",
                  "Members-only batch numbers",
                  "Founder's notes · fortnightly",
                ].map(p => (
                  <li key={p}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <button className="submit" style={{ width: "100%" }} onClick={(e)=>{ e.preventDefault(); setSignedIn(true); }}>
                Create your account →
              </button>
              <p style={{ marginTop: 16, color: "rgba(255,248,244,.6)", fontSize: 12, letterSpacing: ".14em", textAlign: "center" }}>
                By joining you agree to our terms & privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-2)", padding: "64px 0 96px" }}>
        <div className="wrap" style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <div style={{
            fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11,
            letterSpacing: ".32em", textTransform: "uppercase", color: "var(--blush-700)"
          }}>Need a hand?</div>
          <p style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic",
            fontSize: 28, color: "var(--ink)", lineHeight: 1.4, margin: "12px 0 24px"
          }}>
            Trouble signing in? Email <a href="mailto:hello@dimples.co" style={{ color: "var(--blush-700)", textDecoration: "none", borderBottom: "1px solid var(--blush-300)" }}>hello@dimples.co</a> or call us — we answer everything personally.
          </p>
          <a className="btn-ghost" href="contact.html">Contact us →</a>
        </div>
      </section>
    </>
  );
}

window.AccountPage = AccountPage;
