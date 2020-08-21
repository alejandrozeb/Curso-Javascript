


//cuando se crea un nuevo cliente

exports.nuevoCliente = (req, res, next) =>{
    //TO DO: Insertar en la base datos
    console.log(req.body);
    res.json({mensaje: 'El cliente se agrago correctamente'});  
}