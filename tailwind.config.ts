import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vamoose: {
          primary: "#2563EB",    // Blue - trust, safety
          secondary: "#10B981",  // Green - go, prepared
          accent: "#F59E0B",     // Amber - alert, attention
          dark: "#1E293B",       // Slate dark
          light: "#F8FAFC",      // Slate light
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
