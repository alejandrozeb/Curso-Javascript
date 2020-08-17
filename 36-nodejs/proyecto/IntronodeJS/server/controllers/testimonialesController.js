//importamos modelos para testimoniales
const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = (req,res) => {
    Testimonial.findAll()
        .then(testimoniales => res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales
        }))
}

exports.agregarTestimonial = (req,res)=>{
    console.log(req.body);
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
        Testimonial.findAll()   //vuelvo a trarer
        .then(testimoniales => res.render('testimoniales',{
            pagina: 'Testimoniales',
            testimoniales,
            errores,
            nombre,
            correo,
            mensaje,
        }))
        .catch(error => console.log(error))
        

    }else{
        //almacenar en la bd
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }).then(Testimonial => res.redirect('/testimoniales'))
        .catch(error => console.log(error));

    }
    
}