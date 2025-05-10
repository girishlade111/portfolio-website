// webpack.config.js
const path = require("path");

module.exports = {
  entry: "./src/ts/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      { test: /\.ts$/, loader: "ts-loader" },
      { test: /\.scss$/, use: ["style-loader", "css-loader", "sass-loader"] },
    ],
  },
  resolve: { extensions: [".ts", ".js"] },
};