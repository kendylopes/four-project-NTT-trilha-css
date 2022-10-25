/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Relaway, sans-serif'
      },
      colors: {
        'black':'#000000',
        'black-2':'#252525',
        'white':'#ffffff',
        'yellow':'#e5e044',
        'gray':'#252525',
        'cyan-1':'#33A8DB',
        'cyan-2':'#1472B7',
        'cyan-3':'#31A8DD',
      },
      fontSize: {
        'xs':16,
        'sm':20,
        'md':32,
        'lg':40,

      },
    },
  },
  plugins: [],
}
