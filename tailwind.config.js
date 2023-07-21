const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        main: "#080B53",
        secondary: "#EA2088",
      },
    },
    fontFamily: {
      sans: ["var(--font-avenir)"],
    },
    animation: {
      ["infinite-slider"]: "infiniteSlider 120s linear infinite",
    },
    keyframes: {
      infiniteSlider: {
        "0%": { transform: "translateX(0)" },
        "100%": { transform: "translateX(calc(-250px * 5))" },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
