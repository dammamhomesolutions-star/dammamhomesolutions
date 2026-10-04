import RrIcon from "./RrIcon";
import type { RrIconName } from "@/lib/roof-replacement";

const factors: { title: string; body: string; icon: RrIconName }[] = [
  {
    title: "Heat & roof surface temperature",
    body: "A flat roof in direct summer sun gets far hotter than the air around it. Materials and coatings have to tolerate that day after day.",
    icon: "heat",
  },
  {
    title: "Solar & UV exposure",
    body: "Strong sun breaks down exposed membranes and coatings over time, which is why most systems need a protective or reflective top layer.",
    icon: "sun",
  },
  {
    title: "Thermal movement",
    body: "Roofs expand in the day and contract at night. Junctions, joints and edges take the most strain and are where cracks often open.",
    icon: "layers",
  },
  {
    title: "Dust & airborne particles",
    body: "Dust settles on the roof, collects in drains and wears exposed surfaces. Blocked drains are a common cause of ponding.",
    icon: "drain",
  },
  {
    title: "Occasional heavy rain",
    body: "Rain is infrequent but can be intense. Roofs that cope for months can show their weaknesses in a single storm.",
    icon: "droplet",
  },
];

export default function RrClimate() {
  return (
    <section aria-labelledby="rr-climate" className="relative overflow-hidden border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <p className="section-label !text-ember-700">Local conditions</p>
          <h2 id="rr-climate" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            Roofing in Dammam has to handle more than rain
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            In the Eastern Province, heat and sun do more long-term damage to
            a roof than rain does. Rain is just when the damage becomes
            visible. Materials and installation details need to be chosen for
            the roof&rsquo;s actual exposure — not copied from somewhere with
            a different climate.
          </p>

          {/* day / night movement diagram */}
          <figure className="mt-8 rounded-2xl border border-ink-900/10 bg-sand-100/60 p-5">
            <svg viewBox="0 0 360 150" className="h-auto w-full" role="img" aria-labelledby="rr-thermal-title">
              <title id="rr-thermal-title">A roof slab expanding in daytime heat and contracting at night, straining the joint at the wall</title>
              <g fontFamily="ui-monospace, monospace" fontSize="9" letterSpacing="1">
                <text x="10" y="18" fill="#a8662a">DAY</text>
                <text x="190" y="18" fill="#4a5468">NIGHT</text>
              </g>
              <circle cx="150" cy="22" r="9" fill="#d69a5f" />
              <path d="M330 14a10 10 0 1 0 8 16 8 8 0 0 1-8-16z" fill="#8e97a8" />
              {/* day: expanded slab pushing on wall */}
              <rect x="10" y="60" width="20" height="70" fill="#9a968a" />
              <rect x="30" y="96" width="140" height="18" fill="#d9bfa0" stroke="#a8662a" />
              <path d="M60 86h80M140 86l-6-4M140 86l-6 4M60 86l6-4M60 86l6 4" stroke="#a8662a" strokeWidth="1.5" />
              {/* night: contracted slab, gap at wall */}
              <rect x="190" y="60" width="20" height="70" fill="#9a968a" />
              <rect x="218" y="96" width="132" height="18" fill="#c4c0b4" stroke="#4a5468" />
              <path d="M240 86h80M240 86l6-4M240 86l6 4M320 86l-6-4M320 86l-6 4" stroke="#4a5468" strokeWidth="1.5" />
              <path d="M212 96v18" stroke="#c76a3f" strokeWidth="2" strokeDasharray="2 2" />
              <text x="196" y="146" fontFamily="ui-monospace, monospace" fontSize="9" fill="#94472a">JOINT UNDER STRAIN</text>
            </svg>
          </figure>
        </div>

        <div className="lg:col-span-7">
          <ul className="divide-y divide-ink-900/10 border-y border-ink-900/10">
            {factors.map((f) => (
              <li key={f.title} className="group flex gap-5 py-6">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-ember-100 text-ember-700">
                  <RrIcon name={f.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-semibold text-ink-950">{f.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 rounded-xl bg-sand-100 p-4 text-sm leading-relaxed text-ink-700">
            Service life depends on the material, installation quality,
            exposure, maintenance and the specific roof system. Be wary of any
            fixed &ldquo;lasts X years&rdquo; promise that ignores those.
          </p>
        </div>
      </div>
    </section>
  );
}
