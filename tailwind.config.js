/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      zIndex: {
        100: "100",
      },
    },
  },
  plugins: [],
};
