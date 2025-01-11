const plugin = require("tailwindcss/plugin");
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom Ur Json Color, etc
      colors: {
        body: "#F1F2F7",
        primary: {
          50: "#e3fdfd",
          100: "#d5f5f5",
          150: "#b0e9e8",
          200: "#87dcdb",
          30: "#66d1d1",
          400: "#50cbca",
          500: "#41c7c6",
          600: "#2eb0af",
          700: "#1d9d9c",
          800: "#008887",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addVariant, e }) => {
      addVariant("sidebar-expanded", ({ modifySelectors, separator }) => {
        modifySelectors(
          ({ className }) =>
            `.sidebar-expanded .${e(
              `sidebar-expanded${separator}${className}`
            )}`
        );
      });
    }),
  ],
};
