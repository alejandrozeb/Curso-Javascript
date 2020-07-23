/* es una avriacion del observer - EL mediator es un intermediario que se comunica entre distintos tipos de objetos, el mediator define obetos ya localizados para un objetivo especifico */

//se realizara con object contruction y prototypes

const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}

const Comprador = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}


Vendedor.prototype = {
    oferta: function(articulo, precio){
        console.log(`tenemos el siguiente articulo ${articulo}, iniciammos en ${precio}`);
    },

    vendido: function(comprador){
        console.log(`Vendido a ${comprador} (Sonido de )`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador){
        console.log(`${comprador.nombre}: ${mensaje}`);
    }
}
//creamos la clase que sera el mediador
const Subasta = function(){
    let compradores = {};

    return{
        registrar: function(usuario){
            compradores[usuario.nombre]= usuario;   //pasamos que usuario se esta registrando
            usuario.sala = this;    //crearemos una sala para la subastea
            console.log(compradores);

        }
    }
}

//instanciar las clases

const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const karen = new Comprador('Karen');

const vendedor= new Vendedor('Vendedor');   //se instancia pero las salas no estan aun definidas

const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(karen);
subasta.registrar(pablo);

//console.log(juan);
console.log(subasta);


const subasta2 = new Subasta();
subasta2.registrar(juan);

//console.log(juan);
console.log(subasta2);
/* Los chats tambien son ejemplos de mediator */

vendedor.oferta('Mustang 1960', 3000);
juan.oferta(3500, juan);
pablo.oferta(4000, pablo);
karen.oferta(10000, karen);

vendedor.vendido(karen.nombre);