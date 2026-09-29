import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const helpfulLinks = [
  { label: "Property Maintenance", href: "/property-maintenance/" },
  { label: "Emergency Home Repairs", href: "/emergency-home-repairs/" },
  { label: "Plumbing", href: "/plumbing-repair/" },
  { label: "Water Leak Detection & Repair", href: "/water-leak-repair/" },
  { label: "Contact Us", href: "/contact-us/" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="py-24 sm:py-32">
          <div className="container-edge max-w-xl text-center">
            <p className="section-label mx-auto">404</p>
            <h1 className="mt-4 font-serif text-4xl tracking-tight text-ink-950 sm:text-5xl">
              This page doesn&rsquo;t exist.
            </h1>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-600 sm:text-base">
              The page you&rsquo;re looking for may have moved or the link may
              be incorrect. Here are a few places to go instead.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              <Link
                href="/"
                className="focus-ring inline-flex items-center rounded-full bg-ink-950 px-6 py-3 text-sm font-semibold text-sand-50 transition-transform hover:scale-[1.02]"
              >
                Back to Home
              </Link>
              <a
                href={buildWhatsAppLink("Hello Dammam Home Solutions, I was looking for a page on your website and couldn't find it. ")}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-sm font-semibold text-ink-800 underline underline-offset-4 hover:text-rust-700"
              >
                Ask us on WhatsApp
              </a>
            </div>

            <div className="mt-14 border-t border-ink-900/10 pt-8 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-500">
                You might be looking for
              </p>
              <ul className="mt-4 space-y-2.5">
                {helpfulLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="focus-ring rounded-sm text-sm text-ink-700 underline decoration-rust-600 decoration-2 underline-offset-4 hover:text-rust-700">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
