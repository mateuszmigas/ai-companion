const webpack = require("webpack");
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
require('dotenv').config();

module.exports = {
  entry: {
    popup: path.resolve("src/popup.tsx"),
    contentScript: path.resolve("src/contentScript.tsx"),
  },
  module: {
    rules: [
      {
        use: "ts-loader",
        test: /\.tsx?$/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
          },
        ],
      },
      {
        type: "assets/resource",
        test: /\.(png|jpg|jpeg|gif|woff|woff2|tff|eot|svg)$/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".js", ".ts"],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new webpack.DefinePlugin({
      OPENAI_API_KEY: JSON.stringify(process.env.OPENAI_API_KEY),
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve("src/static"),
          to: path.resolve("dist"),
        },
      ],
    }),
  ],
};
