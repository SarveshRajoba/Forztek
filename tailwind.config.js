/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        'forztek-blue': '#201E43', // Adding your custom color
      },
      
    },
  },
  plugins: [],
};