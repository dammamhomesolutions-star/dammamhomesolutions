export default function HeroVisual() {
  return (
    <svg
      viewBox="0 0 480 520"
      className="h-auto w-full max-w-md"
      role="img"
      aria-labelledby="hero-visual-title"
    >
      <title id="hero-visual-title">
        Cutaway detail of a Dammam property showing an AC unit, wall crack and
        plumbing line — the kind of everyday repair issues Dammam Home
        Solutions handles
      </title>

      <rect x="0" y="0" width="480" height="520" rx="18" fill="#232833" />

      <g opacity="0.9">
        <rect x="40" y="52" width="400" height="1" fill="#3a4152" />
        <rect x="40" y="150" width="400" height="1" fill="#3a4152" />
        <rect x="40" y="248" width="400" height="1" fill="#3a4152" />
        <rect x="40" y="346" width="400" height="1" fill="#3a4152" />
        <rect x="40" y="444" width="400" height="1" fill="#3a4152" />
      </g>

      {/* AC unit */}
      <g transform="translate(64,72)">
        <rect x="0" y="0" width="168" height="52" rx="6" fill="#f4f0e8" />
        <rect x="10" y="12" width="148" height="8" rx="4" fill="#c9c1ae" />
        <rect x="10" y="28" width="148" height="8" rx="4" fill="#c9c1ae" />
        <circle cx="150" cy="14" r="3" fill="#c76a3f" />
        <path
          d="M20 52 L14 78"
          stroke="#c76a3f"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="86" r="3.5" fill="#c76a3f">
          <animate
            attributeName="cy"
            values="86;96;86"
            dur="2.4s"
            repeatCount="indefinite"
          />
        </circle>
        <text
          x="0"
          y="76"
          fontSize="11"
          fill="#8e97a8"
          fontFamily="var(--font-poppins), sans-serif"
        >
          indoor unit — weak airflow
        </text>
      </g>

      {/* Wall crack */}
      <g transform="translate(300,60)" stroke="#8e97a8" strokeWidth="1.6" fill="none">
        <path d="M40 0 L34 22 L46 34 L30 58 L40 78" strokeLinecap="round" />
        <text
          x="-4"
          y="98"
          fontSize="11"
          fill="#8e97a8"
          fontFamily="var(--font-poppins), sans-serif"
        >
          hairline crack, wall
        </text>
      </g>

      {/* Electrical panel */}
      <g transform="translate(64,182)">
        <rect x="0" y="0" width="86" height="110" rx="6" fill="#1c2029" stroke="#3a4152" />
        <rect x="14" y="16" width="58" height="10" rx="2" fill="#c76a3f" />
        <rect x="14" y="34" width="58" height="10" rx="2" fill="#3a4152" />
        <rect x="14" y="52" width="58" height="10" rx="2" fill="#3a4152" />
        <rect x="14" y="70" width="58" height="10" rx="2" fill="#3a4152" />
        <text
          x="0"
          y="130"
          fontSize="11"
          fill="#8e97a8"
          fontFamily="var(--font-poppins), sans-serif"
        >
          breaker tripping
        </text>
      </g>

      {/* Pipe with leak */}
      <g transform="translate(190,210)" fill="none" stroke="#69748a" strokeWidth="6" strokeLinecap="round">
        <path d="M0 40 H150" />
        <path d="M150 40 V90" stroke="#c76a3f" />
      </g>
      <g transform="translate(190,210)">
        <circle cx="150" cy="96" r="4" fill="#5b7a9a">
          <animate attributeName="cy" values="96;118;96" dur="1.8s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0.2;1" dur="1.8s" repeatCount="indefinite" />
        </circle>
        <text
          x="0"
          y="118"
          fontSize="11"
          fill="#8e97a8"
          fontFamily="var(--font-poppins), sans-serif"
        >
          leak at joint
        </text>
      </g>

      {/* Door / carpentry detail */}
      <g transform="translate(330,190)" stroke="#8e97a8" strokeWidth="1.6" fill="none">
        <rect x="0" y="0" width="70" height="140" rx="2" />
        <circle cx="58" cy="72" r="2.6" fill="#c76a3f" stroke="none" />
        <text
          x="-4"
          y="160"
          fontSize="11"
          fill="#8e97a8"
          fontFamily="var(--font-poppins), sans-serif"
        >
          misaligned door
        </text>
      </g>

      {/* Bathroom tile detail */}
      <g transform="translate(64,360)">
        <g fill="none" stroke="#3a4152" strokeWidth="1.4">
          <rect x="0" y="0" width="28" height="28" />
          <rect x="28" y="0" width="28" height="28" />
          <rect x="56" y="0" width="28" height="28" />
          <rect x="0" y="28" width="28" height="28" />
          <rect x="28" y="28" width="28" height="28" />
          <rect x="56" y="28" width="28" height="28" />
        </g>
        <path
          d="M28 0 L38 28"
          stroke="#c76a3f"
          strokeWidth="1.8"
        />
        <text
          x="0"
          y="76"
          fontSize="11"
          fill="#8e97a8"
          fontFamily="var(--font-poppins), sans-serif"
        >
          damaged tile grout
        </text>
      </g>

      <g transform="translate(280,368)" fontFamily="var(--font-poppins), sans-serif">
        <text x="0" y="0" fontSize="11" fill="#8e97a8" letterSpacing="0.06em">
          DAMMAM RESIDENTIAL PROPERTY
        </text>
        <text x="0" y="20" fontSize="11" fill="#5b6478">
          common repair points, one visit
        </text>
      </g>
    </svg>
  );
}
