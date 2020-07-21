/* aqui va toda la funcionalidad */
//imortamos interfaz
import * as UI from './interfaz.js';
//importamos la api 
import {API} from './api.js';

//escuchamos el submit del formulario

UI.formularioBuscar.addEventListener('submit',(e) => {
    e.preventDefault();

    //aqui usaremos las variables, por que el exportar se realiza cuando carga la pagina
    
    //obtener los datos del formulario

    const artista = document.querySelector('#artista').value,
          cancion = document.querySelector('#cancion').value;

          console.log(artista);
          console.log(cancion);

          if(artista === '' || cancion === ''){
              //el usuario dja los capos vacios mostrar error
                UI.divMensaje.innerHTML='Error... todos los campos son obligatorios';
                UI.divMensaje.classList.add('error');
                //para limpiar
                setTimeout(() => {
                    UI.divMensaje.innerHTML='';
                    UI.divMensaje.classList.remove('error');    
                }, 3000);
          }else{
            //el formulario esta completo, realizar consulta a la API
            const api = new API(artista,cancion);
            api.consultarAPI()
                .then(data => {
                    //traemos toda la letra 
                
                    console.log(data.respuesta.lyrics);
                })
          }


});