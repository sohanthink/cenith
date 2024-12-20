/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    fontSize: {
      paragraph: "20px",
      h3: "32px",
    },
    extend: {
      fontFamily: {
        sspro: ["var(--font-sspro)", ...fontFamily.sans], // Add your local font here
      },
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        black: "#272730",
        primary: "#454CED",
        textColor: "#787a80",
      },
    },
  },
  plugins: [],
};
