const OfflinePlugin = require('offline-plugin')

module.exports = options => ({
  entry: './src/main.js',
  extendWebpack(config) {
    if (options.mode === 'production') {
      config.plugin('offline').use(OfflinePlugin)
    }
  }
})
