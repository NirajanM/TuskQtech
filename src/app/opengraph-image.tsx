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
          background:
            "linear-gradient(135deg, rgba(12,14,19,1) 0%, rgba(17,19,24,1) 60%, rgba(0,241,254,0.2) 100%)",
          color: "#f6f6fd",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 24, letterSpacing: 4, color: "#99f7ff" }}>KINETIC MONOLITH FRAMEWORK</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ fontSize: 88, fontWeight: 800, lineHeight: 1 }}>TUSKQTECH</div>
          <div style={{ fontSize: 34, maxWidth: 860, color: "#aaabb1" }}>
            Industrial software delivery and technical education built with precision and speed.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 24,
            color: "#ffaa17",
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
