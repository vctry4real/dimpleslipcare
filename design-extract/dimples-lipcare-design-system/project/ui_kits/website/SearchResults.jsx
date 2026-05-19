/* global React, GlossBottle, ScrubJar, OilDropper, LipIcon, Sparkle, Heart */

const PRODUCT_INDEX = [
  { type: "product", nm: "Glass Lip Gloss", blurb: "Mirror-shine, zero tack.", price: "₦8,500", cat: "gloss", art: () => <GlossBottle scale={0.85} label="Glass"/> },
  { type: "product", nm: "Velvet Lip Balm", blurb: "Daily comfort, never sticky.", price: "₦5,000", cat: "balm", art: () => <GlossBottle scale={0.85} label="Velvet" capColor="linear-gradient(180deg,#f5e9dc,#d9a98c)" bodyColor="linear-gradient(160deg, rgba(255,255,255,.9), #fbe4e7 50%, #f0b8c2)"/> },
  { type: "product", nm: "Sugar Lip Scrub", blurb: "Sweet polish in a pot.", price: "₦6,500", cat: "scrub", art: () => <ScrubJar scale={0.85} label="Sugar"/> },
  { type: "product", nm: "Petal Lip Oil",   blurb: "Dewy nourishment in a drop.", price: "₦12,000", cat: "oil", art: () => <OilDropper scale={0.9} label="Petal"/> },
  { type: "product", nm: "Pink Lips Treatment", blurb: "Softer, even-toned lips.", price: "₦15,000", cat: "treatment", art: () => <LipIcon scale={2}/> },
  { type: "product", nm: "Plump Lip Gloss", blurb: "A tingly, plumping pink.", price: "₦9,500", cat: "gloss", art: () => <GlossBottle scale={0.85} label="Plump" capColor="linear-gradient(180deg,#d97189,#8c2d4a)"/> },
];

const JOURNAL_INDEX = [
  { type: "journal", tag: "Formulation", nm: "What's actually in a lip gloss", blurb: "Reading an INCI label takes a minute. Reading it well takes a couple of products and a notes app.", meta: "5 min read" },
  { type: "journal", tag: "Ritual",      nm: "The four-week pink lips reset",    blurb: "Why softer, more even-toned lips take exactly four weeks, and the simple rhythm that gets you there.", meta: "7 min read" },
  { type: "journal", tag: "Founder",     nm: "From a kitchen table to 15k orders", blurb: "The first ten units of Velvet Balm were poured in a borrowed kitchen.", meta: "9 min read" },
];

const TRAININGS_INDEX = [
  { type: "trainings", tag: "Programme · 12 weeks", nm: "Build your own lipcare brand", blurb: "Five modules from formulation to launch. Eight seats per cohort. Next start: April 2.", meta: "Trainings" },
];

const HELP_INDEX = [
  { type: "help", tag: "Shipping", nm: "How fast do you process orders?", blurb: "Orders placed before 1pm leave the studio the same day. The rest go out the next morning.", meta: "FAQ" },
  { type: "help", tag: "Returns",  nm: "What's your returns policy?",     blurb: "Unopened products can be returned within 14 days of delivery for a full refund.", meta: "FAQ" },
];

function SearchResults({ onAdd }) {
  const [query, setQuery] = React.useState("gloss");
  const q = query.trim().toLowerCase();

  const filterIt = (idx) => idx.filter(r =>
    (r.nm + " " + (r.blurb || "") + " " + (r.tag || "") + " " + (r.cat || "")).toLowerCase().includes(q)
  );

  const products  = q ? filterIt(PRODUCT_INDEX) : [];
  const journals  = q ? filterIt(JOURNAL_INDEX) : [];
  const trainings = q ? filterIt(TRAININGS_INDEX) : [];
  const help      = q ? filterIt(HELP_INDEX) : [];
  const totalCount = products.length + journals.length + trainings.length + help.length;

  const suggestions = ["gloss", "balm", "treatment", "scrub", "training", "ingredients", "returns"];

  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <Sparkle size={32} style={{ position: "absolute", top: 80, right: "10%" }} delay={0.4}/>
        <Heart size={28} style={{ position: "absolute", bottom: 40, right: "30%" }} delay={1.2}/>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span>Search</span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 4.6vw, 64px)", marginBottom: 24 }}>
            Search <span className="script">everything.</span>
          </h1>

          <div className="search-bar">
            <span className="icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            </span>
            <input
              type="text"
              placeholder="Try 'gloss', 'training', or 'shipping'…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
            {query && (
              <button className="clear" onClick={() => setQuery("")} aria-label="Clear">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
              </button>
            )}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)", padding: "0 0 96px" }}>
        <div className="wrap">

          {q ? (
            <div className="search-meta">
              <div className="count">
                <strong>{totalCount}</strong> result{totalCount !== 1 ? "s" : ""} for <em style={{ fontStyle: "italic" }}>"{query}"</em>
              </div>
              <div className="search-suggestions">
                <span className="lbl">Try</span>
                {suggestions.slice(0, 5).map(s => (
                  <a key={s} className="search-suggestion" onClick={(e)=>{ e.preventDefault(); setQuery(s); }}>{s}</a>
                ))}
              </div>
            </div>
          ) : (
            <div className="search-suggestions" style={{ marginBottom: 56 }}>
              <span className="lbl">Try searching</span>
              {suggestions.map(s => (
                <a key={s} className="search-suggestion" onClick={(e)=>{ e.preventDefault(); setQuery(s); }}>
                  <span className="ic">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
                    {s}
                  </span>
                </a>
              ))}
            </div>
          )}

          {q && totalCount === 0 ? (
            <div className="search-empty">
              <Heart size={72} style={{ margin: "0 auto" }}/>
              <h2>Nothing matched "{query}".</h2>
              <p>Try a shorter word — or pick one of the suggestions above. If you can't find what you're looking for, our line is always open.</p>
              <div style={{ display: "flex", gap: 14, justifyContent: "center" }}>
                <a className="btn-primary" href="shop.html">Browse the shop</a>
                <a className="btn-ghost" href="contact.html">Get in touch</a>
              </div>
            </div>
          ) : q && (
            <div className="search-grid">
              <aside className="search-filters">
                <h4>Filter</h4>
                {["Products", "Journal", "Trainings", "Help & FAQ"].map(t => (
                  <label className="filter-row" key={t}>
                    <input type="checkbox" defaultChecked/>
                    {t}
                    <span className="count">
                      {t === "Products" ? products.length : t === "Journal" ? journals.length : t === "Trainings" ? trainings.length : help.length}
                    </span>
                  </label>
                ))}
                <h4>Category</h4>
                {["All", "Scrubs", "Balms", "Glosses", "Oils", "Treatments"].map((c, i) => (
                  <label className="filter-row" key={c}>
                    <input type="checkbox" defaultChecked={i === 0}/>
                    {c}
                  </label>
                ))}
                <h4>Price</h4>
                {["Under ₦7,000", "₦7,000 – ₦15,000", "Over ₦15,000"].map(p => (
                  <label className="filter-row" key={p}>
                    <input type="checkbox"/>
                    {p}
                  </label>
                ))}
              </aside>

              <div>
                {products.length > 0 && (
                  <div className="search-section">
                    <div className="head">
                      <h3>Products · {products.length}</h3>
                      <a className="all" href="shop.html">See all in shop →</a>
                    </div>
                    <div className="products-grid">
                      {products.map((p, i) => (
                        <a className="product-card" key={i} href="product.html" style={{ textDecoration: "none", color: "inherit" }}>
                          <div className="photo">
                            <div className="sheen"></div>
                            <span className="price-pill">{p.price}</span>
                            {p.art()}
                          </div>
                          <h3>{p.nm}</h3>
                          <p className="blurb">{p.blurb}</p>
                          <div className="row">
                            <span className="stars">★ ★ ★ ★ ★</span>
                            <button className="add" onClick={(e)=>{ e.preventDefault(); e.stopPropagation(); onAdd?.(p.nm); }}>Add to bag →</button>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {trainings.length > 0 && (
                  <div className="search-section">
                    <div className="head"><h3>Trainings · {trainings.length}</h3></div>
                    {trainings.map((r, i) => (
                      <a className="result-tile" href="trainings.html" key={i}>
                        <div className="thumb"><Sparkle size={28}/></div>
                        <div>
                          <div className="tag">{r.tag}</div>
                          <h4 className="nm">{r.nm}</h4>
                          <p className="blurb">{r.blurb}</p>
                        </div>
                        <span className="arr"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg></span>
                      </a>
                    ))}
                  </div>
                )}

                {journals.length > 0 && (
                  <div className="search-section">
                    <div className="head">
                      <h3>Journal · {journals.length}</h3>
                      <a className="all" href="journal.html">All journal →</a>
                    </div>
                    {journals.map((r, i) => (
                      <a className="result-tile" href="journal-post.html" key={i}>
                        <div className="thumb" style={{ background: "var(--grad-rosegold)" }}><Heart size={26}/></div>
                        <div>
                          <div className="tag">{r.tag} · {r.meta}</div>
                          <h4 className="nm">{r.nm}</h4>
                          <p className="blurb">{r.blurb}</p>
                        </div>
                        <span className="arr"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg></span>
                      </a>
                    ))}
                  </div>
                )}

                {help.length > 0 && (
                  <div className="search-section">
                    <div className="head">
                      <h3>Help & FAQ · {help.length}</h3>
                      <a className="all" href="faq.html">All FAQ →</a>
                    </div>
                    {help.map((r, i) => (
                      <a className="result-tile" href="faq.html" key={i}>
                        <div className="thumb" style={{ background: "var(--bg-2)" }}>
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3M12 17v.1"/></svg>
                        </div>
                        <div>
                          <div className="tag">{r.tag}</div>
                          <h4 className="nm">{r.nm}</h4>
                          <p className="blurb">{r.blurb}</p>
                        </div>
                        <span className="arr"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg></span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

window.SearchResults = SearchResults;
