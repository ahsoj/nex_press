import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './containers/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      backgroundColor: {
        brand: "hsl(93, 82%, 2%)",
        primary: "hsl(93, 81%, 75%)",
        secondary: "hsl(186, 82%, 30%)",
        accent: "hsl(216, 82%, 52%)",
      },
      colors: {
        brand: "hsl(89, 79%, 94%)",
        primary: "hsl(93, 81%, 75%)",
        secondary: "hsl(186, 82%, 30%)",
        accent: "hsl(216, 82%, 52%)",
      },
      borderColor: {
        brand: "hsl(183, 43%, 9%)",
        primary: "hsl(93, 81%, 75%)",
        secondary: "hsl(186, 82%, 30%)",
        // secondary: "rgba(255, 255, 255, 0.1)",
        accent: "hsl(216, 82%, 52%)",
      },
      screens: {
        xs: "420px",
        xmd: "875px",
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config