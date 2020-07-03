/* Ajax ya está un poco reemplazada por que en nuevas versiones de javascript se usa fecht api*/

//Informacion desde un tipo de archivo txt
//sirve para cargar contenido, añadir datos a la bd mediante ajay por que js no tiene un comunicacion directa a bd.

document.getElementById('cargar').addEventListener('click',cargarDatos);

function cargarDatos(){
    const xhr = new XMLHttpRequest();
    //aqui tenemos todos los metodos para comunicarnos
    //puede abrir json txt datos de una api

    // Abrir una conexion
    xhr.open('GET', 'datos.txt',true);
    /* si envias datos nuevos es POST, si estas aculaizando PUT, si estas eliminando DELETE,
    se debe delimitar a donde enviar estas request, el true significa que es asincrono */

    //forma nueva-------------    
    // una vez que carga
    /* xhr.onload = function(){ */
        /* 200:Correcto | 403 : prohibido | 404: No encontrado */
      /*   if(this.status === 200){ */
            //console.log(this.responseText);
            /* mandando al DOm */
           /*  document.getElementById('listado').innerHTML =`<h1> ${this.responseText} </h1>`;
        }
        
    } */

    //fin forma nueva--------

    /* fomar antigua */
    xhr.onreadystatechange= function(){
       console.log(`Estado ${this.readyState}`);
        if(this.readyState === 4 && this.status === 200){
           // console.log(this.responseText);
            
        }
    }

    //ready status

    /* 
    pasara por todos estos estados
    0= no inicializado
    1= conexion establecida
    2= recibido
    3= precesando
    4= respuesta lisata
    
    
    
    */
    /* fin forma antigua */


    //enviar el request
    xhr.send();
}