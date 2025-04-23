import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1986C3",
        secondary: "#272D63",
        tertiary: "#3541AB",
        accent: "#7BDDE2",
        white: "#FFFFFF",
        black: "#000000",
        muted: "#737373",
        subtle: "#626F81",
        gray: {
          50: "#F6F6F6",
          100: "#E7E7E7",
          200: "#D1D1D1",
          300: "#B0B0B0",
          400: "#888888",
          500: "#737373",
          600: "#525252",
          700: "#4F4F4F",
          800: "#454545",
          900: "#3D3D3D",
        },
        green: {
          50: "#E4F4ED",
          100: "#C9E9DC",
          200: "#ADDECA",
          300: "#92D4B8",
          400: "#77C9A7",
          500: "#5CBE95",
          600: "#46AE83",
          700: "#42A57C",
          800: "#358463",
          900: "#1B4332",
        },
        blue: {
          50: "#EBF0FF",
          100: "#D1DEFF",
          200: "#A3BDFF",
          300: "#759CFF",
          400: "#477BFF",
          500: "#1B5BFF",
          600: "#0040E0",
          700: "#0030A8",
          800: "#002070",
          900: "#00091F",
        },
        orange: {
          50: "#FFF4EB",
          100: "#FFEAD6",
          200: "#FFD5AD",
          300: "#FFC085",
          400: "#FFAB5C",
          500: "#FF9736",
          600: "#F57600",
          700: "#B85900",
          800: "#7A3B00",
          900: "#1F0F00",
        },
        red: {
          50: "#FAEBEA",
          100: "#F6D6D5",
          200: "#ECAEAC",
          300: "#E38582",
          400: "#D95D59",
          500: "#D0342F",
          600: "#A62A26",
          700: "#7D1F1C",
          800: "#531513",
          900: "#150505",
        },
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        scroll2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        scroll: "scroll 15s linear infinite",
        scroll2: "scroll2 15s linear infinite",
      },
      fontFamily: {
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
        mono: [...defaultTheme.fontFamily.mono],
        inter: ["var(--font-inter)"],
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "1rem",
            letterSpacing: "0.02em",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.015em",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.4rem",
            letterSpacing: "0",
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.45rem",
            letterSpacing: "-0.005em",
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.65rem",
            letterSpacing: "-0.01em",
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "1.85rem",
            letterSpacing: "-0.015em",
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.0rem",
            letterSpacing: "-0.02em",
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "-0.025em",
          },
        ],
        "5xl": [
          "2.75rem",
          {
            lineHeight: "2.5rem",
            letterSpacing: "-0.03em",
          },
        ],
        "6xl": [
          "3.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "-0.035em",
          },
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
