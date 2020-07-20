/* open street map es el princial leaflet es  un plugin de este que te facilita el uso con algunas funciones ademas que es responsivo*/
/* usaremos un api https://api.datos.gob.mx/v1/precio.gasolina.publico para las ubicaciones de los establecimintos*/

const ui = new UI();        //la clase esta en UI.js

//cuando carga la pagina

document.addEventListener('DOMContentLoaded',() => {
    ui.mostrarEstablecimientos();                   //cargamos los establecimientos
})

//habilitar busqueda de establecimientos

const buscador = document.querySelector('#buscar input');

buscador.addEventListener('input',() => {
    console.log(buscador.value.length);            //saca los elementos que se escriben con el numeros de letras tiene la palabra

    if(buscador.value.length > 5){
        //buscra en la api

        ui.obtenerSugerenvias(buscador.value);
    }

});