const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
//const TerserPlugin = require('terser-webpack-plugin');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  // devtool: "cheap-module-source-map",
  entry: './client/main.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: './bundle-front.js',
    publicPath: '/',
  },
  plugins: [new webpack.DefinePlugin({ __isBrowser__: 'true' })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
