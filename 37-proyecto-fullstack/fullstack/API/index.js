const express = require('express');
const mongoose = require('mongoose');

//crear el servidor
const app = express();

//Conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/veterinaria',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
//puerto y arrancar el servidor

app.listen(4000, () => {
    console.log('Servidor funcionando');
})