/* Clases en Javascript */

class Cliente {

    constructor (nombre, apellido, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }

    tipoCliente(){
        let tipo;
        if(this.saldo > 10000){
            /* Con this accedo a los atributos de el mismo objeto  */
            tipo = 'Gold';
        }else if(this.saldo > 5000){
            tipo = 'Platinum';
        }else{
            tipo = 'Normal';
        }
        return tipo;
    }
    //esta es una funcion
    retirarSaldo(retiro){
        return this.saldo -= retiro;
    }
    //este es un metodo
    static bienvenida(){
        return `Bienvenido al cajero`;
    }

}

const maria = new Cliente('Maria', 'Perez', 11000);

maria.retirarSaldo(3000);

console.log(maria.tipoCliente());
console.log(maria.imprimirSaldo());
console.log(Cliente.bienvenida());

console.log(maria.bienvenida());