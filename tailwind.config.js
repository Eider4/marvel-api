/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "marvel-red": "#FF0000",
        "marvel-blue": "#0033FF",
        "marvel-yellow": "#FFCC00",
        "marvel-black": "#000000",
      },
    },
  },
  plugins: [],
};
