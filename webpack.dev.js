const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    popup: path.resolve("src/popup.ts"),
    contentScript: path.resolve("src/contentScript.ts"),
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
