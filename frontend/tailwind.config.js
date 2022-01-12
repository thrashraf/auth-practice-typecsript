// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      backgroundColor :{
        cyan: '#00ADB5'
      }
    },
  },
  variants: {},
  plugins: [],
}