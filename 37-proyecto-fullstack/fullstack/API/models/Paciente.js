const mongoose = require('mongoose');
const Schema = mongoose.Schema; //crea la estructura en la base de datos


//definimos una nueva tabla (Schema)

const pacientesSchema = new Schema({
    nombre: {
        type: String,               //tipos, pueden ser arrays
        trim: true,                 //quita los espacios extra de la cadena
    },
    propietario:{
        type: String,
        trim: true
    },
    fecha:{
        type: String,      //con el date agraga la hora en la que se a registrado pero no necesitamos sa informacion
        trim: true
    },
    hora:{
        type: String,
        trim: true
    },
    sintomas:{
        type: String,
        trim: true
    }
});

module.exports = mongoose.model('Paciente', pacientesSchema);
//moongose todo lo tiene a una sola instancias y podemos hacer referencia a paciente
