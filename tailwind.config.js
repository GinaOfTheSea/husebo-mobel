module.exports = {
  content: [
    // 1. Path to your main HTML file(s) in the root
    "./index.html", 
    // 2. Path to any HTML/JS files in your source folder
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};