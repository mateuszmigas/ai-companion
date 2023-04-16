const webpack = require("webpack");
const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    mock: path.resolve("src/mock.tsx"),
  },
  mode: "development",
  devtool: 'cheap-module-source-map',
  plugins: [
    new webpack.DefinePlugin({
      OPENAI_API_KEY: JSON.stringify(process.env.OPENAI_API_KEY),
      IS_MOCK: JSON.stringify(true),
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
