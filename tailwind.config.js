const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'grey-darkest': '#0e1e25',
        'black-20': 'rgba(0, 0, 0, 0.2)',
        teal: colors.teal
      },
      width: {
        'xs': '20rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
