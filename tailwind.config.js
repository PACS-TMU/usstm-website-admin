/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background": "#F5FAFA",
        "foreground": "#1E1E1E",
        "highlight": "#3E8989",
        "highlight-blue": "#E1E8F5",
        "highlight-dark": "#002956"
      },
      fontFamily: {
        "sans": ["Abril"]
      },
    },
  },
  plugins: [],
};
