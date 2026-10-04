import { fcMaintenance } from "@/lib/false-ceiling";
import FcIcon from "./FcIcon";

const ac = ["Supply diffusers", "Return air grilles", "Access to AC units and filters", "Diffuser position vs lights", "Ceiling height around ducts", "Condensate lines"];
const accessFor = ["AC units and fan coils", "Valves and drain points", "Electrical junctions", "Water heater access in bathrooms", "Other concealed services"];

// Plan view: diffuser, downlights and an access panel set out together.
function CoordinationPlan() {
  return (
    <svg viewBox="0 0 300 180" className="h-auto w-full" role="img" aria-labelledby="fc-coord-title">
      <title id="fc-coord-title">{`Ceiling plan showing downlights, an AC diffuser and an access panel spaced so none clash`}</title>
      <rect width="300" height="180" fill="#eef3f5" stroke="#3d5a6b" strokeWidth="2" />
      <rect x="20" y="20" width="260" height="140" fill="none" stroke="#b8ccd4" strokeWidth="6" />
      {[[70, 60], [150, 60], [230, 60], [70, 120], [230, 120]].map(([x, y]) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="7" fill="#f6dfb4" stroke="#c17f3e" strokeWidth="1.5" />
      ))}
      <rect x="130" y="105" width="40" height="30" fill="#d7e4ea" stroke="#3d5a6b" strokeWidth="1.5" />
      <path d="M134 112h32M134 120h32M134 128h32" stroke="#3d5a6b" />
      <rect x="250" y="140" width="24" height="16" fill="none" stroke="#c76a3f" strokeWidth="1.5" strokeDasharray="3 2" />
      <text x="128" y="152" fontFamily="ui-monospace, monospace" fontSize="9" fill="#1c2733">DIFFUSER</text>
      <text x="40" y="44" fontFamily="ui-monospace, monospace" fontSize="9" fill="#1c2733">DOWNLIGHTS</text>
      <text x="208" y="174" fontFamily="ui-monospace, monospace" fontSize="9" fill="#c76a3f">ACCESS PANEL</text>
      <text x="24" y="174" fontFamily="ui-monospace, monospace" fontSize="9" fill="#3d5a6b">COVE</text>
    </svg>
  );
}

export default function FcServices() {
  return (
    <section id="ac-and-access" aria-label="AC integration, access panels and maintenance" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <p className="section-label !text-glass-700">AC &amp; services</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">How does a false ceiling work with AC?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              The ceiling layout shouldn&rsquo;t blindly cover or block existing
              AC parts. We cut in and frame diffusers and grilles where your AC
              needs them, keep space for ducts, and leave access to units —
              coordinating with your AC technician on any changes to the AC
              system itself.
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {ac.map((a) => <li key={a} className="flex gap-2 text-sm text-ink-800"><FcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-glass-700" />{a}</li>)}
            </ul>
          </div>
          <div className="lg:col-span-6">
            <div className="rounded-2xl bg-glass-100 p-4 ring-1 ring-ink-900/10 sm:p-6">
              <CoordinationPlan />
              <p className="mt-3 text-sm text-ink-700">Lights, diffusers and access points set out together before the ceiling is closed.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50 sm:p-8">
            <FcIcon name="access" className="h-8 w-8 text-glass-300" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight">Don&rsquo;t forget access to concealed services</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-300">Not every ceiling needs an access panel — but where something above will need maintenance, planning one in is much easier than cutting into a finished ceiling later. Useful for:</p>
            <ul className="mt-4 space-y-1.5">{accessFor.map((a) => <li key={a} className="flex gap-2 text-sm text-sand-100"><FcIcon name="check" className="mt-0.5 h-4 w-4 flex-none text-glass-300" />{a}</li>)}</ul>
          </div>
          <div className="rounded-2xl border border-ink-900/10 p-6 sm:p-8">
            <FcIcon name="search" className="h-8 w-8 text-glass-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">Think about future maintenance</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-600">A beautiful ceiling can still be a nuisance if nothing above it can be reached. Plan for:</p>
            <ul className="mt-4 flex flex-wrap gap-2">{fcMaintenance.map((m) => <li key={m} className="rounded-full bg-glass-100 px-3 py-1 text-sm text-ink-800">{m}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
