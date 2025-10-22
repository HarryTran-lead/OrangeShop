export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#F97316", // orange-500
          dark: "#EA580C", // orange-600
          light: "#FFF7ED", // orange-50
        },
      },

      boxShadow: { soft: "0 8px 30px rgba(0,0,0,0.06)" },
    },
  },
  plugins: [],
};
