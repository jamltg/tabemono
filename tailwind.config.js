/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'shikamaru':['Shikamaru', 'sans-serif'],
        'raleway':['Raleway','sans-serif']
      }
    },
  },
  plugins: [],
}

