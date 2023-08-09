/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      'montserrat': ['Montserrat', 'sans-serif']
    },
    extend: {
      colors:{
      },
      brightness:{
        25: '.25'
      },
      backgroundImage: {
      },
    },
  },
  plugins: [
  ],
}
