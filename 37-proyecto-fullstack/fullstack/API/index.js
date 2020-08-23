const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
//crear el servidor
const app = express();

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
//app.use((cors(corsOptions)));   //con permisos 
app.use(cors());
//Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

//habilitar el body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//halitar routing
app.use('/', routes())           //midlewares, se ejecutan en ciertos lugare

//puerto y arrancar el servidor

app.listen(4000, () => {
    console.log('Servidor funcionando');
})