/* Subclases en javascript */
/* En clases se ve mucho mejor el codigo ordenado */

class Cliente {

    constructor (nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }

    imprimirSaldo(){
        return `Hola ${this.nombre}, tu saldo es de: ${this.saldo}`;
    }
    static bienvenida(){
        return `Bienvenido al cajero`;
    }
}

const cliente = new Cliente('Pedro', 1000);
console.log(cliente.imprimirSaldo());
console.log(Cliente.bienvenida());

/* Hereda de la clase todos los atributos y metodos cliente coon extends */
class Empresa extends Cliente{
    // todos los atributos son heredados con extends

    constructor(nombre,saldo,telefono,tipo){
        //Va hacia elconstructor Padre
        super(nombre,saldo);//hereda el constructor
        //no existen en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;
    }
    //para reescribir solo se tiene que colocar el mismo nombre
    static bienvenida(){
        return `Bienvenido al cajero para Empresas`;
    }
}

const empresa = new Empresa('Empresa1',10000,12091092,'Construccion');

console.log(empresa.imprimirSaldo());
console.log(Empresa.bienvenida());