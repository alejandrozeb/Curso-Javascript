/* Creamos una cuenta en https://www.eventbrite.es/ entramos a la pestaña de desarrollo y creamos un request key para nuestra aplicacion en la url llenamos con nuestra direccion local */

class EventBrite{
    constructor(){
        this.token_auth = 'BL7TC7LA45QEEJFUR4FL';
        this.ordenar = 'date';//para ordenar
    }

    // obtiene las categorias en init

    async obtenerCategorias(){
        //consultar las categorias a la rest api de event bride, (completar tutorial)
        //usamos el token del constructor
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=BL7TC7LA45QEEJFUR4FL`);

        //esperar la respuesta de las categorias y devolver un JSON

        const categorias = await respuestaCategorias.json();
        
        //devolvemos el resultado

        return{
            categorias
        }

    }
}