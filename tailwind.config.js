/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,tsx}"],
  theme: {
    extend: {
      colors: {
        skin: {
          'fill-background': "#27272A",
        }
      },
      textColor: {
        skin: {
          base: "white",
        },
      },
    },
  },
  plugins: [],
};