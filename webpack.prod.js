const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "production",
  entry: {
    popup: path.resolve("src/popup.ts"),
    contentScript: path.resolve("src/contentScript.ts"),
  },
  optimizatqion: {
    minimize: true,
    sideEffects: false,
    usedExports: false,
  }
});
