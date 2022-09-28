/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./assets/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Proxima Nova", ...defaultTheme.fontFamily.sans],
        lora: ["Lora"],
        Crimson: ["Crimson Pro"],
        Montserrat: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
