import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111827",
        muted: "#5B6475",
        line: "#E7EAF0",
        blue: "#4F7DF9",
        purple: "#7C3AED",
        cyan: "#06B6D4"
      },
      boxShadow: {
        soft: "0 18px 70px rgba(36, 56, 96, 0.10)",
        glow: "0 20px 80px rgba(79, 125, 249, 0.20)"
      },
      borderRadius: {
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};

export default config;
