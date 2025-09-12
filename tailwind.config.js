/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1A4B84",
          light: "#2B6CB0",
          muted: "#E6EEF6",
          accent: "#F59E0B"
        }
      }
    },
  },
  plugins: [],
};
