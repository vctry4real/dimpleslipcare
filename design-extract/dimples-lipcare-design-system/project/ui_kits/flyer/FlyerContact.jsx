/* global React */

function FlyerContact() {
  return (
    <div className="contact">
      <div className="contact-pill">
        <span className="ico">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </span>
        <div>
          <div className="nm-label">Call</div>
          <div className="nm-value">0903 879 6354</div>
        </div>
      </div>
      <div className="contact-pill">
        <span className="ico">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </span>
        <div>
          <div className="nm-label">Call</div>
          <div className="nm-value">0902 533 3560</div>
        </div>
      </div>
      <div className="contact-pill">
        <span className="ico">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="18" cy="6" r="1" fill="currentColor"/>
          </svg>
        </span>
        <div>
          <div className="nm-label">Instagram</div>
          <div className="nm-value">@Dimples_lipcare</div>
        </div>
      </div>
      <div className="contact-pill deep">
        <span className="ico">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 7.5a6.5 6.5 0 0 1-4-1.4v8.7a6 6 0 1 1-6-6c.3 0 .6 0 1 .1V12a3 3 0 1 0 2 2.8V2h3a4.5 4.5 0 0 0 4 4.5v1z"/>
          </svg>
        </span>
        <div>
          <div className="nm-label">TikTok</div>
          <div className="nm-value">@Dimples_lipcare</div>
        </div>
      </div>
    </div>
  );
}

window.FlyerContact = FlyerContact;
