//importamos el modelo
const Viaje = require('../models/Viajes');
//importamos modelos para testimoniales
const Testimonial = require('../models/Testimoniales');


exports.consultasHomepage=(req,res) => {
    const promises = [];
    promises.push(
        Viaje.findAll({
            limit: 3
        })
    )
    promises.push(
        Testimonial.findAll({
            limit: 3
        })
    )
    //pasar el promise y ejecutarlo
    const resultado = Promise.all(promises)
    
    resultado.then(resultado => res.render('index', {
        pagina: 'Proximos viajes',
        clase: 'home',
        viajes: resultado[0],
        testimoniales: resultado[1]
    }))
    .catch(error => console.log(error))
}