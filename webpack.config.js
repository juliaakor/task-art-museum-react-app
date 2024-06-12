/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ESBuildMinifyPlugin } = require('esbuild-loader');

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
  optimization: {
    mergeDuplicateChunks: true,
    minimize: true,
    minimizer: [
      new ESBuildMinifyPlugin({
        target: 'es2016',
      }),
    ],
    removeEmptyChunks: true,
    sideEffects: false,
    splitChunks: {
      cacheGroups: {
        vendors: {
          chunks: 'all',
          enforce: true,
          name: (module) => {
            const [, match] = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]([^\\/]*)([\\/]([^\\/]*))?([\\/]([^\\/]*))?|$)/
            );

            return `vendors/${match.replace('@', '')}`;
          },
          test: /[\\/]node_modules[\\/]/,
        },
      },
      chunks: 'all',
    },
  },
  output: {
    clean: true,
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  performance: {
    maxAssetSize: 1024 ** 2,
    maxEntrypointSize: Infinity,
  },
  plugins: [new MiniCssExtractPlugin()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
  },
};
