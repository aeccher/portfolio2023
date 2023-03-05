module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        'Lato': ['Lato, sans-serif'],
        'Roboto': ['Roboto, sans-serif']
      },
    },

  },
  plugins: [],
}
