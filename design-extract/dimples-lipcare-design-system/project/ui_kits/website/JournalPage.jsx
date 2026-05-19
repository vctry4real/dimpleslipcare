/* global React, Sparkle, Heart */

const POSTS = [
  { variant: "deep",     tag: "Formulation", title: "What's actually in a lip gloss",            meta: "5 min read · March 12", excerpt: "Reading an INCI label takes a minute. Reading it well takes a couple of products and a notes app. Here's the short version." },
  { variant: "petal",    tag: "Ritual",      title: "The four-week pink lips reset",             meta: "7 min read · March 5",  excerpt: "Why softer, more even-toned lips take exactly four weeks, and the simple rhythm that gets you there." },
  { variant: "gloss",    tag: "Founder",     title: "From a kitchen table to 15k orders",        meta: "9 min read · Feb 24",   excerpt: "The first ten units of Velvet Balm were poured in a borrowed kitchen. The hundredth was poured the same way." },
  { variant: "rosegold", tag: "Studio notes",title: "Why we'll never use synthetic fragrance",   meta: "4 min read · Feb 17",   excerpt: "It's cheap, it's everywhere, and it's the single biggest reason most people's lips dry out by lunchtime." },
  { variant: "petal",    tag: "Training",    title: "How to price your first batch",             meta: "6 min read · Feb 10",   excerpt: "The cost-up formula founders learn in module v of our programme — distilled into a single, honest page." },
  { variant: "deep",     tag: "Behind the scenes", title: "A day in the Dimples studio",         meta: "3 min read · Feb 3",    excerpt: "What an average Wednesday looks like — from raw materials being weighed at 9am to the last order labelled at 6." },
];

function JournalPage() {
  const featured = POSTS[0];
  const rest = POSTS.slice(1);

  return (
    <>
      <section className="page-hero" style={{ padding: "72px 0 48px" }}>
        <Sparkle size={36} style={{ position: "absolute", top: 80, right: "10%" }} delay={0.2}/>
        <Heart size={28} style={{ position: "absolute", bottom: 60, right: "30%" }} delay={1.2}/>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <span>Journal</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 48, alignItems: "end" }}>
            <h1 style={{ marginBottom: 0 }}>
              Notes from the<br/>
              <span className="script">pink studio.</span>
            </h1>
            <p className="lead" style={{ maxWidth: 440 }}>
              Formulation deep-dives, founder essays, and small notes from the studio. New post every fortnight or so — whenever there's something worth saying.
            </p>
          </div>
        </div>
      </section>

      <section className="surface" style={{ padding: "48px 0 96px", background: "var(--bg-1)" }}>
        <div className="wrap">
          <a className="journal-feature" href="journal-post.html">
            <div className="art" style={{ background: "var(--grad-deep)" }}>
              <Sparkle size={48} style={{ position: "absolute", top: 40, right: 60 }} delay={0.2}/>
              <Sparkle size={32} style={{ position: "absolute", bottom: 60, left: 60 }} delay={1.4}/>
              <Heart size={36} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} delay={0.6}/>
            </div>
            <div>
              <div className="tag">Featured · {featured.tag}</div>
              <h2>{featured.title}</h2>
              <p className="excerpt">{featured.excerpt}</p>
              <div className="meta">{featured.meta}</div>
              <span className="read">Read the piece</span>
            </div>
          </a>

          <div className="journal-grid">
            {rest.map((p, i) => (
              <a className={`journal-card ${p.variant}`} href="journal-post.html" key={i}>
                <div className="art">
                  <Sparkle size={26} style={{ position: "absolute", top: 28, right: 32, animationDelay: `${i * 0.4}s` }}/>
                </div>
                <div className="body">
                  <div className="tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <div className="meta">{p.meta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function JournalPostPage() {
  return (
    <>
      <section className="post-hero">
        <div className="wrap">
          <div className="crumbs">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="journal.html">Journal</a>
            <span className="sep">/</span>
            <span>Formulation</span>
          </div>
          <h1><span className="script">What's actually</span><br/>in a lip gloss.</h1>
          <div className="byline">
            <div className="avatar">D</div>
            <div>
              <div className="by-name">By Dimples · Founder</div>
              <div className="meta">5 min read · Published March 12 · Formulation</div>
            </div>
            <div style={{ marginLeft: "auto", display: "flex", gap: 10 }}>
              <button className="icon-btn" aria-label="Share">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>
              </button>
              <button className="icon-btn" aria-label="Save">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="surface" style={{ padding: "32px 0 0", background: "var(--bg-1)" }}>
        <div className="wrap">
          <div className="post-cover">
            <Sparkle size={48} style={{ position: "absolute", top: "30%", left: "20%" }} delay={0.2}/>
            <Sparkle size={32} style={{ position: "absolute", top: "60%", right: "20%" }} delay={1.2}/>
            <Heart size={40} style={{ position: "absolute", top: "40%", right: "30%" }} delay={0.6}/>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)" }}>
        <div className="wrap post-body">
          <p className="lead">
            Reading an INCI label takes a minute. Reading it well takes a couple of products, a notes app, and one short explainer. This is the explainer.
          </p>
          <p>
            Every cosmetic sold legally has an ingredient list — the long, hyphenated paragraph on the back of the box. It's printed in INCI: International Nomenclature of Cosmetic Ingredients. INCI uses Latin and chemistry names so that "shea butter" reads the same in Lagos as it does in Lyon.
          </p>
          <p>
            Here's the thing nobody tells you when you start reading them: ingredients are listed in order of how much is in the product. The first ingredient is almost the entire formula. The last few might be a single drop in the whole batch.
          </p>

          <h2>The skeleton of a gloss</h2>
          <p>
            Strip a gloss down and what you're really looking at is three groups: <strong>the oils that carry shine</strong>, <strong>the wax or polymer that gives it cushion</strong>, and <strong>everything else</strong> — pigments, scent, preservatives, vitamins. The everything-else makes up maybe two percent of the bottle.
          </p>
          <ul>
            <li><strong>Oils for shine.</strong> Castor, jojoba, caprylic/capric triglyceride. Look for these in the first three lines.</li>
            <li><strong>Cushion.</strong> Hydrogenated polyisobutene or a wax blend. Without it, gloss runs off in five minutes.</li>
            <li><strong>Pigment.</strong> Mica + iron oxides for sheer; lakes for opaque. Both can be naturally derived.</li>
            <li><strong>Vitamin E (Tocopherol).</strong> Tiny amount, big shelf-life impact. We always include it.</li>
          </ul>

          <div className="post-pullquote">
            "If the first ingredient on a gloss is mineral oil, put it down. Mineral oil sits on top of your lips, never penetrates, and slowly draws out the moisture underneath."
            <span className="by">— Dimples, on reading labels</span>
          </div>

          <h2>What to skip</h2>
          <p>
            Synthetic fragrance is the single most common reason lips dry out by lunchtime. It shows up on a label as "fragrance" or "parfum" with no further detail — a single line that can legally hide thirty different chemicals. We don't use it. We scent our glosses with absolutes — actual extracts of vanilla, rose, or coconut — listed by name.
          </p>
          <p>
            Mineral oil (sometimes Paraffinum Liquidum) is the other one. It's cheap, it's almost in everything drugstore, and it forms a film that pulls moisture out instead of locking it in. Once you start checking, you'll see it everywhere.
          </p>

          <h2>Read three labels this week</h2>
          <p>
            Pull out three lip products from your bag right now. Read the INCI on each. Look at where the oils sit, what's pretending to be fragrance, whether the wax is named or anonymous. Three labels and you'll be quietly fluent for the rest of your life.
          </p>

          <p style={{ marginTop: 48, fontStyle: "italic", color: "var(--blush-700)", fontFamily: "var(--font-serif)", fontSize: 20 }}>
            — D
          </p>
        </div>
      </section>

      <section className="surface" style={{ background: "var(--bg-2)", paddingTop: 80, paddingBottom: 96 }}>
        <div className="wrap">
          <div className="section-heading">
            <div>
              <div className="eyebrow">Keep reading</div>
              <h2>More from<br/>the journal.</h2>
            </div>
          </div>
          <div className="journal-grid">
            {POSTS.slice(1, 4).map((p, i) => (
              <a className={`journal-card ${p.variant}`} href="journal-post.html" key={i}>
                <div className="art"><Sparkle size={24} style={{ position: "absolute", top: 24, right: 28 }} delay={i * 0.4}/></div>
                <div className="body">
                  <div className="tag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <div className="meta">{p.meta}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

window.JournalPage = JournalPage;
window.JournalPostPage = JournalPostPage;
