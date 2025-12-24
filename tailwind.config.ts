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
        primary: '#FF5722',   // Signal Orange
        secondary: '#263238', // Deep Slate
        accent: '#FFC107',    // Safety Yellow
        'off-white': '#F5F5F7',
        vamoose: {
          primary: "#2563EB",    // Blue - trust, safety
          secondary: "#10B981",  // Green - go, prepared
          accent: "#F59E0B",     // Amber - alert, attention
          dark: "#1E293B",       // Slate dark
          light: "#F8FAFC",      // Slate light
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
