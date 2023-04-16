const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    mock: path.resolve("src/mock.tsx"),
  },
  mode: "development",
  devtool: 'cheap-module-source-map',
  devServer: {
    open: true,
    static: {
      directory: path.resolve("src/dev-static"),
    },
    port: 3001,
  }
});
