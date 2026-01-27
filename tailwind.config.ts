module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Arial", "sans-serif"],
        arabic: ["var(--font-arabic)", "Arial", "sans-serif"],
        kurdish: ["var(--font-kurdish)", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
