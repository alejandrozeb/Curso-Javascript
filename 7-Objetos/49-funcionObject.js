/* Forma de crear un objeto, especificando de una vez con el proto*/
/* puedes escoger las dos formas */
//Object Create

const Cliente ={
    imprimirSaldo: function(){
        return `hola ${this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro;
    }
}
// Crear el objeto pero esta vacio
const mary = Object.create(Cliente);
//llenando el objeto
mary.nombre = 'Mary';
mary.saldo = 1000;

mary.retirarSaldo(300);

console.log(mary.imprimirSaldo());
