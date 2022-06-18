const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
//const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: './server/server.js',
  target: 'node',
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: './bundle-back.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'main.css' }),
    new webpack.DefinePlugin({ __isBrowser__: 'false' }),
    new RemovePlugin({
      before: {
        root: './public',
        include: ['main.css', '0.main.css', '1.main.css', '2.main.css'],
        test: [
          {
            folder: '.',
            //      method: () => true,

            method: (absoluteItemPath) => {
              return new RegExp(/\.js$/, 'm').test(absoluteItemPath);
            },

            recursive: true,
          },
        ],
        exclude: [
          'favicon.ico',
          'index.html',
          'bundle-front.js',
          '0.bundle-front.js',
          '1.bundle-front.js',
          '2.bundle-front.js',
          '3.bundle-front.js',
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
