/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '80': '80%', // ajout taille police personnalisée

      },
      screens: {
        "md":"848px"
      }
    },
  },
  plugins: [],
}
