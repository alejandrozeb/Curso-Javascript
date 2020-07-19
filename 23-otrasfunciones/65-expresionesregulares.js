/* es un tema bastante grade solo cubriremos la parte basica de expresiones regulares*/

//forma uno de crear

const exp1 = new RegExp('/abc/');
/* segunda forma */

const exp2 = /abc/;
console.log(exp1);
console.log(exp2);

//tenemos funciones para hacer test en consola

let valor,expReg;
expReg = /[0123456789]/;        //tambien es una expresiòn regular
valor = 1992;

console.log(expReg.test(valor));    //devuelve true
valor = 'Hola';                     //devuelve false
console.log(expReg.test(valor));

//las expresiones regulares te sirve para verificar si existen las expesiones en el valor, en expReg se debe guardar al para buscar y en valor el valor a buscar, si encuentra similitudes devolvera true

//Tambien se puede hacer con rango

expReg = /[0-9]/;           //otros ejemplos a-z o A-Z
valor = 1992;
console.log(expReg.test(valor));

//una fecha en exp regular 20-10-2020

expReg =/\d\d-\d\d-\d\d\d\d/; 
//se tiene caracteres que te ayudan, la letra d te ayuda a buscar numeros, \d busca un numero en esa pocison

valor='20-10-2010';
console.log(expReg.test(valor));
valor='hola mundo';                 //no encuentra el patron
console.log(expReg.test(valor));

//para una hora 10:30

expReg=/\d\d:\d\d/;
valor='10:30';
console.log(expReg.test(valor));

valor='10:30 AM';
console.log(expReg.test(valor));

valor='AM 10:30';
console.log(expReg.test(valor));

/* en todos los casos devuelve true por que evalua la expresion parecida al patron */

//mejorando la expresion
// 10:30 AM
expReg=/\d\d:\d\d \D\D/;        //la D (mayuscula) busca un caracter que no sea un numero
valor='10:30 AM';
console.log(expReg.test(valor));

valor='10:30';
console.log(expReg.test(valor));

//otro ejemplo

expReg=/\d\d\d\d/;      //busca 4 o mas digitos
//otra forma
expReg=/\d+/;           //se encarga de ver un digito y el mas que los siguientes ean del mismo tipo
valor =1021124124;
console.log(expReg.test(valor));