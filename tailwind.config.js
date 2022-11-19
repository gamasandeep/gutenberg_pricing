module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Fira Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
