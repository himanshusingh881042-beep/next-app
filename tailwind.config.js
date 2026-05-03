/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#14213D",
        muted: "#667085",
        line: "#D7DEE8",
        page: "#F4F7FB",
        canaraBlue: "#003D79",
        canaraNavy: "#001E42",
        hsbcRed: "#DB0011",
        canaraGold: "#F7B500",
        softGold: "#FFF4D6",
        softBlue: "#EAF2FB",
        leaf: "#1F8A5B",
        amber: "#B96B00",
        ember: "#B42318"
      },
      boxShadow: {
        soft: "0 12px 30px rgba(20, 33, 61, 0.10)"
      }
    }
  },
  plugins: []
};
