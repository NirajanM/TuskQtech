import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/seo";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #0056B3 0%, #003366 100%)",
          color: "#ffffff",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 4, color: "#d6e2ff" }}>ENGINEERING AUTHORITY</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 82, fontWeight: 800, lineHeight: 1 }}>TUSKQ</div>
          <div style={{ fontSize: 34, maxWidth: 860, color: "#e0edff" }}>
            Engineering the Future of Digital Innovation.
          </div>
          <div style={{ fontSize: 26, maxWidth: 860, color: "#d2e3ff" }}>
            {siteConfig.tagline}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#ffffff",
          }}
        >
          <span>{siteConfig.name}</span>
          <span>{siteConfig.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    size,
  );
}
