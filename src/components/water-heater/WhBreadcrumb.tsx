import Link from "next/link";

export default function WhBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-ink-900/10 bg-sand-50">
      <div className="container-edge py-3">
        <ol className="flex flex-wrap items-center gap-2 text-xs text-ink-500">
          <li>
            <Link href="/" className="focus-ring rounded-sm hover:text-rust-700">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li>
            <Link href="/#services" className="focus-ring rounded-sm hover:text-rust-700">
              Services
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-ink-800" aria-current="page">
            Water Heater Repair &amp; Installation
          </li>
        </ol>
      </div>
    </nav>
  );
}
