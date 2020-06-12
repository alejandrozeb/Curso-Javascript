/* crear un arreglo */
//numeros enteres
const numeros=[10,20,30,40,50];
console.log(numeros);

/* arreglo de strings de otra forma */

const meses = new Array('enero','febrero','marzo','abril');
console.log(meses);

/* tambien pude almacenar todo tipo de dato */

const mezclado=['hola',20,true,null,false,undefined];
console.log(mezclado);
/* para el tamañao */
console.log(mezclado.length);

/* para ver si es un array */
console.log(Array.isArray(meses));
let nombre = 'Juan';
console.log(Array.isArray(nombre));
/* para imprimir un dato especifico del array */
console.log(meses[1]);
/* para ingresar un nuevo elemento al array */
meses[4]='mayo';
console.log(meses);
/* -----------------funciones en arrays-----------*/
/* push agrega al final */
meses.push('Junio');
console.log(meses);

/* encontrar un elemnto en el arreglo te devuelve la posicion en el que se encuentra */
console.log(meses.indexOf('abril'));

/* para agregar al incio, recorre los demas elementos*/

meses.unshift('Mes 0');
console.log(meses);

/* eliminar un elemento de un arreglo */
meses.pop();
console.log(meses);
/* elimina el primer elemento */
meses.shift();
console.log(meses);
/* quitar un rango, para que solo se quite un elemneto el 1 es necesario al lado de la ,el segundo argumetno es la cantidad de elementos que se eleminaran desde la posicion del primer elemento */
meses.splice(2,1);
console.log(meses);
/* revertir el array */
meses.reverse();
console.log(meses);
/* para unir arreglos */
let arreglo1=[1,2,3],
    arreglo2=[9,8,7];
    console.log(arreglo1.concat(arreglo2));

/* Ordenar un arreglo, en string ordena de a to z */

const frutas = ['Platano','Manzana','Fresa','Naranja','Zanahoria'];
frutas.sort();
console.log(frutas);
/* ordenar numeros */
arreglo1=[3,4,6,7,8,9,11,38,67,89,21,34,57,1,2];
arreglo1.sort(); //sale en orden extraña
console.log(arreglo1);

/*  para numeros */
arreglo1=[3,4,6,7,8,9,11,38,67,89,21,34,57,1,2];
arreglo1.sort(function(x,y){
                return x-y;
            });
console.log(arreglo1);

/* para la inversa */
arreglo1=[3,4,6,7,8,9,11,38,67,89,21,34,57,1,2];
arreglo1.sort(function(x,y){
                return y-x;
            });
console.log(arreglo1);

/* ordenar e manera implicita */
var arrayNumbers = [10, 8, 9, 5, 3, 78, 23]

Array.prototype.sortNumbers = function(){
    return this.sort(
        function(a,b){
            return a - b
        }
    );
}

console.log(arrayNumbers.sortNumbers())