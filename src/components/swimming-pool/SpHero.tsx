import Link from "next/link";
import SpCtas from "./SpCtas";
import SpStatus from "./SpStatus";

// Full-bleed illustrated villa pool with drifting caustics behind the copy.
function PoolBackdrop() {
  return (
    <svg viewBox="0 0 1440 760" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="sp-hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0b2a33" />
          <stop offset="1" stopColor="#0f3a3a" />
        </linearGradient>
        <linearGradient id="sp-hero-water" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1f5c5c" />
          <stop offset="1" stopColor="#2f7a7a" />
        </linearGradient>
        <pattern id="sp-hero-caustic" width="120" height="80" patternUnits="userSpaceOnUse">
          <path d="M0 40c20-18 40-18 60 0s40 18 60 0M-10 0c20 18 40 18 60 0s40-18 60 0M30 80c10-14 30-14 40 0" stroke="#8fc4c4" strokeWidth="2" fill="none" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="1440" height="760" fill="url(#sp-hero-sky)" />
      {/* villa */}
      <path d="M820 120h520v260H820z" fill="#14181f" opacity="0.55" />
      <path d="M860 160h120v90H860zM1020 160h120v90h-120zM1180 160h120v90h-120z" fill="#f6dfb4" opacity="0.18" />
      <path d="M780 120h600" stroke="#4a9797" strokeWidth="3" opacity="0.4" />
      {/* deck */}
      <path d="M0 470L1440 400v360H0z" fill="#e0f0f0" opacity="0.12" />
      {/* pool */}
      <path d="M120 520L1380 450l60 250H40z" fill="url(#sp-hero-water)" />
      <g className="sp-caustic">
        <path d="M120 520L1380 450l60 250H40z" fill="url(#sp-hero-caustic)" />
      </g>
      <path d="M120 520L1380 450" stroke="#e0f0f0" strokeWidth="6" opacity="0.5" />
      <circle cx="700" cy="610" r="10" fill="#f6dfb4" opacity="0.8" />
      <circle cx="700" cy="610" r="40" fill="#f6dfb4" opacity="0.12" />
    </svg>
  );
}

export default function SpHero() {
  return (
    <section className="relative overflow-hidden bg-teal-900 text-sand-50">
      <PoolBackdrop />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/20" />
      <div className="container-edge relative">
        <nav aria-label="Breadcrumb" className="pt-5">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-300">
            <li><Link href="/" className="focus-ring rounded-sm hover:text-teal-300">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/#services" className="focus-ring rounded-sm hover:text-teal-300">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-sand-50" aria-current="page">Swimming Pool Repair &amp; Maintenance</li>
          </ol>
        </nav>
        <div className="grid gap-10 pb-16 pt-12 sm:pb-24 sm:pt-16 lg:grid-cols-12 lg:items-end lg:pb-28 lg:pt-24">
          <div className="animate-fadeUp lg:col-span-7">
            <p className="font-mono text-xs uppercase tracking-[0.22em] text-teal-300">A pool should look inviting — not like another maintenance problem</p>
            <h1 className="mt-5 max-w-2xl font-serif text-[2.4rem] leading-[1.04] tracking-tight sm:text-6xl">
              Swimming Pool Repair &amp; Maintenance in Dammam
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-300 sm:text-base">
              Keep your pool clean, working and ready to use — with repair of
              pumps, filters, leaks, tiles, coping and lights, resurfacing, and
              ongoing maintenance and water care.
            </p>
            <SpCtas className="mt-8" />
          </div>
          <div className="animate-fadeIn [animation-delay:200ms] lg:col-span-5">
            <SpStatus />
          </div>
        </div>
      </div>
    </section>
  );
}
