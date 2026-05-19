/* global React, AccountSide */

const INITIAL_ADDRESSES = [
  {
    id: 1, label: "Home", default: true,
    name: "Dimples Founder", line1: "42 Allen Avenue, off Toyin Street",
    city: "Ikeja", state: "Lagos", postal: "100001", phone: "0903 879 6354",
  },
  {
    id: 2, label: "Studio", default: false,
    name: "Dimples Lipcare Studio", line1: "12B Olowu Street, Ikeja",
    city: "Ikeja", state: "Lagos", postal: "100001", phone: "0902 533 3560",
  },
  {
    id: 3, label: "Mum's", default: false,
    name: "Mrs. Adesanya", line1: "16 Bishop Oluwole Street, Victoria Island",
    city: "Lagos", state: "Lagos", postal: "101241", phone: "0807 411 2233",
  },
];

function AddressesPage() {
  const [list, setList] = React.useState(INITIAL_ADDRESSES);
  const [showModal, setShowModal] = React.useState(false);

  const makeDefault = (id) => setList(list.map(a => ({ ...a, default: a.id === id })));
  const remove = (id) => setList(list.filter(a => a.id !== id));
  const addAddress = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    const newAddr = {
      id: Date.now(),
      label: f.get("label") || "Other",
      default: false,
      name: f.get("name"),
      line1: f.get("line1"),
      city: f.get("city"),
      state: f.get("state"),
      postal: f.get("postal"),
      phone: f.get("phone"),
    };
    setList([...list, newAddr]);
    setShowModal(false);
  };

  return (
    <>
      <section className="page-hero" style={{ padding: "56px 0 0" }}>
        <div className="wrap">
          <div className="breadcrumb">
            <a href="index.html">Home</a>
            <span className="sep">/</span>
            <a href="account.html">Account</a>
            <span className="sep">/</span>
            <span>Addresses</span>
          </div>
          <h1 style={{ fontSize: "clamp(40px, 4.6vw, 64px)" }}>
            Your <span className="script">addresses.</span>
          </h1>
          <p className="lead" style={{ maxWidth: 540 }}>
            Save the spots you ship to — home, work, your mum's. We'll auto-fill them at checkout.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--bg-1)" }}>
        <div className="wrap orders-grid">
          <AccountSide active="addresses" />

          <div className="account-page" style={{ padding: 0 }}>
            <div className="toolbar">
              <h2 className="section-title">Saved</h2>
              <span className="count">{list.length} addresses · {list.find(a=>a.default)?.label || "—"} is default</span>
            </div>

            <div className="addr-list">
              {list.map(a => (
                <div key={a.id} className={`addr-tile ${a.default ? "default" : ""}`}>
                  <div className="head">
                    <span className="label">{a.label}</span>
                    {a.default && <span className="badge-default">Default</span>}
                  </div>
                  <h4>{a.name}</h4>
                  <div className="body">
                    {a.line1}<br/>
                    {a.city}, {a.state} · {a.postal}<br/>
                    {a.phone}
                  </div>
                  <div className="actions">
                    <a href="#" onClick={(e)=>e.preventDefault()}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
                      Edit
                    </a>
                    {!a.default && (
                      <a href="#" onClick={(e)=>{ e.preventDefault(); makeDefault(a.id); }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7"/></svg>
                        Make default
                      </a>
                    )}
                    {!a.default && (
                      <a href="#" className="danger" onClick={(e)=>{ e.preventDefault(); remove(a.id); }}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
                        Delete
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <button className="addr-add" onClick={() => setShowModal(true)}>
                <span className="plus">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
                Add a new address
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setShowModal(false)} aria-label="Close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>
            </button>
            <h2>New address</h2>
            <form onSubmit={addAddress}>
              <div className="grid-2">
                <div className="field"><label>Label</label><input name="label" placeholder="Home, Studio, Mum's…" required/></div>
                <div className="field"><label>Full name</label><input name="name" required/></div>
              </div>
              <div className="field"><label>Street address</label><input name="line1" required placeholder="42 Allen Avenue, off…"/></div>
              <div className="grid-2">
                <div className="field"><label>City</label><input name="city" required defaultValue="Lagos"/></div>
                <div className="field"><label>State</label>
                  <select name="state" required defaultValue="Lagos">
                    <option>Lagos</option><option>Abuja</option><option>Rivers</option><option>Kano</option><option>Other</option>
                  </select>
                </div>
              </div>
              <div className="grid-2">
                <div className="field"><label>Postal</label><input name="postal" defaultValue="100001"/></div>
                <div className="field"><label>Phone</label><input name="phone" type="tel" placeholder="0903…"/></div>
              </div>
              <div className="actions">
                <button type="button" className="ghost" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="primary">Save address</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

window.AddressesPage = AddressesPage;
