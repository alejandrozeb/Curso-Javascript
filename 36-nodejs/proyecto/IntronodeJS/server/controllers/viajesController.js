//importamos el modelo
const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req,res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Sobre Nosotros viajes',
        viajes
    });
}

exports.mostrarViaje = async (req,res) => {
    const viaje =  await Viaje.findById(req.params.id)
    res.render(res.render('viaje',{
        viaje
    }));
}