//importamos el modelo
const Viaje = require('../models/Viajes');

exports.mostrarViajes = (req,res) => {
    Viaje.findAll()
    .then(viajes => res.render('viajes', {
        pagina: 'Sobre Nosotros viajes',
        viajes
    }))
    .catch(error => console.log(error))
}

exports.mostrarViaje = (req,res) => {
    Viaje.findById(req.params.id)
        .then(viaje => res.render(res.render('viaje',{
            viaje
        })))
        .catch(error => console.log(error))

}