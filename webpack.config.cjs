const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./index.ts",
  target: "node",
  mode: "development",
  externals: [nodeExternals()],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // Use ts-loader for .ts files
        exclude: /node_modules/,
        use: "ts-loader",
      },
    ],
  },
};
