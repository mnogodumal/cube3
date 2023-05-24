const webpack = require('webpack')

const { merge } = require('webpack-merge')
// Base config
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    // contentBase: baseWebpackConfig.externals.paths.dist,
    port: 8081,
    host: '0.0.0.0',
    hot: true,
    https: false,
    client: {
      progress: true,
      overlay: {
        warnings: true,
        errors: true
      }
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  resolve(devWebpackConfig)
})
