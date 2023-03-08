module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici couleurs exportées de Figma
      },
      "fontFamily": {
        'Lato': ['Lato, sans-serif'],
        'Roboto': ['Roboto, sans-serif']
      },
      "fontSize": {
        '10xl': ['12.5rem'], 
      },
    },
  plugins: [],
}}
