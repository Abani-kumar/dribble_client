/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'signupbg': "url('../src/assets/signupimage.png')",
      }
    },
  },
  plugins: [],
}