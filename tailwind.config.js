/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBG: "#FBF8FF",
        headline: "#5750A9",
        lightPurple: "#8B86CC",
        lightLavender: "#C4BFEA",
        text: "#474551",
        tagHover: "#EADFE7 ",
        smallTag: "#854E5F",
        cardBg: "#ECECFF",
        cardHover: "#FCEFF7",
        darkBg: "#292F4B",
        darkHover: "#2D3454",
        lightBg: "#8E9EFE",
        highlight: "#47D7D1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),
  require("tailwindcss-animate"),],
}