/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#080c2e',
          900: '#0f1650',
          800: '#162060',
          700: '#1e2d80',
          600: '#253494',
          DEFAULT: '#0f1650',
        },
        gold: {
          50:  '#fdf8e8',
          100: '#faefc3',
          200: '#f5da7b',
          300: '#e8c441',
          400: '#d4a017',
          500: '#c9a227',
          600: '#a67c00',
          700: '#7a5c00',
          DEFAULT: '#c9a227',
        },
        cream: '#f5f0e8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
