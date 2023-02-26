const {merge} = require('webpack-merge');
const path = require('path');

const common = require('./webpack.config.js');
module.exports = merge({
    mode: 'production',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
    },
  },
  common,
);
