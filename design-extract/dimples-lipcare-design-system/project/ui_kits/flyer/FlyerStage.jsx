/* global React */

/**
 * Scales a fixed-size flyer (1080×1350) to fit any viewport.
 */
function FlyerStage({ children, width = 1080, height = 1350 }) {
  const [scale, setScale] = React.useState(1);
  React.useEffect(() => {
    const fit = () => {
      const padding = 48;
      const sx = (window.innerWidth - padding) / width;
      const sy = (window.innerHeight - padding) / height;
      setScale(Math.min(sx, sy, 1));
    };
    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [width, height]);
  return (
    <div className="flyer-stage" style={{ transform: `scale(${scale})`, width, height }}>
      {children}
    </div>
  );
}

window.FlyerStage = FlyerStage;
