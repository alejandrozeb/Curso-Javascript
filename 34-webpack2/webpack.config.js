const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    entry: {
        index: './src/js/index.js'
    },
    output:{
        filename: '[name].bundles.js',
        path: path.join(__dirname, '/dist')
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress:true,
        port: 5500
    },
    module: {
        rules: [
            {
                test: /\.js·/,
                exclude: /node_modules\/(?!(es6-module|another-es6-module)\/).*/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ],
            },
            {
                test: /\.scss$/,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'sass-loader'}
                ],
            }
        ]
    },
    optimization:{
        splitChunks:{
            cacheGroups:{
                commons:{
                    test: /[\\/]node_modules[\\/]/,
                    name: 'common',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html',
            title: 'Login'
        }),
        new HtmlWebpackPlugin({
            filename: 'nosotros.html',
            template: 'src/nosotros.html',
            title: 'Nosotros'
        })
    ]
}