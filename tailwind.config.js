/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
        fontFamily: {
            'inter': ['Inter', 'sans-serif']
        },
        colors: {
            theme_gray: '#D9D9D9',
            theme_red: '#FF0000'
        }
    },
  },
  plugins: [],
}

