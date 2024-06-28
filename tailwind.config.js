/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      'color1': '#343a40',
      'color2' : '#ced4da', // Replace #ff0000 with your desired hexadecimal color code
    },},
  },
  plugins: [],
}
