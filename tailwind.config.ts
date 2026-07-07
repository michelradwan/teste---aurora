import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F6F5F3",
        paperAlt: "#EFEDE9",
        ink: "#20242C",
        inkSoft: "#5C6270",
        sky: "#5B7FA6",
        skySoft: "#8FA8C4",
        sage: "#8FA888",
        sageSoft: "#B7C8B3",
        blush: "#E4A9A0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "3xl": "1.75rem",
        "4xl": "2.25rem",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(32, 36, 44, 0.06)",
        card: "0 4px 20px rgba(32, 36, 44, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
