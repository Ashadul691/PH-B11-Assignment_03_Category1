 /** @type {import('tailwindcss').Config} */
 export default {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  module.exports = {
    theme: {
      extend: {
        keyframes: {
          moveLeft: { '0%': { right: '-10%' }, '100%': { right: '100%', transform: 'translateX(-100%)' } }
        },
        animation: {
          'move-left': 'moveLeft 5s linear infinite'
        }
      }
    }
  }
  