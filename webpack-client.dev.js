const path = require('path');
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common.js');
const RemovePlugin = require('remove-files-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  entry: './client/main.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle-front.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({ __isBrowser__: 'true' }),
    new RemovePlugin({
      before: {
        root: './public',
        test: [
          {
            folder: '.',
            //     method: () => true,
            method: (absoluteItemPath) => {
              return new RegExp(/\.js$/, 'm').test(absoluteItemPath);
            },
            recursive: true,
          },
        ],

        exclude: [
          'favicon.ico',
          'index.html',
          'bundle-back.js',
          '0.bundle-back.js',
          '1.bundle-back.js',
          'main.css',
          '0.main.css',
          '1.main.css',
          '2.main.css',
        ],
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jss$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
});
