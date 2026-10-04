import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";
import { Arrow, btnGhost, btnPrimary } from "./RnUi";

const photosHref = buildWhatsAppLink("Hello Dammam Home Solutions, I'm planning a home renovation. I'll send photos of the rooms I want to change.");

// One interior drawn twice — "before" and "vision" — with a slow wipe between them.
function Room({ after }: { after: boolean }) {
  return (
    <svg viewBox="0 0 600 440" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {/* back wall */}
      <rect width="600" height="300" fill={after ? "#ebe4d6" : "#d9d2c0"} />
      {/* ceiling band */}
      <rect width="600" height="44" fill={after ? "#f4f0e8" : "#cfc7b3"} />
      {after && <rect y="44" width="600" height="6" fill="#d69a5f" opacity="0.55" />}
      {/* floor */}
      {after ? (
        <g>
          <rect y="300" width="600" height="140" fill="#a67c5b" />
          {Array.from({ length: 9 }, (_, i) => <path key={i} d={`M${i * 75} 300L${i * 75 - 60} 440`} stroke="#8a6248" strokeWidth="1.5" />)}
          <rect y="300" width="600" height="140" fill="url(#rn-floor-sheen)" />
        </g>
      ) : (
        <g>
          <rect y="300" width="600" height="140" fill="#b9b2a2" />
          {Array.from({ length: 5 }, (_, i) => <path key={i} d={`M0 ${320 + i * 28}H600`} stroke="#9a968a" strokeWidth="1.5" />)}
          {Array.from({ length: 9 }, (_, i) => <path key={i} d={`M${i * 75} 300L${i * 75 - 60} 440`} stroke="#9a968a" strokeWidth="1.5" />)}
        </g>
      )}
      {after && (
        <defs>
          <linearGradient id="rn-floor-sheen" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#faf8f4" stopOpacity="0.28" />
            <stop offset="1" stopColor="#faf8f4" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="rn-glow" cx="0.5" cy="0" r="0.8">
            <stop offset="0" stopColor="#f3e4d1" stopOpacity="0.9" />
            <stop offset="1" stopColor="#f3e4d1" stopOpacity="0" />
          </radialGradient>
        </defs>
      )}
      {/* feature wall / panelling */}
      {after ? (
        <g>
          <rect x="300" y="50" width="250" height="250" fill="#6b4a35" />
          {Array.from({ length: 12 }, (_, i) => <rect key={i} x={306 + i * 20.4} y="56" width="14" height="244" fill="#8a6248" />)}
          <rect x="300" y="50" width="250" height="250" fill="url(#rn-glow)" opacity="0.5" />
        </g>
      ) : (
        <g>
          <rect x="300" y="50" width="250" height="250" fill="#cbc3ae" />
          <path d="M420 70l8 26-10 18 12 30" stroke="#78746a" strokeWidth="2" fill="none" />
          <rect x="470" y="200" width="40" height="22" fill="#b4ab94" />
        </g>
      )}
      {/* window */}
      <rect x="60" y="80" width="170" height="170" fill={after ? "#eef3f5" : "#c4c9c6"} stroke={after ? "#faf8f4" : "#9a968a"} strokeWidth="8" />
      <path d="M145 80v170M60 165h170" stroke={after ? "#faf8f4" : "#9a968a"} strokeWidth="6" />
      {after && (
        <g>
          <rect x="40" y="70" width="26" height="200" fill="#f2e6d5" />
          <rect x="224" y="70" width="26" height="200" fill="#f2e6d5" />
        </g>
      )}
      {/* lighting */}
      {after ? (
        <g>
          <path d="M425 44v40" stroke="#333a49" strokeWidth="2" />
          <path d="M405 84h40l-8 20h-24z" fill="#333a49" />
          <ellipse cx="425" cy="108" rx="70" ry="18" fill="#f3e4d1" opacity="0.5" />
          {[110, 180, 250].map((x) => <circle key={x} cx={x} cy="40" r="4" fill="#faf8f4" />)}
        </g>
      ) : (
        <g>
          <path d="M300 44v30" stroke="#5c584f" strokeWidth="2" />
          <circle cx="300" cy="80" r="8" fill="#eae7de" />
        </g>
      )}
      {/* sofa */}
      <g>
        <rect x="320" y="238" width="210" height="58" rx={after ? 10 : 4} fill={after ? "#ebe4d6" : "#a49d8c"} />
        <rect x="312" y="262" width="226" height="50" rx={after ? 10 : 4} fill={after ? "#f4f0e8" : "#8f8878"} />
        <rect x="324" y="312" width="8" height="14" fill="#35332e" />
        <rect x="518" y="312" width="8" height="14" fill="#35332e" />
        {after && <rect x="340" y="246" width="44" height="30" rx="6" fill="#c98246" />}
      </g>
      {/* rug + side table + plant in the vision */}
      {after && (
        <g>
          <path d="M260 360h300l40 70H220z" fill="#f2e6d5" opacity="0.85" />
          <rect x="250" y="270" width="40" height="56" fill="#333a49" />
          <path d="M268 270c-20-30-8-60 2-70M272 270c18-26 14-50 4-64M270 270c-2-30 6-50 10-56" stroke="#5f7050" strokeWidth="5" fill="none" strokeLinecap="round" />
        </g>
      )}
      {!after && <rect x="230" y="330" width="120" height="70" fill="#9a968a" opacity="0.35" />}
    </svg>
  );
}

export default function RnHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-950/10 bg-sand-50">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-edge relative">
        <nav aria-label="Breadcrumb" className="pt-5">
          <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
            <li><Link href="/" className="focus-ring rounded-sm hover:text-walnut-700">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li><Link href="/#services" className="focus-ring rounded-sm hover:text-walnut-700">Services</Link></li>
            <li aria-hidden="true">/</li>
            <li className="text-ink-800" aria-current="page">Home Renovation</li>
          </ol>
        </nav>

        <div className="grid gap-12 pb-16 pt-10 lg:grid-cols-12 lg:items-end lg:gap-10 lg:pb-24 lg:pt-16">
          <div className="animate-fadeUp lg:col-span-5">
            <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-walnut-700">Renovation studio · Residential &amp; commercial</p>
            <h1 className="mt-6 font-serif text-[2.75rem] font-light leading-[1] tracking-tight text-ink-950 sm:text-7xl">
              Home Renovation <span className="italic text-walnut-700">in Dammam</span>
            </h1>
            <p className="mt-6 max-w-md font-serif text-xl leading-snug text-ink-800">Transform the home you already have.</p>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-600">
              From one room that needs a refresh to a larger home renovation, plan
              the improvements that make your property work and feel better.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#change" className={btnPrimary}>
                Plan My Renovation <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href={photosHref} target="_blank" rel="nofollow noopener noreferrer" className={btnGhost}>
                Send Photos of My Home
              </a>
            </div>
          </div>

          <figure className="animate-fadeIn [animation-delay:150ms] lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden bg-sand-200 shadow-[0_40px_80px_-40px_rgba(20,24,31,0.55)]" role="img" aria-label="Illustrated living room shown before renovation, with worn finishes and a single ceiling light, and after, with a timber feature wall, layered lighting and a new floor">
              <Room after={false} />
              <div className="rn-wipe absolute inset-0">
                <Room after />
              </div>
              <span aria-hidden="true" className="rn-wipe-line absolute inset-y-0 w-px bg-sand-50 shadow-[0_0_0_1px_rgba(20,24,31,0.15)]">
                <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-sand-50 bg-ink-950/70 text-sand-50">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M9 6l-6 6 6 6M15 6l6 6-6 6" /></svg>
                </span>
              </span>
              <span className="absolute left-4 top-4 bg-ink-950/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-sand-50">Before</span>
              <span className="absolute right-4 top-4 bg-sand-50/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-950">Vision</span>
            </div>
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-500">
              <span>Fig. 01 — Living room, before → vision</span>
              <span>Illustration, not a completed project</span>
            </figcaption>
          </figure>
        </div>

        <dl className="grid grid-cols-2 border-t border-ink-950/10 pb-10 pt-6 sm:grid-cols-4">
          {[
            ["Rooms", "Living, bedroom, kitchen, bath, outdoor"],
            ["Scale", "Refresh to whole home"],
            ["Services", "Electrical & plumbing in scope"],
            ["Start", "Photos → assessment"],
          ].map(([k, v]) => (
            <div key={k} className="border-l border-ink-950/10 py-2 pl-4 pr-2 first:border-l-0 first:pl-0 [&:nth-child(3)]:border-l-0 [&:nth-child(3)]:pl-0 sm:[&:nth-child(3)]:border-l sm:[&:nth-child(3)]:pl-4">
              <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-500">{k}</dt>
              <dd className="mt-1 text-sm text-ink-900">{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
