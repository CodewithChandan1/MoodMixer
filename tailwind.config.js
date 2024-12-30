/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'neumorph': '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff',
        'neumorph-hover': '10px 10px 30px #d1d1d1, -10px -10px 30px #ffffff',
        'neumorph-inset': 'inset 6px 6px 12px #d1d1d1, inset -6px -6px 12px #ffffff',
        'neumorph-colored': '6px 6px 12px rgba(79, 70, 229, 0.4)',
        'neumorph-colored-hover': '8px 8px 16px rgba(79, 70, 229, 0.4)',
        'neumorph-inset-colored': 'inset 4px 4px 8px rgba(63, 56, 183, 0.4)',
      },
    },
  },
  plugins: [],
};