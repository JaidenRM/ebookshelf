/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      zIndex: {
        nav: 10,
      },
      height: {
        screenMinusNav: 'calc(100vh - 4rem)',
      },
      colors: {
        primaryFg: '#F2C0A2',
        primaryBg: '#476686',
      },
    },
  },
  plugins: [],
}
