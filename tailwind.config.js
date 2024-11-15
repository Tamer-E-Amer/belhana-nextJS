/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: { center: true },
      // custom radial gradient
      backgroundImage: {
        "radial-gradient": "radial-gradient(circle, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-orange": "#FB9300",
        "dark-gray": "#161515",
        "dark-blue": "#0D1047",
        "mid-contact-blue": "#111926",
        "left-contact-blue": "#1C294B",
        "contact-inputs-bg": "#141823",
        "gray-title": "#949494",
        "gray-text": "#707070",
        "gray-line": "#AFAFAF",
        "admin-bg": "#EEEEEE",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
