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
                
                   // console.log(data);
                    //cuando se falla la busqueda la respuesta viene no lyrics found

                    if(data.respuesta.lyrics){      //si existe datos
                       // console.log('si existe');

                        //la cancion existe
                        const letra = data.respuesta.lyrics;
                        UI.divResultado.textContent= letra;
                    }else{
                        console.log('no existe');
                        //no existe respuesta, la cancinon no exiiste
                        UI.divMensaje.innerHTML='La cancion no existe prueba con otra busqueda';
                        UI.divMensaje.classList.add('error');
                        //para limpiar
                        setTimeout(() => {
                            UI.divMensaje.innerHTML='';
                            UI.divMensaje.classList.remove('error'); 
                            UI.formularioBuscar.reset(); 
                            UI.divResultado.textContent= '';
                        }, 3000);
                    }
                })
          }


});