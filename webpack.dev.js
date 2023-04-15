const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  devServer: {
    open: true,
    static: {
      directory: path.resolve("src/dev-static"),
    },
    port: 3001,
  }
});

