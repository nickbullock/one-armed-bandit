const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    watch: true,
    entry: {
        app: "./src/index"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: path.resolve(__dirname, "node_modules")
            },
            {
                test: /\.(png|jpg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]"
                },
                exclude: path.resolve(__dirname, "node_modules")
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({template: "./index.html"})
    ]

};