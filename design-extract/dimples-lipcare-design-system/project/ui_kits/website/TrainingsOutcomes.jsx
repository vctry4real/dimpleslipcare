/* global React */

const OUTCOMES = [
  {
    t: "Real, working formulations",
    d: "Five complete recipes — scrub, balm, gloss, oil, treatment — yours to use, batch, and sell.",
    i: <><circle cx="12" cy="12" r="8"/><path d="M9 12l2 2 4-4"/></>,
  },
  {
    t: "A launched product line",
    d: "Walk out with at least three SKUs photographed, priced, and ready to list.",
    i: <><path d="M21 8l-9 5-9-5"/><path d="M3 8v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8"/><path d="M12 13v9"/></>,
  },
  {
    t: "Brand identity & packaging",
    d: "Logo, palette, label artwork, and a shopify-ready home page. Reviewed 1:1 by us.",
    i: <><circle cx="12" cy="12" r="3"/><circle cx="6" cy="8" r="2"/><circle cx="18" cy="8" r="2"/><circle cx="12" cy="20" r="2"/><path d="M12 15v3M10 10l-3-1M14 10l3-1"/></>,
  },
  {
    t: "A private circle of founders",
    d: "Six months of WhatsApp access, monthly office hours, and a directory of trusted suppliers.",
    i: <><circle cx="9" cy="8" r="4"/><circle cx="17" cy="11" r="3"/><path d="M2 21c0-3 3-6 7-6s7 3 7 6M14 21c0-2 2-4 5-4"/></>,
  },
];

function TrainingsOutcomes() {
  return (
    <section className="section-band">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">What you'll walk away with</div>
            <h2>Not a course.<br/>A launched brand.</h2>
          </div>
          <p className="right">
            We measure the programme by what's on your shelf at the end of week twelve — formulas in hand, a website live, and a small circle of customers ordering again.
          </p>
        </div>
        <div className="outcomes">
          {OUTCOMES.map((o, i) => (
            <div className="outcome" key={i}>
              <div className="o-ico">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{o.i}</svg>
              </div>
              <h4>{o.t}</h4>
              <p>{o.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.TrainingsOutcomes = TrainingsOutcomes;
