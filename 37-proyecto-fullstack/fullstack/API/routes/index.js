const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')
module.exports = function(){

    //agrga nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    )

    //obtiene todos los registros de pacientes en la bd
    router.get('/pacientes', 
    pacienteController.obtenerPacientes
    );

    //obtiene un paciente en especifico
    //:id trae cualquier dato /pacientes/1 o pacientes/:100000
    router.get('/pacientes/:id', 
    pacienteController.obtenerPaciente
    );


    return router;
}