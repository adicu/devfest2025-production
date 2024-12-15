// tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Adjust according to your project structure
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}', // Added to ensure Tailwind scans the app directory
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          400: '#A0522D', // Sienna
          500: '#8B4513', // SaddleBrown
        },
        background: '#F5F5F5', // Define a background color if needed
        black: '#1E1A20',
        white: '#ffffff',
      },
      borderRadius: {
        'lg': '12px', // Customize if needed
      },
      boxShadow: {
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', // Tailwind's default large shadow
      },
      fontFamily: {
        sans: ['var(--font-pixelify-sans)', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
