const path = require('path');
module.exports = {
    entry: './src/js/index.js',
    output:{
        filename: 'bundles.js',
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
            }
        ]
    }
}