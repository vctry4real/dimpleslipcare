/* global React */

function ContactSection() {
  const [email, setEmail] = React.useState("");
  const [success, setSuccess] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setEmail("");
    setSuccess(true);
    setTimeout(() => setSuccess(false), 4000);
  };

  const cards = [
    { l: "Call", v: "0903 879 6354", ico: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/> },
    { l: "Call", v: "0902 533 3560", ico: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/> },
    { l: "Instagram", v: "@Dimples_lipcare", ico: <><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1" fill="currentColor"/></> },
    { l: "TikTok", v: "@Dimples_lipcare", deep: true, ico: <path fill="currentColor" stroke="none" d="M19 7.5a6.5 6.5 0 0 1-4-1.4v8.7a6 6 0 1 1-6-6c.3 0 .6 0 1 .1V12a3 3 0 1 0 2 2.8V2h3a4.5 4.5 0 0 0 4 4.5v1z"/> },
  ];

  return (
    <section className="contact" id="contact">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow" style={{
            fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11,
            letterSpacing: ".32em", textTransform: "uppercase", color: "var(--blush-700)"
          }}>Stay close</div>
          <h2>Drop notes,<br/>new batches & rituals — in your inbox.</h2>
          <p className="lead">Pop your email below for first dibs on restocks and a 10% welcome on your first order. No spam, just lip news.</p>
          <form className="newsletter-form" onSubmit={submit}>
            <input type="email" placeholder="you@dimples.co" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button type="submit">Subscribe</button>
          </form>
          <div className={`newsletter-success ${success ? "show" : ""}`}>Welcome — check your inbox for your code. ♡</div>
        </div>
        <div>
          <div className="eyebrow" style={{
            fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11,
            letterSpacing: ".32em", textTransform: "uppercase", color: "var(--blush-700)", marginBottom: 16
          }}>Reach us</div>
          <div className="contact-cards">
            {cards.map((c, i) => (
              <div className={`contact-card ${c.deep ? "deep" : ""}`} key={i}>
                <div className="ico">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{c.ico}</svg>
                </div>
                <div>
                  <div className="l">{c.l}</div>
                  <div className="v">{c.v}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.ContactSection = ContactSection;
