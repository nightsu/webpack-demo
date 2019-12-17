const path = require("path");

module.exports = {
    // 转译模式： development 开发者模式 / production 产品模式
  mode: "development",
    // 输入源
  entry: "./src/index.js",
    // 输出
  output: {
      // 文件名
    filename: "main.[contenthash].js"
      // 输出路径
    path: path.resolve(__dirname, "dist")
  }
};