import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a1428 0%, #0e2e56 55%, #1B4F8A 100%)",
        }}
      >
        <div
          style={{
            width: 180,
            height: 180,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #FFF176 0%, #F9D423 55%, #F5A623 100%)",
            display: "flex",
            marginBottom: 36,
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontFamily: "Georgia, serif",
            fontWeight: 900,
            fontSize: 96,
            color: "#ffffff",
            letterSpacing: "0.02em",
          }}
        >
          SUNNY
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.35em",
            textTransform: "uppercase",
            color: "#93c5fd",
            marginTop: 8,
          }}
        >
          Cereal
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#F5A623",
            marginTop: 32,
            fontWeight: 700,
          }}
        >
          Fabricante de Cereales para Distribuidores
        </div>
      </div>
    ),
    { ...size }
  );
}
