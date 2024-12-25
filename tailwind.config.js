/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        slowBounce: "bounce 3s infinite", // Slower bounce animation
      },
    },
  },
  plugins: [],
}