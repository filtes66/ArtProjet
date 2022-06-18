const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports =  merge(common, {
    mode: 'production',
    entry: "./server/server.js",
       target: "node",
       externals: [nodeExternals()],
       output: {
           path: path.resolve(__dirname, "./public"),
           filename: "./bundle-back.js"
       },
       resolve: {
           extensions: ['.js', '.jsx']
       },
       plugins: [new MiniCssExtractPlugin({filename: "main.css"}), 
                 new webpack.DefinePlugin({__isBrowser__: "false"})
       ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    }
})