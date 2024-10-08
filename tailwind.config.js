/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'slg': '992px',
      },
    },
    fontFamily: {
      'popins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}