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
      // => @media (min-width: 360px) { ... }

      'md': '400px',
      // => @media (min-width: 400px) { ... }

      'mdx': '650px',
      // => @media (min-width: 650px) { ... }

      'slg': '900px',
      // => @media (min-width: 900px) { ...
      
      'lg': '1100px',
      // => @media (min-width: 1100px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}