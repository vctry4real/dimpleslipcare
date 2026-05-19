/* global React, AccountSide */

function SettingsPage() {
  const [dirty, setDirty] = React.useState(false);
  const [toggles, setToggles] = React.useState({
    drops: true,
    journal: true,
    restocks: true,
    trainings: false,
    sms: true,
    whatsapp: false,
  });

  const flip = (k) => { setToggles(t => ({ ...t, [k]: !t[k] })); setDirty(true); };

  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="account.html">Account</a>
            <span className="sep">/</span>
            <span>Settings</span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>
            Your <span className="script">settings.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 540 }}>
            Profile, password, what we email you about. Edit, save, never look at again.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)" }}>
        <div className="wrap orders-grid">
          <AccountSide active="settings" />

          <div className="account-page" style={{ padding: 0 }}>
            {/* Profile */}
            <div className="settings-section">
              <h3>Profile</h3>
              <p className="sub">How your name appears in your bag, on receipts, and to our courier.</p>
              <div className="grid-2">
                <div className="field"><label>First name</label><input defaultValue="Dimples" onChange={() => setDirty(true)}/></div>
                <div className="field"><label>Last name</label><input defaultValue="Founder" onChange={() => setDirty(true)}/></div>
              </div>
              <div className="field"><label>Email</label><input type="email" defaultValue="you@dimples.co" onChange={() => setDirty(true)}/></div>
              <div className="grid-2">
                <div className="field"><label>Phone</label><input type="tel" defaultValue="0903 879 6354" onChange={() => setDirty(true)}/></div>
                <div className="field"><label>Birthday</label><input type="date" defaultValue="1994-09-12" onChange={() => setDirty(true)}/></div>
              </div>
            </div>

            {/* Password */}
            <div className="settings-section">
              <h3>Password</h3>
              <p className="sub">Use a strong one — we recommend a passphrase you'd actually remember.</p>
              <div className="field"><label>Current password</label><input type="password" placeholder="••••••••"/></div>
              <div className="grid-2">
                <div className="field"><label>New password</label><input type="password" placeholder="••••••••"/></div>
                <div className="field"><label>Confirm new</label><input type="password" placeholder="••••••••"/></div>
              </div>
              <a href="#" style={{ fontSize: 12, letterSpacing: ".18em", color: "var(--blush-700)", textDecoration: "none" }}>Send a magic link instead →</a>
            </div>

            {/* Notifications */}
            <div className="settings-section">
              <h3>Notifications</h3>
              <p className="sub">Pick what we email and text you about. We never share contact info — it's just us.</p>

              <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11, letterSpacing: ".32em", textTransform: "uppercase", color: "var(--ink-mute)", margin: "8px 0 0" }}>Email</h4>
              {[
                { k: "drops",     ttl: "New batch drops",        d: "When we pour a new batch — fortnightly at most." },
                { k: "journal",   ttl: "Founder's notes (journal)", d: "Studio essays, formulation deep-dives. About once a fortnight." },
                { k: "restocks",  ttl: "Restock alerts",         d: "Only for items you've hearted. Sent within an hour of restock." },
                { k: "trainings", ttl: "Trainings cohorts",      d: "When we open a new cohort. Twice a year." },
              ].map(row => (
                <div className="row-toggle" key={row.k}>
                  <div>
                    <div className="ttl">{row.ttl}</div>
                    <div className="desc">{row.d}</div>
                  </div>
                  <label className="switch">
                    <input type="checkbox" checked={toggles[row.k]} onChange={() => flip(row.k)}/>
                    <span className="knob"></span>
                  </label>
                </div>
              ))}

              <h4 style={{ fontFamily: "var(--font-sans)", fontWeight: 500, fontSize: 11, letterSpacing: ".32em", textTransform: "uppercase", color: "var(--ink-mute)", margin: "20px 0 0" }}>Texts</h4>
              {[
                { k: "sms",      ttl: "Order tracking via SMS",  d: "Out-for-delivery and delivered alerts to your phone." },
                { k: "whatsapp", ttl: "WhatsApp customer care",  d: "Reply to a single line for any order question." },
              ].map(row => (
                <div className="row-toggle" key={row.k}>
                  <div>
                    <div className="ttl">{row.ttl}</div>
                    <div className="desc">{row.d}</div>
                  </div>
                  <label className="switch">
                    <input type="checkbox" checked={toggles[row.k]} onChange={() => flip(row.k)}/>
                    <span className="knob"></span>
                  </label>
                </div>
              ))}
            </div>

            {/* Linked accounts */}
            <div className="settings-section">
              <h3>Linked accounts</h3>
              <p className="sub">Sign in faster with Google or Apple — link them now to skip the password next time.</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {[
                  { nm: "Google", linked: true,  e: "you@dimples.co" },
                  { nm: "Apple",  linked: false, e: "Not linked" },
                ].map(s => (
                  <div key={s.nm} style={{
                    background: "var(--bg-1)", borderRadius: "var(--r-md)",
                    border: "1px solid var(--line)", padding: "16px 18px",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontFamily: "var(--font-serif)", fontSize: 18, color: "var(--ink)" }}>{s.nm}</div>
                      <div style={{ fontSize: 12, color: "var(--ink-mute)", marginTop: 2 }}>{s.e}</div>
                    </div>
                    <button style={{
                      background: s.linked ? "transparent" : "var(--ink)",
                      color: s.linked ? "var(--ink-mute)" : "var(--cream)",
                      border: s.linked ? "1px solid var(--line)" : "0",
                      fontSize: 11, letterSpacing: ".22em", textTransform: "uppercase", fontWeight: 500,
                      padding: "8px 16px", borderRadius: 999, cursor: "pointer", fontFamily: "var(--font-sans)",
                    }}>
                      {s.linked ? "Unlink" : "Link"}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Danger zone */}
            <div className="settings-section danger-zone">
              <h3>Account</h3>
              <p className="sub">Need a break, or want to leave entirely? Both are options.</p>
              <div className="row-toggle" style={{ paddingTop: 0 }}>
                <div>
                  <div className="ttl">Pause emails</div>
                  <div className="desc">Stops all marketing emails for 90 days. Order receipts still go through.</div>
                </div>
                <button className="btn-danger" style={{
                  background: "transparent", color: "var(--blush-700)", borderColor: "var(--blush-300)",
                }}>Pause for 90 days</button>
              </div>
              <div className="row-toggle">
                <div>
                  <div className="ttl">Delete my account</div>
                  <div className="desc">Removes your data permanently within 30 days. Past orders stay for accounting.</div>
                </div>
                <button className="btn-danger">Delete account</button>
              </div>
            </div>

            {/* Sticky save bar */}
            {dirty && (
              <div className="save-bar">
                <span className="msg">You've got unsaved changes.</span>
                <div className="actions">
                  <button className="discard" onClick={() => setDirty(false)}>Discard</button>
                  <button className="save" onClick={() => setDirty(false)}>Save changes</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

window.SettingsPage = SettingsPage;
