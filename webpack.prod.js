const path = require("path");
const { merge } = require("webpack-merge");

const config = require("./webpack.common");

module.exports = merge(config, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    assetModuleFilename: "img/[name][ext]",
    clean: true,
  },
});
