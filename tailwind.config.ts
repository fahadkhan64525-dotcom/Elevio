import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0D0D0D",
        "background-secondary": "#151515",
        foreground: "#F5F1EA",
        cream: "#F5EFE6",
        beige: "#D8CBB8",
        gold: "#C6A56A",
        "gold-light": "#D8B979",
        dark: "#111111",
        border: "rgba(245, 239, 230, 0.15)",
        muted: "rgba(245, 239, 230, 0.65)",
      },
      fontFamily: {
        serif: ["var(--font-dm-serif)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        "hero": "clamp(4rem, 10vw, 11rem)",
        "section": "clamp(3rem, 7vw, 7rem)",
        "card": "clamp(1.5rem, 2vw, 2.5rem)",
      },
      transitionTimingFunction: {
        elevio: "cubic-bezier(.16,.84,.32,1)",
      },
    },
  },
  plugins: [],
};
export default config;
