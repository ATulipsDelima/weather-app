const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const path = require('path');

module.exports = {
    entry:  './src/js/main.js',
    output : {
        filename: 'bundle.js',
    },
    devServer: {
        static: 'src',
        hot: true,
        open: true,
        port: 3000,
    },
    module:{
        rules: [
            
             {test: /\.js?$/, loader: 'babel-loader', exclude: /node_modules/},
             {test: /\.png$/, use: [
                {
                    loader: 'url-loader',
                    options: {
                        mimetype: 'image/png'
                    }
                }
             ]},
             {test: /\.css?$/, loader:'style-loader', exclude: /node_modules/}
        ]
    },
    

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            filename: 'index.html',
            inject: 'body'
        }),
        new Dotenv()
    ]
}