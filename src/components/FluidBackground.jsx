import "./FluidBackground.css";

function FluidBackground() {
  return (
    <div className="fluid-background" aria-hidden="true">
      <div className="fluid-noise"></div>

      <div className="fluid-orb orb-green"></div>
      <div className="fluid-orb orb-cyan"></div>
      <div className="fluid-orb orb-blue"></div>
      <div className="fluid-orb orb-purple"></div>
      <div className="fluid-orb orb-magenta"></div>
      <div className="fluid-orb orb-lime"></div>

      <div className="fluid-glow glow-left"></div>
      <div className="fluid-glow glow-right"></div>
      <div className="fluid-glow glow-center"></div>
    </div>
  );
}

export default FluidBackground;