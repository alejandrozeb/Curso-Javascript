/* Creamos una cuenta en https://www.eventbrite.es/ entramos a la pestaña de desarrollo y creamos un request key para nuestra aplicacion en la url llenamos con nuestra direccion local */

class EventBrite{
    constructor(){
        this.token_auth = 'BL7TC7LA45QEEJFUR4FL';
        this.ordenar = 'date';//para ordenar
    }

    //mostrar resultados de la busqueda

    async obtenerEventos(evento,categoria){
        //debo configurar de otra forma, el event search a sido dado de baja en diciembre de 2019
        const respuestaEvento = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=${this.ordenar}&categories=${categoria}/?token=${this.token_auth}`);

        //esperar la resupesta y devolverlo como json

        const eventos = await respuestaEvento.json();

        return{
            eventos
        }
    }







    // obtiene las categorias en init

    async obtenerCategorias(){
        //consultar las categorias a la rest api de event bride, (completar tutorial)
        //usamos el token del constructor
        const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

        //esperar la respuesta de las categorias y devolver un JSON

        const categorias = await respuestaCategorias.json();
        
        //devolvemos el resultado

        return{
            categorias
        }

    }
}