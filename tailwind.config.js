const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        offblack: "#494949",
        accent: {
          darkest: "#1a1a1a",
          dark: "#B18597",
          DEFAULT: "#7a003c",
          hover: "#440122",
          light: "#fdbf57",
          light_hover: "#ffce7c",
          lightest: "#e7e9ea",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
