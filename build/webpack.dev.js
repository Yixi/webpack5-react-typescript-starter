const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const PORT = 4222
const PUBLIC_PATH = ''

module.exports = {
  entry: [
    '../src/index.tsx'
  ],
  output: {
    filename: 'app.js',
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
  },
  context: path.resolve(__dirname, '../src'),
  devtool: 'cheap-module-source-map',
  devServer: {
    port: PORT,
    host: '0.0.0.0',
    devMiddleware: {
      stats: {
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      },
    },
    static: {
      publicPath: PUBLIC_PATH,
    },
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
    // proxy: {
    //   '/api': {
    //     target: 'http://api.cn',
    //     changeOrigin: true,
    //   },
    // },
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }
      },
      {
        test: /\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'global',
                localIdentName: '[name]__[local]--[hash:base64:5]',
              },
              importLoaders: 2,
            }
          },
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|gif|ogg|mp3|svg)$/,
        type: 'asset'
      },
    ]
  },
  resolve: {
    alias: {
      '@root': path.resolve(__dirname, '../src'),
    },
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        configFile: path.resolve(__dirname, '../tsconfig.json'),
      }
    }),
    new HTMLWebpackPlugin({
      template: '../src/app.html',
      filename: 'index.html',
    }),
  ]
}
