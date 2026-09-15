import { ImageResponse } from "next/og";

export const alt =
  "Muhammad Jamal — Software Engineer and Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#f7f8f6",
          color: "#18201e",
          display: "flex",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "flex-start",
            background: "#ffffff",
            border: "2px solid #dce3df",
            borderRadius: "32px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            justifyContent: "space-between",
            padding: "64px",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              color: "#0c655c",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span
              style={{
                background: "#147d72",
                borderRadius: "999px",
                display: "flex",
                height: 14,
                marginRight: 14,
                width: 14,
              }}
            />
            Portfolio
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 76,
                fontWeight: 700,
                letterSpacing: "-0.055em",
                lineHeight: 1,
              }}
            >
              Muhammad Jamal
            </div>
            <div
              style={{
                color: "#5f6d69",
                display: "flex",
                fontSize: 34,
                fontWeight: 500,
                marginTop: 24,
              }}
            >
              Software Engineer · Full-Stack Developer
            </div>
          </div>
          <div
            style={{
              color: "#0c655c",
              display: "flex",
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Web applications · Backend systems · Developer tooling · Applied AI
          </div>
        </div>
      </div>
    ),
    size,
  );
}
