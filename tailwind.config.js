/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#14110F",
      orange: "#E5A061",
      white: "#F9F8F7",
      "beige-100": "#6DCD3",
      "beige-200": "#B6A79D",
    },
    fontFamily: {
      primary: ["ModernNo20", "serif"],
      secondary: ["CascadiaMono", "mono"],
    },
  },
  plugins: [],
};
