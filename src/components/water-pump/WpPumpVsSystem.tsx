import WpIcon from "./WpIcon";
import WpCtas from "./WpCtas";

const pump = ["Pump doesn't start", "Unusual motor noise", "Pump overheating", "Visible leak from the pump itself", "Repeated electrical trips", "Runs but doesn't build expected pressure", "Mechanical wear"];
const system = ["Low water in the tank", "Blocked pipe or filter", "Closed or partly closed valve", "Leak elsewhere in the system", "Tank or float-valve problem", "Pressure-control issue", "Pipe restriction"];

export default function WpPumpVsSystem() {
  return (
    <section id="pump-or-system" aria-labelledby="wp-pvs" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label !text-glass-700">The key question</p>
          <h2 id="wp-pvs" className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">Is the pump faulty — or is the system?</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
            Replacing a pump won&rsquo;t fix a blocked filter or a leaking pipe.
            These patterns help — but symptoms overlap.
          </p>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl bg-ink-950 p-6 text-sand-50">
            <div className="flex items-center gap-3"><WpIcon name="pump" className="h-8 w-8 text-glass-300" /><h3 className="font-serif text-2xl">Pump problem</h3></div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-glass-300">Possible indicators</p>
            <ul className="mt-4 space-y-2 text-sm text-sand-100">
              {pump.map((x) => (
                <li key={x} className="flex gap-2"><span className="mt-2 h-1 w-3 flex-none bg-glass-300" aria-hidden="true" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-glass-100/60 p-6">
            <div className="flex items-center gap-3"><WpIcon name="pipe" className="h-8 w-8 text-glass-700" /><h3 className="font-serif text-2xl text-ink-950">System problem</h3></div>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-glass-700">Possible indicators</p>
            <ul className="mt-4 space-y-2 text-sm text-ink-800">
              {system.map((x) => (
                <li key={x} className="flex gap-2"><span className="mt-2 h-1 w-3 flex-none bg-glass-600" aria-hidden="true" />{x}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col rounded-2xl border-2 border-dashed border-glass-600/50 p-6">
            <div className="flex items-center gap-3"><WpIcon name="search" className="h-8 w-8 text-glass-700" /><h3 className="font-serif text-2xl text-ink-950">Not sure</h3></div>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-700">
              When the symptoms overlap, a professional inspection is the safest
              way to find the actual cause — and avoid replacing a pump that
              didn&rsquo;t need it.
            </p>
            <WpCtas className="mt-auto pt-6" primaryLabel="Request an Assessment" />
          </div>
        </div>
      </div>
    </section>
  );
}
