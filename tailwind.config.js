/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist"', '"Geist Sans"', 'Arial', 'sans-serif'],
        body: ['"Geist"', '"Geist Sans"', 'Arial', 'sans-serif'],
        heading: ['"Geist"', '"Geist Sans"', 'Arial', 'sans-serif'],
        mono: ['"Geist"', '"Geist Sans"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
