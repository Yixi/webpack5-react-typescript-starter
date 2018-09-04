const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin")
const webpack = require('webpack')

const PORT = 4222
const _HOST = '0.0.0.0'
const HOST = `http://${_HOST}`
const URL = `${HOST}:${PORT}`

module.exports = {
  entry: '../src/index.tsx',
  output: {
    filename: "[name]-[hash:7].js",
    path: path.resolve(__dirname, "../dist"),
    chunkFilename: "[chunkhash].js",
    publicPath: "/",
  },
  context: path.resolve(__dirname, "../src"),
  devtool: "hidden-source-map",
  bail: true,
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.(jpe?g|png|gif|ogg|mp3)$/,
        use: ["url-loader"],
      },
      {
        test: /\.(svg?)(\?[a-z0-9]+)?$/,
        use: ["url-loader"],
      },
    ]
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../src"),
    },
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  stats: {
    cached: true,
    chunks: false,
    chunkModules: false,
    colors: true,
    modules: false,
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(__dirname, "../tsconfig.json"),
      tslint: path.resolve(__dirname, "../tslint.json"),
    }),
    new HTMLWebpackPlugin({
      template: "../src/app.html",
      filename: "index.html",
    }),
  ]
}
