/* global React, Sparkle, Heart */

function TrainingsApply() {
  const [submitted, setSubmitted] = React.useState(false);

  return (
    <section className="apply-band" id="apply">
      <Sparkle size={48} style={{ position: "absolute", top: 80, right: "8%" }} delay={0.4}/>
      <Heart size={40} style={{ position: "absolute", bottom: 96, left: "8%" }} delay={0.8}/>

      <div className="wrap apply-grid">
        <div>
          <div className="eyebrow" style={{
            fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11,
            letterSpacing: ".32em", textTransform: "uppercase", color: "var(--blush-700)"
          }}>Apply for the April cohort</div>
          <h2>Tell us about<br/>the brand you want<br/>to build.</h2>
          <p className="lead">
            Applications are read by us personally. We get back within three working days with either a seat offer or a thoughtful reason it isn't the right fit yet.
          </p>
          <div style={{
            background: "rgba(255,255,255,.6)", backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,.7)", borderRadius: 20,
            padding: 24, marginTop: 24, maxWidth: 460,
          }}>
            <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 22, color: "var(--ink)", lineHeight: 1.3 }}>
              Eight seats. Six taken. April 2.
            </div>
            <div style={{ fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: "var(--ink-mute)", marginTop: 8 }}>
              Early-bird ends · March 19
            </div>
          </div>
        </div>

        <form className="apply-form" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "24px 8px" }}>
              <Heart size={56} style={{ margin: "0 auto 16px" }}/>
              <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 28, color: "var(--ink)" }}>
                Application received — thank you.
              </div>
              <div style={{ fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--ink-soft)", marginTop: 8 }}>
                We'll be in touch within three working days. Check your inbox (and spam, just in case).
              </div>
            </div>
          ) : (
            <>
              <div className="grid-2">
                <div className="field">
                  <label>First name</label>
                  <input type="text" required />
                </div>
                <div className="field">
                  <label>Last name</label>
                  <input type="text" required />
                </div>
              </div>
              <div className="field">
                <label>Email</label>
                <input type="email" placeholder="you@brand.co" required />
              </div>
              <div className="field">
                <label>Phone</label>
                <input type="tel" placeholder="0903 879 6354" />
              </div>
              <div className="field">
                <label>What stage is your brand at?</label>
                <select defaultValue="">
                  <option value="" disabled>Pick one…</option>
                  <option>Just an idea — exploring</option>
                  <option>Have a name & some recipes</option>
                  <option>Selling, want to professionalise</option>
                  <option>Already launched, want to scale</option>
                </select>
              </div>
              <div className="field">
                <label>Tell us a sentence or two about the brand you want to build</label>
                <textarea rows={4} placeholder="What's the name? Who's it for? What's the vibe?" />
              </div>
              <div className="field">
                <label>Preferred payment</label>
                <select defaultValue="">
                  <option value="" disabled>Pick one…</option>
                  <option>Pay in full · ₦495,000 (early-bird)</option>
                  <option>Three monthly payments · ₦185,000 × 3</option>
                  <option>I'd like to discuss other terms</option>
                </select>
              </div>
              <button type="submit" className="submit">Send application →</button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

window.TrainingsApply = TrainingsApply;
