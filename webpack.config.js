const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});
module.exports = {
    entry: path.join(__dirname, "examples/src/index.js"),
    module: {
        rules: [
          {
              test: /\.(js|jsx)$/,
              use: "babel-loader",
              exclude: /node_modules/
          },
          {
              test: /\.css$/,
              use: ["style-loader", "css-loader"]
          },
          {
            test: /\.(png|woff|woff2|eot|ttf|svg)$/,
            loader: 'url-loader?limit=100000'
          },
          {
            test: /\.(jpg|jpeg|gif|png|ico)$/,
            exclude: /node_modules/,
            loader:'file-loader?name=img/[path][name].[ext]&context=./app/images'
          }
        ]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};
