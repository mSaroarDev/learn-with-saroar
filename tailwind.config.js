/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        brandColor: "#1c784e",
      },
      fontFamily: {
        LiAdorNoirrit_Regular: ["LiAdorNoirrit", "sans-serif"],
        LiAdorNoirrit_SemiBold: ["LiAdorNoirritSemibold", "sans-serif"],
        LiAdorNoirrit_Bold: ["LiAdorNoirritBold", "sans-serif"],
        HindSiliguri_Regular: ["HindSiliguri", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
