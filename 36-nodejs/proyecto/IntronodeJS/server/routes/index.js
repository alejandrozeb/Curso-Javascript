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

    router.get('/testimoniales',(req,res) => {
        res.render('testimoniales', {
            pagina: 'Testimoniales'
        });
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
        }
        
    })

    //controlador?
    return router;
}