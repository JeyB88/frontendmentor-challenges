const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-pink": "#ff52bf",
        "primary-pink-light": "#ff8fd8",
        "primary-red": "#ff4242",
        "neutral-dark-cyan": "#00252e",
        "neutral-pale-blue": "#f5faff",
      },
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],
        poppins: ["Poppins"]
      },
    },
  },
  plugins: [],
};
