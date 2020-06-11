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
/* push agrega al final */

meses.push('Junio');
console.log(meses);
