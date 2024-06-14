/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.config');

module.exports = merge(commonConfig, {
  devtool: 'source-map',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
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
    assetModuleFilename: 'css/[name][chunkhash][ext]',
    chunkFilename: 'js/[name].[chunkhash].js',
    filename: 'js/[name].[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      cache: true,
      hash: true,
      minify: true,
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
});
