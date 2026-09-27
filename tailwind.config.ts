import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#14181f",
          900: "#191d25",
          800: "#232833",
          700: "#333a49",
          600: "#4a5468",
          500: "#69748a",
          400: "#8e97a8",
          300: "#b4bac6",
        },
        sand: {
          50: "#faf8f4",
          100: "#f4f0e8",
          200: "#ebe4d6",
          300: "#ded2ba",
        },
        rust: {
          600: "#b3562f",
          700: "#94472a",
          500: "#c76a3f",
          100: "#f3e1d3",
        },
        moss: {
          900: "#2c3524",
          800: "#374330",
          700: "#4b5a3f",
          600: "#5f7050",
          500: "#79895f",
          200: "#dbe1cd",
          100: "#eaeee0",
        },
        ember: {
          900: "#4a2f18",
          700: "#a8662a",
          600: "#c17f3e",
          500: "#d69a5f",
          100: "#f3e4d1",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-poppins)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "var(--font-fraunces)",
          "ui-serif",
          "Georgia",
          "serif",
        ],
      },
      maxWidth: {
        content: "1280px",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1" },
          "100%": { strokeDashoffset: "0" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both",
        fadeIn: "fadeIn 0.6s ease-out both",
        drawLine: "drawLine 1.8s cubic-bezier(0.65, 0, 0.35, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
