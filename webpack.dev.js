const path = require("path");
const { merge } = require("webpack-merge");

const config = require("./webpack.common");

module.exports = merge(config, {
  mode: "development",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "img/[name][ext]",
  },
});
