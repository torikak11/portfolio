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
      "beige-100": "#E6DCD3",
      "beige-100-50": "rgba(230, 220, 211, 0.5)",
      "beige-200": "#B6A79D",
    },
    fontFamily: {
      primary: ["ModernNo20", "serif"],
      secondary: ["CascadiaMono", "mono"],
    },
  },
  plugins: [],
};
