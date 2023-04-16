const webpack = require("webpack");
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "production",
  entry: {
    popup: path.resolve("src/popup.ts"),
    contentScript: path.resolve("src/contentScript.ts"),
  },
  plugins: [
    ...common.plugins,
    new webpack.DefinePlugin({
      OPENAI_API_KEY: JSON.stringify(''),
      IS_MOCK: JSON.stringify(false),
    }),
  ],
  optimization: {
    minimize: true,
    sideEffects: false,
    usedExports: false,
  }
});
