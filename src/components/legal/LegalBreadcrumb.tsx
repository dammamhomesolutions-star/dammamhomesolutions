import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

// Visible breadcrumb. Pass `path` to also emit BreadcrumbList schema (pages
// that already output their own breadcrumb schema leave it out).
export default function LegalBreadcrumb({ label, path }: { label: string; path?: string }) {
  const jsonLd = path
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
          { "@type": "ListItem", position: 2, name: label, item: `${siteConfig.url}${path}` },
        ],
      }
    : null;
  return (
    <nav aria-label="Breadcrumb" className="border-b border-ink-900/10 bg-sand-50">
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      <div className="container-edge py-3">
        <ol className="flex items-center gap-2 text-xs text-ink-500">
          <li>
            <Link href="/" className="focus-ring rounded-sm hover:text-rust-700">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-ink-800" aria-current="page">
            {label}
          </li>
        </ol>
      </div>
    </nav>
  );
}
