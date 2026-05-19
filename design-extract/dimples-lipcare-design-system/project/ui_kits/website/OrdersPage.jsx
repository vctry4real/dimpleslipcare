/* global React, AccountSide */

const ORDERS = [
  { num: "DMP-2026-1432", date: "Mar 14, 2026", status: "delivered",   items: "Glass Lip Gloss + 2 more",    count: 4, total: 30638 },
  { num: "DMP-2026-1187", date: "Feb 28, 2026", status: "delivered",   items: "Petal Lip Oil + 1 more",      count: 2, total: 17000 },
  { num: "DMP-2026-1043", date: "Feb 11, 2026", status: "delivered",   items: "The Ritual Set",              count: 1, total: 26000 },
  { num: "DMP-2026-0926", date: "Jan 22, 2026", status: "delivered",   items: "Sugar Lip Scrub",             count: 1, total: 6500 },
  { num: "DMP-2025-9874", date: "Dec 18, 2025", status: "delivered",   items: "Velvet Lip Balm + 3 more",    count: 5, total: 24500 },
];

function OrdersPage() {
  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="account.html">Account</a>
            <span className="sep">/</span>
            <span>Orders</span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>
            Your <span className="script">orders.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 540 }}>
            Every bag you've ever sent home from the studio, with tracking, receipts, and a one-click reorder.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)" }}>
        <div className="wrap orders-grid">
          <AccountSide active="orders" />

          <div>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 18 }}>
              <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 500, fontSize: 22, color: "var(--ink)", margin: 0 }}>
                Recent orders
              </h3>
              <span style={{ fontSize: 12, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--ink-mute)" }}>
                {ORDERS.length} orders · ₦{ORDERS.reduce((s,o)=>s+o.total,0).toLocaleString()} lifetime
              </span>
            </div>

            {ORDERS.map((o, i) => (
              <a key={o.num} className="order-row" href="order-detail.html">
                <div className="num-block">
                  <div className="l">{o.date}</div>
                  <div className="v">{o.num}</div>
                </div>
                <div className="items">
                  <strong>{o.items}</strong>
                  {o.count} item{o.count !== 1 ? "s" : ""}
                </div>
                <span className={`status-pill ${o.status}`}>{o.status}</span>
                <div className="total">₦{o.total.toLocaleString()}</div>
                <span className="arrow">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M9 6l6 6-6 6"/></svg>
                </span>
              </a>
            ))}

            <div style={{ marginTop: 28, padding: 24, background: "var(--pearl)", borderRadius: "var(--r-lg)", border: "1px solid var(--line-soft)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 20, color: "var(--ink)" }}>Looking for an older order?</div>
                <div style={{ fontSize: 13, color: "var(--ink-mute)", marginTop: 4 }}>Anything before 2025 is in our private archive — email us and we'll pull it up.</div>
              </div>
              <a href="contact.html" className="btn-ghost">Contact us →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

window.OrdersPage = OrdersPage;
