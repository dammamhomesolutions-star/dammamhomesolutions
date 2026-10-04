import Link from "next/link";
import WpIcon from "./WpIcon";

const controls = [
  { title: "Pressure switch", body: "Starts the pump when pressure falls below a set point and stops it when pressure is reached." },
  { title: "Electronic controller", body: "Runs the pump on flow and pressure, often with built-in dry-run protection." },
  { title: "Pressure tank (where fitted)", body: "Holds a small reserve under pressure so the pump doesn't start for every tap." },
  { title: "System demand", body: "How many taps, showers and appliances are running at once." },
];

export default function WpControl() {
  return (
    <section aria-label="Pressure control, dry running and hot water" className="border-b border-ink-900/10 bg-sand-50 py-20 sm:py-24">
      <div className="container-edge">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <WpIcon name="controller" className="h-8 w-8 text-glass-700" />
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-ink-950">What controls water pump pressure?</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600">
              The exact setup depends on the installation. Settings are matched
              to the pump and pipework, so they shouldn&rsquo;t be adjusted
              without understanding the system.
            </p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {controls.map((c) => (
              <li key={c.title} className="rounded-2xl border border-ink-900/10 bg-glass-100/40 p-5">
                <h3 className="text-base font-semibold text-ink-950">{c.title}</h3>
                <p className="mt-1.5 text-sm text-ink-600">{c.body}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border-2 border-rust-600/40 bg-rust-100/40 p-6 sm:p-8">
            <WpIcon name="alert" className="h-7 w-7 text-rust-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Why running a pump without water can be a problem</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              Many pumps rely on the water passing through them to cool and
              lubricate their parts. Running them without adequate supply can
              stress or damage the seal, impeller or motor, depending on the
              pump type. If your pump is running while the tank is empty or
              there&rsquo;s no normal flow, switch it off and have the system
              inspected. Dry-run protection should never be bypassed.
            </p>
          </div>
          <div className="rounded-2xl border border-ink-900/10 bg-glass-100/40 p-6 sm:p-8">
            <WpIcon name="flow" className="h-7 w-7 text-glass-700" />
            <h2 className="mt-3 font-serif text-2xl tracking-tight text-ink-950">Pumps and water heaters are different systems</h2>
            <p className="mt-3 text-sm leading-relaxed text-ink-700">
              The pump moves water and sets the pressure; the water heater heats
              it. Low pressure can make a shower or heater seem weak, but a
              hot-water problem doesn&rsquo;t automatically mean the pump is at
              fault — and the reverse is also true. For heater faults, see{" "}
              <Link href="/water-heater-repair-installation-dammam/" className="focus-ring rounded-sm font-semibold text-ink-950 underline decoration-glass-600 decoration-2 underline-offset-4 hover:text-glass-700">
                water heater repair &amp; installation
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
