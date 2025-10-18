/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#dff3fb',
          300: '#85c7de',
          600: '#11607a',
          700: '#0f4f66'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
