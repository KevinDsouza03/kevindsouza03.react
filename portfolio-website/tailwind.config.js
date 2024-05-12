/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}