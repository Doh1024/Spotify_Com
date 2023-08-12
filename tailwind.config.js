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
        'text': '#0e060e',
        'background': '#f4e6f4',
        'primary': '#73c36f',
        'secondary': '#d7eeed',
        'accent': '#4fb04a',
        'text-dm': '#f4e6f4',
        'background-dm': '#0e060e',
        'primary-dm': '#73c36f',
        'secondary-dm': '#0d201f',
        'accent-dm': '#b6dfb4',
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
