var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: true,
    devtool: 'source-map',
    noInfo: false,
    entry: [
        './public/javascripts/angularApp'
    ],
    target: 'web',
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: 'http://localhost:3000/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"}
            ,
            {
                test: /\.css$/,
                loader: 'style!css?sourceMap'
            },
            {
                test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url?limit=100000&name=img/[name].[ext]'
            },
            {
                test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/,
                loader: 'url?limit=100000&name=fonts/[name].[ext]'
            }
        ]
    }
}