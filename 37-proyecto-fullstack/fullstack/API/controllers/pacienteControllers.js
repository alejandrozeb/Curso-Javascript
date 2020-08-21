const Paciente = require('../models/Paciente');


//cuando se crea un nuevo cliente

exports.nuevoCliente = async(req, res, next) =>{
    
    //TO DO: Insertar en la base datos
    //console.log(req.body);
    
    //crear objeto de paciente con datos de req.body
    const paciente = new Paciente(req.body);

    try {
        await paciente.save();      //metodo de express
        res.json({mensaje: 'El cliente se agrago correctamente'});  
    } catch (error) {
        console.log(error);
        next();                 //va a la siguiente funcion
    }
}