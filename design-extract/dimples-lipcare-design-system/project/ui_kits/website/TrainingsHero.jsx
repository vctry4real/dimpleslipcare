/* global React, Sparkle, Heart */

function TrainingsHero() {
  return (
    <section className="page-hero">
      <Sparkle size={48} style={{ position: "absolute", top: 72, left: "6%" }} delay={0}/>
      <Sparkle size={28} style={{ position: "absolute", top: 280, left: "3%" }} delay={1.2}/>
      <Heart size={36} style={{ position: "absolute", bottom: 96, left: "44%" }} delay={0.4}/>
      <div className="wrap hero-row">
        <div>
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span>Trainings</span>
          </div>
          <h1>
            Build your own<br/>
            lipcare brand —<br/>
            <span className="script">start to shelf.</span>
          </h1>
          <p className="lead">
            A five-module programme that takes you from chemistry bench to launched, certified line. Same formulas, suppliers, and packaging contacts we use ourselves.
          </p>
          <div className="hero-meta">
            <div><div className="v">12 wk</div><div className="l">Programme</div></div>
            <div><div className="v">5</div><div className="l">Modules</div></div>
            <div><div className="v">8</div><div className="l">Seats per cohort</div></div>
            <div><div className="v">April 2</div><div className="l">Next start</div></div>
          </div>
          <div style={{ display: "flex", gap: 14, alignItems: "center", marginTop: 36 }}>
            <a className="btn-primary" href="#apply">
              Reserve your seat
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="btn-ghost" href="#modules">See the modules</a>
          </div>
        </div>

        <div className="hero-art">
          <span className="corner-tag">April 2026 · 8 seats left</span>

          <Sparkle size={44} style={{ position: "absolute", top: 60, right: 60 }} delay={0.4}/>
          <Sparkle size={28} style={{ position: "absolute", bottom: 100, left: 50 }} delay={1.6}/>
          <Heart size={30} style={{ position: "absolute", top: 120, left: 50 }} delay={0.9}/>

          {/* Floating module cards stacked to imply a programme */}
          <div style={{
            position: "absolute", left: "50%", top: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex", flexDirection: "column", gap: 12,
            width: "78%",
          }}>
            {["Formulation", "Product making", "Branding", "Support", "Launch"].map((m, i) => (
              <div key={m} style={{
                background: "rgba(255,255,255,.85)",
                backdropFilter: "blur(8px)",
                borderRadius: 14,
                padding: "14px 20px",
                display: "flex", justifyContent: "space-between", alignItems: "center",
                boxShadow: "var(--shadow-2)",
                transform: `translateX(${(i % 2 === 0 ? -1 : 1) * 8}px) rotate(${(i - 2) * 1.2}deg)`,
                opacity: 0.95,
              }}>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "var(--blush-800)", fontSize: 13 }}>
                  {["i","ii","iii","iv","v"][i]}
                </span>
                <span style={{ fontFamily: "var(--font-serif)", color: "var(--ink)", fontSize: 18 }}>{m}</span>
                <span style={{ fontFamily: "var(--font-sans)", fontSize: 10, letterSpacing: ".22em", color: "var(--ink-mute)", textTransform: "uppercase" }}>
                  Module
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.TrainingsHero = TrainingsHero;
