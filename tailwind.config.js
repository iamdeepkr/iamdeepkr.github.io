/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon' : '#4D4DFF',
        'neonFade' : "#6464eb",
        'neonFp' : "#5757E6",
        'neonDark' : "#3636B3"
      }
    },
  },
  plugins: [],
}