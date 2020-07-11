class API{
    /* la misma api nos da un apikey para tener la criptomonedas */
    constructor (apikey){
        this.apikey =apikey;
    }
    /* usaremos async para cargar la api */
    async obtenerMonedasAPI(){
        /* para agregar la apiey es ? segun el sitio */
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;
        //fecth a la api
        const urlObtenerMonedas = await fetch(url);
        // respuesta en json

        const monedas = await urlObtenerMonedas.json();

        //console.log(monedas);

        return {
            monedas
        }
    }
}