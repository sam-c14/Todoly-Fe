/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "dark",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      spacing: {
        "1/35": "18%",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
