import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Merchant Confidence — resolving PayPal's trust-system paradox using the consumer graph Stripe doesn't have.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          backgroundColor: "#141821",
          color: "#F3F4F6",
          fontFamily: "serif",
        }}
      >
        {/* Ambient cyan glow, top-left */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: -200,
            left: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "rgba(56,201,245,0.22)",
            filter: "blur(160px)",
          }}
        />
        {/* Subtle lime glow, top-right */}
        <div
          style={{
            position: "absolute",
            display: "flex",
            top: -150,
            right: -150,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(200,240,80,0.08)",
            filter: "blur(140px)",
          }}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 16,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "#A8ADB7",
            fontFamily: "system-ui",
          }}
        >
          <div>Merchant Confidence · prototype</div>
          <div>3-min walkthrough</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 20,
              fontFamily: "system-ui",
              fontWeight: 600,
              color: "#38C9F5",
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            A prototype for PayPal — Director, Merchant Onboarding &amp; Growth
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 82,
              lineHeight: 1.03,
              fontWeight: 400,
              letterSpacing: "-0.02em",
              maxWidth: 1040,
              color: "#F3F4F6",
            }}
          >
            <span>
              PayPal&apos;s Growth and Risk systems{" "}
              <span style={{ color: "#38C9F5" }}>
                optimize against each other.
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              lineHeight: 1.4,
              color: "#A8ADB7",
              maxWidth: 900,
              fontFamily: "system-ui",
            }}
          >
            A clickable walkthrough that resolves the paradox using the consumer
            graph Stripe doesn&apos;t have.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            color: "#A8ADB7",
            fontFamily: "system-ui",
            borderTop: "1px solid #2F3441",
            paddingTop: 20,
          }}
        >
          <div style={{ display: "flex", gap: 10 }}>
            <span style={{ color: "#F3F4F6", fontWeight: 600 }}>
              Ajay Narasimmamoorthy
            </span>
            <span>· Sr Director PM, Fiserv Global Commerce Orchestration</span>
          </div>
          <div style={{ display: "flex", gap: 14, color: "#A8ADB7" }}>
            <span>−40% onboarding</span>
            <span>·</span>
            <span>+10% YoY BNPL</span>
            <span>·</span>
            <span>+20% Click to Pay</span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
