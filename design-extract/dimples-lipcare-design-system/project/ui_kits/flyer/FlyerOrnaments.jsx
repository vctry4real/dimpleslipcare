/* global React */

/**
 * Decorative ornaments — hearts, sparkles, hairlines.
 * Reusable across flyer + website.
 */
const Sparkle = ({ size = 32, style = {}, className = "", delay = 0 }) => (
  <img
    src="../../assets/motif-sparkle.svg"
    width={size} height={size}
    className={`spark ${className}`}
    style={{ animationDelay: `${delay}s`, ...style }}
    alt=""
  />
);

const Heart = ({ size = 32, style = {}, className = "", delay = 0 }) => (
  <img
    src="../../assets/motif-heart.svg"
    width={size} height={size * (44/48)}
    className={`heart ${className}`}
    style={{ animationDelay: `${delay}s`, ...style }}
    alt=""
  />
);

const Droplet = ({ size = 28, style = {} }) => (
  <img src="../../assets/motif-droplet.svg" width={size} height={size * (48/36)} style={style} alt="" />
);

window.Sparkle = Sparkle;
window.Heart = Heart;
window.Droplet = Droplet;
