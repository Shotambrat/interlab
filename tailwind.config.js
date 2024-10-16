/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    screens: {
      'sm': '360px',
      'md': '450px',
      'mdx': '650px',
      'mdl': '750px',
      'slg': '900px',
      'lg': '1100px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      colors: {
        modalBg: 'rgba(0, 0, 0, 0.5)',
        serviceBg: '#FFEFEF'
      },
      boxShadow: {
        '3xl': '0 20px 100px -10px rgba(0, 0, 0, 0.1)',
        'custom': '-1px 2px 16px 0px rgba(189, 189, 189, 1)', // Custom shadow
        'custom-doctor': '-1px 2px 5px 5px rgba(189, 189, 189, 0.2)', // Custom shadow
      },
      height: {
        'screen-90': 'calc(100vh - 90px)', // Custom h-screen-90px
        'screen-70': 'calc(100vh - 70px)', // Custom h-screen-70px
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@tailwindcss/line-clamp'),
  ],
}
