/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb", // blue-600
        accent: "#fbbf24", // amber-400
        dark: "#0f172a", // slate-900
      },
    },
  },
  plugins: [],
};
