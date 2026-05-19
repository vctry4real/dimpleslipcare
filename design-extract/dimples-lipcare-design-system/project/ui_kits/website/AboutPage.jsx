/* global React, Sparkle, Heart */

function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <Sparkle size={48} style={{ position: "absolute", top: 80, left: "8%" }} delay={0.2}/>
        <Sparkle size={28} style={{ position: "absolute", bottom: 100, left: "30%" }} delay={1.4}/>
        <Heart size={36} style={{ position: "absolute", top: 180, right: "12%" }} delay={0.4}/>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span>Our Story</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "end" }}>
            <h1 style={{ margin: 0 }}>
              One tiny <span className="script">pink</span><br/>
              studio in Lagos.
            </h1>
            <p className="lead" style={{ maxWidth: 460 }}>
              Dimples started in 2022 with a single batch of lip balm mixed on a kitchen table. Three years later we hand-pour five products from a small studio off Allen Avenue — still the same hands, just better tools.
            </p>
          </div>
          <div className="about-stats">
            <div className="about-stat"><div className="v">2022</div><div className="l">Founded</div></div>
            <div className="about-stat"><div className="v">15k+</div><div className="l">Happy lips</div></div>
            <div className="about-stat"><div className="v">40+</div><div className="l">Founders trained</div></div>
            <div className="about-stat"><div className="v">100%</div><div className="l">Hand-poured</div></div>
          </div>
        </div>
      </section>

      <section className="section-band tinted">
        <div className="wrap" style={{ display: "grid", gap: 96 }}>
          <div className="story-block">
            <div>
              <div className="eyebrow">The beginning</div>
              <h2>A batch of balm,<br/>a borrowed scale.</h2>
              <p>
                The first ten units of what would become Velvet Lip Balm were poured in a borrowed kitchen, with a borrowed scale, into containers I'd ordered too many of. They sold out in a week to friends and friends-of-friends.
              </p>
              <p>
                The second batch sold out faster. By batch four I had to learn what an emulsifier actually does. By batch nine I had a logo and a permit. That's how Dimples started — slowly, then all at once.
              </p>
              <div className="signature">— Dimples</div>
            </div>
            <div className="story-art">
              <span className="placeholder-tag">Photo placeholder · founder portrait</span>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(140,45,74,.3)" strokeWidth="1" strokeLinecap="round">
                <circle cx="12" cy="9" r="4"/>
                <path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>
              </svg>
            </div>
          </div>

          <div className="story-block reverse">
            <div>
              <div className="eyebrow">The studio today</div>
              <h2>Small batches,<br/>fresh on shelves.</h2>
              <p>
                We pour every product ourselves, in batches of fifty to two hundred, in a small studio off Allen Avenue. Nothing sits in a warehouse for months. Restocks happen weekly, and what reaches your lips is rarely more than three weeks old.
              </p>
              <p>
                We pick our raw materials by hand — beeswax from Plateau, shea from Sokoto, jojoba and rosehip from suppliers we've used since the borrowed-kitchen days. Same vendors, just bigger orders now.
              </p>
            </div>
            <div className="story-art">
              <span className="placeholder-tag">Photo placeholder · studio interior</span>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(140,45,74,.3)" strokeWidth="1" strokeLinecap="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 12h6M12 9v6"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="section-band">
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">What we hold to</div>
              <h2>Three things we<br/>won't compromise on.</h2>
            </div>
            <p className="right">There are a lot of corners to cut in cosmetics — synthetic fragrance, cheap fillers, frozen stock that sits for years. These are the three lines we drew early and won't move.</p>
          </div>
          <div className="values-grid">
            <div className="value">
              <div className="num">i</div>
              <h3>Hand-poured, every batch</h3>
              <p>No contract manufacturer, no faceless factory floor. The hands that mixed your gloss are the same hands that mixed every gloss before it.</p>
            </div>
            <div className="value">
              <div className="num">ii</div>
              <h3>Real ingredients, full INCI</h3>
              <p>Every ingredient is listed on every product. We use plant emollients, beeswax, shea, and naturally-derived pigments — never synthetic fragrance or mineral oil.</p>
            </div>
            <div className="value">
              <div className="num">iii</div>
              <h3>Fresh, never frozen</h3>
              <p>Small batches, weekly restocks. Nothing sits in a warehouse waiting to oxidise. What reaches your lips is almost always less than three weeks old.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="apply-band" style={{ padding: "80px 0" }}>
        <Heart size={40} style={{ position: "absolute", top: 80, left: "12%" }} delay={0.4}/>
        <Sparkle size={32} style={{ position: "absolute", bottom: 80, right: "10%" }} delay={1.2}/>
        <div className="wrap" style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
          <div style={{
            fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11,
            letterSpacing: ".32em", textTransform: "uppercase", color: "var(--blush-700)"
          }}>What's next</div>
          <h2 style={{
            fontFamily: "var(--font-serif)", fontStyle: "italic", fontWeight: 400,
            fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.02,
            color: "var(--ink)", margin: "16px 0 28px", maxWidth: "20ch", marginLeft: "auto", marginRight: "auto"
          }}>
            We want to train every lipcare<br/>founder in West Africa.
          </h2>
          <p style={{
            fontFamily: "var(--font-sans)", fontSize: 17, color: "var(--ink-soft)",
            lineHeight: 1.6, margin: "0 auto 32px", maxWidth: 540,
          }}>
            The thing that's taken us five years to learn shouldn't take you five years too. Our trainings programme is the cheat sheet — same formulas, same suppliers, ours to share.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
            <a className="btn-primary" href="trainings.html" style={{ background: "var(--ink)" }}>
              Explore trainings
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
            </a>
            <a className="btn-ghost" href="contact.html">Get in touch</a>
          </div>
        </div>
      </section>
    </>
  );
}

window.AboutPage = AboutPage;
