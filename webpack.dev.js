const path = require('path');

const commonConfig = require("./webpack.config");
const {merge} = require("webpack-merge");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: "development",
  devtool: 'inline-source-map',
  output: {
    filename: 'js/[name].bundle.js',
    chunkFilename: 'js/[name].bundle.js',
    assetModuleFilename: "css/[name][ext]",
  },
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
            }
          },
        ]
      },
    ]
  },
  devServer: {
    host: 'localhost',
    historyApiFallback: true,
    port: 3000,
    open: true,
    hot: true,
    compress: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      showErrors: true,
    }),
  ],
})
