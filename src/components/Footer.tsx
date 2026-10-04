import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Contact Us", href: "/contact-us/" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-conditions/" },
  { label: "Refund & Cancellation Policy", href: "/refund-policy/" },
];

const serviceLinks = [
  { label: "AC Repair", href: "/ac-repair/" },
  { label: "AC Installation", href: "/ac-installation-dammam/" },
  { label: "AC Duct Cleaning", href: "/ac-duct-cleaning-dammam/" },
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Water Heater Repair & Installation", href: "/water-heater-repair-installation-dammam/" },
  { label: "Drain Unblocking & Sewer Cleaning", href: "/drain-unblocking-sewer-line-cleaning-dammam/" },
  { label: "Water Pump Repair", href: "/water-pump-repair-dammam/" },
  { label: "Appliance Repair", href: "/appliance-repair-dammam/" },
  { label: "CCTV & Intercom Installation", href: "/cctv-intercom-installation-dammam/" },
  { label: "Lighting & Fixture Installation", href: "/lighting-fixture-installation-dammam/" },
  { label: "Furniture Assembly", href: "/furniture-assembly-dammam/" },
  { label: "Curtain & Blind Installation", href: "/curtain-blind-installation-dammam/" },
  { label: "Wallpaper Installation", href: "/wallpaper-installation-dammam/" },
  { label: "False Ceiling Installation", href: "/false-ceiling-installation-dammam/" },
  { label: "Marble & Granite Polishing", href: "/marble-granite-polishing-dammam/" },
  { label: "Outdoor & Boundary Wall Repair", href: "/outdoor-boundary-wall-repair-dammam/" },
  { label: "Swimming Pool Repair & Maintenance", href: "/swimming-pool-repair-maintenance-dammam/" },
  { label: "Handyman Services", href: "/handyman-services-dammam/" },
  { label: "Electrical", href: "/electrical-repair/" },
  { label: "Waterproofing", href: "/waterproofing/" },
  { label: "Water Leak Detection & Repair", href: "/water-leak-repair/" },
  { label: "Water Tank Cleaning", href: "/water-tank-cleaning/" },
  { label: "Painting", href: "/painting-wall-repair/" },
  { label: "Carpentry & Doors", href: "/carpentry-doors-locks/" },
  { label: "Bathroom & Kitchen", href: "/bathroom-kitchen-repair/" },
  { label: "Tile & Grout Repair", href: "/tile-repair-grout/" },
  { label: "Ceiling & Gypsum Board Repair", href: "/ceiling-gypsum-board-repair/" },
  { label: "Window, Door & Glass Repair", href: "/window-door-glass-repair/" },
  { label: "Kitchen Cabinet Repair", href: "/kitchen-cabinet-repair/" },
  { label: "Flooring Repair", href: "/flooring-repair/" },
  { label: "Gate & Garage Door Repair", href: "/gate-garage-door-repair/" },
  { label: "Roof & Rooftop Repair", href: "/roof-repair/" },
  { label: "Roof Replacement", href: "/roof-replacement-dammam/" },
  { label: "General Home Repairs", href: "/general-home-repairs/" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
  { label: "Emergency Home Repairs", href: "/emergency-home-repairs/" },
  { label: "Fire & Smoke Damage Restoration", href: "/fire-smoke-damage-restoration-dammam/" },
  { label: "Pest Control", href: "/pest-control-dammam/" },
  { label: "Deep & Move-In / Move-Out Cleaning", href: "/deep-cleaning-move-in-move-out-cleaning-dammam/" },
  { label: "Sofa & Carpet Cleaning", href: "/sofa-carpet-cleaning-dammam/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-sand-100/60 pb-28 pt-16 sm:pb-16">
      <div className="container-edge grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <p className="font-serif text-lg font-semibold text-ink-950">
            Dammam Home Solutions
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-600">
            Property repair and maintenance for homes and rental properties
            in {siteConfig.region}.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Navigation
          </p>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="focus-ring rounded-sm text-sm text-ink-700 hover:text-rust-700">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Services
          </p>
          <ul className="mt-4 space-y-2.5">
            {serviceLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="focus-ring rounded-sm text-sm text-ink-700 hover:text-rust-700">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
            Contact
          </p>
          <ul className="mt-4 space-y-2.5 text-sm text-ink-700">
            <li>
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like to get in touch.")}
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="focus-ring rounded-sm hover:text-rust-700"
              >
                WhatsApp
              </a>
            </li>
            {siteConfig.phoneDisplay && (
              <li>
                <a href={buildTelLink()} className="focus-ring rounded-sm hover:text-rust-700">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
            )}
            {siteConfig.email && (
              <li>
                <a href={`mailto:${siteConfig.email}`} className="focus-ring rounded-sm hover:text-rust-700">
                  {siteConfig.email}
                </a>
              </li>
            )}
            <li className="text-ink-500">Dammam, Saudi Arabia</li>
          </ul>
        </div>
      </div>

      <div className="container-edge mt-12 flex flex-col gap-4 border-t border-ink-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          © {new Date().getFullYear()} Dammam Home Solutions. All rights
          reserved.
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {legalLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="focus-ring rounded-sm text-xs text-ink-500 hover:text-rust-700">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
