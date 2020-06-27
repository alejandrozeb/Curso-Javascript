// variantes
/* añadimos los elementos a usar */
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

//event Listener
eventListeners(); 

function eventListeners(){
    // Inicio de la aplicacion y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);
    //cuando carga la pagina
}







//funciones

//deshabilitar el envio

function inicioApp(){
    btnEnviar.disabled = true;//deshabilita el boton

}