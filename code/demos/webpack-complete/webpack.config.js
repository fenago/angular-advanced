const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

let webpackConfiguration = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist' //path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [ {
            test : /\.css$/,
            use: ExtractTextPlugin.extract( {
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpg|)$/,
                use: 'url-loader?outputPath=assets/&limit=8192'
            },
            {
                test: /\.(ttf)$/,
                use: 'file-loader?outputPath=assets/fonts'
            }
    ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new ExtractTextPlugin("styles.css")
    ]
}

module.exports = webpackConfiguration;