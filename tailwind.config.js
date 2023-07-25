/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow: {
      DEFAULT: "0px 4px 12px 0px #0B0F670A, 0px 2px 4px 0px #0B0F670F",
      lg: "0px 4px 12px 0px #0B0F670A, 0px 2px 4px 0px #0B0F670F, 0px 4px 24px 0px #0B0F6733",
    },
    extend: {
      colors: {
        "baby-blue": "#F5F8FA",
        blue: "#5045CD",
        sky: "#A8B6FF",
      },
    },
  },
};
