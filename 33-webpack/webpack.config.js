//creamos el siguiente objeto, este es el archivo de configuracion
//en esste archivo usamos el entry,output,plugins y loaders

const path = require('path');   //importamos la libreria
module.exports = {
    entry: './src/index.js', //si necesitamos mas entradas cargamos todos los archivos como en un array['src/index.js','entry2']
    output :{
        filename: 'bundle.js',  //nombre del archivo de salida
        path: path.join(__dirname, '/dist')//crea el driectorio
    },
    //node_modules\.bin\webpack corremos este comando y vemos que creo el dist
    //para acortar este paso odemos ir al package y en scripts crear que se va a ejecutar con el siguiente comnado.
    //npm run ejecutar
    //el ejecutar es el mismo que especificamos en los scripts ademas que decimos el modo (production or development)
    //para realizar una prueba puedes borrar la carpeta dist y ejecutar el comando anterior.

    //inslaremos babel que transforma el codigo de js moderno a js antiguo para que navegadores como explorer puedan ser compatibles con nuestro codigo: ejecutamos el siguiente codigo.
    //npm install --save-dev @babel/cli @babel/core @babel/preset-env @babel/register babel-loader
    
    //--save-dev nos ayuda a guardar para desarrollo las con @babel son dependencias que usa babel y al final el loader.

    //Loader: Permiten agregar archivos staticos (js,css) para trabajar con ellos en webpack
    //para usar css, imagenes agregamos en un modulo
    //en cada objeto {} colocamos los loaders de css e img, con test buscamos que arichivo vamos a usar.
    //usamos expresiones regulares /\.js$/, decimos que busque todos los archivos js para que los transpile.
    //exclude especificamos que no usaremos y use: que loader vamos a usar luego busca en .babelrc y define que version  de loader usaremos
    module:{
        rules: [
            {
               test: /\.js$/,
               exclude: /node_modules/,
               use:{
                   loader: 'babel-loader'
               }

            }
        ]
    }
    
}

