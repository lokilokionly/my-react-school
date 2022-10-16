/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  plugins: [require('tw-elements/dist/plugin')],
  theme: {
    extend: {
      colors: {
        HeaderMainColor: '#243976',
        white: '#FFFFFF',
        liteWhite: '#EEF1FD',
        darkBlue: '#243976',
  
        ButtonColorOne: '#864FF1',
        ButtonColorTwo: '#49B3F7',
        ShadowButton: '#9aabf8',
      },
    },
    
  },
  plugins: [],
}