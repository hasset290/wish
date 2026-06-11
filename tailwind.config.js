/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#fff1f7",
          100: "#ffe4ef",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d"
        }
      }
    }
  },
  plugins: []
};
