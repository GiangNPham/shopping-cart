/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#f7e9e9",
        background: "#000000",
        primary: "#ec8989",
        secondary: "#950c0c",
        accent: "#fc1515",
      },
    },
  },
  plugins: [],
};
