import { ImageResponse } from "next/og";

// Shared JSX for the site's default Open Graph / Twitter share image.
// Not a route file itself — imported by opengraph-image.tsx and twitter-image.tsx.
export function renderSocialImage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "#191d25",
        padding: "80px 90px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
        }}
      >
        <div style={{ width: 10, height: 10, background: "#c76a3f" }} />
        <div style={{ fontSize: 26, letterSpacing: 4, color: "#8e97a8", fontFamily: "Georgia, serif" }}>
          DAMMAM HOME SOLUTIONS
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: 36,
          fontFamily: "Georgia, serif",
          fontSize: 76,
          fontWeight: 700,
          color: "#f4f0e8",
          lineHeight: 1.15,
          width: 900,
        }}
      >
        Property repair &amp; maintenance,
        <span style={{ color: "#c76a3f" }}>&nbsp;handled directly.</span>
      </div>

      <div
        style={{
          display: "flex",
          marginTop: 32,
          fontSize: 30,
          color: "#b4bac6",
          fontFamily: "Arial, sans-serif",
        }}
      >
        Dammam, Saudi Arabia
      </div>
    </div>
  );
}

export const socialImageSize = { width: 1200, height: 630 };

export function generateSocialImage() {
  return new ImageResponse(renderSocialImage(), { ...socialImageSize });
}
