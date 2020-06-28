/* constructores */
//String

const nombre1 = 'Pedro';
const nombre2 = new String('Pedro');

console.log(typeof nombre1);
console.log(typeof nombre2);
console.log(nombre2);
/* aunque parecen no son iguales */

if(nombre1 === nombre2){
    console.log('Si,iguales');
}else{
    console.log('no son iguales');
}

//numeros

const numero1 = 20;
const numero2 = new Number(20);
console.log(numero1);
console.log(numero2);
/* los objetos heredan prototipos que ya vienen escritos con javascript */

//Booleanos

const boolean1 = true;
const boolean2 = new Boolean(true);
console.log(boolean1);
console.log(boolean2);

/* funciones */

 const funcion1 = function (a,b){
    return a+b;
} 
console.log(funcion1(2,3));


//objetos
const persona1={ //esta es la mas comun
    nombre: 'Juan'
}

const persona2 = new Object({nombre:'Juan'});

console.log(persona1);
console.log(persona2);

//array

const arreglo1=[1,2,3,4];
const arreglo2= new Array(1,2,3,4);

console.log(arreglo1);
console.log(arreglo2);