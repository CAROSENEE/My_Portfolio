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
        viewBox="0 0 1400 120"
        preserveAspectRatio="none"
      >
        {/* =========================================
            LEFT MAIN CIRCUIT
        ========================================= */}

        <path
          id="left-main"
          className="circuit-trace"
          d="
            M610 60
            H540
            L505 25
            H420
            L385 60
            H300
            L265 92
            H175
            L140 60
            H20
          "
        />

        <path
          id="left-mid"
          className="circuit-trace"
          d="
            M610 60
            H535
            L500 92
            H405
            L370 60
            H285
            L250 30
            H155
            L125 60
            H55
          "
        />

        {/* LEFT UPPER BRANCH */}

        <path
          id="left-upper"
          className="circuit-trace"
          d="
            M555 60
            H520
            L485 20
            H400
            L370 42
            H300
            L275 20
            H225
          "
        />

        <path
          id="left-upper-small"
          className="circuit-trace"
          d="
            M390 42
            H350
            L325 18
            H290
          "
        />

        {/* LEFT LOWER BRANCH */}

        <path
          id="left-lower"
          className="circuit-trace"
          d="
            M555 60
            H515
            L480 100
            H390
            L360 78
            H275
            L245 102
            H185
          "
        />

        <path
          id="left-lower-small"
          className="circuit-trace"
          d="
            M330 78
            H295
            L270 98
            H235
          "
        />

        {/* =========================================
            RIGHT MAIN CIRCUIT
        ========================================= */}

        <path
          id="right-main"
          className="circuit-trace"
          d="
            M790 60
            H860
            L895 25
            H980
            L1015 60
            H1100
            L1135 92
            H1225
            L1260 60
            H1380
          "
        />

        <path
          id="right-mid"
          className="circuit-trace"
          d="
            M790 60
            H865
            L900 92
            H995
            L1030 60
            H1115
            L1150 30
            H1245
            L1275 60
            H1345
          "
        />

        {/* RIGHT UPPER BRANCH */}

        <path
          id="right-upper"
          className="circuit-trace"
          d="
            M845 60
            H880
            L915 20
            H1000
            L1030 42
            H1100
            L1125 20
            H1175
          "
        />

        <path
          id="right-upper-small"
          className="circuit-trace"
          d="
            M1010 42
            H1050
            L1075 18
            H1110
          "
        />

        {/* RIGHT LOWER BRANCH */}

        <path
          id="right-lower"
          className="circuit-trace"
          d="
            M845 60
            H885
            L920 100
            H1010
            L1040 78
            H1125
            L1155 102
            H1215
          "
        />

        <path
          id="right-lower-small"
          className="circuit-trace"
          d="
            M1070 78
            H1105
            L1130 98
            H1165
          "
        />

        {/* =========================================
            CIRCUIT NODES
        ========================================= */}

        <circle className="circuit-node node-1" cx="20" cy="60" r="2.5" />
        <circle className="circuit-node node-2" cx="55" cy="60" r="2.5" />
        <circle className="circuit-node node-3" cx="140" cy="60" r="2.5" />
        <circle className="circuit-node node-4" cx="225" cy="20" r="2.5" />
        <circle className="circuit-node node-5" cx="185" cy="102" r="2.5" />

        <circle className="circuit-node node-6" cx="370" cy="42" r="2.5" />
        <circle className="circuit-node node-7" cx="480" cy="100" r="2.5" />

        <circle className="circuit-node node-8" cx="1380" cy="60" r="2.5" />
        <circle className="circuit-node node-9" cx="1345" cy="60" r="2.5" />
        <circle className="circuit-node node-10" cx="1260" cy="60" r="2.5" />
        <circle className="circuit-node node-11" cx="1175" cy="20" r="2.5" />
        <circle className="circuit-node node-12" cx="1215" cy="102" r="2.5" />

        <circle className="circuit-node node-13" cx="1030" cy="42" r="2.5" />
        <circle className="circuit-node node-14" cx="920" cy="100" r="2.5" />

        {/* =========================================
            SMALL CIRCUIT DETAILS
        ========================================= */}

        <g className="circuit-detail">
          <circle cx="168" cy="42" r="1.5" />
          <circle cx="178" cy="42" r="1.5" />
          <circle cx="188" cy="42" r="1.5" />

          <circle cx="205" cy="88" r="1.5" />
          <circle cx="215" cy="88" r="1.5" />
          <circle cx="225" cy="88" r="1.5" />
        </g>

        <g className="circuit-detail">
          <circle cx="1195" cy="42" r="1.5" />
          <circle cx="1205" cy="42" r="1.5" />
          <circle cx="1215" cy="42" r="1.5" />

          <circle cx="1175" cy="88" r="1.5" />
          <circle cx="1185" cy="88" r="1.5" />
          <circle cx="1195" cy="88" r="1.5" />
        </g>

        {/* =========================================
            MOVING LIGHT DOTS
        ========================================= */}

        <circle className="circuit-pulse pulse-1" r="3">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
          >
            <mpath href="#left-main" />
          </animateMotion>
        </circle>

        <circle className="circuit-pulse pulse-2" r="3">
          <animateMotion
            dur="4.8s"
            repeatCount="indefinite"
          >
            <mpath href="#left-upper" />
          </animateMotion>
        </circle>

        <circle className="circuit-pulse pulse-3" r="2.8">
          <animateMotion
            dur="4.4s"
            repeatCount="indefinite"
          >
            <mpath href="#left-lower" />
          </animateMotion>
        </circle>

        <circle className="circuit-pulse pulse-4" r="3">
          <animateMotion
            dur="4s"
            repeatCount="indefinite"
          >
            <mpath href="#right-main" />
          </animateMotion>
        </circle>

        <circle className="circuit-pulse pulse-5" r="3">
          <animateMotion
            dur="4.8s"
            repeatCount="indefinite"
          >
            <mpath href="#right-upper" />
          </animateMotion>
        </circle>

        <circle className="circuit-pulse pulse-6" r="2.8">
          <animateMotion
            dur="4.4s"
            repeatCount="indefinite"
          >
            <mpath href="#right-lower" />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}

export default CircuitAnimation;