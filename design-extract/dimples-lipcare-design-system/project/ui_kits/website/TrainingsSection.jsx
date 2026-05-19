/* global React, Sparkle, Heart */

/**
 * Homepage TrainingsSection — TEASER version.
 * The full programme lives at trainings.html.
 */

const TEASER_MODULES = [
  { i: "i",   t: "Formulation",      d: "Chemistry, ratios, INCI" },
  { i: "ii",  t: "Product making",   d: "Two-day batch in our studio" },
  { i: "iii", t: "Branding",         d: "Visual identity & packaging" },
  { i: "iv",  t: "Support & cert",   d: "Six-month private circle" },
  { i: "v",   t: "Launch",           d: "Your first 100 customers" },
];

function TrainingsSection() {
  return (
    <section className="trainings-teaser" id="trainings">
      <div className="wrap">
        <div className="teaser-panel">
          <div className="teaser-copy">
            <div className="teaser-eyebrow">
              <span className="dot"></span>
              We also offer trainings
            </div>
            <h2 className="teaser-heading">
              Build your own<br/>
              lipcare brand —<br/>
              <em>start to shelf.</em>
            </h2>
            <p className="teaser-lead">
              Five modules. Same formulas, suppliers, and packaging contacts we use ourselves. Walk away with a launched line and a private circle of founders.
            </p>
            <div className="teaser-meta-row">
              <div className="meta-block">
                <div className="mv">5</div>
                <div className="ml">Modules</div>
              </div>
              <div className="meta-divide"></div>
              <div className="meta-block">
                <div className="mv">12<span className="mu">wk</span></div>
                <div className="ml">Programme</div>
              </div>
              <div className="meta-divide"></div>
              <div className="meta-block">
                <div className="mv">8<span className="mu">seats</span></div>
                <div className="ml">April cohort</div>
              </div>
            </div>
            <div className="teaser-ctas">
              <a className="btn-primary" href="trainings.html">
                View the full programme
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
              </a>
              <a className="btn-ghost" href="contact.html">Talk to us</a>
            </div>
          </div>

          <div className="teaser-modules">
            <Sparkle size={36} style={{ position: "absolute", top: 24, right: 28 }} delay={0.2}/>
            <Sparkle size={20} style={{ position: "absolute", bottom: 40, left: 32 }} delay={1.4}/>

            <div className="modules-stack">
              {TEASER_MODULES.map((m, idx) => (
                <a className="module-row" href="trainings.html" key={idx} style={{ transform: `translateY(${idx * -2}px)` }}>
                  <span className="m-num">{m.i}</span>
                  <span className="m-title">{m.t}</span>
                  <span className="m-meta">{m.d}</span>
                  <span className="m-arrow">→</span>
                </a>
              ))}
            </div>

            <div className="cert-badge">
              <div className="cert-ring">
                <Heart size={22} delay={0.3}/>
              </div>
              <div>
                <div className="cert-label">Certificate on completion</div>
                <div className="cert-sub">Issued by Dimples Lipcare Studio · Lagos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.TrainingsSection = TrainingsSection;
