/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customCardColor: '#E8E2DB',
        navBarBgColor: '#685B47',
        FeturedCardColor: '#FDF8F2',
      },
    },
  },
  plugins: [],
}