/* global React */

/**
 * Shared shell for legal pages (Privacy, Terms, etc).
 * Pass `title`, `updated`, `sections` (array of { id, h2, body: JSX }).
 */
function LegalShell({ title, updated, intro, sections, breadcrumb }) {
  const [active, setActive] = React.useState(sections[0]?.id);

  // Highlight TOC item as you scroll
  React.useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY + 120;
      let current = sections[0]?.id;
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= fromTop) current = s.id;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span>{breadcrumb}</span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 4.6vw, 72px)" }}>{title}</h1>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)" }}>
        <div className="wrap legal-grid">
          <aside className="legal-toc">
            <h4>On this page</h4>
            {sections.map(s => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className={active === s.id ? "active" : ""}
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById(s.id);
                  if (el) window.scrollTo({ top: el.offsetTop - 96, behavior: "smooth" });
                }}
              >
                {s.h2}
              </a>
            ))}
          </aside>

          <div className="legal-body">
            <div className="updated">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>
              Last updated · {updated}
            </div>
            {intro && <p className="lead">{intro}</p>}
            {sections.map(s => (
              <React.Fragment key={s.id}>
                <h2 id={s.id}>{s.h2}</h2>
                {s.body}
              </React.Fragment>
            ))}

            <div style={{
              marginTop: 56, padding: "28px 32px",
              background: "var(--bg-2)", borderRadius: "var(--r-lg)",
              display: "flex", justifyContent: "space-between", alignItems: "center",
              flexWrap: "wrap", gap: 14,
            }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 20, color: "var(--ink)" }}>Questions about this?</div>
                <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 4 }}>We answer everything personally. Email or call us, no robots.</div>
              </div>
              <a href="contact.html" className="btn-ghost">Contact us →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

window.LegalShell = LegalShell;
