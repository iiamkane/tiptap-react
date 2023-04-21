const path = require('path');

const HtmlWebpackPlugin = require("html-webpack-plugin");

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "demo/index.html"),
    filename: "./index.html"
});

module.exports = {
    entry: path.join(__dirname, "demo/index.tsx"),
    module: {
        rules: [{
            test: /\.(t|j)sx?$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
        }]
    },
    plugins: [htmlWebpackPlugin],
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        port: 3333
    },
    devtool: "inline-source-map"
};