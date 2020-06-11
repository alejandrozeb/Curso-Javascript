/* convertir de numero a string */

let cp;

cp=90210;
/* primeara forma de conversion */
cp=String(cp);

console.log(typeof cp);

/* segunda forma */
let dato;
dato='4'+'4';

console.log(dato.length);
/* los cuenta como strings */
//boolean
dato=String(true);
console.log("-----------");
console.log(dato);
console.log(dato.length);
console.log(typeof dato);

/* tambien lo convierte en string */
/* arreglos */

dato=String([1,2,3]); //los convierte a todos a un string de 5
console.log("-----------");
console.log(dato);
console.log(dato.length);
console.log(typeof dato);

//tostring

dato=20;
dato=dato.toString();

console.log("-----------");
console.log(dato);
console.log(dato.length);
console.log(typeof dato);
/* convierte boleanos y arreglos pero no undefined y null por que no estan definidos */