import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
  { label: "About", href: "#why-different" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  { label: "AC Repair", href: "/ac-repair/" },
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Electrical", href: "/electrical-repair/" },
  { label: "Waterproofing", href: "/waterproofing/" },
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
  { label: "General Home Repairs", href: "/general-home-repairs/" },
  { label: "Property Maintenance", href: "/property-maintenance/" },
  { label: "Emergency Home Repairs", href: "/emergency-home-repairs/" },
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
                rel="noopener noreferrer"
                className="focus-ring rounded-sm hover:text-rust-700"
              >
                WhatsApp
              </a>
            </li>
            {siteConfig.phoneDisplay && (
              <li>
                <a href={`tel:${siteConfig.phoneDisplay}`} className="focus-ring rounded-sm hover:text-rust-700">
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

      <div className="container-edge mt-12 border-t border-ink-900/10 pt-6">
        <p className="text-xs text-ink-500">
          © {new Date().getFullYear()} Dammam Home Solutions. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
