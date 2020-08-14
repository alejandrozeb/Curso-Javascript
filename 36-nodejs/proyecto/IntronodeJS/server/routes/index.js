const express = require('express');
const router = express.Router();

//importamos el modelo
const Viaje = require('../models/Viajes');
module.exports = function(){
    router.get('/',(req,res) => {
        res.render('index');
    });
    
    router.get('/nosotros',(req,res) => {
        res.render('nosotros', {
            pagina: 'Sobre Nosotros'
        });
    });

    router.get('/viajes',(req,res) => {
        Viaje.findAll()
            .then(viajes => res.render('viajes', {
                pagina: 'Proximos viajes',
                viajes
            }))
            .catch(error => console.log(error))
    });
    //controlador?
    return router;
}