const { merge } = require('webpack-merge')
const common = require('./webpack.base.config')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
  },
  devServer: {
    contentBase: path.resolve('dist'),
    open: true,
    port: 8000,
    compress: true,
    hot: true
  }
})
