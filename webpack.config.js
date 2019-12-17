const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    // 转译模式： development 开发者模式 / production 产品模式
  mode: "development",
    // 输入源
  entry: "./src/index.js",
    // 输出
  output: {
    path: path.resolve(__dirname, 'dist'),
      // 文件名
    filename: "main.[contenthash].js"
      // 输出路径
    // path: path.resolve(__dirname, "dist")
  },
  plugins: [
      new HtmlWebpackPlugin({ 
        template: 'src/assets/index.html',
        title:'first webpack app'
      }),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        filename: '[name].[contenthash].css',
        chunkFilename: '[id].[contenthash].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
    ],
   module: {
          rules: [
            {
              test: /\.css$/,
              use: [
                {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                  // you can specify a publicPath here
                  // by default it uses publicPath in webpackOptions.output
                  publicPath: '../',
                  hmr: process.env.NODE_ENV === 'development',
                  },
                },
                'css-loader'
              ]
            }
          ]
        },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  }
};