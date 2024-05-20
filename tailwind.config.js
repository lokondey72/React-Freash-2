/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'commonbg': '#FAE3B6',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}