const express = require('express');
const router = express.Router();

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
        res.render('viajes', {
            pagina: 'Proximos viajes'
        });
    });
    //controlador?

    return router;
}