/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-primary)'],
        body: ['var(--font-primary)'],
        heading: ['var(--font-primary)'],
        mono: ['var(--font-primary)'],
      },
    },
  },
  plugins: [],
};
