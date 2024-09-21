/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        scroll: 'scroll 15s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(calc(100% + (250px * 2)))' },
          '100%': { transform: 'translateX(calc(-250px * 8))' },
        },
      },
    },
  },
  plugins: [],
}