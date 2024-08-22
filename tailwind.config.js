/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#F0A202",
        "primary-200": "#F18805",
        "primary-300": "#D95D39",
        "gray-100": "#0E1428",
        "gray-200": "#7B9E89",
        "gray-300": "#99C4AA",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1280px",
      lg: "1440px",
    },
  },
  plugins: [],
};
