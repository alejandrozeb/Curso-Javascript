//console.log('desde aqui');
//consumiento de la Api
fetch('http://localhost:4000/pacientes')    //fecth envia un get por defecto
    .then(respuesta => respuesta.json())
    .then(datos => console.log(datos));