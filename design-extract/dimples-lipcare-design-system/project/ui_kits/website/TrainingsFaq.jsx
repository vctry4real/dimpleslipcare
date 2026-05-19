/* global React */

const FAQ = [
  {
    q: "Do I need a science background to take the formulation module?",
    a: "Not at all. Every formula we teach is written for someone who hasn't touched a beaker since secondary school. We start from raw materials and weights — no chemistry degree required.",
  },
  {
    q: "What if I can't make it to the studio days in Lagos?",
    a: "The two studio days in module ii are the one in-person requirement. We schedule them on a weekend with two months' notice so you can plan travel. If absolutely needed, we offer a private make-up weekend at additional cost.",
  },
  {
    q: "Can I sell the recipes you teach as my own products?",
    a: "Yes — that's the whole point. The recipes are yours to use, sell, modify, and re-brand. We don't claim ownership of anything you make after the programme.",
  },
  {
    q: "What's the cohort size and why is it so small?",
    a: "Eight seats. Small enough that we can do hands-on bench work together and review every founder's brand identity 1:1. Bigger cohorts dilute the support and we won't run them.",
  },
  {
    q: "What happens after the six-month founders circle ends?",
    a: "You keep access to the supplier directory forever, plus you're welcome at any future alumni gathering. About half our alumni stay in touch as mentors for the next cohort.",
  },
  {
    q: "Can I pay in instalments other than three?",
    a: "Reach out and we'll work something out. We've split tuition into four and even six payments for the right founder — we'd rather get you in than turn you away over cash flow.",
  },
];

function TrainingsFaq() {
  const [open, setOpen] = React.useState(0);
  return (
    <section className="section-band tinted">
      <div className="wrap">
        <div className="section-heading" style={{ gridTemplateColumns: "1fr", textAlign: "center", justifyItems: "center" }}>
          <div>
            <div className="eyebrow">Frequently asked</div>
            <h2>Questions we hear<br/>most often.</h2>
          </div>
        </div>
        <div className="faq-list">
          {FAQ.map((item, i) => (
            <div className={`faq-item ${open === i ? "open" : ""}`} key={i}>
              <div className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{item.q}</span>
                <span className="toggle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </div>
              <div className="faq-a"><div>{item.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.TrainingsFaq = TrainingsFaq;
