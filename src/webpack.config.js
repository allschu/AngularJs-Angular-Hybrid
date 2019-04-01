var path = require('path');
module.exports = {
    mode: 'development',
    entry: {
        'ng1': './index.ts',
        'app': './main.ts'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
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
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    },
}