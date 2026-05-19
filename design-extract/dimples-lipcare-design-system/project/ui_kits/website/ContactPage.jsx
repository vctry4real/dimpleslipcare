/* global React, Sparkle, Heart */

function ContactHero() {
  return (
    <section className="page-hero">
      <Sparkle size={48} style={{ position: "absolute", top: 80, right: "8%" }} delay={0.2}/>
      <Sparkle size={24} style={{ position: "absolute", bottom: 80, right: "16%" }} delay={1.4}/>
      <Heart size={36} style={{ position: "absolute", bottom: 96, left: "10%" }} delay={0.4}/>
      <div className="wrap contact-hero-grid">
        <div>
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span>Contact</span>
          </div>
          <h1>
            We're <span className="script">always</span><br/>
            in the studio.
          </h1>
          <p className="lead">
            Lipcare questions, training enquiries, bulk gifting, press, or just to say hi — pick the channel that feels right. We answer everything personally, usually within a day.
          </p>
        </div>
        <div className="contact-big">
          <div className="card">
            <div className="ico">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="l">Call · WhatsApp</div>
            <div className="v">0903 879 6354</div>
            <div className="helper">Founder line · Mon–Sat 9–6 WAT</div>
          </div>
          <div className="card">
            <div className="ico">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div className="l">Studio</div>
            <div className="v">0902 533 3560</div>
            <div className="helper">Orders & shipping · Mon–Fri 10–5</div>
          </div>
          <div className="card">
            <div className="ico">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="18" cy="6" r="1" fill="currentColor"/>
              </svg>
            </div>
            <div className="l">Instagram</div>
            <div className="v">@Dimples_lipcare</div>
            <div className="helper">DMs open · Tagged posts welcome</div>
          </div>
          <div className="card deep">
            <div className="ico">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 7.5a6.5 6.5 0 0 1-4-1.4v8.7a6 6 0 1 1-6-6c.3 0 .6 0 1 .1V12a3 3 0 1 0 2 2.8V2h3a4.5 4.5 0 0 0 4 4.5v1z"/></svg>
            </div>
            <div className="l">TikTok</div>
            <div className="v">@Dimples_lipcare</div>
            <div className="helper">New batch unboxings · Tuesdays</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactBody() {
  const [form, setForm] = React.useState({ name: "", email: "", topic: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  return (
    <>
      <section className="section-band tinted">
        <div className="wrap">
          <div className="studio-info">
            <div>
              <div className="l">Studio address</div>
              <div className="v">Off Allen Avenue<br/>Ikeja, Lagos</div>
            </div>
            <div>
              <div className="l">Opening hours</div>
              <div className="v">Mon–Fri · 10am – 5pm<br/>Saturday · By appointment</div>
            </div>
            <div>
              <div className="l">Shipping</div>
              <div className="v">Nationwide via GIG &amp; Kwik<br/>2–4 working days</div>
            </div>
          </div>
        </div>
      </section>

      <section className="apply-band">
        <Sparkle size={40} style={{ position: "absolute", top: 80, right: "10%" }} delay={0.4}/>
        <Heart size={32} style={{ position: "absolute", bottom: 96, left: "10%" }} delay={0.8}/>

        <div className="wrap apply-grid">
          <div>
            <div style={{
              fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11,
              letterSpacing: ".32em", textTransform: "uppercase", color: "var(--blush-700)"
            }}>Send us a note</div>
            <h2>For anything that<br/>doesn't fit a DM.</h2>
            <p className="lead">
              Press, wholesale, custom batches for events, training enquiries that need a longer answer — the form is for any of that.
            </p>
            <div style={{
              background: "rgba(255,255,255,.6)", backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,.7)", borderRadius: 20,
              padding: 24, marginTop: 24, maxWidth: 460,
            }}>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink)", lineHeight: 1.3 }}>
                We reply to every note within a working day.
              </div>
              <div style={{ fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ink-mute)", marginTop: 8 }}>
                For urgent orders · Call or WhatsApp
              </div>
            </div>
          </div>

          <form className="apply-form" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "24px 8px" }}>
                <Heart size={56} style={{ margin: "0 auto 16px" }}/>
                <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 28, color: "var(--ink)" }}>
                  Thank you — we got it.
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--ink-soft)", marginTop: 8 }}>
                  We'll get back within a working day. Keep an eye on your inbox (and spam, just in case).
                </div>
              </div>
            ) : (
              <>
                <div className="grid-2">
                  <div className="field">
                    <label>Your name</label>
                    <input type="text" required value={form.name} onChange={(e)=>update("name", e.target.value)} />
                  </div>
                  <div className="field">
                    <label>Email</label>
                    <input type="email" required value={form.email} onChange={(e)=>update("email", e.target.value)} />
                  </div>
                </div>
                <div className="field">
                  <label>What's this about?</label>
                  <select value={form.topic} onChange={(e)=>update("topic", e.target.value)}>
                    <option value="" disabled>Pick one…</option>
                    <option>Order question</option>
                    <option>Training enquiry</option>
                    <option>Bulk gifting or events</option>
                    <option>Press / partnership</option>
                    <option>Just saying hello</option>
                  </select>
                </div>
                <div className="field">
                  <label>Your message</label>
                  <textarea rows={5} value={form.message} onChange={(e)=>update("message", e.target.value)} placeholder="Tell us as much or as little as you like."/>
                </div>
                <button type="submit" className="submit">Send note →</button>
              </>
            )}
          </form>
        </div>
      </section>
    </>
  );
}

window.ContactHero = ContactHero;
window.ContactBody = ContactBody;
