var path = require('path');
var webpack = require('webpack');
var helpers = require('../config/helpers');

var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        'ng1': './src/index.ts',
        'app': './src/main.ts'
    },
    output: {
        path: helpers.root('dist/dev'),
        publicPath: '/',
        filename: '[name].bundle.js'
    },
    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    // Add the loader for .ts files.
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader?keepUrl=true'],
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: 'config/index.html'
        })
    ]
}
