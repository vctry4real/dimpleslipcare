/* global React */

function TrainingsPricing() {
  return (
    <section className="section-band">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">Tuition</div>
            <h2>Two ways<br/>to join us.</h2>
          </div>
          <p className="right">
            Pay in full or split it over three months. Both seats are identical — the difference is just how you pay. Early-bird ends two weeks before the cohort start.
          </p>
        </div>

        <div className="pricing">
          <div className="tier">
            <span className="tier-tag">Pay over time</span>
            <h3>Three-payment plan</h3>
            <p className="tier-desc">Spread the tuition across three monthly payments, starting on cohort day one.</p>
            <div className="price">₦185k<span className="sub">× 3 months</span></div>
            <div className="price-strike">₦555,000 total</div>
            <ul>
              {["All five modules", "Studio days + raw materials", "1:1 brand identity review", "6 months founders circle", "Studio certificate"].map(x => (
                <li key={x}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <a className="tier-cta" href="#apply">Apply for this option</a>
          </div>

          <div className="tier featured">
            <span className="tier-tag">Save ₦60,000 · Early bird</span>
            <h3>Pay in full</h3>
            <p className="tier-desc">One payment up front. Saves you sixty thousand and locks your seat in the next available cohort.</p>
            <div className="price">₦495k<span className="sub">once</span></div>
            <div className="price-strike">₦555,000 list price</div>
            <ul>
              {["Everything in the plan", "Priority cohort placement", "Bonus: packaging supplier intros", "Bonus: photography session credit", "Two extra office-hour slots"].map(x => (
                <li key={x}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <a className="tier-cta" href="#apply">Reserve at early-bird</a>
          </div>
        </div>
      </div>
    </section>
  );
}

window.TrainingsPricing = TrainingsPricing;
