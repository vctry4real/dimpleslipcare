/* global React, Sparkle, Heart, GlossBottle, ScrubJar, OilDropper */

function FlyerHero() {
  return (
    <div className="hero">
      {/* Left — copy panel */}
      <div className="hero-copy">
        <div className="hero-eyebrow">All in one lipcare brand</div>
        <h1 className="hero-headline">Soft, glossy<br/>&amp; <em>moisturized</em><br/>lips.</h1>
        <p className="hero-lead">
          A hand-poured lipcare ritual — scrubs, balms, glosses, oils, and a pink-lips treatment that actually works. Made in one tiny pink studio.
        </p>
        <div className="hero-pill">
          <span className="dot">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
          </span>
          Shop the collection
        </div>

        {/* Floating heart in negative space */}
        <Heart size={48} style={{ position: "absolute", bottom: 24, right: 30 }} delay={0.3} />
      </div>

      {/* Right — product cluster on a glossy stage */}
      <div className="hero-stage">
        <div className="floor"></div>

        {/* big sparkles around the cluster */}
        <Sparkle size={56} style={{ top: 32, left: 36 }} delay={0} />
        <Sparkle size={36} style={{ top: 80, right: 56 }} delay={0.8} />
        <Sparkle size={28} style={{ bottom: 110, left: 30 }} delay={1.4} />
        <Heart size={32} style={{ top: 28, right: 24 }} delay={0.5} />

        {/* product cluster — staged at different heights */}
        <div style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 0, paddingBottom: 20 }}>
          <div style={{ transform: "translate(20px, -20px) rotate(-6deg)" }}>
            <OilDropper scale={1.15} label="Petal Oil"/>
          </div>
          <div style={{ transform: "translateY(0) rotate(0deg)", marginLeft: -12, marginRight: -8, zIndex: 2 }}>
            <GlossBottle scale={1.4} label="Glass"/>
          </div>
          <div style={{ transform: "translate(0, -30px) rotate(6deg)" }}>
            <ScrubJar scale={1.2} label="Sugar"/>
          </div>
        </div>
      </div>
    </div>
  );
}

window.FlyerHero = FlyerHero;
