const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require('body-parser');
//crear el servidor
const app = express();

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