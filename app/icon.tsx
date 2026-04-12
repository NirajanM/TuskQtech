import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          borderRadius: 14,
          background: "linear-gradient(135deg, #0056b3 0%, #4338ca 100%)",
          color: "#ffffff",
          fontSize: 34,
          fontWeight: 900,
          letterSpacing: "-0.05em",
        }}
      >
        TQ
      </div>
    ),
    {
      ...size,
    },
  );
}
