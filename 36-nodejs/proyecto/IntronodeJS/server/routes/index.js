const express = require('express');
const router = express.Router();



//controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');
module.exports = function(){
    router.get('/',homeController.consultasHomepage)
    
    router.get('/nosotros',nosotrosController.infoNosotros);

    router.get('/viajes',viajesController.mostrarViajes);
    //vistas id
    router.get('/viajes/:id',viajesController.mostrarViaje);

    router.get('/testimoniales',testimonialesController.mostrarTestimoniales);
    //al enviar datos, cuando se llena el formulario
    router.post('/testimoniales',testimonialesController.agregarTestimonial);

    //controlador?
    return router;
}