/* es una avriacion del observer - EL mediator es un intermediario que se comunica entre distintos tipos de objetos, el mediator define obetos ya localizados para un objetivo especifico */

//se realizara con object contruction y prototypes

const Vendedor = function(nombre){
    this.nombre = nombre;
}

const Comprador = function(nombre){
    this.nombre = nombre;
}

Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`tenemos el siguiente articulo ${articulo}, iniciammos en ${precio}`);
    },

    vendido: function(comprador){
        console.log(`Vendido a ${comprador} (Sonido de )`);
    }
}

comprador.prototype = {
    oferta: function(mensaje, comprador){
        console.log(`${comprador.nombre}: ${mensaje}`);
    }
}