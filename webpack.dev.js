const webpack = require("webpack");
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
require('dotenv').config();

module.exports = merge(common, {
  entry: {
    popup: path.resolve("src/popup.ts"),
    contentScript: path.resolve("src/contentScript.ts"),
  },
  mode: "development",
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      OPENAI_API_KEY: JSON.stringify(process.env.OPENAI_API_KEY),
      IS_MOCK: JSON.stringify(false),
    }),
  ],
  devServer: {
    open: true,
    static: {
      directory: path.resolve("src/dev-static"),
    },
    port: 3001,
  }
});
