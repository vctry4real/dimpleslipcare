/* global React */

const TRAININGS = [
  "Lipcare formulation training",
  "Hands-on product making",
  "Branding guide & launch playbook",
  "Ongoing support & certificate",
  "Start your own lipcare brand",
];

function FlyerTrainings() {
  return (
    <div className="trainings">
      <div className="section-head">
        <div>
          <div className="eyebrow">We also offer trainings</div>
          <div className="title" style={{ color: "var(--cream)", fontStyle: "italic" }}>Build your own line —<br/>start to shelf.</div>
        </div>
        <div className="meta" style={{ color: "rgba(255,248,244,.6)" }}>Five modules · Live + recorded</div>
      </div>
      <div className="training-grid">
        {TRAININGS.map((t, i) => (
          <div className="training-item" key={i}>
            <span className="num">{["i", "ii", "iii", "iv", "v"][i]}</span>
            <span className="lbl">{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

window.FlyerTrainings = FlyerTrainings;
