import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Stitch Tech-Forward palette (v2.0) — obsidian surfaces with electric accents.
        paper: "oklch(16% 0.015 250)",         // deep obsidian, cool undertone
        paperAlt: "oklch(21% 0.018 250)",      // elevated card surface
        ink: "oklch(96% 0.003 250)",           // near-white (primary foreground)
        inkMuted: "oklch(72% 0.008 250)",      // secondary text
        inkFaint: "oklch(55% 0.008 250)",      // tertiary / caption
        rule: "oklch(30% 0.015 250)",          // hairline dividers
        // Primary accent — electric cyan-blue, the tech-forward signature
        accent: "oklch(74% 0.18 215)",
        // Luminous highlight — links, metric callouts
        accentBright: "oklch(85% 0.15 200)",
        // Dark accent tint — chip backgrounds that read on dark paper
        accentSoft: "oklch(28% 0.08 220)",
        // Neon lime emphasis — replaces gold; used sparingly (reply hooks, metric callouts)
        gold: "oklch(90% 0.19 125)",
        goldSoft: "oklch(28% 0.08 125)",
        alert: "oklch(72% 0.19 30)",
        alertSoft: "oklch(28% 0.08 30)",
        growth: "oklch(78% 0.17 155)",
        growthSoft: "oklch(28% 0.06 155)",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        hero: "clamp(2.5rem, 1.2rem + 5vw, 5.5rem)",
        eyebrow: "0.72rem",
      },
      letterSpacing: {
        eyebrow: "0.14em",
      },
      transitionTimingFunction: {
        expo: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      maxWidth: {
        prose: "72ch",
        frame: "1160px",
      },
    },
  },
  plugins: [],
};

export default config;
