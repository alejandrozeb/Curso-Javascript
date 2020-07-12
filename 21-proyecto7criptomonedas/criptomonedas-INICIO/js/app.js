/* crear una cuneta https://www.cryptocompare.com/cryptopian/api-keys luego entrar a tu perfil y visitar la pestaña apikeys */
/* el app,js e sla conexin entre api.js y ui.js */

// instancia vista de ui.js
/* const ui = new Interfaz();
ui.mostrarMensaje('texto','clase');
 */
const cotizador=new API('6fc3ff8d794b10cc71e524a0ea221287059b9904a7401d74db6e1d3b7fe4712a');
const ui = new Interfaz();

/* cotizador.obtenerMonedasAPI(); este cotizador ira a la interfaz*/
// Leer formulario
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("enviando....");
    //leer la moneda seleccionada

    const monedaSelect = document.querySelector('#moneda');
    const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;
    console.log(monedaSeleccionada);

    //leer la criptomoneda seleccionada

    const criptoMonedaSelect = document.querySelector('#criptomoneda');
    const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;
    console.log(criptoMonedaSeleccionada);
    if(monedaSeleccionada === '' || criptoMonedaSeleccionada === ''){   
        // arrojar un error con un alert
        ui.mostrarMensaje('ambos campos son obligatorios','alert bg-danger text-center');//clases de bootstrap
    }else{
        //todo bien, consultar a la api
        cotizador.obtenerValores(monedaSeleccionada,criptoMonedaSeleccionada)
            .then(data => console.log(data))
            /* devuelve dos datos dispplay con comillas (cadenas) y raw que son los valores enteros (tipo num) */

        
    }
});