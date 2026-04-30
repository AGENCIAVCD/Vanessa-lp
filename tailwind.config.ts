import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./hooks/**/*.{ts,tsx}",
    "./config/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#F5F1EC",
        forest: "#1F3D36",
        whatsapp: "#25D366",
        rosegold: "#C8A27A",
        ink: "#2B2B2B"
      },
      fontFamily: {
        display: ["var(--font-playfair)"],
        body: ["var(--font-montserrat)"]
      },
      boxShadow: {
        soft: "0 24px 70px rgba(31, 61, 54, 0.12)",
        luxe: "0 18px 45px rgba(200, 162, 122, 0.18)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(200, 162, 122, 0.32), transparent 40%), radial-gradient(circle at top right, rgba(31, 61, 54, 0.16), transparent 35%), linear-gradient(135deg, rgba(255,255,255,0.72), rgba(245,241,236,0.94))"
      },
      screens: {
        "short-hero": { raw: "(min-width: 1024px) and (max-height: 980px)" }
      }
    }
  },
  plugins: []
};

export default config;
