/* crear una cuneta https://www.cryptocompare.com/cryptopian/api-keys luego entrar a tu perfil y visitar la pestaña apikeys */
/* el app,js e sla conexin entre api.js y ui.js */

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
    }else{
        //todo bien una alerta de error
        console.log();
    }
});