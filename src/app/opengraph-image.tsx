import { ImageResponse } from "next/og";

export const alt = "SiteBanao: Professional websites starting at just ₹999";
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
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(135deg, #ffffff 0%, #f4f3ff 55%, #ebe9fe 100%)",
          color: "#101828",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 56,
              borderRadius: 14,
              background: "linear-gradient(135deg, #2C1785, #635BFF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            {"</>"}
          </div>
          <div style={{ display: "flex", fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
            <span>Site</span>
            <span style={{ color: "#4F2BD8" }}>Banao</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05 }}>
            Your Business Deserves to Be Online.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 28 }}>
            <div style={{ fontSize: 40, fontWeight: 600, color: "#344054" }}>Your Website.</div>
            <div
              style={{
                fontSize: 40,
                fontWeight: 800,
                color: "white",
                background: "#635BFF",
                padding: "6px 22px",
                borderRadius: 16,
              }}
            >
              Just ₹999.
            </div>
          </div>
        </div>

        <div style={{ display: "flex", fontSize: 24, color: "#667085" }}>
          Mobile-friendly · Transparent pricing · Domain & hosting quoted separately
        </div>
      </div>
    ),
    size,
  );
}
