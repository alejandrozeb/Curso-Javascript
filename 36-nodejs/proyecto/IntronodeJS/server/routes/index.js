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
            pagina: 'Sobre Nosotros viajes',
            viajes
        }))
    });
    //vistas id
    router.get('/viajes/:id',(req,res) => {
        Viaje.findById(req.params.id)
            .then(viaje => res.render(res.render('viaje',{
                viaje
            })))
            .catch(error => console.log(error))

    });
    //controlador?
    return router;
}