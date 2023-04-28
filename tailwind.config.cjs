/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#E4E4E4",
        placeholder: "#898989",
        text: "#1E1E1E",
      },
    },
  },
  plugins: [],
};

module.exports = config;
