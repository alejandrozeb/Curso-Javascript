/* APIS, REST APIS y request 
    APIS= Aplication programing interface
    son funciones, metodos que ofrece una libreria para sser utilizada por otro software como una capa de abstraccion.
    se debe hacer una peticion estructurada.

    REST APIS = representational state transfer
    puede ser diseñada en cualquier lenguaje. leer datos
    REST describe como deben ponerse a disposioin los recursos
    La API debe responder a los request de http: GET, POST, PUT, PATCH, DELETE.
    cada API tiene sus propias reglas, metodos, estructuras.
    REST API ENDpoints y request
    una res api cuenta con endpoints (o urls) para hacer operaciones CRUD
    ejemplos
    Listar todos los clientes GET /clientes
    Obtener un solo cliente GET /clientes/10
    crear un nuevo cliente POST/clientes
    Editar un contacto PUT/clientes/3
    Borrar un contacto DELETE/clientes/8
*/
/* JSONPlaceholder es una REST API trabajan en back-end  */
const cargarPost = document.querySelector('#cargar').addEventListener('click',cargarAPI);

function cargarAPI(){
    //cargar el objeto
    const xhr = new XMLHttpRequest();
    //carga desde la pagina
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts',true);
    //cargar y leer datos
    xhr.onload = function(){
        if(this.status === 200){
            const respuesta = JSON.parse(this.responseText);
            let contenido='';
            respuesta.forEach(function(post) {
                contenido +=`
                <h3>${post.title}</h3>
                <p>ID: ${post.body} </p> 
            `;
            })
            document.getElementById('listado').innerHTML = contenido;
            /* agrega el contenido de la rest api */
        }
    }

    //enviar la conexion
    xhr.send();


}