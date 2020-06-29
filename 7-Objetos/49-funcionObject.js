/* Forma de crear un objeto, especificando de una vez con el proto*/

//Object Create

const Cliente ={
    imprimirSaldo: function(){
        return `hola ${this.nombre} tu saldo es ${this.saldo}`
    },
    retirarSaldo: function(retiro){
        return this.saldo -= retiro;
    }
}

const mary = Object.create(Cliente);

mary.nombre = 'Mary';
mary.saldo = 1000;

mary.retirarSaldo(300);

console.log(mary.imprimirSaldo());
