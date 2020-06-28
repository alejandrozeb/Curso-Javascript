/* Creando objetos en js */
/* Existen dos formas de crear objetos en javascript */
//Object Literal
const cliente ={
    nombre: 'Juan',
    saldo: 200,
    tipoCliente : function(){
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
}

/* si quieres acceder a in metodo(funcion) de un objeto es nombreOBJ.nomMetodo() y para acceder a sus atributos es nombreOBJ.nomAtributo */
//console.log(cliente.tipoCliente());

//metodo alternativo
/* forma antigua en js */
function cliente2 (nombre,saldo){
    this.nombre = nombre;
    this.saldo = saldo;
    this.tipoCliente = function(){
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
}

const persona = new cliente2('Pedro', 20000);
const persona2 = new cliente2('Karen',6000);
console.log(persona);
console.log(persona2);

