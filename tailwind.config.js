/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // "bg-main": "url(../src/assets/redberry-bg-main.png)",
      },
      width: {
        // 798: "798px",
      },
      height: {
        // 103: "103px",

      },
      boxShadow: {
        // shadow: "0px 4px 28px rgba(0, 0, 0, 0.25)",
      },
      colors: {
        // blue: "#6B40E3",

      },
    },
    fontFamily: {
      // helvetica: ["Helvetica Neue, sans-serif"],
    },
  },
  plugins: [],
};
