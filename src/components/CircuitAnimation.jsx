import "./CircuitAnimation.css";

function CircuitAnimation({ active = true }) {
  return (
    <div
      className={`circuit-animation ${
        active ? "circuit-active" : "circuit-paused"
      }`}
      aria-hidden="true"
    >
      <svg
        className="circuit-svg"
        viewBox="0 0 520 100"
        preserveAspectRatio="none"
      >
        {/* ================= LEFT SIDE ================= */}

        {/* Left main trace */}
        <path
          id="left-main"
          className="circuit-trace"
          d="M220 50 H185 V28 H135 V50 H92 V70 H38"
        />

        {/* Left upper branch */}
        <path
          id="left-upper"
          className="circuit-trace"
          d="M220 50 H198 V14 H155 H118"
        />

        {/* Left lower branch */}
        <path
          id="left-lower"
          className="circuit-trace"
          d="M220 50 H198 V84 H155 H110"
        />

        {/* ================= RIGHT SIDE ================= */}

        {/* Right main trace */}
        <path
          id="right-main"
          className="circuit-trace"
          d="M300 50 H335 V28 H385 V50 H428 V70 H482"
        />

        {/* Right upper branch */}
        <path
          id="right-upper"
          className="circuit-trace"
          d="M300 50 H322 V14 H365 H402"
        />

        {/* Right lower branch */}
        <path
          id="right-lower"
          className="circuit-trace"
          d="M300 50 H322 V84 H365 H410"
        />

        {/* ================= CONNECTION DOTS ================= */}

        <circle className="circuit-node node-1" cx="38" cy="70" r="2.2" />
        <circle className="circuit-node node-2" cx="118" cy="14" r="2.2" />
        <circle className="circuit-node node-3" cx="110" cy="84" r="2.2" />

        <circle className="circuit-node node-4" cx="482" cy="70" r="2.2" />
        <circle className="circuit-node node-5" cx="402" cy="14" r="2.2" />
        <circle className="circuit-node node-6" cx="410" cy="84" r="2.2" />

        {/* ================= MOVING LIGHT DOTS ================= */}

        <circle className="circuit-pulse pulse-1" r="2.8">
          <animateMotion
            dur="3.8s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#left-main" />
          </animateMotion>
        </circle>

        <circle className="circuit-pulse pulse-2" r="2.8">
          <animateMotion
            dur="4.5s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#left-upper" />
          </animateMotion>
        </circle>

        <circle className="circuit-pulse pulse-3" r="2.5">
          <animateMotion
            dur="4.1s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#left-lower" />
          </animateMotion>
        </circle>

        <circle className="circuit-pulse pulse-4" r="2.8">
          <animateMotion
            dur="3.8s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#right-main" />
          </animateMotion>
        </circle>

        <circle className="circuit-pulse pulse-5" r="2.8">
          <animateMotion
            dur="4.5s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#right-upper" />
          </animateMotion>
        </circle>

        <circle className="circuit-pulse pulse-6" r="2.5">
          <animateMotion
            dur="4.1s"
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href="#right-lower" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

export default CircuitAnimation;