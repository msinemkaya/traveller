/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "abode": "JK Abode Light Demo",
        "overpass": "'Overpass', sans-serif",
        "monserrat": "'Montserrat', sans-serif"
      },
      colors: {
        indigo: {
          750: "#4C52BC"
        },
        "primary": "#F38181",
        "secondary": "#FCE38A",
        "light": "#EAFFD0",
        "dark": "#95E1D3",
        "warmgray": "hsl(0, 0%, 90%)"
      }
    },
  },
  plugins: [],
}

