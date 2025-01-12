/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,tsx,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-seif"]
      },
      gridTemplateColumns: {
        "70/30": "70% 28%",
      },
    },
  },
  plugins: [],
}