/* global React, Sparkle, Heart, ScrubJar, GlossBottle, OilDropper, LipIcon */

const STEPS = [
  {
    n: "i",
    eyebrow: "Twice a week",
    title: "Scrub.",
    blurb: "Sugar polishes away dry flakes and primes lips for everything else. Massage for thirty seconds, leave for a minute, then rinse — your lips will already feel softer.",
    second: "If your lips are very dry or peeling, pair scrubbing with our Pink Lips Treatment for a week before the rest of the ritual.",
    pairing: { ttl: "Sugar Lip Scrub", note: "Strawberry & cane, 15g" },
    art: () => <ScrubJar scale={1.5} label="Sugar"/>,
  },
  {
    n: "ii",
    eyebrow: "Morning & night",
    title: "Treat.",
    blurb: "Pat on the Pink Lips Treatment on clean lips — a small amount goes far. You'll see visibly softer, more even-toned lips by week four, with most people seeing the first shift by day ten.",
    second: "This is the only step that needs consistency to work. Skipping a day is fine; skipping a week resets you.",
    pairing: { ttl: "Pink Lips Treatment", note: "30ml · 4-week regimen" },
    art: () => <LipIcon scale={3.4}/>,
  },
  {
    n: "iii",
    eyebrow: "All day, every day",
    title: "Glaze.",
    blurb: "Finish with Velvet Balm for plush, comfortable hydration, Glass Gloss for mirror-shine, Petal Oil for a dewy treatment-finish — or layer all three. There are no rules here, only the right finish for the day.",
    second: "We layer balm under gloss for the longest-wearing finish, with a single drop of oil on top to soften the centre.",
    pairing: { ttl: "Velvet · Glass · Petal", note: "Mix to taste" },
    art: () => (
      <div style={{ display: "flex", alignItems: "flex-end", gap: -8 }}>
        <div style={{ transform: "rotate(-8deg)" }}><GlossBottle scale={0.95} label="Velvet" capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"/></div>
        <div style={{ marginLeft: -10, marginRight: -10, zIndex: 2 }}><GlossBottle scale={1.1} label="Glass"/></div>
        <div style={{ transform: "rotate(8deg)" }}><OilDropper scale={0.95} label="Petal"/></div>
      </div>
    ),
  },
];

function RitualHero() {
  return (
    <section className="page-hero">
      <Sparkle size={48} style={{ position: "absolute", top: 80, right: "8%" }} delay={0.2}/>
      <Sparkle size={24} style={{ position: "absolute", bottom: 80, right: "30%" }} delay={1.4}/>
      <Heart size={32} style={{ position: "absolute", top: 200, right: "30%" }} delay={0.6}/>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="breadcrumb" style={{ justifyContent: "center" }}>
          <a href="index.html">Home</a>
          <span className="sep">/</span>
          <span>The Ritual</span>
        </div>
        <h1 style={{ margin: "0 auto 24px", maxWidth: "16ch" }}>
          Three steps,<br/>
          <span className="script">five minutes.</span>
        </h1>
        <p className="lead" style={{ margin: "0 auto", maxWidth: 560 }}>
          A complete lipcare loop you can keep on your nightstand. Each product earns its place — there are no filler steps and nothing to upsell you on later.
        </p>
        <div style={{ marginTop: 36, display: "flex", justifyContent: "center", gap: 14 }}>
          <a className="btn-primary" href="shop.html">
            Shop the ritual
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

function RitualSteps() {
  return (
    <section className="section-band tinted">
      <div className="wrap">
        {STEPS.map((s, idx) => (
          <div className={`ritual-step-block ${idx % 2 === 1 ? "reverse" : ""}`} key={s.n}>
            <div>
              <div className="num">{s.n}</div>
              <div className="step-eyebrow">{s.eyebrow}</div>
              <h2>{s.title}</h2>
              <p>{s.blurb}</p>
              <p style={{ color: "var(--ink-mute)", fontSize: 15 }}>{s.second}</p>
              <div className="pairing">
                <div className="ic">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 8h14l-1 12H6L5 8z"/><path d="M9 8a3 3 0 0 1 6 0"/>
                  </svg>
                </div>
                <div>
                  <strong>{s.pairing.ttl}</strong>
                  <div style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-mute)", marginTop: 2 }}>
                    {s.pairing.note}
                  </div>
                </div>
              </div>
            </div>
            <div className="ritual-art">
              <Sparkle size={32} style={{ position: "absolute", top: 40, right: 50 }} delay={idx * 0.4}/>
              <Heart size={22} style={{ position: "absolute", bottom: 50, left: 50 }} delay={0.8 + idx * 0.3}/>
              {s.art()}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function RitualTips() {
  const tips = [
    { t: "Patch-test new products on the inside of your wrist for 24 hours before applying to lips.", l: "Patch test" },
    { t: "Storing your gloss upside-down keeps the wand soaked and ready — counter-intuitive but works.", l: "Storage hack" },
    { t: "If your lips feel tight after balm, you're applying too thin a layer. More balm, not less.", l: "Balm tip" },
    { t: "Apply Pink Lips Treatment before bed — overnight is when most of the work happens.", l: "Treatment timing" },
  ];
  return (
    <section className="section-band">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Founder's tips</div>
            <h2>Four small things<br/>that make a difference.</h2>
          </div>
          <p className="right">Notes from years of mixing, testing, and answering the same DMs. Each one is a tiny adjustment that changes the result.</p>
        </div>
        <div className="outcomes">
          {tips.map((tp, i) => (
            <div className="outcome" key={i}>
              <div className="o-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"/>
                  <path d="M19 12c0-4-3-7-7-7s-7 3-7 7M12 22V19M5 19h14"/>
                </svg>
              </div>
              <h4 style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 18, color: "var(--blush-700)" }}>{tp.l}</h4>
              <p>{tp.t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.RitualHero = RitualHero;
window.RitualSteps = RitualSteps;
window.RitualTips = RitualTips;
