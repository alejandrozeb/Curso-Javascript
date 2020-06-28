/* No son muy usados */

function Cliente(nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    /* this.tipoCliente = function(){
        let tipo;
        if(this.saldo > 1000){ */
            /* Con this accedo a los atributos de el mismo objeto  */
        /*     tipo = 'Gold';
        }else if(this.saldo > 500){
            tipo = 'Platinum';
        }else{
            tipo = 'Normal';
        }
        return tipo;
    } */
}

/* const cliente1 = new  Cliente('Pedro',100);
const cliente2 = new  Cliente('Karen',500);
const cliente3 = new  Cliente('Miguel',800);

console.log(cliente1);
console.log(cliente2);
console.log(cliente3); */
/* todos los objetos de javascript heredan sus metodos de un prototipo */
/* crear prototipos te ayuda a tener un codigo mas organizado */

//Crear un prototipe
Cliente.prototype.tipoCliente = function(){ /* la funcion tipo cliente solo sera accesible para cliente */
    let tipo;
    if(this.saldo > 1000){
        /* Con this accedo a los atributos de el mismo objeto  */
        tipo = 'Gold';
    }else if(this.saldo > 500){
        tipo = 'Platinum';
    }else{
        tipo = 'Normal';
    }
    return tipo;
}
 const cliente4 = new Cliente('pedro',100);

 console.log(cliente4.tipoCliente());

 //ejemplo de uso

 Cliente.prototype.nombreClienteSaldo = function(){
     return `Nombre: ${this.nombre}, Tu saldo es de ${this.saldo}, tipo Cliente: ${this.tipoCliente()}`;
 }
 const cliente5 = new Cliente('pedro',100);
 const cliente6 = new Cliente('Karen',600);
 const cliente7 = new Cliente('Miguel',1200);

 console.log(cliente5.nombreClienteSaldo());
 console.log(cliente6.nombreClienteSaldo());
 console.log(cliente7.nombreClienteSaldo());

 //en aplicaiones tendras muchos prototipos
 Cliente.prototype.retirarsaldo = function(retiro){
     return this.saldo -= retiro;
}

cliente6.retirarsaldo(300);
console.log(cliente6.nombreClienteSaldo());