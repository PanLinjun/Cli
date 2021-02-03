const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'js/bundle.[hash:8].js',
    path: path.resolve('dist')
  },
  resolve: {
    alias: {
      '@': path.resolve('src')
    },
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
        include: /src/,
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        options: {
          esModule: false,
          limit: 4096, // 配置低于4k的图片会转为base64格式
        },
        loader: 'url-loader',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // 处理字体文件
        options: {
          esModule: false
        },
        loader: 'file-loader'
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/index.css'   // 指定打包后的css
    }),
    new VueLoaderPlugin()
  ]
}
