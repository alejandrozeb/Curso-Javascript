const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteControllers')
module.exports = function(){

    //agrga nuevos pacientes via POST
    router.post('/pacientes',
        pacienteController.nuevoCliente
    )

    return router;
}