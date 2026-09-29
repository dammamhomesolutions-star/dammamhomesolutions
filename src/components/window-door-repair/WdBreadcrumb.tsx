import Link from "next/link";

export default function WdBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-glass-900/10 bg-sand-50">
      <div className="container-edge py-3">
        <ol className="flex items-center gap-2 text-xs text-ink-500">
          <li>
            <Link href="/" className="focus-ring rounded-sm hover:text-glass-700">
              Home
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-ink-800" aria-current="page">
            Window, Door &amp; Glass Repair
          </li>
        </ol>
      </div>
    </nav>
  );
}
