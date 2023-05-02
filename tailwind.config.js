/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#bfa7ef",

          "secondary": "#d184e0",

          "accent": "#52f92c",

          "neutral": "#17161D",

          "base-100": "#E7E4E7",

          "info": "#ABDCED",

          "success": "#1E8A68",

          "warning": "#EFB60B",

          "error": "#E25052",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

