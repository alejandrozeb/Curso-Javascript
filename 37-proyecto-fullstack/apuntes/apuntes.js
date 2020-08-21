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
//git 
usar cada vez que termine la vista.
definiendo el modelo
const mongoose = require('mongoose');
const Schema = mongoose.Schema; //crea la estructura en la base de datos


//definimos una nueva tabla (Schema)

const pacientesSchema = new Schema({
    nombre: {
        type: String,               //tipos, pueden ser arrays
        trim: true,                 //quita los espacios extra de la cadena
    },
    propietario:{
        type: String,
        trim: true
    },
    fecha:{
        type: String,      //con el date agraga la hora en la que se a registrado pero no necesitamos sa informacion
        trim: true
    },
    hora:{
        type: String,
        trim: true
    },
    sintomas:{
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Paciente', pacientesSchema);
//moongose todo lo tiene a una sola instancias y podemos hacer referencia a paciente

creando el controlador
creamos la carpeta controler el nombre para tener orden sera (nombre)Controllerss.js
para este proyecto sera pacienteControllers.js

req es lo que el usuario envia
res es la respuesta del servidor
next es de express que le dice que paso a la siguiente funcion
a los controladores e los llama en el routing y una url puede estar agragada a un controlador.

****************routing
Como ya tenmos el modelo y controlador tenemos que crear la ruta para estos y lo ahremos con la ayuda de express.

creamos el archivo para las rutas 
module.exports = function(){

    //agrga nuevos pacientes via POST
    router.post('/pacientes',           //el verbo le dice que hacer y especificamos la ruta
        pacienteController.nuevoCliente
    )

    return router;
}

y agrsgamos un midelware en el index de la app
app.use('/', routes()) 

descargamos postman para realizar peticionas estamos desarollando una restAPI.
https://www.postman.com/downloads/
descargamos e instalamos.
pero que es postman? puedes encontrar una explicaicon aqui
http://www.arquitectoit.com/postman/que-es-postman/#:~:text=Postman%20nace%20como%20una%20herramienta,una%20extensi%C3%B3n%20de%20Google%20Chrome.
    ya con postaman abierto y abrimos una pestaña nueva, cambiamos el verbo a post y colocamos LA URL http://localhost:4000/pacientes.
    despues damos click en send para enviar un request.

nuestro server esta corriendo en el puerto 4000 pero aun no teenmso ninguna ruta definida para el get.
No tenemos una ruta principal y sa es la idea de rest/api, tener diferentes endpoints,

tambien podriamos interpretar de esta forma el routing
 router.post('/pacientes',    http://localhost:4000/pacientes      
        pacienteController.nuevoCliente
    )
es nuestro punto de entrada por asi decirlo.

con postman podemos garantizar que nuestro routing y controler estan funcionando correctamente

ahora vamos a body y cambiamos a www.from-urlencodede

y llenamos los datos que queramos toma en cuenta que la fecha es de la siguiente forma 2019-12-10.


leer de inputs usamos bodyparser
foamr de habilitar

//habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

con esto extraemos en una variable la peticion.

cuando realizas un consolo.log en express es en el servidor por lo tanto lo vemos en la consola del servidor.
codigo para insertar.
en paciente controler
const Paciente = require('../models/Paciente');


//cuando se crea un nuevo cliente

exports.nuevoCliente = async(req, res, next) =>{
    
    //TO DO: Insertar en la base datos
    //console.log(req.body);
    
    //crear objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();      //metodo de express
        res.json({mensaje: 'El cliente se agrago correctamente'});  
    } catch (error) {
        console.log(error);
        next();                 //va a la siguiente funcion
    }
}
ingresamos los datos cn postman dos registros diferentes
Repaso
al apretar send en porstman
va a routing, detecta que es un post hacia la url, luego identifica que controlador debe ejecutarse
nuevo cliente se abre importa el modelo
intenata gurdar si lo hace devuelel un res caso contrario imprime el error.

obtener todos lo datos de pacientes


exports.obtenerPacientes = async(req,res,next) => { //el orden de req res y next es imporatante

    try {
        const pacientes = await Paciente.find({});  //metodo de mongosse, asigna todos los resultados-
        //console.log(pacientes);
        res.json(pacientes);      
    } catch (error) {
        console.log(error);
        next();
    }
}

por id en routes
 router.get('/pacientes/:id', 
    pacienteController.obtenerPaciente
    );
controlador
//obtiene paciente por id
exports.obtenerPaciente = async(req,res,next) => {

    try {
       const paciente = await Paciente.findById(req.params.id);
       res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}
//req.params.id encuenta /pacientes/:id devuelve lo que esta despues de dos puntos

los id en mongodb son raros url prueba para navegador y postman
http://localhost:4000/pacientes/5f3f50cf94daaf2bc4e97a6c



*/