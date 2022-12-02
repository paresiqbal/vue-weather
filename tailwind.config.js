/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "weather-primary": "#00b4d8",
        "weather-secondary": "#0077b6",
        "weather-light": "#caf0f8",
        "background-grey": "#e9ecef",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      padding: "2rem",
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
    },
  },
  plugins: [],
};
