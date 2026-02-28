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
      fontFamily: {
        // This sets Inter as the primary sans-serif font
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};