/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": " #086acd",
        "background-blue": "#92d1ec",
      },
    },
  },
  plugins: [],
};
