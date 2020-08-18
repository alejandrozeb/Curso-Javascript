//importamos el modelo
const Viaje = require('../models/Viajes');
//importamos modelos para testimoniales
const Testimonial = require('../models/Testimoniales');


exports.consultasHomepage= async(req,res) => { 
    const viajes = await Viaje.findAll({limit: 3});
    
    
    const testimoniales= await Testimonial.findAll({limit: 3});
    
    res.render('index', {
        pagina: 'Proximos viajes',
        clase: 'home',
        viajes,
        testimoniales
    })
}