import { ImageResponse } from "next/og";

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
          background: "#1B4F8A",
          borderRadius: "14px",
        }}
      >
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, #FFF176 0%, #F9D423 55%, #F5A623 100%)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
