/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xl": "1440px",
      },
      colors: {
        primary: "#DC6601",
        secondary: "#1E1E1E",
        tertiary: "#D0D0D0",
        fade: "#F9DDB1",
      },
      fontFamily: {
        manrope: ["'Manrope'", "sans-serif"],
      },
      spacing: { 15: "3.75rem" },
      backgroundImage: () => ({ hero: "url('/images/home/hero-img.png')" }),
    },
  },
  plugins: [],
};
