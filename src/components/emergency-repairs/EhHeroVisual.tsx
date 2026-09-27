export default function EhHeroVisual() {
  return (
    <figure className="w-full">
      <div className="overflow-hidden rounded-md border border-sand-100/10 bg-ink-950">
        <svg viewBox="0 0 800 420" role="img" aria-labelledby="eh-hero-visual-title" className="h-auto w-full">
          <title id="eh-hero-visual-title">
            A dimly lit residential interior in the evening, with a few small signs of a household problem
          </title>

          <rect x="0" y="0" width="800" height="420" fill="#14181f" />

          {/* window with dusk sky */}
          <rect x="580" y="46" width="170" height="140" fill="#232833" stroke="#4a5468" strokeWidth="1.2" />
          <line x1="665" y1="46" x2="665" y2="186" stroke="#4a5468" strokeWidth="1" />
          <line x1="580" y1="116" x2="750" y2="116" stroke="#4a5468" strokeWidth="1" />

          {/* floor lamp, warm glow */}
          <circle cx="96" cy="176" r="72" fill="#c17f3e" opacity="0.06" />
          <circle cx="96" cy="176" r="40" fill="#c17f3e" opacity="0.12" />
          <line x1="96" y1="196" x2="96" y2="340" stroke="#69748a" strokeWidth="1.4" />
          <path d="M70 190 L122 190 L112 160 L80 160 Z" fill="none" stroke="#8e97a8" strokeWidth="1.2" />
          <circle cx="96" cy="180" r="7" fill="#d69a5f" />

          {/* pendant light, off */}
          <line x1="380" y1="20" x2="380" y2="72" stroke="#4a5468" strokeWidth="1.2" />
          <ellipse cx="380" cy="80" rx="20" ry="8" fill="none" stroke="#4a5468" strokeWidth="1.2" />

          {/* door, slightly ajar */}
          <rect x="176" y="138" width="96" height="206" fill="none" stroke="#4a5468" strokeWidth="1.4" />
          <rect x="182" y="144" width="64" height="196" fill="#1a1e26" stroke="#69748a" strokeWidth="1.2" />
          <circle cx="238" cy="242" r="1.6" fill="#8e97a8" />

          {/* wall-mounted AC unit with a status indicator */}
          <rect x="612" y="86" width="96" height="32" rx="2" fill="#232833" stroke="#4a5468" strokeWidth="1.2" />
          <line x1="620" y1="94" x2="668" y2="94" stroke="#4a5468" strokeWidth="0.8" />
          <line x1="620" y1="100" x2="668" y2="100" stroke="#4a5468" strokeWidth="0.8" />
          <line x1="620" y1="106" x2="668" y2="106" stroke="#4a5468" strokeWidth="0.8" />
          <circle cx="694" cy="90" r="9" fill="none" stroke="#c17f3e" strokeWidth="1" opacity="0.5" />
          <circle cx="694" cy="90" r="4" fill="#c17f3e" />

          {/* sink / fixture with water marks */}
          <rect x="470" y="298" width="100" height="16" rx="2" fill="none" stroke="#69748a" strokeWidth="1.2" />
          <rect x="486" y="314" width="68" height="30" fill="none" stroke="#4a5468" strokeWidth="1.2" />
          <ellipse cx="500" cy="356" rx="14" ry="4" fill="#3a4658" opacity="0.55" />
          <ellipse cx="524" cy="362" rx="9" ry="3" fill="#3a4658" opacity="0.4" />
          <line x1="512" y1="344" x2="512" y2="352" stroke="#69748a" strokeWidth="1" />

          {/* floor line */}
          <line x1="40" y1="380" x2="760" y2="380" stroke="#333a49" strokeWidth="1" />
        </svg>
      </div>
      <figcaption className="mt-3 text-xs text-ink-400">
        A quiet evening — and a few small things that don&rsquo;t look right.
      </figcaption>
    </figure>
  );
}
