import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#102A43",
          navyDark: "#0B1D2F",
          blue: "#1769AA",
          blueHover: "#0F578F",
          orange: "#F47B20",
          orangeHover: "#D96512",
          offwhite: "#F4F7FA",
          text: "#263746",
          muted: "#64748B",
          border: "#E2E8F0",
          lightBlue: "#EAF3FA",
          lightOrange: "#FFF3E8",
          whatsapp: "#25D366",
          whatsappHover: "#1FB85A",
        },
      },
      fontFamily: {
        heading: ["var(--font-manrope)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      boxShadow: {
        card: "0px 4px 20px rgba(16, 42, 67, 0.06)",
        cardHover: "0px 10px 30px rgba(16, 42, 67, 0.12)",
        whatsapp: "0px 4px 18px rgba(37, 211, 102, 0.35)",
        whatsappHover: "0px 8px 24px rgba(37, 211, 102, 0.5)",
      },
      borderRadius: {
        card: "12px",
        btn: "8px",
      },
      keyframes: {
        pulseGlow: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.5)" },
          "50%": { transform: "scale(1.06)", boxShadow: "0 0 0 14px rgba(37, 211, 102, 0)" },
        },
      },
      animation: {
        pulseGlow: "pulseGlow 3s infinite ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;
