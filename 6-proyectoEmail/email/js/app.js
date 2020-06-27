// variantes
/* añadimos los elementos a usar */
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');

const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');
//event Listener
eventListeners(); 

function eventListeners(){
    // Inicio de la aplicacion y deshabilitar submit
     document.addEventListener('DOMContentLoaded', inicioApp);
    //cuando carga la pagina

    //campos del formulario
    email.addEventListener('blur', validarCampo); //verifica cada vez que se sale del text_box
    asunto.addEventListener('blur', validarCampo); 
    mensaje.addEventListener('blur', validarCampo); 

    //boton enviar en el submit
//    btnEnviar.addEventListener('click', enviarEmail);
    //con el formulario
    formularioEnviar.addEventListener('submit', enviarEmail);

    //boton reset

    resetBtn.addEventListener('click',resetFormulario);

}







//funciones

//deshabilitar el envio
//lo que quieras agregar en cunato se carge la pagina
function inicioApp(){
    btnEnviar.disabled = true;//deshabilita el boton

}
//valida que el campo tenga algo escrito
function validarCampo(){
   // console.log('dentro del input');

    //se valida la longitud del texo y que no este vacio
    validarLongitud(this); //this campo actual
    //validar unicamente el email
    if(this.type === 'email'){
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
    }
}

//reset del formulario

function resetFormulario(e){
    formularioEnviar.reset();
    e.preventDefault(); //evita otras funciones tambien
}

//cuando se envia el correo
function enviarEmail(e){
    //console.log('Mail enviado');

    //Spinner al presionar enviar
    const spinnerGif = document.querySelector('#spinner');

    spinnerGif.style.display = 'block';

    // gif que envia email

    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';
    
    // ocultar spinner y mostrar gif de enviado

    setTimeout(function(){
        spinnerGif.style.display = 'none';

        //requiere un padre
        document.querySelector('#loaders').appendChild(enviado);
        //desaparecer el enviado

        setTimeout(function(){
            enviado.remove();
            formularioEnviar.reset();
        },5000);

    },3000);

    e.preventDefault();
}




//verifica la lingitud del texto en los campos
function validarLongitud(campo){
   // console.log(campo);
    
   
   
   if(campo.value.length > 0){//verifica si el campo esta vacio
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
    /* cambia el color dependiendo como este el formulario (vacio o lleno) */

}

function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf("@") !== -1){ //indexof con comillas dobles
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{//no hay @
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
} 