const express = require('express');
const router = express.Router();

//importamos el modelo
const Viaje = require('../models/Viajes');
//importamos modelos para testimoniales
const Testimonial = require('../models/Testimoniales');

//controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
module.exports = function(){
    router.get('/',homeController.consultasHomepage)
    
    router.get('/nosotros',nosotrosController.infoNosotros);

    router.get('/viajes',viajesController.mostrarViajes);
    //vistas id
    router.get('/viajes/:id',viajesController.mostrarViaje);

    router.get('/testimoniales',(req,res) => {
        Testimonial.findAll()
            .then(testimoniales => res.render('testimoniales',{
                pagina: 'Testimoniales',
                testimoniales
            }))
    });
    //al enviar datos, cuando se llena el formulario
    router.post('/testimoniales',(req,res)=>{
        //console.log(req.body);
        //validar que todos los campos esten llenos
        let {nombre, correo, mensaje} = req.body;
        let errores = [];
        if(!nombre){
            errores.push({'mensaje':'Agrega tu Nombre'})
        }
        if(!correo){
            errores.push({'mensaje':'Agrega tu correo'})
        }
        if(!mensaje){
            errores.push({'mensaje':'Agrega tu mensaje'})
        }

        //revisar por errores
        if(errores.length > 0){
            //muestra la vista con errores
            res.render('testimoniales',{
                errores,
                nombre,
                correo,
                mensaje
            })

        }else{
            //almacenar en la bd
            Testimonial.create({
                nombre,
                correo,
                mensaje
            }).then(Testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error));

        }
        
    })

    //controlador?
    return router;
}