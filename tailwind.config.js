/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color1: '#9e7f66',
        color2: '#939BF4',
        color3: '#19202D',
        color4: '#FFFFFF',
        color5: '#F4F6F8',
        color6: '#9DAEC2',
        color7: '#6E8098',
        color8: '#121721',
        color9: '#5964E0',
        color10: '#19202D',
      },
      fontFamily: {
        sans: ["'Kumbh Sans'", 'sans-serif'],
      },
    },
  },
  plugins: [],
};
