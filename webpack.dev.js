const path = require('path');
const {merge} = require("webpack-merge");
const common = require("./webpack.config");

module.exports = merge({
    mode: 'development',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
    devtool: 'inline-source-map',
    devServer: {
      static: {
        directory: path.resolve(__dirname, 'dist'),
      },
      compress: true,
      port: 3000,
      historyApiFallback: true,
      allowedHosts: 'all',
      hot: true,
      open: true,
    },
  },
  common,
);
