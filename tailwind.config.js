/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Tajawal', 'sans-serif'],
      },
      colors: {
        brand: {
          red: '#E31C25',
          yellow: '#FFC72C',
          black: '#121212',
          offwhite: '#F8F5F2',
        },
        primary: {
          50: '#fef2f2',
          100: '#fee2e2',
          500: '#E31C25',
          600: '#c3161e',
          700: '#b91c1c',
          900: '#7f1d1d',
        },
      }
    },
  },
  plugins: [],
}
