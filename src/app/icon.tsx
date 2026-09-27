import { ImageResponse } from "next/og";

// Code-generated wordmark icon (no image asset / photo is used as the site icon).
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#191d25",
          borderRadius: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontFamily: "Georgia, serif",
            fontSize: 30,
            fontWeight: 700,
            color: "#f4f0e8",
            letterSpacing: -1,
          }}
        >
          D
          <span style={{ color: "#c76a3f" }}>H</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
