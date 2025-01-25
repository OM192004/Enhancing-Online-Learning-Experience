/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#A435F0',
        'primary-hover': '#8710E8',
        'hover-color': '#6B7280', 
        'select-color': '#4B5563',
      },
    },
  },
  plugins: [],
}
