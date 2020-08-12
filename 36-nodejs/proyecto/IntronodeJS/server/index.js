//importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');
//configurar express
const app= express();
//habilitar pug
app.set('view engine', 'pug');
//añadir las vistas
app.set('views',path.join(__dirname,'./views'));

//caragr una carpeta estatita llamada public

app.use(express.static('public'));
//muestra el año actual
app.use((req,res,next) =>{
    //crear una nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    console.log(res.locals)
    return next();
});


//cargar las rutas
app.use('/',routes());
app.listen(3000);