/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      scale: {
        102: '1.02',
      },
      aspectRatio: {
        '1/3': '1 / 3',
      },
    },
  },
  plugins: [],
}
