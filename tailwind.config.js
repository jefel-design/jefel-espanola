/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist"', '"Giest"', 'sans-serif'],
        body: ['"Geist"', '"Giest"', 'sans-serif'],
        heading: ['"Geist Mono"', '"Giest Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        mono: ['"Geist Mono"', '"Giest Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
  plugins: [],
};
