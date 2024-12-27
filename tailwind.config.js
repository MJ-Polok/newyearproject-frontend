import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        year: "Alata",
        texts: "Jomhuria",
        footer: "Afacad",
        connect: "Inria Sans"
      }
    },
  },
  plugins: [daisyui],
};