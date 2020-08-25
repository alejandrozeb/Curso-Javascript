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

para acrualizar
exports.actualizarPaciente = async(req,res,next) => {

    try {
       const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body,{
           new: true        //trae el nuevo registro, por defecto mongoose te traeria el ultimo sin cambios
       });
       res.json(paciente);
    } catch (error) {
        console.log(error);
        next();
    }
}
 ahora crearemos el front end 
 desde hace tiempo se esta realizando que el front y el back sean separados.
 npx create-react-app frontend
 espereamos a que react realize todo.

https://gist.github.com/juanpablogdl/9f75be22c9fa50b6f0d7ccb63e03408c

copiamos lo del index a depues del titulo
creamos en public la carpetacss y creamos app.css y copiamos los estilos
instalamos la dependencia.
npm install react-router-dom@5.1.2

para poder usar rutas en react.
editamos nuetros app.js

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//pacientes
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
      <Switch>
         <Route 
            exact
            path="/"        //url
            component={Pacientes}   //el nombre del componentes que crearemos
         />
      </Switch>
    </Router>
  );
}

export default App;

// componentes de pacientes
import React from 'react';

const Pacientes = () => {
    return ( <h1>Desde Pacientes</h1> );
}
 
export default Pacientes;

Consumiremos una api nuestra y lo haremos con axios. solo cambiamos un valor y los endpoints seran actualizados, axios solo funciona el fronend.
npm install axios

definimos la url base en postman fueron a localhost podemos cambiar la base y mantenemos.
pero se puede hace mas facil react tienen variables de entorno,
el archivo .env.development se carga  automaticamente en desarrollo y despues de crear el build se destruye. luego podemos crear un archivo .env.production con el dominia de nuestro servidor.

Cada vez que definimos una variable de entorno debemos deterner el servidor
en nuestro config axios 
import axios from 'axios';

const clienteAxios = axios.create({
    //definimos la url base
    baseURL: process.env.REACT_APP_BACKEND_URL
});

export default clienteAxios;

si tienes un back end puedes hacerlo como api y leerlos en ract

puedes crear apis en diferentes lenguajes e integrar en react.


Cuando consumes apis react te da dos opciones dos HOOKS.

debemos habilitar cors para conectarnos a la API, son los api keys que nos permite cnectarnos con diferentes apis.
pero solo usaremos APis.

Hablitando Cors debemos haerlo en el servidor de node por lo tanto abriremos el api.
abrimos nuestra api e instalamos cors
npm install cors

luego añadimos
//hablilitar cors
app.use((cors()));
a nuestro index,.js 
y ya se comunica con nuestro frontend

CON cors puedes limitar que solo un dominio pueda consumir lainformacion.
//Habilitar para qu el uso sea de un solo dominio
const whitelist = ['http://localhost:3000'];
const corsOptions= {
    origin: (origin,callback) => {  //revisando el origen de la peticion
        const existe = whitelist.some(dominio => dominio === origin);   //verificamos si el domino esta en la lista
        if (existe) {
            callback(null,true)
        }else{
            callback(new Error('No permitido por CORS'))
        }
    }
}


//hablilitar cors
app.use((cors(corsOptions)));

ahora en nuestro localhots sale que no esta permitido.


<a key={cita._id}>      //en react para este tipo de bucles te pide tener un id.
    <h3>{cita.nombre}</h3>
</a>

en ract no usamos a, por velocidad usamos los que tiene react importamos en pacientes.
import {Link} from 'react-router-dom';
<Link to="/nueva" className="btn btn-success text-uppercase py-2 px-5 font-weight-bold">Crear Cita</Link>


es un abstraccion de a y al transpilar se vera como la eqtiqueta a nota que camviamos el a por link y el src a to.

Se recomienda guardar los daos en el state haci se puden realizar opeaciones con los datos.

como enviar los datos del formulario

<form 
                            onSubmit={crearNuevaCita}       //cuando el usuario de submit
                            className="bg-white p-5 bordered">
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre Mascota</label>
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    id="nombre" 
                                    name="nombre" 
                                    placeholder="Nombre Mascota" 
                                    onChange={actualizarState}
                                />
                            </div>

                            linkear con el id=  <Link to={`/cita/{cita._id}`} key={cita._id} className="p-5 list-group-item list-group-item-action flex-column align-items-start">  //asi entrelazamos.
                                    <div className="d-flex w-100 justify-content-between mb-4">
                                        <h3 className="mb-3">{cita.nombre}</h3>
                                        <small className="fecha-alta">
                                        {cita.fecha} - {cita.hora}
                                        </small>
                                    </div>
                                    <p className="mb-0">
                                        {cita.sintomas}
                                    </p>
                                    <div className="contacto py-3">
                                        <p> Dueño: {cita.propietario}</p>
                                        <p>Teléfono:</p>
                                    </div>
                                </Link>

y tenemos en nuestro router ya el id
exact
            path="/cita/:id"
            render={(props) => {
              console.log(props.match.params.id);
              return(
                <Cita />
              )
            }}
ahora como recoradaras ya tenemos el id en nuestro state todas las citas.                            

como eliminar una cita
const eliminarCita = id =>{
        console.log(id);
        //importando cliente de axios y enviando la peticion
        clienteAxios.delete(`/pacientes/${id}`)
            .then(respuesta => {
                //console.log(respuesta)
                //la bd se tiene que recargar
                props.guardarConsultar(true);
                //redireccion
                props.history.push('/');
            })
            .catch(error => {
                console.log(error)
            }); 


    }
            
            */