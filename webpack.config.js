const webpack = require('webpack');
const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  mode: isProduction ? 'production' : 'development',
  bail: isProduction,
  context: path.join(__dirname),
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        // { from: './public/Heikkinen_Resume.pdf' },
        { from: 'node_modules/pdfjs-dist/cmaps/', to: 'cmaps/' },
      ],
    }),
  ],
  devServer: {
    compress: true,
    historyApiFallback: true, // respond to 404s with index.html
    host: 'localhost',
    hot: true, // enable HMR on the server
    port: 3000,
  },
};
