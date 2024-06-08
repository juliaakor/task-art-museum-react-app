/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    index: path.join(__dirname, 'src', 'index.tsx'),
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.(ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
          },
        },
      },
      {
        exclude: /node_modules/,
        test: /\.(png|svg|jp(e*)g|gif|ico|webp|avif)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]',
          },
        },
      },
    ],
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
};
