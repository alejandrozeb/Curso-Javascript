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
    //imprime el resultado de la cotizacion

        /* la api devuel un objeto y su key es el nombre de la criptomoneda con otro objeto con el nombre GBP*/
    mostrarResultado(resultado, moneda, crypto){
        //console.log(resultado[crypto][moneda]);//asi accedes al valor de los objetos en js es la  manera dinamica de acceder a los datos
        
        //en caso que exista un caso anterior
        const resultadoAnterior= document.querySelector('#resultado > div');
        if(resultadoAnterior){
            resultadoAnterior.remove();
        }







        const datosMoneda = resultado[crypto][moneda];
        //recortar digitos de precio

        let precio = datosMoneda.PRICE.toFixed(2),//dosdigitos despues del punto
            porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2),
        //para la fecha tenmos que convertir de numeros a la fecha es un time que maneja unix
        actualizado = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-MX');
        //para cambiar el formato de fecha tu hora es tolocate

        //construir el template
         let templateHTML=`
            <div class="card bg-warning">
                <div class="card-body text-light">
                    <h2 card="card-title">Resultado: </h2>
                    <p> EL precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $ ${precio}</p>
                    <p> Variación último día: % ${porcentaje}</p>
                    <p> Última actualizacion: ${actualizado}</p>
                </div>
            </div>
         `;

           this.mostrarOcultarSpinner('block');
         
        setTimeout(() => {
            //insertar el resultado
            document.querySelector('#resultado').innerHTML= templateHTML;    
            //ocultar
            this.mostrarOcultarSpinner('none');
        }, 3000);
        
    }
    ////mostrar spinner de carga
    mostrarOcultarSpinner(vista){
        const spinner =  document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}