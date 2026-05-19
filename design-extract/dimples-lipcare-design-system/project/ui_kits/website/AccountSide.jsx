/* global React */

/**
 * Shared account-area side nav used on Orders, Order detail, Addresses, etc.
 * `active` = which item is highlighted.
 */
function AccountSide({ active }) {
  const items = [
    { id: "overview",  href: "account.html",  label: "Account",       ic: <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-7 8-7s8 3 8 7"/></> },
    { id: "orders",    href: "orders.html",   label: "Orders",        ic: <><rect x="3" y="6" width="18" height="14" rx="2"/><path d="M3 10h18M8 14h4"/></> },
    { id: "addresses", href: "addresses.html",label: "Addresses",     ic: <><path d="M12 22s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z"/><circle cx="12" cy="10" r="3"/></> },
    { id: "saved",     href: "saved.html",    label: "Saved for later", ic: <><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></> },
    { id: "rewards",   href: "rewards.html",  label: "Rewards",       ic: <><circle cx="12" cy="12" r="8"/><path d="M9 12l2 2 4-4"/></> },
    { id: "settings",  href: "settings.html", label: "Settings",      ic: <><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.5-2.4.9a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.4a7 7 0 0 0-2 1.2L5.1 5.7l-2 3.5 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.5 2.4-.9a7 7 0 0 0 2 1.2L10 21h4l.5-2.4a7 7 0 0 0 2-1.2l2.4.9 2-3.5-2-1.6c.1-.4.1-.8.1-1.2z"/></> },
  ];

  return (
    <aside className="account-side">
      <div className="greeting">
        <div className="avatar">D</div>
        <div>
          <div className="nm">Hi, Dimples.</div>
          <div className="sub">Member · 2026</div>
        </div>
      </div>
      <nav>
        {items.map(it => (
          <a key={it.id} href={it.href} className={active === it.id ? "active" : ""}>
            <span className="ic">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{it.ic}</svg>
            </span>
            {it.label}
          </a>
        ))}
        <a href="account.html" style={{ marginTop: 8, color: "var(--blush-700)" }}>
          <span className="ic">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"/></svg>
          </span>
          Sign out
        </a>
      </nav>
    </aside>
  );
}

window.AccountSide = AccountSide;
