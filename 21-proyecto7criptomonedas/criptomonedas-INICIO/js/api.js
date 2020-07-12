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
    //para co}nsultar a la api, la cotizacion 
    async obtenerValores(moneda,criptomoneda){
        /* la api te pide fsyms para encontrar la moneda(criptomoneda) y tsyms para convertir a la moneda(pesos mexicanos, dolares) usaremos multiple symbols full data  */
        const url =  `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

        //consultar en rest api

        const urlConvertir = await fetch(url); //consulta a la url 
        const resultado = await urlConvertir.json(); //Recibe la informacion en esta variable

        return{
            resultado
        }

    }
}