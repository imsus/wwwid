module.exports = {
  plugins: [
    require('postcss-nested'),
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer')
  ]
}
