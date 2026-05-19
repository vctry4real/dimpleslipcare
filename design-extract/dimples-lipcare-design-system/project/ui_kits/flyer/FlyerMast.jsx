/* global React, Sparkle, Heart */

function FlyerMast() {
  return (
    <div className="mast">
      <img className="mono-mark" src="../../assets/logo-monogram.svg" alt="Dimples monogram"/>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div className="name">Dimples</div>
        <div className="label">Lipcare · Hand-poured</div>
      </div>
      <div className="rule"></div>
      <Sparkle size={36} delay={0.4} />
      <Heart size={40} delay={0.6} />
    </div>
  );
}

window.FlyerMast = FlyerMast;
