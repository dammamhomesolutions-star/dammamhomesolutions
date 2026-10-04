import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";
import { Arrow, btnGhost, btnPrimary } from "./ShUi";

const photosHref = buildWhatsAppLink("Hello Dammam Home Solutions, my parking shade / pergola is damaged. I'll send photos of the damage.");

export function Car({ x, y, s = 1, fill = "#2b2f33" }: { x: number; y: number; s?: number; fill?: string }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <path d="M0 52c0-10 6-16 18-18l34-6 30-22c6-4 12-6 20-6h70c10 0 18 4 24 10l26 26 30 6c10 2 16 8 16 18v10H0z" fill={fill} />
      <path d="M92 10h44v22H66zM144 10h22c6 0 10 2 14 6l16 16h-52z" fill="#b8ccd4" fillOpacity="0.55" />
      <circle cx="56" cy="64" r="16" fill="#14181f" /><circle cx="56" cy="64" r="7" fill="#838d96" />
      <circle cx="210" cy="64" r="16" fill="#14181f" /><circle cx="210" cy="64" r="7" fill="#838d96" />
    </g>
  );
}

// Wide elevation: modern villa, cantilever parking shade, car beneath.
function Scene() {
  return (
    <svg viewBox="0 0 1200 520" preserveAspectRatio="xMidYMax slice" className="h-full w-full" role="img" aria-label="Illustration of a modern villa with a cantilever car parking shade: steel posts and arms supporting a tensioned fabric cover over a parked car">
      <defs>
        <linearGradient id="sh-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2e6d5" />
          <stop offset="1" stopColor="#faf8f4" />
        </linearGradient>
        <linearGradient id="sh-cover" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ebe4d6" />
          <stop offset="1" stopColor="#c4c0b4" />
        </linearGradient>
      </defs>
      <rect width="1200" height="520" fill="url(#sh-sky)" />
      <circle cx="1080" cy="92" r="46" fill="#e0b28a" opacity="0.55" />
      {/* villa */}
      <rect x="660" y="160" width="540" height="300" fill="#ebe4d6" />
      <rect x="660" y="148" width="540" height="16" fill="#ded2ba" />
      {Array.from({ length: 10 }, (_, i) => <rect key={i} x={690 + i * 50} y="168" width="10" height="34" fill="#cdab8f" opacity="0.6" />)}
      <rect x="720" y="240" width="120" height="150" fill="#26333f" />
      <rect x="880" y="240" width="60" height="150" fill="#3d5a6b" />
      <rect x="980" y="240" width="170" height="70" fill="#26333f" />
      <rect x="980" y="330" width="170" height="130" fill="#d9bfa0" />
      {/* ground */}
      <rect y="460" width="1200" height="60" fill="#c4c0b4" />
      <rect y="456" width="1200" height="6" fill="#9a968a" />
      {/* shadow */}
      <ellipse cx="410" cy="462" rx="230" ry="10" fill="#14181f" opacity="0.18" />
      {/* posts + arms */}
      <rect x="600" y="196" width="14" height="264" fill="#4d545c" />
      <rect x="592" y="452" width="30" height="8" fill="#2b2f33" />
      <path d="M607 200L190 262" stroke="#4d545c" strokeWidth="9" />
      <path d="M607 244L330 268" stroke="#4d545c" strokeWidth="4" />
      {/* cover */}
      <path className="sh-sway" d="M190 262C330 246 470 222 607 200L607 220C470 244 330 270 190 284Z" fill="url(#sh-cover)" stroke="#9a968a" strokeWidth="1" />
      {/* car */}
      <Car x={260} y={376} s={1.05} />
      {/* technical dimension line */}
      <g stroke="#b3652f" strokeWidth="1.2" fill="none">
        <path d="M190 236L607 172" />
        <path d="M190 228v16M607 164v16" />
      </g>
      <text x="370" y="192" fontSize="12" className="font-mono" fill="#8f4f2f" transform="rotate(-8.7 370 192)">COVER · FRAME · POSTS · BASE</text>
    </svg>
  );
}

export default function ShHero() {
  return (
    <section className="relative overflow-hidden border-b border-steel-900/10 bg-sand-50">
      <div className="container-edge relative z-10">
        <nav aria-label="Breadcrumb" className="pt-5">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-steel-600">
            <li><Link href="/" className="focus-ring rounded-sm hover:text-copper-700">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/services/" className="focus-ring rounded-sm hover:text-copper-700">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-ink-900" aria-current="page">Shade &amp; Pergola Repair</li>
          </ol>
        </nav>
        <div className="max-w-xl animate-fadeUp pb-10 pt-10 lg:pt-14">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-copper-700">Car parking shades · Pergolas · Outdoor structures</p>
          <h1 className="mt-5 font-serif text-[2.6rem] leading-[1.02] tracking-tight text-ink-950 sm:text-6xl">
            Shade &amp; Pergola Repair in Dammam
          </h1>
          <p className="mt-3 font-serif text-xl text-steel-700">Protect the space below. Restore the structure above.</p>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700">
            Repair damaged car parking shades, pergolas and outdoor shade
            structures by assessing the frame, cover, connections, anchoring,
            drainage and overall condition.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#request" className={btnPrimary}>
              Request a Shade Assessment <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a href={photosHref} target="_blank" rel="nofollow noopener noreferrer" className={btnGhost}>Send Photos of the Damage</a>
          </div>
        </div>
      </div>
      <div className="relative h-64 w-full animate-fadeIn sm:h-80 lg:h-[30rem]">
        <Scene />
      </div>
    </section>
  );
}
