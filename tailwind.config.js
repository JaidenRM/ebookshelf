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
        primaryFgLightest: '#F2C0A222',
        primaryBgLightest: '#47668622',
      },
      flex: {
        2: '2 2 0%',
        4: '4 4 0%',
        8: '8 8 0%',
      },
      boxShadow: ({ theme }) => ({
        menu: `0 0.25rem 0.5rem 0 ${theme('colors.primaryFg', '#F2C0A2')}`,
      }),
      borderColor: {
        DEFAULT: 'none',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
