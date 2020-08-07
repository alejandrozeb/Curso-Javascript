const path = require('path');
module.exports = {
    entry: {
        index: './src/js/index.js',
        nosotros: './src/js/nosotros.js'
    },
    output:{
        filename: '[name].bundles.js',
        path: path.join(__dirname, '/dist')
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
    }
}