/* global React */

function TrustStrip() {
  const pillars = [
    { l: "Cruelty-free", i: <path d="M12 21s-7-4.5-9.5-9C.8 8.5 3 4 7 4c2 0 3.5 1 5 3 1.5-2 3-3 5-3 4 0 6.2 4.5 4.5 8-2.5 4.5-9.5 9-9.5 9z"/> },
    { l: "Hand-poured · Lagos", i: <><circle cx="12" cy="12" r="8"/><path d="M12 8v4l3 2"/></> },
    { l: "Plant-derived", i: <path d="M12 22c0-7 4-12 10-12-1 7-5 12-10 12zM12 22c0-7-4-12-10-12 1 7 5 12 10 12z"/> },
  ];
  return (
    <div className="trust">
      <div className="wrap trust-inner">
        <span className="trust-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">{pillars[0].i}</svg>
          {pillars[0].l}
        </span>
        <span className="trust-mid">All in one lipcare brand —</span>
        <span className="trust-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">{pillars[1].i}</svg>
          {pillars[1].l}
        </span>
        <span className="trust-pill">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">{pillars[2].i}</svg>
          {pillars[2].l}
        </span>
      </div>
    </div>
  );
}

window.TrustStrip = TrustStrip;
