import Link from "next/link";
import { buildTelLink, buildWhatsAppLink, siteConfig } from "@/lib/site-config";

const serviceLinks = [
  { label: "AC Repair & Maintenance", href: "/ac-repair/" },
  { label: "Plumbing Repair", href: "/plumbing-repair/" },
  { label: "Water Leak Detection & Repair", href: "/water-leak-repair/" },
  { label: "Electrical Repair", href: "/electrical-repair/" },
  { label: "Painting & Wall Repair", href: "/painting-wall-repair/" },
  { label: "Carpentry, Doors & Locks", href: "/carpentry-doors-locks/" },
  { label: "Waterproofing", href: "/waterproofing/" },
  { label: "Mold & Damp Treatment", href: "/mold-damp-treatment-dammam/" },
];

const maintenanceLinks = [
  { label: "Property Maintenance", href: "/property-maintenance/" },
  { label: "Emergency Home Repairs", href: "/emergency-home-repairs/" },
  { label: "Handyman Services", href: "/handyman-services-dammam/" },
  { label: "General Home Repairs", href: "/general-home-repairs/" },
  { label: "Home Renovation", href: "/home-renovation-dammam/" },
];

const companyLinks = [
  { label: "All Services", href: "/services/" },
  { label: "Areas We Serve", href: "/areas-we-serve/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Contact Us", href: "/contact-us/" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy/" },
  { label: "Terms & Conditions", href: "/terms-conditions/" },
  { label: "Refund & Cancellation Policy", href: "/refund-policy/" },
];

const areaSlug = (a: string) => a.toLowerCase().replace(/\s+/g, "-");

function Col({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">{title}</p>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  );
}

const linkCls = "focus-ring rounded-sm text-sm text-ink-700 hover:text-rust-700";

export default function Footer() {
  return (
    <footer className="border-t border-ink-900/10 bg-sand-100/60 pb-28 pt-16 sm:pb-16">
      <div className="container-edge grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
        <div className="sm:col-span-2 lg:col-span-4">
          <p className="font-serif text-lg font-semibold text-ink-950">Dammam Home Solutions</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-600">
            Home maintenance and repair services for residential customers across
            Dammam, Al Khobar, Dhahran and Qatif.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-ink-900/15 px-3 py-1 text-xs font-semibold text-ink-800">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-moss-600" /> Available 24/7
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <a href={buildTelLink()} className="focus-ring inline-flex items-center rounded-full border border-ink-900/20 px-4 py-2 text-sm font-semibold text-ink-950 hover:border-ink-900/50">
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href={buildWhatsAppLink("Hello Dammam Home Solutions, I'd like a quote for a repair or maintenance job.")}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-4 py-2 text-sm font-semibold text-sand-50"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <Col title="Services">
            {serviceLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
            <li><Link href="/services/" className={`${linkCls} font-semibold text-ink-950`}>View all services →</Link></li>
          </Col>
        </div>

        <div className="lg:col-span-2">
          <Col title="Home maintenance">
            {maintenanceLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
          </Col>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:col-span-2 lg:col-span-3 lg:grid-cols-1">
          <Col title="Areas">
            {siteConfig.areas.map((a) => (
              <li key={a}><Link href={`/areas-we-serve/#${areaSlug(a)}`} className={linkCls}>{a}</Link></li>
            ))}
          </Col>
          <Col title="Company">
            {companyLinks.map((l) => (
              <li key={l.href}><Link href={l.href} className={linkCls}>{l.label}</Link></li>
            ))}
          </Col>
        </div>
      </div>

      <div className="container-edge mt-12 flex flex-col gap-4 border-t border-ink-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-500">
          © {new Date().getFullYear()} Dammam Home Solutions · {siteConfig.region}
          {siteConfig.email && (
            <>
              {" · "}
              <a href={`mailto:${siteConfig.email}`} className="focus-ring rounded-sm hover:text-rust-700">{siteConfig.email}</a>
            </>
          )}
        </p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {legalLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="focus-ring rounded-sm text-xs text-ink-500 hover:text-rust-700">{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
