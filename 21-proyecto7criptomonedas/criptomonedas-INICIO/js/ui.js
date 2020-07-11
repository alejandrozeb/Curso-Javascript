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
            console.log(monedas);
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