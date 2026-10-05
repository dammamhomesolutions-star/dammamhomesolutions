import type { NextConfig } from "next";

// Content-Security-Policy scoped to what this site actually loads:
// - The only third-party script vendors are Google tag (gtag.js, for GA4) and
//   Microsoft Clarity, loaded via next/script — both allowlisted explicitly
//   by domain below, no wildcards.
// - script-src needs 'unsafe-inline'. This was NOT the first approach taken:
//   JSON-LD, the GA4/Clarity init snippets, and Next.js's own framework
//   hydration scripts (self.__next_f.push(...)) were first allowlisted by
//   exact sha256 hash, which worked for the site's own static content. But
//   verified empirically (two consecutive `next build` runs with zero source
//   changes, diffed byte-for-byte) that Next's own per-page hydration payload
//   is NOT deterministic across builds — its hash changes every time,
//   unrelated to page content. Leaving that one script hash-blocked was also
//   tested directly in a browser: it breaks React hydration outright (React
//   error #412, no event handlers attach, buttons stop responding) across
//   every animated/interactive section on the site. A real per-request nonce
//   would fix this correctly, but nonces require reading request headers in
//   the root layout, which forces every route on the site into dynamic,
//   per-request rendering — a much larger architectural change than this
//   task's scope, given the site is deliberately built as fully static.
//   'unsafe-inline' here is the documented, common trade-off for Next.js App
//   Router sites that need to stay static; every other directive below
//   remains strict (no wildcards, no blanket allowances).
// - style-src needs 'unsafe-inline' because next/font injects inline
//   @font-face <style> tags and the site's scroll/drag animations rely on
//   inline style={{ ... }} attributes throughout — removing this would break
//   every interactive/animated section on every service page.
// - WhatsApp links (wa.me) are plain <a> navigations, not embedded resources,
//   so they are outside the scope of CSP entirely (no directive needed).
const csp = [
  "default-src 'self'",
  "script-src 'self' https://www.googletagmanager.com https://www.clarity.ms 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://www.clarity.ms https://c.clarity.ms",
  "frame-src 'none'",
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  // 1 year, no includeSubDomains/preload until any subdomains are confirmed HTTPS-ready.
  { key: "Strict-Transport-Security", value: "max-age=31536000" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // Two root layouts (English and Arabic) — unmatched URLs use app/global-not-found.tsx.
  experimental: {
    globalNotFound: true,
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
