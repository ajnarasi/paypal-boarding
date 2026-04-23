import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      (process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3500"),
  ),
  title: "Merchant Confidence — Resolving PayPal's Trust-System Paradox",
  description:
    "PayPal's Growth and Risk systems optimize against each other. A prototype that resolves the paradox using the consumer graph Stripe doesn't have.",
  openGraph: {
    title: "Merchant Confidence — PayPal's Trust-System Paradox",
    description:
      "A 3-minute clickable walkthrough. Consumer-graph onboarding, merchant-elected progressive release, and the compliance guardrails they require.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Merchant Confidence — PayPal's Trust-System Paradox",
    description:
      "Consumer-graph onboarding + merchant-elected progressive release. 3-minute scroll.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body className="relative">{children}</body>
    </html>
  );
}
