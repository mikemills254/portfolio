/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Quicksand', 'sans-serif'],
        serif: ['Poppins', 'Quicksand', 'serif'],
        mono: ['Poppins', 'Quicksand', 'monospace'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInSlow: 'fadeIn 1.2s ease-in-out forwards',
        fadeInMedium: 'fadeIn 1.8s ease-in-out forwards',
        fadeInFast: 'fadeIn 2.4s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}