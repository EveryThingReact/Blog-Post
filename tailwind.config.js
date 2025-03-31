/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js}"],
  theme: {
    extend: {
      color:{
        primary: "#1565D8",
        dark: {
          light:"#5A7184",
         hard:"#0D2436",
         soft:"#183856",
        },
      },
      /*fontFamily:{
        opensans:["'Open Sans'", "sans-serif"],
        roboto:["'Roboto'","sans-serif"],
      }*/
    },
  },
  plugins: [],
}

