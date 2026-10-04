import Link from "next/link";

// Cut-away of a two-storey villa. Each pin links to the service for that
// part of the home; the drawing itself is decorative.
const pins = [
  { label: "Roof & waterproofing", href: "/waterproofing/", x: 34, y: 14 },
  { label: "Water tank", href: "/water-tank-cleaning/", x: 70, y: 9 },
  { label: "AC repair", href: "/ac-repair/", x: 82, y: 33 },
  { label: "Bathroom plumbing", href: "/plumbing-repair/", x: 24, y: 38 },
  { label: "Electrical", href: "/electrical-repair/", x: 56, y: 40 },
  { label: "Painting & walls", href: "/painting-wall-repair/", x: 44, y: 63 },
  { label: "Kitchen & cabinets", href: "/kitchen-cabinet-repair/", x: 20, y: 72 },
  { label: "Doors & carpentry", href: "/carpentry-doors-locks/", x: 66, y: 76 },
  { label: "Water leaks", href: "/water-leak-repair/", x: 32, y: 88 },
];

export default function HpHouse() {
  return (
    <div>
      <div className="relative">
      <svg viewBox="0 0 600 520" className="h-auto w-full" aria-hidden="true">
        <defs>
          <linearGradient id="hp-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f3e1d3" />
            <stop offset="1" stopColor="#faf8f4" />
          </linearGradient>
        </defs>
        <rect width="600" height="520" rx="28" fill="url(#hp-sky)" />
        {/* ground */}
        <rect x="0" y="470" width="600" height="50" fill="#ded2ba" />
        {/* building shell */}
        <rect x="60" y="90" width="460" height="380" fill="#f4f0e8" stroke="#333a49" strokeWidth="4" />
        <rect x="52" y="80" width="476" height="14" fill="#ebe4d6" stroke="#333a49" strokeWidth="3" />
        {/* parapet slots */}
        {Array.from({ length: 9 }, (_, i) => <rect key={i} x={80 + i * 50} y="62" width="18" height="18" fill="#ebe4d6" stroke="#333a49" strokeWidth="2" />)}
        {/* roof tank */}
        <rect x="390" y="30" width="70" height="44" rx="8" fill="#b4bac6" stroke="#333a49" strokeWidth="3" />
        {/* floor slab */}
        <rect x="60" y="270" width="460" height="12" fill="#ebe4d6" stroke="#333a49" strokeWidth="3" />
        {/* interior walls */}
        <path d="M220 94V270M360 94V270M210 282V470M380 282V470" stroke="#333a49" strokeWidth="3" />
        {/* bathroom: shower + wc */}
        <path d="M84 120h50v130M84 132h50" stroke="#69748a" strokeWidth="3" fill="none" />
        <rect x="160" y="210" width="34" height="40" rx="8" fill="#eceef0" stroke="#69748a" strokeWidth="2" />
        {/* bedroom + electrical panel */}
        <rect x="250" y="200" width="90" height="40" rx="6" fill="#d9bfa0" stroke="#69748a" strokeWidth="2" />
        <rect x="320" y="118" width="24" height="34" fill="#4a5468" />
        {/* AC split unit */}
        <rect x="400" y="120" width="90" height="26" rx="6" fill="#faf8f4" stroke="#69748a" strokeWidth="2" />
        <path d="M410 160c10 10 20 10 30 0M430 170c10 10 20 10 30 0" stroke="#7fa0b0" strokeWidth="2" fill="none" />
        {/* kitchen */}
        <rect x="80" y="380" width="120" height="70" fill="#a67c5b" stroke="#333a49" strokeWidth="2" />
        <rect x="80" y="310" width="120" height="36" fill="#cdab8f" stroke="#333a49" strokeWidth="2" />
        {/* living: sofa + wall */}
        <rect x="240" y="410" width="120" height="40" rx="10" fill="#b3562f" opacity="0.8" />
        <path d="M250 320h90v50h-90z" fill="#ebe4d6" stroke="#69748a" strokeWidth="2" />
        {/* door */}
        <rect x="420" y="360" width="56" height="110" fill="#8a6248" stroke="#333a49" strokeWidth="3" />
        <circle cx="464" cy="418" r="4" fill="#faf8f4" />
        {/* pipe run */}
        <path d="M150 94V470" stroke="#5b7d8f" strokeWidth="5" strokeDasharray="10 6" opacity="0.7" />
        {/* windows */}
        <rect x="236" y="120" width="70" height="56" fill="#d7e4ea" stroke="#333a49" strokeWidth="3" />
        <rect x="400" y="300" width="90" height="44" fill="#d7e4ea" stroke="#333a49" strokeWidth="3" />
      </svg>
      {pins.map((p, i) => (
        <Link
          key={p.href}
          href={p.href}
          aria-label={p.label}
          className="focus-ring group absolute flex -translate-x-1/2 -translate-y-1/2 items-center"
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-rust-700 font-mono text-[11px] font-semibold text-sand-50 shadow-lg ring-4 ring-sand-50/80 transition-transform group-hover:scale-110 sm:h-8 sm:w-8">
            {i + 1}
          </span>
          <span className="pointer-events-none absolute left-9 hidden whitespace-nowrap rounded-full bg-ink-950 px-3 py-1 text-xs font-semibold text-sand-50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
            {p.label}
          </span>
        </Link>
      ))}
      </div>
      <ol className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-ink-600 sm:grid-cols-3">
        {pins.map((p, i) => (
          <li key={p.href}>
            <Link href={p.href} className="focus-ring rounded-sm hover:text-rust-700">
              <span className="font-mono font-semibold text-rust-700">{i + 1}</span> {p.label}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
