/* Construiremos una app con una api donde se haran CRUD con express como servidor y el frontend sera con react, veremos la construccion de esta y la integracion, ademas crearemos una aplicacion de escritorio que trabajar con la misma app  */

//  API

/* 
creamos la carpeta api con el archivo index.js.
damos el inicio con 
npm init 
en la consola 
llenamos los campos
y ahora instalaremos dependencias.
npm install express@4.17.1 mongoose@7.7.7

mongoose nos permite administrar usar la base de datos
ahora instalaremos dependencias que solo usaremos durante el desarrollo
nodemon cada vez que se realize un cambio los detectara y va a reinicar el servidor con esos cambios.
ahora comenzamos editando nustros index.js
cremos el servidor con express, lo bueno de express es que no tiene nada incluido para este proyecto usaremos importaciones sin imports y require.
editamos el index.js de la configuracion del server

const express = require('express');

//crear el servidor

const app = express();          //creamos con express

//puerto y arrancar el servidor

app.listen(4000, () => {                //con un callback vemos si esta funcionando el servidor.
    console.log('Servidor funcionando');
})

//en el package
"dev": "nodemon ./index.js"         //para que escuche con nodemon y ademas especificacmos desde donde

npm run dev para usar este script.
//descargando mongodb
https://www.mongodb.com/

entramos al link vamos a la pestaña software y seleccionamos la opcion comunity (es la version gratis)
seguidamente descargamos la version q¡estable para nuestro sistema operativo. en mi caso la extension sera msi para que se decrague directamente el ejecutable.
luego debemos crear una carpeta en el disco c:
llamada data y un subdirectorio llamada db
c:
    data
        db
y en mongocompasss usamos esto para conectar
 mongodb://127.0.0.1:27017
es una conexion por defecto.
en mogo compass creamos un database con el nombre de veterimnaria y un colection llamado pacientes.
Conectando a mongodb
en nuestro index.js de nuestro proyecto.
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,              //configuracion necesaria de mongodb
    useUnifiedTopology: true,
    useFindAndModify: false
})

*/