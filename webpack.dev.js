/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const commonConfig = require('./webpack.config');
const { merge } = require('webpack-merge');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  devServer: {
    compress: true,
    historyApiFallback: true,
    host: 'localhost',
    hot: true,
    open: true,
    port: 3000,
  },
  devtool: 'inline-source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ],
  },
  output: {
    assetModuleFilename: 'css/[name][ext]',
    chunkFilename: 'js/[name].bundle.js',
    filename: 'js/[name].bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      showErrors: true,
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
});
