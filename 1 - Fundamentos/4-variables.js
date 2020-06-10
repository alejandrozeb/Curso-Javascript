/* 3 formas de crear variables
var 
let
const 
*/
var nombre = 'Juan';
var nombre ='Jhon';
/* no da error */
var nombre;
/* sin contenido */
var carrito;
carrito='libro';
/* declarando mas de una variable */
var carrito='libro', carrito1='libro 2';
console.log(carrito);
console.log(carrito1);
/* cosas importantes cuando nombras variables */
/* var 99dias;
error los numeros al inicio no estan permitidos */

var dias99=99;
console.log(dias99);
/* pero si una cadena y numero 
crear variables relacionadas,significatias son recomendadas*/

/* formas de nombrar variables */
var primerNombre='Juan'; //camelcase
var primer_nombre='Juan'; //underscore
var PrimerNombre='Juan'; // pascal case
var primernombre='Juan'; // no recomendado

/* ----- let------- */
/* let nombre='Juan';
let producto='libro';

let nombre;     

let nombre='Juan', producto='libro';
sigue las mismas reglas de var */

/* let producto='Libro';
let producto='Libro 1'; */
/* error no se puede volver a declarar la misma variable
se recomienda usar let cuando el valor puede cambiar de datos */

let producto='Libro';
    producto='Libro 1';
/* -------const-------- */
/* const producto1;
producto1 ='libro'; */
/* error este tipo de variable es una constante, se recomienda usar para valores que no cambiaran */
const producto1='libro';
console.log(producto1);


/* por consola las respuestasn negras son cadenas y las azules con numeros */

/* concatenar */
let mensaje;
mensaje= 'java'+'script';
let aprediendo = 'apreniendo',
    tecnologia = 'Javascript';

/* console.log(aprediendo+' '+tecnologia); */
console.log(`${aprediendo} ${tecnologia}`);
/* nueva forma */