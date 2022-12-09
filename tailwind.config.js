/** @type { import('tailwindcss').Config } */
module.exports = {
  content: [
    "./pages/*.{tsx,js}",
    "./pages/**/*.{tsx,js}",
    "./components/*.{tsx,js}",
    "./components/**/*.{tsx,js}",
  ],
  theme: {
    extend: {
      colors: {
        binance: {
          yellow: "#FCD503",
          green: "#5DC887",
          teal: "#D6F4E7",
        },
      },
    },
  },
  plugins: [],
}
