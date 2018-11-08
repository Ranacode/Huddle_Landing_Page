const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const path = require("path");

module.exports = {
  target: "web",
  entry: path.join(__dirname, "lib/js/app.js"),
  devtool: "inline-source-map",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].[hash].js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, "lib"),
    watchContentBase: true,
    compress: true,
    port: 8001
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["env"]
          }
        }
      },
      {
        test: /\.js$/,
        enforce: "pre",
        exclude: /node_modules/,
        use: {
          loader: "eslint-loader",
          options: {
            configFile: path.join(__dirname, ".eslintrc")
          }
        }
      },
      {
        test: /\.(css|pcss)$/,

        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: { importLoaders: 1 }
          },
          {
            loader: "postcss-loader",
            options: {
              config: {
                path: path.join(__dirname, "postcss.config.js")
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["public/*"]),
    new HtmlWebpackPlugin({
      title: "Coding Challenge 11",
      template: path.join(__dirname, "lib/index-dev.html"),
      filename: path.resolve(__dirname, "public/index.html")
    })
  ]
};
