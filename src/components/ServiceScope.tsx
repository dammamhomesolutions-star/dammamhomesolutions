interface ScopeItem {
  label: string;
  href?: string;
}

const insideHome: ScopeItem[] = [
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Water heater repair & installation", href: "/water-heater-repair-installation-dammam/" },
  { label: "Drain unblocking & sewer cleaning", href: "/drain-unblocking-sewer-line-cleaning-dammam/" },
  { label: "Water pump repair", href: "/water-pump-repair-dammam/" },
  { label: "Electrical", href: "/electrical-repair/" },
  { label: "Lighting & fixture installation", href: "/lighting-fixture-installation-dammam/" },
  { label: "AC & HVAC", href: "/ac-repair/" },
  { label: "AC installation", href: "/ac-installation-dammam/" },
  { label: "AC duct cleaning", href: "/ac-duct-cleaning-dammam/" },
  { label: "Appliance repair", href: "/appliance-repair-dammam/" },
  { label: "CCTV & intercom installation", href: "/cctv-intercom-installation-dammam/" },
  { label: "Painting", href: "/painting-wall-repair/" },
  { label: "Wallpaper installation", href: "/wallpaper-installation-dammam/" },
  { label: "Carpentry", href: "/carpentry-doors-locks/" },
  { label: "Furniture assembly", href: "/furniture-assembly-dammam/" },
  { label: "Bathroom repairs", href: "/bathroom-kitchen-repair/" },
  { label: "Kitchen repairs", href: "/bathroom-kitchen-repair/" },
  { label: "Kitchen cabinet repair", href: "/kitchen-cabinet-repair/" },
  { label: "Window, door & glass repair", href: "/window-door-glass-repair/" },
  { label: "Curtain & blind installation", href: "/curtain-blind-installation-dammam/" },
  { label: "Tile & grout repair", href: "/tile-repair-grout/" },
  { label: "Ceiling & gypsum board repair", href: "/ceiling-gypsum-board-repair/" },
  { label: "Flooring repair", href: "/flooring-repair/" },
  { label: "Gate & garage door repair", href: "/gate-garage-door-repair/" },
];

const protectingProperty: ScopeItem[] = [
  { label: "Waterproofing", href: "/waterproofing/" },
  { label: "Water leakage repair", href: "/water-leak-repair/" },
  { label: "Water tank cleaning", href: "/water-tank-cleaning/" },
  { label: "Damp & moisture issues" },
  { label: "Roof & rooftop repair", href: "/roof-repair/" },
  { label: "Roof replacement", href: "/roof-replacement-dammam/" },
  { label: "Fire & smoke damage restoration", href: "/fire-smoke-damage-restoration-dammam/" },
];

const keepingRunning: ScopeItem[] = [
  { label: "General maintenance", href: "/property-maintenance/" },
  { label: "Preventive maintenance", href: "/property-maintenance/" },
  { label: "Property maintenance support", href: "/property-maintenance/" },
  { label: "Pest control", href: "/pest-control-dammam/" },
  { label: "Deep & move-in / move-out cleaning", href: "/deep-cleaning-move-in-move-out-cleaning-dammam/" },
  { label: "Sofa & carpet cleaning", href: "/sofa-carpet-cleaning-dammam/" },
  { label: "General home repairs", href: "/general-home-repairs/" },
  { label: "Emergency home repairs", href: "/emergency-home-repairs/" },
];

function ScopeLink({ item }: { item: ScopeItem }) {
  if (item.href) {
    return (
      <a href={item.href} className="focus-ring rounded-sm underline decoration-ink-900/20 underline-offset-4 hover:decoration-rust-600">
        {item.label}
      </a>
    );
  }
  return <span>{item.label}</span>;
}

export default function ServiceScope() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-edge">
        <div className="max-w-2xl">
          <p className="section-label">Service scope</p>
          <h2 className="mt-4 font-serif text-3xl tracking-tight text-ink-950 sm:text-4xl">
            One company, many property problems.
          </h2>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-14 lg:grid-cols-12">
          {/* Inside the home — numbered ledger style */}
          <div className="lg:col-span-5">
            <h3 className="font-serif text-xl text-ink-950">Inside the home</h3>
            <ol className="mt-5 divide-y divide-ink-900/10 border-t border-ink-900/10">
              {insideHome.map((item, i) => (
                <li key={item.label} className="flex items-baseline gap-4 py-3 text-ink-700">
                  <span className="w-6 flex-none font-serif text-sm text-ink-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[15px]">
                    <ScopeLink item={item} />
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {/* Protecting the property — bordered panel */}
          <div className="lg:col-span-4">
            <div className="h-full rounded-2xl border border-ink-900/15 bg-sand-100/70 p-7">
              <h3 className="font-serif text-xl text-ink-950">Protecting the property</h3>
              <p className="mt-2 text-sm text-ink-600">
                Moisture and water are the most common causes of long-term
                property damage.
              </p>
              <ul className="mt-5 space-y-3">
                {protectingProperty.map((item) => (
                  <li key={item.label} className="flex items-center gap-2.5 text-[15px] text-ink-700">
                    <span aria-hidden="true" className="h-px w-4 flex-none bg-rust-600" />
                    <ScopeLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Keeping the property running — inline flowing tags */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-xl text-ink-950">Keeping it running</h3>
            <p className="mt-2 text-sm text-ink-600">
              Ongoing care rather than one-off fixes.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {keepingRunning.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-ink-900/15 px-3.5 py-1.5 text-[13px] text-ink-700"
                >
                  <ScopeLink item={item} />
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
