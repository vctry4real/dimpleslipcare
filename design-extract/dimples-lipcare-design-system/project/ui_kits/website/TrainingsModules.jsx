/* global React */

const MODULES = [
  {
    n: "i",
    t: "Lipcare formulation",
    blurb: "Lipid chemistry, emollient ratios, INCI nomenclature, preservation. By the end you can read any cosmetic label and reverse-engineer it.",
    tags: ["INCI literacy", "Lipid chemistry", "Stability", "Preservation"],
    len: "3 wk",
    sublen: "Live + recorded",
  },
  {
    n: "ii",
    t: "Hands-on product making",
    blurb: "Two days in our Lagos studio. We make scrub, balm, gloss, oil, and the pink-lips treatment together — from weighing raw materials to filling the final container.",
    tags: ["Studio days", "Raw materials", "Batching", "Filling & labelling"],
    len: "2 d",
    sublen: "On-site · Lagos",
  },
  {
    n: "iii",
    t: "Branding & visual identity",
    blurb: "Name, logo, palette, label artwork, packaging suppliers, and a Shopify-ready home page. You'll leave with a complete visual identity reviewed 1:1.",
    tags: ["Naming", "Logo & palette", "Label artwork", "Web template"],
    len: "3 wk",
    sublen: "Async + 1:1 review",
  },
  {
    n: "iv",
    t: "Ongoing support & certificate",
    blurb: "Six months in our private founders circle: WhatsApp access, monthly office hours, and a directory of trusted suppliers, photographers, and packagers.",
    tags: ["Founders circle", "Monthly office hours", "Supplier directory"],
    len: "6 mo",
    sublen: "Post-cohort",
  },
  {
    n: "v",
    t: "Start your own lipcare brand",
    blurb: "The launch playbook: pricing, shipping, content calendar, your first 100 customers, and how to handle the first inevitable batch crisis.",
    tags: ["Pricing", "Launch calendar", "First 100 customers", "Crisis playbook"],
    len: "2 wk",
    sublen: "Launch sprint",
  },
];

function TrainingsModules() {
  return (
    <section className="section-band deep" id="modules">
      <div className="wrap">
        <div className="section-heading">
          <div>
            <div className="eyebrow">The five modules</div>
            <h2>From bench<br/>to shelf, in order.</h2>
          </div>
          <p className="right">
            Each module builds on the one before it. By the end of module two you've made the product. By the end of module five it's on your own website, with paying customers.
          </p>
        </div>
        <div className="modules-list">
          {MODULES.map((m) => (
            <div className="module-card" key={m.n}>
              <div className="m-num">{m.n}</div>
              <div>
                <h3 className="m-title">{m.t}</h3>
                <p className="m-blurb">{m.blurb}</p>
                <div className="m-tags">
                  {m.tags.map(tg => <span key={tg}>{tg}</span>)}
                </div>
              </div>
              <div className="m-len">
                <div className="v">{m.len}</div>
                <div className="l">{m.sublen}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.TrainingsModules = TrainingsModules;
