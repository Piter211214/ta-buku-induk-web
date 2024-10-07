/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "../ta-buku-induk/index.html",
    "../ta-buku-induk/src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'tab': '640px',
      'laptop': '1024',
      'dekstop': '1280',
      '???': '1560',
    },
    extend: {
      fontFamily: {
        sans: ["PT Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
