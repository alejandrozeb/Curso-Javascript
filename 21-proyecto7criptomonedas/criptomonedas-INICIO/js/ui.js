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
            
            //for para object entries, of es un operador relativamente nuevo

            //crear un select de opciones
            const select = document.querySelector('#criptomoneda');
            //iterar por los resultados de la api
            for( const[key,value] of Object.entries(monedas.monedas.Data)){//se tiene que pasar el key y value, si no dara error
               //console.log(value);
                //añadir el symbol y el nombre como opciones
                const opcion = document.createElement('option');
                opcion.value= value.Symbol;//añade como calue el nombre de la moneda
                opcion.appendChild(document.createTextNode(value.CoinName));//añade el texto del value al option
                select.appendChild(opcion);//añade cada option al select
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