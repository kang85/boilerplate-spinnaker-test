var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: {
    lambdaBuild: './lambda.js',
    appLocal: './app.local.js'
  },
  output: {
    filename: '../[name].js',
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader', 
        query: {
          presets: ['env']
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|png)$/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[hash].[ext]',
        },
      },
      {
        test: /.json$/,
        loader: 'json-loader'
      }
    ]
  }
}