const resolve = require('path').resolve
// const plugin = require('tailwindcss/plugin')
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [resolve(__dirname, 'index.html'), resolve(__dirname, 'src/**/*.{vue,ts}')],
  // theme: {
  //   extend: {
  //     // here's how to extend fonts if needed
  //     fontFamily: {
  //       sans: [...defaultTheme.fontFamily.sans],
  //     },
  //   },
  // },
  plugins: [
    require("daisyui"),
    require("tailwind-heropatterns")({ // https://github.com/AndreaMinato/tailwind-heropatterns
      variants: [],
      patterns: [],
      colors: {
        default: "#191d24",
      },
    
      // The foreground opacity
      opacity: {
        default: "1.0", "90": "0.90", "80": "0.80", "75": "0.75", "70": "0.70", "60": "0.60", "50": "0.50", "40": "0.40", "30": "0.30", "25": "0.25", "20": "0.20", "10": "0.10", "5": "0.05"
      }
    }),],
}
