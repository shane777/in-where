var path = require("path")
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, "build"),
        filename: "bundle.js",
        publicPath: "build"
    },
    module: {
        rules: [
            {
                test: /\.css?$/,
                exclude: /node_modules/,
                use: ["style", "css"]
            },
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                  cacheDirectory: true,
                  presets: ['react', 'es2015']
                }
            }
        ]
    }
}

