const OfflinePlugin = require('offline-plugin')
const PurgeCSS = require('purgecss-webpack-plugin')
const glob = require('glob-all')
const path = require('path')

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:\/]+/g) || [];
  }
}

module.exports = options => ({
  entry: './src/main.js',
  presets: [
    // require('poi-preset-buble')(),
    require('poi-preset-babel-minify')()
  ],
  sourceMap: false,
  extendWebpack(config) {
    if (options.mode === 'production') {
      config.plugin('offline').use(OfflinePlugin)
      config.plugin('purgecss').use(PurgeCSS, [{
        paths: glob.sync([
          path.join(__dirname, 'index.ejs'),
          path.join(__dirname, 'src/**/*.vue')
        ]),
        extractors: [
          {
            extractor: TailwindExtractor,
            extensions: ['html', 'js', 'vue', 'ejs']
          }
        ]
      }])
    }
  }
})
