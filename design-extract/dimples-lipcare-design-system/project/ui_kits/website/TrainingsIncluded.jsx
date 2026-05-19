/* global React */

const INCLUDED = [
  { t: "All five module recipes",            m: "Yours to use forever" },
  { t: "Two days in our Lagos studio",       m: "Module ii" },
  { t: "Raw materials & containers",         m: "First 50 units" },
  { t: "1:1 brand identity review",          m: "Module iii" },
  { t: "Six-month private founders circle",  m: "Post-cohort" },
  { t: "Trusted supplier directory",         m: "Lifetime access" },
  { t: "Dimples Studio certificate",         m: "On completion" },
  { t: "Launch-day support call",            m: "Module v" },
];

function TrainingsIncluded() {
  return (
    <section className="section-band tinted">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">What's included</div>
            <h2>Eight things you<br/>don't have to figure out.</h2>
          </div>
          <p className="right">
            Tuition includes everything below — no hidden raw material costs, no upsells, no "premium" add-ons. The same kit goes home with every founder.
          </p>
        </div>

        <div className="included">
          <div className="included-list">
            {INCLUDED.map((row, i) => (
              <div className="incl-row" key={i}>
                <span className="ico">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                </span>
                <span className="ttl">{row.t}</span>
                <span className="meta">{row.m}</span>
              </div>
            ))}
          </div>

          <div className="instructor-card">
            <div className="ph">
              <span className="placeholder-tag">Photo placeholder · drop in studio shot</span>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="rgba(140,45,74,.3)" strokeWidth="1" strokeLinecap="round">
                <circle cx="12" cy="9" r="4"/>
                <path d="M4 21c0-4 4-7 8-7s8 3 8 7"/>
              </svg>
            </div>
            <div className="role">Your instructor</div>
            <h3>Founder, Dimples Lipcare</h3>
            <p>
              Cosmetic chemist, ten years in private-label beauty, and the hand behind every Dimples batch. Trained over forty founders in the past eighteen months — many of whom now run their own shelves at Lagos boutiques.
            </p>
            <p style={{ fontStyle: "italic", color: "var(--blush-700)", fontSize: 15 }}>
              "I made every mistake you're about to skip. This programme is the cheat sheet I wish I'd been handed."
            </p>
            <div className="signature">Dimples</div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.TrainingsIncluded = TrainingsIncluded;
