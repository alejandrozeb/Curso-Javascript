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

exports.obtenerPacientes = async(req,res,next) => {

    try {
        const pacientes = await Paciente.find({});
        //console.log(pacientes);
        res.json(pacientes);      
    } catch (error) {
        console.log(error);
        next();
    }
}