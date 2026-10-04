import CbIcon from "./CbIcon";

const rows = [
  { rod: "Decorative, visible hardware", track: "Minimal, discreet profile" },
  { rod: "Common in bedrooms and living rooms", track: "Suits modern, clean interiors" },
  { rod: "Wall mounted with brackets", track: "Wall or ceiling mounted" },
  { rod: "Many finishes and finials", track: "Good for long spans, bays and layers" },
];
const factors = ["Curtain weight", "Opening style", "Room design", "Ceiling or wall", "Look you want", "Number of layers"];
const heavy = ["Curtain weight", "Hardware capacity", "Mounting surface", "Number of brackets / support points", "Opening span", "Stacking area", "Ceiling or wall condition", "Access", "Alignment"];

export default function CbRodTrack() {
  return (
    <section id="rod-or-track" aria-label="Rod or track and heavy curtains" className="border-b border-ink-900/10 bg-clay-100/50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-label !text-clay-700">Hardware</p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Curtain rod or curtain track?</h2>
            <ul className="mt-6 flex flex-wrap gap-2">
              {factors.map((f) => <li key={f} className="rounded-full bg-sand-50 px-3 py-1 text-sm text-ink-800 ring-1 ring-ink-900/10">{f}</li>)}
            </ul>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
            <div className="rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10">
              <CbIcon name="rod" className="h-8 w-8 text-clay-700" />
              <h3 className="mt-3 font-serif text-2xl text-ink-950">Rod</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-700">{rows.map((r) => <li key={r.rod}>{r.rod}</li>)}</ul>
            </div>
            <div className="rounded-2xl bg-ink-950 p-6 text-sand-50">
              <CbIcon name="track" className="h-8 w-8 text-clay-300" />
              <h3 className="mt-3 font-serif text-2xl">Track</h3>
              <ul className="mt-3 space-y-1.5 text-sm text-ink-300">{rows.map((r) => <li key={r.track}>{r.track}</li>)}</ul>
            </div>
          </div>
        </div>

        <div className="mt-16 rounded-2xl bg-sand-50 p-6 ring-1 ring-ink-900/10 sm:p-10">
          <h2 className="font-serif text-3xl tracking-tight text-ink-950">Large windows &amp; heavy curtains need more planning</h2>
          <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-ink-600">
            Lined blackout curtains across a wide villa window can be heavy. We
            use hardware rated for the load, enough support points and fixings
            that suit the wall or ceiling — not improvised anchors.
          </p>
          <ul className="mt-6 grid gap-2 sm:grid-cols-3">
            {heavy.map((h) => (
              <li key={h} className="flex items-center gap-2 rounded-xl bg-clay-100/60 px-3 py-2 text-sm text-ink-800">
                <CbIcon name="check" className="h-4 w-4 flex-none text-clay-700" />
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
