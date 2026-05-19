import { Sparkle } from './SiteOrnaments'

const steps = [
  { n: 'i',   t: 'Scrub',  d: 'Twice a week, our Sugar scrub buffs away dry flakes. Massage 30 seconds, rinse.' },
  { n: 'ii',  t: 'Treat',  d: 'Pat on the Pink Lips Treatment morning and night for visibly softer, even-toned lips in four weeks.' },
  { n: 'iii', t: 'Glaze',  d: 'Finish with Velvet Balm for plush comfort, or Glass Gloss for mirror-shine. Or both.' },
]

export default function RitualSection() {
  return (
    <section className="surface ritual" id="ritual">
      <div className="wrap">
        <div className="section-heading">
          <div data-reveal>
            <div className="eyebrow">The Ritual</div>
            <h2>Three steps,<br />five minutes.</h2>
          </div>
          <p className="right" data-reveal data-reveal-delay="120">
            A complete lipcare loop you can keep on your nightstand. Each product earns its place — none of them are filler.
          </p>
        </div>
        <div className="ritual-grid">
          {steps.map((s, i) => (
            <div className="ritual-step" key={i} data-reveal data-reveal-delay={String(i * 100)}>
              <div className="sparkle-rule">
                <Sparkle size={20} delay={i * 0.4} />
                <span className="line" />
              </div>
              <div className="num">{s.n}</div>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
