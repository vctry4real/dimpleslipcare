/* global React, Sparkle, Heart */

function NotFoundPage() {
  return (
    <section className="notfound">
      <Sparkle size={48} style={{ position: "absolute", top: 100, left: "12%" }} delay={0}/>
      <Sparkle size={32} style={{ position: "absolute", bottom: 120, right: "14%" }} delay={1.2}/>
      <Heart size={40} style={{ position: "absolute", top: 220, right: "18%" }} delay={0.5}/>
      <Heart size={28} style={{ position: "absolute", bottom: 180, left: "20%" }} delay={1.8}/>

      <div className="wrap">
        <p className="big">404</p>
        <h2>This page slipped under the counter.</h2>
        <p>We couldn't find the page you were looking for — it may have moved, sold out, or never existed. The studio's still open though.</p>
        <div className="links">
          <a className="btn-primary" href="index.html">
            Back to home
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
          <a className="btn-ghost" href="shop.html">Browse the shop</a>
          <a className="btn-ghost" href="contact.html">Tell us what you were looking for</a>
        </div>

        {/* A friendly orientation strip */}
        <div style={{
          marginTop: 64,
          padding: "20px 28px",
          background: "var(--pearl)",
          borderRadius: "var(--r-lg)",
          boxShadow: "var(--shadow-2)",
          border: "1px solid var(--line-soft)",
          display: "flex", gap: 32, justifyContent: "center", flexWrap: "wrap",
          maxWidth: 720, marginLeft: "auto", marginRight: "auto",
        }}>
          {[
            { ttl: "Shop the collection", href: "shop.html" },
            { ttl: "The Ritual", href: "ritual.html" },
            { ttl: "Trainings", href: "trainings.html" },
            { ttl: "Journal", href: "journal.html" },
          ].map(l => (
            <a key={l.ttl} href={l.href} style={{
              fontFamily: "var(--font-serif)", fontStyle: "italic",
              fontSize: 17, color: "var(--blush-700)", textDecoration: "none",
              borderBottom: "1px solid var(--blush-200)", paddingBottom: 2,
            }}>{l.ttl}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

window.NotFoundPage = NotFoundPage;
