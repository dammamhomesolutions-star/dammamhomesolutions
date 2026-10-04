import CvCtas from "./CvCtas";

// Villa with gate intercom, two cameras with coverage arcs, recorder and a
// phone showing the live view. CSS-only motion; server-rendered.
function SecurityVisual() {
  return (
    <figure className="rounded-3xl border border-ink-900/10 bg-sand-50 p-4 shadow-[0_30px_60px_-30px_rgba(20,24,31,0.35)] sm:p-6">
      <svg viewBox="0 0 520 320" className="h-auto w-full" role="img" aria-labelledby="cv-hero-title">
        <title id="cv-hero-title">{`Villa with a gate intercom, two security cameras and their coverage areas, a recorder inside, and a phone showing the live camera view`}</title>
        <rect width="520" height="320" fill="#eaeee0" />
        <path d="M0 290h520" stroke="#79895f" strokeWidth="2" />

        {/* house */}
        <path d="M188 112L292 58l104 54" fill="none" stroke="#2c3524" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="200" y="110" width="184" height="130" fill="#faf8f4" stroke="#2c3524" strokeWidth="2" />
        <rect x="222" y="132" width="40" height="32" fill="#dbe1cd" stroke="#4b5a3f" strokeWidth="1.5" />
        <rect x="322" y="132" width="40" height="32" fill="#dbe1cd" stroke="#4b5a3f" strokeWidth="1.5" />
        <rect x="276" y="178" width="32" height="62" fill="#4b5a3f" />
        {/* recorder */}
        <rect x="324" y="200" width="44" height="14" rx="2" fill="#2c3524" />
        <circle className="cv-pulse" cx="332" cy="207" r="2.5" fill="#c76a3f" />
        <text x="340" y="210" fontFamily="ui-monospace, monospace" fontSize="7" fill="#eaeee0">NVR</text>

        {/* camera on house corner + panning coverage */}
        <g className="cv-pan" style={{ transformOrigin: "386px 118px" }}>
          <path d="M386 118L236 270h110z" fill="#5f7050" opacity="0.18" />
          <path d="M386 118L236 270M386 118L346 270" stroke="#5f7050" strokeWidth="1" strokeDasharray="3 4" />
        </g>
        <path d="M380 112l14-4 3 8-14 4z" fill="#2c3524" />
        <circle className="cv-pulse" cx="393" cy="110" r="1.8" fill="#79895f" />

        {/* boundary wall + gate */}
        <rect x="16" y="240" width="488" height="50" fill="#dbe1cd" stroke="#4b5a3f" strokeWidth="1.5" />
        <rect x="56" y="232" width="10" height="58" fill="#4b5a3f" />
        <rect x="146" y="232" width="10" height="58" fill="#4b5a3f" />
        <path d="M66 248h80M66 280h80M78 248v32M90 248v32M102 248v32M114 248v32M126 248v32M138 248v32" stroke="#2c3524" strokeWidth="2" />
        {/* gate camera + coverage */}
        <path d="M150 222l12-4 3 7-12 4z" fill="#2c3524" />
        <path d="M150 226L20 300h110z" fill="#5f7050" opacity="0.14" />
        {/* gate intercom + signal */}
        <rect x="158" y="252" width="12" height="18" rx="2" fill="#faf8f4" stroke="#2c3524" strokeWidth="1.5" />
        <circle cx="164" cy="258" r="2" fill="#2c3524" />
        <path className="cv-pulse" d="M176 252a10 10 0 0 1 0 18M182 247a17 17 0 0 1 0 28" fill="none" stroke="#79895f" strokeWidth="2" strokeLinecap="round" />

        {/* network to phone */}
        <path className="fs-flow" d="M368 206c30 0 40-30 64-36" fill="none" stroke="#4b5a3f" strokeWidth="2" />

        {/* phone */}
        <rect x="430" y="100" width="72" height="140" rx="12" fill="#14181f" />
        <rect x="436" y="114" width="60" height="104" rx="4" fill="#374330" />
        <path d="M444 196l14-22 12 10 10-14 12 26z" fill="#5f7050" />
        <rect x="444" y="160" width="10" height="18" fill="#dbe1cd" opacity="0.6" />
        <circle className="cv-pulse" cx="444" cy="122" r="3" fill="#c76a3f" />
        <text x="450" y="125" fontFamily="ui-monospace, monospace" fontSize="8" fill="#eaeee0">LIVE</text>
        <rect x="456" y="226" width="20" height="4" rx="2" fill="#4a5468" />
      </svg>
      <figcaption className="mt-3 text-[11px] uppercase tracking-[0.14em] text-ink-500">
        Illustration — every property needs its own plan
      </figcaption>
    </figure>
  );
}

export default function CvHero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-900/10 bg-moss-100">
      <div aria-hidden="true" className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="container-edge relative grid gap-10 py-12 sm:py-16 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-14 lg:py-20">
        <div className="animate-fadeUp">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-moss-700">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-moss-600" aria-hidden="true" />
            CCTV &amp; intercom installation in Dammam
          </p>
          <h1 className="mt-5 max-w-xl font-serif text-[2.2rem] leading-[1.08] tracking-tight text-ink-950 sm:text-5xl">
            See who&rsquo;s at the door. Know what&rsquo;s happening around your property.
          </h1>
          <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-700 sm:text-base">
            Good security starts with the right plan — which areas need a
            camera, where each one should go, how footage is recorded and
            viewed, and how visitors are let in. Dammam Home Solutions plans,
            supplies and installs CCTV and intercom systems around your
            property, not around a package.
          </p>
          <CvCtas className="mt-8" />
          <p className="mt-5 max-w-md text-xs leading-relaxed text-ink-500">
            Tell us about your property, what you want to monitor, and whether
            you need door or gate entry control.
          </p>
        </div>
        <div className="animate-fadeIn [animation-delay:150ms]">
          <SecurityVisual />
        </div>
      </div>
    </section>
  );
}
