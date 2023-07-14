/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,vue}",
  ],
  theme: {
    extend: {
      colors: {
        light: "var(--light)",
        blue: "var(--blue)",
        purple: "var(--purple)"
      },
      spacing: {
        "440": "440px"
      },
      borderWidth: {
        "3": "3px"
      }
    },
  },
  plugins: [],
}

