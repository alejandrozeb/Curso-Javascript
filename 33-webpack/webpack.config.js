const path = require('path');   //importamos la libreria
module.exports = {
    entry: './src/index.js', //si necesitamos mas entradas cargamos todos los archivos como en un array['src/index.js','entry2']
    output :{
        filename: 'bundle.js',  //nombre del archivo de salida
        path: path.join(__dirname, '/dist')//crea el driectorio
    },
    module:{
        rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use:{
                   loader:'babel-loader',
               } 
            }
        ]
    }
    
}
