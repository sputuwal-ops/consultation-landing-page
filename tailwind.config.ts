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
        ink: "#0F172A",
        muted: "#526173",
        line: "#E2E8F0",
        surface: "#F8FAFC",
        primary: "#2563EB",
        secondary: "#10B981",
        amber: "#F59E0B",
        blue: "#2563EB",
        purple: "#7C3AED",
        cyan: "#06B6D4"
      },
      boxShadow: {
        soft: "0 18px 70px rgba(15, 23, 42, 0.08)",
        glow: "0 20px 80px rgba(37, 99, 235, 0.20)",
        form: "0 24px 90px rgba(15, 23, 42, 0.10)"
      },
      borderRadius: {
        card: "1rem",
        "2xl": "1rem"
      }
    }
  },
  plugins: []
};

export default config;
