const { resolve }  = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  mode: 'production',
  entry: './index.js',
  output: {
    filename: '[name].bundle.js',
    path: resolve(__dirname, 'dist'),
  },

  plugins: [new HtmlWebpackPlugin()],

  optimization: {
    minimize: false,
  },
});
