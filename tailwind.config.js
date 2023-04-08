/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero2': "url('/src/component/images/LargeIcon.png')",
      },
    },
  },
  plugins: [],
}
