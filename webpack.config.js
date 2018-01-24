const webpack = require('webpack');

module.exports = {
    entry: {
        "ab": "./ab.js",
    },
    output: {
        path: __dirname + '/web/',
        filename: '[name].js',
        publicPath: '/web/'
    },
    module: {
        loaders: [
        ]
    },
    plugins: [
        new webpack.optimize.ModuleConcatenationPlugin()
    ]
};