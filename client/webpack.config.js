var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    './src/index.js',
    './src/styles/index.css'
  ],
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, './dist')
  },
  module:{
    loaders:[
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: __dirname + '/index.html',
      inject: true
    }),
    new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
    })
  ]
};