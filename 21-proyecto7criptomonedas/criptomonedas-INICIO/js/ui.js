/* desde aqui veremos la interfaz */
class Interfaz{
    /* no se recomienda tener un constructor cargado */
    constructor(){
        this.init();
    }
    /* asi que creamos una funcion donde podmos cargar sin problema */

    init(){
        this.construirSelect();//llama al metodo y lo ejecuta
    }

    /* crea los selects */
   construirSelect(){
       cotizador.obtenerMonedasAPI()
        .then(monedas => {
            /* trae el data de la api no se puede recorrer con un foreachpor que es un objeto*/
            //usaremos object entries, devuelve la llave y el valor y los retorna como arreglo
            //el key de cada moneda es el nombre
            
            //for para object entries
            for( const[key,value] of Object.entries(monedas.monedas.Data)){//se tiene que pasar el key y value, si no dara error
                console.log(value);
            }
            
        })
   }
    /* servira para mostrar varios mensajes, este es general */
    /* crea un div con un mensaje y agrega una clase */
    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');
        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        //console.log(div);
        //insertamos en la vista
        // seleccionar mensajes
        //tenemos un di exclusivo para mensajes
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        //mostrar contenido
        /* que se muestre un tiempo */
        /* removemos el mensaje que ya gregamos en el div mensaje */
        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }
}