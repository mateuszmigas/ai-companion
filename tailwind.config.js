/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        skin: {
          'fill-background': "#202124",
          'fill-code': "#17191E",
          'secondary': "#3c4043",
          'focus': "#70A3F3",
          'inactive': "#BFC1C5",
          "text": "#BEC1C5",
        }
      },
      textColor: {
        skin: {
          base: "#BEC1C5",
        },
      },
    },
  },
  plugins: [],
};