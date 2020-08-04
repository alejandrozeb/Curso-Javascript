//creamos el siguiente objeto, este es el archivo de configuracion
//en esste archivo usamos el entry,output,plugins y loaders

const path = require('path');   //importamos la libreria
module.exports = {
    entry: ['./src/index.js'], //si necesitamos mas entradas cargamos todos los archivos como en un array['src/index.js','entry2']
    output :{
        filename: 'bundle.js',  //nombre del archivo de salida
        path: path.join(__dirname, '/dist')//crea el driectorio
    }
    //node_modules\.bin\webpack corremos este comando y vemos que creo el dist
}

